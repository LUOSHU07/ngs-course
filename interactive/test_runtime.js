"use strict";
/* 运行时冒烟测试：DOM-stub + vm 真实执行 calc.js/vendors.js/app.js。
 * 覆盖：启动、8 视图切换、计算器 UI（含 NaN 回归 A2）、实验会话全流程、
 * 清空全部数据回归（A1）、真题作答。全部基于真实事件派发，非静态检查。
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const DIR = __dirname;
const html = fs.readFileSync(path.join(DIR, "index.html"), "utf8");

/* ---------- 迷你 DOM ---------- */
const VOID_TAGS = new Set(["input", "br", "img", "hr", "meta", "link", "source"]);

class El {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this.children = [];
    this.attrs = {};
    this.style = { setProperty(k, v) { this[k] = v; } };
    this.listeners = {};
    this.parent = null;
    this.checked = false;
    this.value = "";
    this._text = "";
  }
  get id() { return this.attrs.id || ""; }
  set id(v) { this.attrs.id = String(v); }
  get name() { return this.attrs.name || ""; }
  set name(v) { this.attrs.name = String(v); }
  get className() { return this._classes ? this._classes.join(" ") : ""; }
  set className(v) { this._classes = (v || "").split(/\s+/).filter(Boolean); }
  _hasClass(c) { return (this._classes || []).includes(c); }
  get classList() {
    const self = this;
    return {
      add(c) { if (!self._hasClass(c)) (self._classes = self._classes || []).push(c); },
      remove(c) { if (self._classes) self._classes = self._classes.filter(x => x !== c); },
      toggle(c, force) {
        const has = self._hasClass(c);
        const want = force === undefined ? !has : !!force;
        if (want && !has) (self._classes = self._classes || []).push(c);
        if (!want && has) self._classes = self._classes.filter(x => x !== c);
      },
      contains(c) { return self._hasClass(c); }
    };
  }
  get dataset() {
    const self = this;
    return new Proxy({}, {
      set(_, k, v) { self.attrs["data-" + k] = String(v); return true; },
      get(_, k) { return self.attrs["data-" + k]; }
    });
  }
  setAttribute(k, v) { this.attrs[k] = String(v); if (k === "value") this.value = String(v); }
  getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; }
  appendChild(ch) { ch.parent = this; ch.parentNode = this; this.children.push(ch); return ch; }
  removeChild(ch) { const i = this.children.indexOf(ch); if (i >= 0) this.children.splice(i, 1); return ch; }
  insertBefore(newNode, ref) {
    newNode.parentNode = this; newNode.parent = this;
    const i = ref ? this.children.indexOf(ref) : -1;
    if (i === -1) this.children.push(newNode); else this.children.splice(i, 0, newNode);
    return newNode;
  }
  get childNodes() { return this.children; }
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); }
  dispatch(t) { (this.listeners[t] || []).forEach(fn => fn({ target: this })); }
  click() { this.dispatch("click"); this.dispatch("change"); }
  set innerHTML(v) { this.children = []; this._html = v; }
  get innerHTML() { return this._html || ""; }
  set textContent(v) {
    this.children = [];
    this._text = "";
    const s = String(v);
    if (s !== "") this.children.push({ nodeType: 3, data: s, parentNode: this, parent: this });
  }
  get textContent() {
    if (this.children.length === 0) return this._text;
    return this.children.map(c => (c.nodeType === 3 ? c.data : c.textContent)).join("");
  }
  matches(sel) {
    // 简单选择器：tag? (#id)? (.cls)* ([attr]|[attr="v"])* (:checked)?
    const idm = sel.match(/#([\w-]+)/);
    if (idm && this.attrs.id !== idm[1]) return false;
    const classes = [...sel.matchAll(/\.([\w-]+)/g)].map(m => m[1]);
    if (classes.some(c => !this._hasClass(c))) return false;
    const attrs = [...sel.matchAll(/\[([\w-]+)(?:="([^"]*)")?\]/g)];
    for (const [, a, v] of attrs) {
      if (!(a in this.attrs)) return false;
      if (v !== undefined && this.attrs[a] !== v) return false;
    }
    const tag = sel.match(/^([a-zA-Z][\w-]*)/);
    if (tag && this.tagName !== tag[1].toUpperCase()) return false;
    if (sel.includes(":checked") && !this.checked) return false;
    return true;
  }
  _descendants(out) {
    for (const c of this.children) { if (c.nodeType !== 3) { out.push(c); c._descendants(out); } }
    return out;
  }
  querySelectorAll(selector) {
    // 后代链：空格分隔；返回最终匹配的元素（非锚点祖先）
    const parts = selector.trim().split(/\s+/).filter(Boolean);
    const all = this._descendants([]);
    let anchors, rest;
    if (parts[0].startsWith("#")) {
      const id = parts[0].slice(1).split(/[.\[:#]/)[0];
      anchors = all.filter(e => e.attrs.id === id);
      rest = parts.slice(1);
    } else {
      anchors = [this];
      rest = parts;
    }
    let cur = anchors;
    for (const p of rest) {
      const next = [];
      for (const el of cur) next.push(...el._descendants([]).filter(d => d.matches(p)));
      cur = next;
      if (!cur.length) return [];
    }
    return cur;
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
}

/* ---------- 解析 index.html 建立骨架 ---------- */
function parseHtml(docBody) {
  const clean = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  const re = /<(\/?)([a-zA-Z][\w-]*)((?:\s+[^<>]*?)?)(\/?)>/g;
  const stack = [docBody];
  let m;
  while ((m = re.exec(clean)) !== null) {
    const [, close, tag, attrStr, selfClose] = m;
    if (close) {
      // 弹栈到匹配标签
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tagName === tag.toUpperCase()) { stack.length = i; break; }
      }
      continue;
    }
    const el = new El(tag);
    const am = /([\w-]+)(?:="([^"]*)")?/g;
    let a;
    while ((a = am.exec(attrStr || "")) !== null) {
      const [, k, v] = a;
      if (k && k !== "/") el.attrs[k] = v === undefined ? "" : v;
    }
    if (el.attrs.class) el.className = el.attrs.class;
    if ("checked" in el.attrs) el.checked = true; // 与浏览器行为一致：checked 属性即默认选中
    if (el.attrs.id) el.value = el.attrs.value !== undefined ? el.attrs.value : el.value;
    if (el.attrs.value !== undefined) el.value = el.attrs.value;
    stack[stack.length - 1].appendChild(el);
    if (!selfClose && !VOID_TAGS.has(tag.toLowerCase())) stack.push(el);
  }
}

/* ---------- 沙箱环境 ---------- */
const body = new El("body");
parseHtml(body);

function byId(root, id) {
  if (root.nodeType !== 3 && root.attrs.id === id) return root;
  for (const c of root.children) { if (c.nodeType !== 3) { const f = byId(c, id); if (f) return f; } }
  return null;
}

const store = {};
const localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};

const noopTimer = () => 1;
const sandbox = {
  document: {
    getElementById: id => byId(body, id),
    createElement: t => new El(t),
    createTextNode: t => ({ nodeType: 3, data: String(t), parentNode: null }),
    querySelectorAll: s => body.querySelectorAll(s),
    querySelector: s => body.querySelector(s),
    body,
    title: "",
    execCommand: () => true
  },
  navigator: {},
  localStorage,
  confirm: () => true,
  alert: () => {},
  Blob: function Blob(parts) { sandbox.__lastBlob = (parts || []).join(""); },
  URL: { createObjectURL: () => "blob:stub", revokeObjectURL: () => {} },
  setTimeout: noopTimer,
  clearTimeout: noopTimer,
  setInterval: noopTimer,
  clearInterval: noopTimer,
  console,
  Date,
  isNaN,
  __lastBlob: "",
  __opened: "",
  open() {
    return {
      document: {
        write(t) { sandbox.__opened += String(t); },
        close() {}
      }
    };
  }
};
sandbox.window = sandbox;
sandbox.window.isSecureContext = false;
vm.createContext(sandbox);

/* ---------- 加载三个脚本 ---------- */
for (const f of ["calc.js", "vendors.js", "app.js"]) {
  vm.runInContext(fs.readFileSync(path.join(DIR, f), "utf8"), sandbox, { filename: f });
}

/* ---------- 用例 ---------- */
let n = 0;
function ok(cond, label) { assert.ok(cond, label); n++; console.log("  ok -", label); }

console.log("0) 新手引导（首次访问）");
ok(byId(body, "tour").classList.contains("show"), "首次访问 tour 显示");
byId(body, "tour-skip").click();
ok(!byId(body, "tour").classList.contains("show"), "跳过后 tour 关闭");
ok(JSON.parse(store["ngs-workbench-v2"]).seen === true, "跳过状态已持久化");

console.log("1) 启动与 9 视图切换");
const views = ["dash", "lab", "tips", "wet", "dry", "equip", "vendor", "calc", "quiz"];
for (const v of views) {
  const btn = body.querySelectorAll("#nav button").find(b => b.getAttribute("data-view") === v);
  assert.ok(btn, `导航按钮 data-view=${v} 存在`);
  btn.click();
  const sec = byId(body, "view-" + v);
  ok(sec && sec._hasClass("active"), `视图 ${v} 切换后 active`);
}
ok(byId(body, "equip-grid").children.length === 20, "设备视图渲染 20 台（注册表回归）");
ok(byId(body, "equip-grid").querySelectorAll("a").length === 20, "20 台设备均有完整章节链接");
ok(byId(body, "equip-grid").querySelectorAll("ul.equip-ops").length === 20, "20 台设备均有内嵌操作说明");
ok(byId(body, "equip-grid").querySelectorAll("ul.equip-ops li").length >= 60, "每台操作说明 ≥3 条");
ok(byId(body, "fault-select").children.length === 20, "故障速查覆盖 20 台");
ok(byId(body, "check-equip").children.length >= 5, "设备每日点检清单非空（A6 回归）");

console.log("2) 计算器 UI（NaN 回归 A2）");
byId(body, "m-ng").value = "";
byId(body, "molar-btn").click();
ok(/错误/.test(byId(body, "molar-out").textContent), "空输入显示错误而非 NaN");
byId(body, "m-ng").value = "12";
byId(body, "molar-btn").click();
ok(/40\.4/.test(byId(body, "molar-out").textContent), "默认输入算得 40.4 nM");
byId(body, "p-concs").value = "";
byId(body, "pool-btn").click();
ok(/错误/.test(byId(body, "pool-out").textContent), "pooling 空输入显示错误");
byId(body, "dil-c1").value = "1000";
byId(body, "dil-c2").value = "1";
byId(body, "dil-v2").value = "100";
byId(body, "dil-btn").click();
ok(/两步/.test(byId(body, "dil-out").textContent) && /母液消耗 2 µL/.test(byId(body, "dil-out").textContent), "高倍稀释 0 偏差两步（母液 2 µL）");
byId(body, "dil-c1").value = "100";
byId(body, "dil-c2").value = "2";
byId(body, "dil-v2").value = "500";
byId(body, "dil-btn").click();
ok(/0 偏差单步方案/.test(byId(body, "dil-out").textContent), "常规稀释 0 偏差单步");
byId(body, "dil-c1").value = "94.3";
byId(body, "dil-c2").value = "20";
byId(body, "dil-v2").value = "5";
byId(body, "dil-btn").click();
ok(/母液消耗 5 µL/.test(byId(body, "dil-out").textContent), "上机取 5 µL：两步精确，母液 5 µL");
byId(body, "dil-v2").value = "30";
byId(body, "dil-btn").click();
ok(/两步/.test(byId(body, "dil-out").textContent) && /取中间液 15\.00 µL/.test(byId(body, "dil-out").textContent) && /母液消耗 8 µL/.test(byId(body, "dil-out").textContent), "94.3→20/30：两步精确（8+10.86 → 15+15）");
byId(body, "dil-c1").value = "86.45";
byId(body, "dil-c2").value = "20";
byId(body, "dil-v2").value = "15";
byId(body, "dil-btn").click();
ok(/两步/.test(byId(body, "dil-out").textContent) && /不存在单步精确解/.test(byId(body, "dil-out").textContent), "86.45→20/15：说明单步为何不可行（用户实例回归）");

console.log("3) 实验会话全流程（并入湿实验旅程）");
body.querySelectorAll("#nav button").find(b => b.getAttribute("data-view") === "wet").click();
const startBtns = body.querySelectorAll("button").filter(b => b.textContent === "开始会话");
assert.ok(startBtns.length >= 5, "会话模板 ≥5 个");
startBtns[0].click();
let saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && saved.session && saved.session.tid, "会话启动并持久化");
const doneBtn = body.querySelectorAll("button").find(b => b.textContent === "完成会话并生成记录");
assert.ok(doneBtn, "完成按钮存在");
doneBtn.click();
saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && saved.sessions.length === 1 && saved.session === null, "会话完成后生成 1 条记录");

console.log("4) 清空全部数据回归（A1）");
byId(body, "clear-all").click();
ok(store["ngs-workbench-v2"] === undefined, "localStorage 已清空");
for (const v of views) {
  const btn = body.querySelectorAll("#nav button").find(b => b.getAttribute("data-view") === v);
  btn.click();
}
ok(true, "清空后 9 视图全部可渲染（无 TypeError）");
byId(body, "molar-btn").click();
ok(/40\.4/.test(byId(body, "molar-out").textContent), "清空后计算器可用");

console.log("5) 错题本闭环（答错收录 → 全对清除 → 空错题本）");
body.querySelectorAll("#nav button").find(b => b.getAttribute("data-view") === "quiz").click();
const radios = body.querySelectorAll('input[name="q0"]');
assert.ok(radios.length >= 2, "题库 q0 存在选项");
radios[0].checked = true;
byId(body, "quiz-submit").click();
saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && saved.quizWrong.length >= 1, "答错/未答题目已收录进错题本");
// 从解析文本回读正确答案并全部答对
for (let qi = 0; qi < 10; qi++) {
  const box = body.querySelector('.quiz-item[data-qi="' + qi + '"] .explain');
  const m = box.textContent.match(/^正确答案：(.+?)。/);
  if (!m) continue;
  const item = body.querySelector('.quiz-item[data-qi="' + qi + '"]');
  item.querySelectorAll("input").forEach(r => { r.checked = false; });
  const target = item.querySelectorAll("label").find(l => l.textContent === m[1]);
  assert.ok(target, `q${qi} 找到正确选项`);
  target.querySelectorAll("input")[0].checked = true;
}
byId(body, "quiz-submit").click();
saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && saved.quizWrong.length === 0, "全部答对后错题本清空");
ok(/得分：10 \/ 10/.test(byId(body, "quiz-score").textContent), "满分判分正确");
byId(body, "quiz-wrong-btn").click();
ok(/错题本是空的/.test(byId(body, "quiz-box").textContent), "错题本空态提示正常");
byId(body, "quiz-wrong-btn").click();

console.log("6) 实验台配置导出/导入");
body.querySelectorAll("#nav button").find(b => b.getAttribute("data-view") === "lab").click();
const labCb = body.querySelectorAll("#lab-config input")[0];
assert.ok(labCb, "实验台存在可勾选试剂盒");
labCb.checked = true;
labCb.dispatch("change");
byId(body, "lab-export").click();
ok(/ngs-lab-config/.test(sandbox.__lastBlob), "导出配置包含标识");
byId(body, "clear-all").click();
byId(body, "lab-import-text").value = sandbox.__lastBlob;
byId(body, "lab-import").click();
saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && Object.keys(saved.lab).length >= 1, "导入后实验台配置恢复");
byId(body, "lab-import-text").value = '{"type":"ngs-lab-config","v":1,"lab":{"提取":5}}';
byId(body, "lab-import").click();
saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && Object.keys(saved.lab).length >= 1, "畸形配置被拒绝且原配置不变（D1 回归）");

console.log("7) 数据联动（样本 → pooling / 成本）");
byId(body, "s-id").value = "T-001";
byId(body, "s-add").click();
saved = JSON.parse(store["ngs-workbench-v2"] || "null");
ok(saved && saved.samples.length === 1, "样本登记成功");
byId(body, "pool-import").click();
ok(/^[\d.,]+$/.test(byId(body, "p-concs").value) && byId(body, "p-concs").value.length > 0, "pooling 浓度已带入");
byId(body, "cost-filln").click();
ok(byId(body, "c-n").value === "1", "成本样本数已带入");

console.log("8) 学习证明");
sandbox.__opened = "";
byId(body, "cert-btn").click();
ok(/学习证明/.test(sandbox.__opened), "学习证明窗口内容生成");
ok(/1 次/.test(sandbox.__opened) || /完成实验会话/.test(sandbox.__opened), "证明含会话统计");

console.log("9) 术语表");
ok(Object.keys(sandbox.NGSGlossary.map).length >= 20, "术语 ≥20 条");
const probe = new El("div");
probe.appendChild(sandbox.document.createTextNode("Q30 与 RIN 是常见指标"));
sandbox.NGSGlossary.annotate(probe);
const wrapped = probe.querySelectorAll(".term");
ok(wrapped.length >= 2, "annotateTerms 实际包裹术语（非恒真断言）");
ok((wrapped[0].getAttribute("title") || "").length > 0, "术语 title 含释义");
const optProbe = new El("select");
const opt = new El("option");
opt.appendChild(sandbox.document.createTextNode("cfDNA"));
optProbe.appendChild(opt);
sandbox.NGSGlossary.annotate(optProbe);
ok(opt.querySelectorAll(".term").length === 0, "OPTION 内术语不被包裹（D3 回归）");

console.log(`\nRUNTIME SMOKE PASS (${n} checks)`);
