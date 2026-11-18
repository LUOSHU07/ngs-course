(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var calc = window.NGSCalc;
  var KEY = "ngs-workbench-v2";

  function defaultState() {
    return {
      progress: [], samples: [], checks: {}, equipment: {},
      quizBest: null, quizWrong: [], cost: null,
      session: null, sessions: [], lab: {}, seen: false
    };
  }
  var state = defaultState();

  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved && typeof saved === "object") {
      state.progress = saved.progress || [];
      state.samples = saved.samples || [];
      state.checks = saved.checks || {};
      state.equipment = saved.equipment || {};
      state.quizBest = saved.quizBest === undefined ? null : saved.quizBest;
      state.cost = saved.cost === undefined ? null : saved.cost;
      state.session = saved.session || null;
      state.sessions = saved.sessions || [];
      state.lab = saved.lab || {};
      state.quizWrong = saved.quizWrong || [];
      state.seen = saved.seen === true;
    }
  } catch (e) { /* 忽略损坏数据 */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 隐私模式 */ }
    var b = $("save-state");
    if (b) { b.textContent = "已保存"; b.className = "badge ok"; }
  }

  var toastTimer = null;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  function fmt(x, d) { return Number(x).toFixed(d === undefined ? 2 : d); }
  /* 按移液器最小刻度单位格式化体积（与 calc.PIPETTES 的 decimals 一致） */
  function fmtVol(v, pipetteName) {
    var d = { P2: 3, P10: 2, P20: 2, P100: 1, P200: 1, P1000: 0, P5000: 0 }[pipetteName];
    return Number(v).toFixed(d === undefined ? 2 : d);
  }

  /* ---------------- 视图切换 ---------------- */
  var TITLES = {
    dash: "概览", lab: "我的实验台", tips: "技巧库", wet: "湿实验旅程", dry: "干实验", equip: "设备与安全", vendor: "厂家方案",
    calc: "核算", quiz: "自测与证明"
  };

  function showView(name) {
    document.querySelectorAll("#nav button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.view === name);
    });
    document.querySelectorAll(".view").forEach(function (v) {
      v.classList.toggle("active", v.id === "view-" + name);
    });
    $("view-title").textContent = TITLES[name] || "NGS 工作台";
    if (name === "quiz") renderRecords();
  }

  document.querySelectorAll("#nav button").forEach(function (b) {
    b.addEventListener("click", function () { showView(b.dataset.view); });
  });
  document.querySelectorAll("[data-jump]").forEach(function (b) {
    b.addEventListener("click", function () { showView(b.dataset.jump); });
  });

  /* ---------------- 概览 ---------------- */
  var MODULES = [
    { name: "M0 入门与安全", hours: 2 },
    { name: "M1 样本与提取", hours: 8 },
    { name: "M2 文库构建", hours: 8 },
    { name: "M3 文库 QC", hours: 4 },
    { name: "M4 上机与监控", hours: 4 },
    { name: "M5 Linux 基础", hours: 8 },
    { name: "M6 质控与比对", hours: 8 },
    { name: "M7 定量与差异", hours: 8 },
    { name: "M8 设备维护", hours: 4 },
    { name: "M9 浓度与成本", hours: 6 },
    { name: "M10 综合项目", hours: 8 }
  ];

  function renderModules() {
    var box = $("module-list");
    box.textContent = "";
    MODULES.forEach(function (m, i) {
      var row = document.createElement("label");
      row.className = "module-row";
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = state.progress.indexOf(i) !== -1;
      cb.addEventListener("change", function () {
        if (cb.checked) {
          if (state.progress.indexOf(i) === -1) state.progress.push(i);
        } else {
          state.progress = state.progress.filter(function (x) { return x !== i; });
        }
        save();
        renderDashboard();
      });
      var span = document.createElement("span");
      span.textContent = m.name;
      var tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = m.hours + " h";
      row.appendChild(cb);
      row.appendChild(span);
      row.appendChild(tag);
      box.appendChild(row);
    });
  }

  function equipmentStatus(item) {
    var last = state.equipment[item.id];
    if (!last) return { label: "未记录", cls: "" };
    var days = Math.floor((Date.now() - new Date(last + "T00:00:00").getTime()) / 86400000);
    if (isNaN(days)) return { label: "未记录", cls: "" };
    if (days > item.interval) return { label: "逾期 " + (days - item.interval) + " 天", cls: "bad" };
    if (days > item.interval * 0.8) return { label: "临近到期", cls: "warn" };
    return { label: "正常", cls: "ok" };
  }

  /* 学习路径卡 ↔ 模块进度联动 */
  var JOURNEY = [
    { jump: "lab", modules: [] },
    { jump: "wet", modules: [1, 2, 3, 4] },
    { jump: "dry", modules: [5, 6, 7] },
    { jump: "equip", modules: [8] },
    { jump: "calc", modules: [9] },
    { jump: "quiz", modules: [10] }
  ];

  function renderJourney() {
    JOURNEY.forEach(function (j) {
      var card = document.querySelector('.journey-card[data-jump="' + j.jump + '"]');
      if (!card) return;
      var st = card.querySelector(".j-status");
      if (!st) return;
      if (!j.modules.length) { st.textContent = "随时可做"; st.className = "j-status"; return; }
      var done = j.modules.filter(function (m) { return state.progress.indexOf(m) !== -1; }).length;
      if (done === j.modules.length) { st.textContent = "已完成"; st.className = "j-status done"; }
      else if (done > 0) { st.textContent = "进行中 " + done + "/" + j.modules.length; st.className = "j-status started"; }
      else { st.textContent = "未开始"; st.className = "j-status"; }
    });
  }

  function renderDashboard() {
    renderJourney();
    renderModules();
    var pct = Math.round((state.progress.length / MODULES.length) * 100);
    $("ring").style.setProperty("--p", pct);
    $("ring-text").textContent = pct + "%";
    $("stat-samples").textContent = state.samples.length;
    $("stat-equip").textContent = EQUIPMENT.filter(function (e) {
      return equipmentStatus(e).cls === "bad";
    }).length;
    $("stat-quiz").textContent = state.quizBest === null ? "—" : state.quizBest + " / 10";
    $("stat-cost").textContent = state.cost === null ? "—" : "¥" + fmt(state.cost);

    var next = MODULES.find(function (m, i) { return state.progress.indexOf(i) === -1; });
    $("next-step").textContent = next
      ? "下一步：" + next.name + "（约 " + next.hours + " 小时）。完成后回到本页勾选。"
      : "全部模块已完成。建议做一次综合项目：从样本到报告，并导出记录。";
  }

  $("reset-progress").addEventListener("click", function () {
    if (!confirm("确定重置模块进度？样本与设备记录不受影响。")) return;
    state.progress = [];
    save();
    renderDashboard();
  });

  /* ---------------- 湿实验 ---------------- */
  document.querySelectorAll("#wet-steps button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#wet-steps button").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      document.querySelectorAll(".step-panel").forEach(function (p) {
        p.classList.toggle("active", p.dataset.panel === btn.dataset.step);
      });
    });
  });

  var CHECKLISTS = {
    extract: [
      "样本编号与登记表一致",
      "提取试剂在有效期内，批次已记录",
      "阴性对照已设置",
      "Qubit 与 NanoDrop 结果已记录",
      "保存位置已登记"
    ],
    library: [
      "输入量符合试剂盒要求",
      "index 组合已核对",
      "建库区与扩增区耗材分开",
      "阴性对照已设置",
      "PCR 循环数已按输入量优化"
    ],
    seq: [
      "Qubit 总量足够",
      "主峰在预期范围",
      "无明显 adapter dimer",
      "qPCR 有效浓度已测",
      "PhiX 比例已按多样性设定"
    ],
    capture: [
      "文库总量 ≥500 ng，QC 合格",
      "index 组合无冲突",
      "探针在有效期内",
      "Cot-1 与 blockers 已回温混匀",
      "杂交 65 ℃ 过夜，捕获后 PCR 循环已优化"
    ],
    equip: [
      "冰箱温度与液氮液位已记录",
      "台面与设备外观已清洁，无异常声响",
      "在用试剂效期已抽查（Qubit 标准品、磁珠）",
      "废液桶未满、标签齐全（胍盐废液独立收集）",
      "报警与指示灯无异常"
    ]
  };

  var LIBRARY_STEPS = {
    dna: [
      { t: "片段化", time: "5–20 min", d: "Covaris 超声或酶法，目标片段 300–500 bp；输入 100–1000 ng，cfDNA 用专用方案。", c: "片段分布符合预期，无明显大片段残留。" },
      { t: "末端修复", time: "30 min", d: "T4 DNA 聚合酶补平 3' 突出、Klenow 补平 5' 突出、T4 PNK 磷酸化；20–30 ℃ 反应后纯化。", c: "纯化回收率与输入量匹配。" },
      { t: "加 A", time: "30 min", d: "Klenow exo- 在 3' 端加单个腺嘌呤，37 ℃；为接头连接提供兼容末端。", c: "不要跳过纯化，残余 dATP 会影响连接。" },
      { t: "接头连接", time: "15–30 min", d: "T4 DNA 连接酶连接带 index 的 adapter；按试剂盒控制 adapter:insert 比例，20 ℃ 反应后纯化。", c: "adapter dimer 不明显；index 组合已核对。" },
      { t: "片段选择 / 纯化", time: "20–30 min", d: "AMPure XP 1.8× 去小片段；需要窄分布时用双比例（如 0.6× 去大、0.8× 收目标）。", c: "主峰落在目标区间，回收率可接受。" },
      { t: "PCR 扩增", time: "30–60 min", d: "index 引物扩增；循环数按输入量优化（100 ng 约 8–9 循环），72 ℃ 延伸按片段长度。", c: "循环不过多，重复率不升高。" },
      { t: "二次纯化与 QC", time: "30 min", d: "1.0× 磁珠去引物二聚体；Qubit 定量、TapeStation 看片段、qPCR 测有效浓度。", c: "无 dimer，qPCR 与 Qubit 比例合理。" }
    ],
    rna: [
      { t: "rRNA 去除 / mRNA 富集", time: "30–60 min", d: "按试剂盒做 rRNA 去除或 polyA 富集；总 RNA 输入常见 100–1000 ng。", c: "rRNA 残留比例可接受。" },
      { t: "片段化", time: "8–15 min", d: "化学或酶法片段化，94 ℃ 左右短时处理；目标片段与读长匹配。", c: "片段分布集中，无明显降解。" },
      { t: "一链合成", time: "30–60 min", d: "随机引物 + 逆转录酶；25 ℃ 10 min → 42 ℃ 15–50 min → 70 ℃ 15 min 失活。", c: "避免 RNase 污染，使用无 RNase 耗材。" },
      { t: "二链合成", time: "60 min", d: "DNA 聚合酶 I + RNase H，16 ℃ 反应；生成双链 cDNA 后纯化。", c: "纯化后总量满足后续建库。" },
      { t: "末端修复 / 加 A / 接头", time: "1.5–2 h", d: "与 DNA 建库相同：补平、加 A、连接带 index 接头，每步之间纯化。", c: "接头连接效率与 dimer 控制。" },
      { t: "PCR 扩增", time: "30–60 min", d: "循环数通常 12–15，按输入量与 rRNA 去除效率调整；过多会引入偏好。", c: "重复率与 rRNA 比例可接受。" },
      { t: "纯化与 QC", time: "30 min", d: "磁珠纯化；Qubit、TapeStation、qPCR；必要时测链特异性。", c: "主峰、产量、有效浓度达标。" }
    ]
  };

  var CAPTURE_STEPS = [
    { t: "文库准备", time: "—", d: "先完成带 index 的常规文库；Qubit、TapeStation、qPCR 合格，总量至少 500 ng。", c: "文库无 dimer，index 无冲突。" },
    { t: "混样", time: "30 min", d: "8–12 个文库等摩尔混合，总投入 500 ng–1 µg；按捕获规模调整，避免 index 偏好。", c: "各文库比例与总量核对。" },
    { t: "杂交", time: "16–24 h", d: "加入探针、Cot-1、universal/index blockers 与杂交缓冲液；95 ℃ 10 min 变性，65 ℃ 杂交 16–24 h。", c: "65 ℃ 稳定过夜，避免温度波动。" },
    { t: "捕获", time: "1–1.5 h", d: "链霉亲和素磁珠 65 ℃ 结合 45 min；用 65 ℃ 洗涤缓冲液严格洗涤，去除未杂交文库。", c: "洗涤温度与次数按试剂盒，避免非特异保留。" },
    { t: "捕获后 PCR", time: "1 h", d: "用 index 引物扩增 10–14 循环；纯化后 Qubit/TapeStation/qPCR。", c: "循环不过多，产物无 dimer。" },
    { t: "QC 与上机", time: "1 h", d: "评估捕获效率与均一性；按 nM 等摩尔 pooling，按平台要求上机。", c: "目标区域覆盖均匀，无污染。" }
  ];

  function renderAccordion(container, steps, title) {
    var box = typeof container === "string" ? $(container) : container;
    if (title) {
      var group = document.createElement("p");
      group.className = "acc-group";
      group.textContent = title;
      box.appendChild(group);
    }
    steps.forEach(function (s, i) {
      var d = document.createElement("details");
      d.className = "acc";
      if (i === 0) d.open = true;
      var sum = document.createElement("summary");
      sum.appendChild(document.createTextNode((i + 1) + ". " + s.t));
      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = s.time;
      sum.appendChild(badge);
      var body = document.createElement("div");
      body.className = "acc-body";
      var p = document.createElement("p");
      p.textContent = s.d;
      body.appendChild(p);
      if (s.c) {
        var c = document.createElement("p");
        c.className = "muted";
        c.textContent = "检查点：" + s.c;
        body.appendChild(c);
      }
      d.appendChild(sum);
      d.appendChild(body);
      box.appendChild(d);
    });
  }

  function renderChecklist(id, key) {
    var box = $(id);
    box.textContent = "";
    CHECKLISTS[key].forEach(function (text, i) {
      var cid = key + "-" + i;
      var label = document.createElement("label");
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!state.checks[cid];
      cb.addEventListener("change", function () {
        state.checks[cid] = cb.checked;
        save();
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(text));
      box.appendChild(label);
    });
  }

  function renderSampleTable() {
    var table = $("sample-table");
    table.textContent = "";
    var head = document.createElement("thead");
    var hr = document.createElement("tr");
    ["编号", "类型", "体积 µL", "Qubit", "A260/280", ""].forEach(function (t) {
      var th = document.createElement("th");
      th.textContent = t;
      hr.appendChild(th);
    });
    head.appendChild(hr);
    table.appendChild(head);

    var body = document.createElement("tbody");
    if (!state.samples.length) {
      var empty = document.createElement("tr");
      var td = document.createElement("td");
      td.colSpan = 6;
      td.className = "muted";
      td.textContent = "还没有样本，填写上方表单后点“登记样本”。";
      empty.appendChild(td);
      body.appendChild(empty);
    }
    state.samples.forEach(function (s, i) {
      var tr = document.createElement("tr");
      [s.id, s.type, s.vol, s.qubit, s.a260].forEach(function (v) {
        var td = document.createElement("td");
        td.textContent = v;
        tr.appendChild(td);
      });
      var td = document.createElement("td");
      var del = document.createElement("button");
      del.className = "ghost small";
      del.textContent = "删除";
      del.addEventListener("click", function () {
        state.samples.splice(i, 1);
        save();
        renderSampleTable();
        renderDashboard();
      });
      td.appendChild(del);
      tr.appendChild(td);
      body.appendChild(tr);
    });
    table.appendChild(body);
  }

  $("s-add").addEventListener("click", function () {
    var id = $("s-id").value.trim();
    if (!id) { toast("请填写样本编号"); return; }
    if (state.samples.some(function (s) { return s.id === id; })) { toast("样本编号重复"); return; }
    state.samples.push({
      id: id,
      type: $("s-type").value,
      vol: $("s-vol").value,
      qubit: $("s-qubit").value,
      a260: $("s-a260").value
    });
    save();
    $("s-id").value = "";
    renderSampleTable();
    renderDashboard();
    toast("已登记 " + id);
  });

  function csvText(rows) {
    return rows.map(function (r) {
      return r.map(function (v) {
        var s = String(v === undefined || v === null ? "" : v);
        return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(",");
    }).join("\n");
  }

  function download(name, text, type) {
    var prefix = /\.csv$/i.test(name) ? "\ufeff" : "";
    var blob = new Blob([prefix + text], { type: type || "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  $("sample-export").addEventListener("click", function () {
    var rows = [["样本编号", "类型", "体积_uL", "Qubit_ng_uL", "A260_280"]];
    state.samples.forEach(function (s) { rows.push([s.id, s.type, s.vol, s.qubit, s.a260]); });
    download("samples.csv", csvText(rows));
    toast("已导出 samples.csv");
  });

  $("qc-btn").addEventListener("click", function () {
    var out = $("qc-out");
    try {
      var qubit = parseFloat($("qc-qubit").value);
      var bp = parseFloat($("qc-bp").value);
      var qpcr = parseFloat($("qc-qpcr").value);
      var nm = calc.massToNm(qubit, bp);
      var ratio = qpcr / nm;
      var issues = [];
      if ($("qc-dimer").value === "yes") issues.push("adapter dimer 明显：先再做一次纯化或片段选择。");
      if ($("qc-peak").value === "low") issues.push("主峰偏小：可能片段化过度，核对片段化条件。");
      if ($("qc-peak").value === "high") issues.push("主峰偏大：可能片段化不足或纯化偏差。");
      if (ratio < 0.5) issues.push("qPCR/Qubit 比值偏低（" + fmt(ratio) + "）：文库可扩增比例低，检查末端修复与连接。");
      if (ratio > 1.5) issues.push("qPCR/Qubit 比值偏高（" + fmt(ratio) + "）：复核 qPCR 标准曲线与稀释。");

      var text = "Qubit 换算：" + fmt(nm) + " nM（" + bp + " bp）\n" +
        "qPCR/Qubit 比值：" + fmt(ratio) + "\n";
      out.className = "result" + (issues.length ? " warn" : "");
      out.textContent = text + (issues.length ? "提示：\n- " + issues.join("\n- ") : "结论：未见明显异常，可按计划 pooling。");
    } catch (e) {
      out.className = "result bad";
      out.textContent = "错误：" + e.message;
    }
  });

  $("seq-phix-btn").addEventListener("click", function () {
    var out = $("seq-phix-out");
    try {
      var v = calc.phixVolume(parseFloat($("seq-phix-vol").value), parseFloat($("seq-phix-pct").value));
      out.className = "result";
      out.textContent = "PhiX 加入量：" + fmt(v) + " µL";
    } catch (e) {
      out.className = "result bad";
      out.textContent = "错误：" + e.message;
    }
  });

  $("pcr-btn").addEventListener("click", function () {
    var out = $("pcr-out");
    try {
      var r = calc.pcrCycles(parseFloat($("pcr-input").value), $("pcr-type").value);
      out.className = "result";
      out.textContent = "建议 " + r.cycles + " 个循环（范围 " + r.low + "–" + r.high + "）。\n" +
        "输入越低循环越多；以实际试剂盒与预实验为准。";
    } catch (e) {
      out.className = "result bad";
      out.textContent = "错误：" + e.message;
    }
  });

  $("hyb-btn").addEventListener("click", function () {
    var out = $("hyb-out");
    try {
      var total = parseFloat($("hyb-total").value);
      var r = calc.hybridMix({
        libMassNg: parseFloat($("hyb-lib-mass").value),
        libConc: parseFloat($("hyb-lib-conc").value),
        probeMassNg: parseFloat($("hyb-probe-mass").value),
        probeConc: parseFloat($("hyb-probe-conc").value),
        cot1MassUg: parseFloat($("hyb-cot-mass").value),
        cot1Conc: parseFloat($("hyb-cot-conc").value),
        blockersUl: parseFloat($("hyb-blockers").value),
        totalUl: total
      });
      out.className = "result";
      out.textContent = "文库：" + fmt(r.libVol) + " µL\n" +
        "探针：" + fmt(r.probeVol) + " µL\n" +
        "Cot-1：" + fmt(r.cotVol) + " µL\n" +
        "Blockers：" + fmt(r.blockers) + " µL\n" +
        "杂交缓冲液补足：" + fmt(r.buffer) + " µL（总体积 " + total + " µL）";
    } catch (e) {
      out.className = "result bad";
      out.textContent = "错误：" + e.message;
    }
  });

  $("spri-btn").addEventListener("click", function () {
    var out = $("spri-out");
    try {
      var r = calc.spriVolumes(parseFloat($("spri-sample").value), parseFloat($("spri-ratio").value), parseFloat($("spri-elution").value));
      out.className = "result";
      out.textContent = "磁珠：" + fmt(r.beads) + " µL\n总体积：" + fmt(r.total) + " µL\n洗脱体积：" + fmt(r.elution) + " µL";
    } catch (e) {
      out.className = "result bad";
      out.textContent = "错误：" + e.message;
    }
  });

  /* ---------------- 干实验 ---------------- */
  function buildScript() {
    var type = $("d-type").value;
    var r1 = $("d-r1").value.trim();
    var r2 = $("d-r2").value.trim();
    var ref = $("d-ref").value.trim();
    var gtf = $("d-gtf").value.trim();
    var t = $("d-threads").value.trim() || "4";
    var out = $("d-outdir").value.trim() || "results";
    var lines = ["#!/usr/bin/env bash", "set -euo pipefail", ""];
    lines.push("mkdir -p " + out + "/trimmed " + out + "/bam " + out + "/counts " + out + "/logs");
    lines.push("");
    lines.push("# 1) 清洗");
    lines.push("fastp -i " + r1 + " -I " + r2 + " \\");
    lines.push("  -o " + out + "/trimmed/R1.fq.gz -O " + out + "/trimmed/R2.fq.gz \\");
    lines.push("  -q 20 -l 50 -j " + out + "/logs/fastp.json -h " + out + "/logs/fastp.html");
    lines.push("");
    if (type === "dna") {
      lines.push("# 2) 比对（DNA）");
      lines.push("bwa-mem2 index " + ref);
      lines.push("bwa-mem2 mem -t " + t + " " + ref + " " + out + "/trimmed/R1.fq.gz " + out + "/trimmed/R2.fq.gz \\");
      lines.push("  | samtools sort -@" + t + " -o " + out + "/bam/sample.bam -");
    } else {
      lines.push("# 2) 比对（RNA）");
      lines.push("hisat2-build " + ref + " " + ref + ".index");
      lines.push("hisat2 -p " + t + " -x " + ref + ".index \\");
      lines.push("  -1 " + out + "/trimmed/R1.fq.gz -2 " + out + "/trimmed/R2.fq.gz \\");
      lines.push("  | samtools sort -@" + t + " -o " + out + "/bam/sample.bam -");
    }
    lines.push("samtools index " + out + "/bam/sample.bam");
    lines.push("");
    lines.push("# 3) 定量");
    lines.push("featureCounts -T " + t + " -p -a " + gtf + " -o " + out + "/counts/counts.txt " + out + "/bam/sample.bam");
    return lines.join("\n");
  }

  $("d-gen").addEventListener("click", function () {
    $("d-script").textContent = buildScript();
    toast("脚本已生成");
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject(new Error("copy failed"));
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  $("d-copy").addEventListener("click", function () {
    var text = $("d-script").textContent;
    if (!text || text.indexOf("#!/") !== 0) { toast("先生成脚本"); return; }
    copyText(text).then(function () { toast("已复制"); }, function () { toast("复制失败，请手动选择"); });
  });

  $("d-download").addEventListener("click", function () {
    var text = $("d-script").textContent;
    if (!text || text.indexOf("#!/") !== 0) { toast("先生成脚本"); return; }
    download("ngs_pipeline.sh", text, "text/x-shellscript;charset=utf-8");
    toast("已下载 ngs_pipeline.sh");
  });

  $("m-btn").addEventListener("click", function () {
    var out = $("m-out");
    var mapRate = parseFloat($("m-map").value);
    var q30 = parseFloat($("m-q30").value);
    var dup = parseFloat($("m-dup").value);
    var rrna = parseFloat($("m-rrna").value);
    var notes = [];
    if (mapRate < 70) notes.push("比对率 " + mapRate + "% 偏低：先查污染、接头残留、参考基因组与物种是否匹配。");
    if (q30 < 80) notes.push("Q30 " + q30 + "% 偏低：查试剂有效期、流动池与温控。");
    if (dup > 30) notes.push("重复率 " + dup + "% 偏高：可能 PCR 循环过多或输入量过低。");
    if (rrna > 20) notes.push("rRNA " + rrna + "% 偏高：rRNA 去除不彻底，考虑换试剂盒或增加去除步骤。");
    out.className = "result" + (notes.length ? " warn" : "");
    out.textContent = notes.length ? "可能的问题：\n- " + notes.join("\n- ") : "各项指标在常见范围内；仍需结合项目预期判断。";
  });

  /* ---------------- 设备 ---------------- */
  var EQUIPMENT = [
    { id: "pipette", name: "移液器", interval: 180, note: "每 6–12 个月校准", doc: "../03-设备/01-通用基础设备.md", ops: ["量程内使用，不低于标称 10%", "吸液垂直、放液贴壁 45°；黏稠液体润洗吸头 2–3 次", "吸液后停 1 s 再提起，挂壁液滴碰除不甩"] },
    { id: "pcr", name: "PCR 仪", interval: 365, note: "每年温度验证", doc: "../03-设备/01-通用基础设备.md", ops: ["先设程序再放管，热盖与耗材匹配", "升降温速率按试剂要求", "运行中不开盖，热盖防烫"] },
    { id: "centrifuge", name: "高速冷冻离心机", interval: 180, note: "转子检查与寿命管理", doc: "../03-设备/01-通用基础设备.md", ops: ["对称配平（差值按转子要求，内控 ≤0.1 g）", "盖严转子盖与腔盖，到速后再离开", "rpm 按转子半径换算 ×g；异响立即急停"] },
    { id: "vortex", name: "涡旋振荡器", interval: 365, note: "垫片与轴承", doc: "../03-设备/01-通用基础设备.md", ops: ["点动优先；连续混匀中高速短时（5–30 s）", "磁珠重悬要打匀无团块", "大体积管双手扶稳，勿涡旋开盖管"] },
    { id: "thermomixer", name: "恒温混匀仪", interval: 180, note: "孔温校准", doc: "../03-设备/01-通用基础设备.md", ops: ["预热到温再放样，独立温度计抽查孔温", "转速按试剂盒（如磁珠 1,400 rpm）", "锁扣管防蒸发，开盖防蒸汽烫"] },
    { id: "magnet", name: "磁力架", interval: 365, note: "外观与磁力", doc: "../03-设备/01-通用基础设备.md", ops: ["等液体完全澄清再吸弃（看液体不看表）", "吸液枪头沿对侧壁、不碰珠", "重悬时离架再吹打/涡旋"] },
    { id: "bsc", name: "生物安全柜", interval: 365, note: "风速与 HEPA 认证", doc: "../03-设备/01-通用基础设备.md", ops: ["开机按机型自净再操作", "物品分区单向流，手臂缓慢进出", "不挡进气格栅，禁用酒精灯"] },
    { id: "water", name: "纯水系统", interval: 180, note: "滤芯与电阻率", doc: "../03-设备/01-通用基础设备.md", ops: ["分子级水用终端超纯出口，先放流 30 s", "查电阻率 ≥18 MΩ·cm", "记录出水水质趋势，下降即查柱"] },
    { id: "freezer", name: "低温冰箱 −20/−80 ℃", interval: 180, note: "除霜与报警测试", doc: "../03-设备/01-通用基础设备.md", ops: ["分区贴签，存取速战速决", "−80 ℃ 开门 ≤30 s", "每日记录温度（自动报警+人工抄表双轨）"] },
    { id: "ln2", name: "液氮罐", interval: 7, note: "每周液位；季度查绝热", doc: "../03-设备/01-通用基础设备.md", ops: ["每周查液位，低于样本架上限即补液", "取样防冻手套+面屏，动作快", "罐区保持通风防缺氧；外壳结霜即转移样本"] },
    { id: "ice", name: "制冰机", interval: 30, note: "每月清洗消毒", doc: "../03-设备/01-通用基础设备.md", ops: ["冰铲专用，手不入冰仓", "取冰即关盖", "每月清洗消毒冰仓与水路（防生物膜）"] },
    { id: "autoclave", name: "高压灭菌锅", interval: 90, note: "生物指示剂与安全阀检定", doc: "../03-设备/01-通用基础设备.md", ops: ["装载留蒸汽通道、不过塞", "液体用液体程序防暴沸", "每锅贴指示带；压力归零、温度达标再开门"] },
    { id: "qubit", name: "Qubit 荧光计", interval: 90, note: "校准与试剂效期", doc: "../03-设备/02-提取与QC设备.md", ops: ["开机或换试剂批次先 2 点校准", "样品 1–20 µL + 工作液至 200 µL，涡旋 3–5 s", "室温避光孵育 2 min 读数"] },
    { id: "nanodrop", name: "NanoDrop", interval: 180, note: "基座清洁与验证", doc: "../03-设备/02-提取与QC设备.md", ops: ["基座 1–1.5 µL 样品形成液柱", "测前空白校零、测后无尘棉签擦净", "黏稠样品吹打混匀再上样"] },
    { id: "tape", name: "TapeStation", interval: 90, note: "电极清洁程序；电极盒按 1 年/5 万样本", doc: "../03-设备/02-提取与QC设备.md", ops: ["ScreenTape 与试剂室温平衡 30 min", "ladder 必加；上机前离心去气泡", "部分使用的 ScreenTape 竖直 2–8 ℃，两周内用完"] },
    { id: "electro", name: "电泳与凝胶成像", interval: 180, note: "电极清洁与灯源", doc: "../03-设备/02-提取与QC设备.md", ops: ["缓冲液不反复用超 3–5 次", "上样量一致；条带微笑就降电压", "RNA 用变性体系或去污处理电泳槽"] },
    { id: "covaris", name: "Covaris 超声破碎仪", interval: 7, note: "每周换水脱气；半年验证", doc: "../03-设备/02-提取与QC设备.md", ops: ["水浴水位到线并脱气", "microTUBE 插到位；程序按目标片段选（厂家表）", "碎片后用 TapeStation 确认分布"] },
    { id: "kingfisher", name: "KingFisher 磁珠提取仪", interval: 180, note: "磁棒校验", doc: "../03-设备/02-提取与QC设备.md", ops: ["按试剂盒预设程序建板", "磁套与板型匹配、插到底", "核对板位方向；运行结束即取板防蒸发"] },
    { id: "maxwell", name: "Maxwell 提取仪", interval: 180, note: "活塞与磁棒维护", doc: "../03-设备/02-提取与QC设备.md", ops: ["卡盒按样本类型选型", "按仪器提示加样与洗脱管", "结束及时取洗脱管，防蒸发浓缩偏差"] },
    { id: "seq", name: "测序仪", interval: 365, note: "厂家 PM 与每 run 清洗", doc: "../03-设备/03-测序设备.md", ops: ["文库 QC 合格后按机型指南稀释/变性/装载", "启动后 30 min 内核对首轮信号", "run 后按厂家规程清洗管路，记录 run 台账"] }
  ];

  function renderEquipment() {
    var grid = $("equip-grid");
    grid.textContent = "";
    EQUIPMENT.forEach(function (e) {
      var card = document.createElement("div");
      card.className = "equip";
      var head = document.createElement("div");
      head.className = "equip-head";
      var h = document.createElement("h4");
      h.textContent = e.name;
      var status = equipmentStatus(e);
      var badge = document.createElement("span");
      badge.className = "badge " + status.cls;
      badge.textContent = status.label;
      head.appendChild(h);
      head.appendChild(badge);
      // 操作说明为主：打开即用的要点列表
      var ops = document.createElement("ul");
      ops.className = "equip-ops";
      e.ops.forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        ops.appendChild(li);
      });
      // 维护记录为补充：日期、周期、章节链接
      var maint = document.createElement("div");
      maint.className = "equip-maint";
      var meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = "维护周期 " + e.interval + " 天 · " + e.note;
      var label = document.createElement("label");
      label.textContent = "上次维护 ";
      var input = document.createElement("input");
      input.type = "date";
      input.value = state.equipment[e.id] || "";
      input.addEventListener("change", function () {
        state.equipment[e.id] = input.value;
        save();
        renderEquipment();
        renderDashboard();
      });
      label.appendChild(input);
      var doc = document.createElement("a");
      doc.href = e.doc;
      doc.textContent = "完整章节 ↗";
      doc.className = "vendor-src";
      maint.appendChild(meta);
      maint.appendChild(label);
      maint.appendChild(doc);
      card.appendChild(head);
      card.appendChild(ops);
      card.appendChild(maint);
      grid.appendChild(card);
    });
  }

  var FAULTS = {
    pipette: "体积不准：检查吸头密封、活塞与弹簧；用称重法校验，超差送修。",
    pcr: "孔间温度不均：换槽位复测确认，异常报修；程序中断记录断点，勿盲目续跑。",
    centrifuge: "震动或异响：立即停机，检查配平、转子裂纹与盖子锁；不要强行手动刹车。",
    vortex: "震动减弱或噪声大：垫片老化开裂即换；紧固件松动上紧。",
    thermomixer: "温度偏差大：独立温度计复核孔温；偏差超标校准或更换加热块。",
    magnet: "磁珠吸附明显变慢：磁体局部退磁，同批磁珠对比确认后更换。",
    bsc: "风速报警：查进气格栅遮挡与 HEPA 堵塞；未排除前停用挂牌。",
    water: "电阻率下降：更换超纯化柱；TOC 升高换紫外灯/活性炭并消毒管路。",
    freezer: "温度报警：检查门封、散热、负载与断电；样本先转移再维修。",
    ln2: "外壳局部结霜/结冰：真空绝热失效征兆，立即转移样本；颈塞卡死自然化冻勿硬撬。",
    ice: "产冰慢或冰有异味：查水压与散热；整仓清洗消毒并换滤芯。",
    autoclave: "灭菌不彻底：装载过密或排气不畅，减载重跑并以生物指示剂复核；密封圈漏气即换。",
    qubit: "读数漂移：重新用标准品校准，检查试剂有效期与避光，排除气泡。",
    nanodrop: "读数不稳：液柱断裂（基座疏水性下降），清洁修复后重测；基线漂移重新空白。",
    tape: "峰形异常：排查气泡、样品降解、ScreenTape 失效；重离心上样再测。",
    electro: "条带微笑或无带：换新缓冲液降电压；查染料效期与电极方向。",
    covaris: "片段偏大：水浴换水并充分脱气、核对水位与程序；无剪切查管是否插到位。",
    kingfisher: "得率低且不齐：查磁套插到底、板位方向与程序匹配；挂壁残留按手册调混匀参数。",
    maxwell: "卡盒报错：重新放置到位；密封膜破损直接换卡盒。",
    seq: "Q30 下降：查试剂批次、流动池、温控与 loading 浓度；保留日志报修。"
  };

  function renderFault() {
    $("fault-out").textContent = FAULTS[$("fault-select").value];
  }

  $("fault-select").addEventListener("change", renderFault);

  /* ---------------- 计算与成本 ---------------- */
  function bindCalc() {
    $("molar-btn").addEventListener("click", function () {
      var out = $("molar-out");
      try {
        out.className = "result";
        out.textContent = fmt(calc.massToNm(parseFloat($("m-ng").value), parseFloat($("m-bp").value))) + " nM";
      } catch (e) { out.className = "result bad"; out.textContent = "错误：" + e.message; }
    });

    $("pool-btn").addEventListener("click", function () {
      var out = $("pool-out");
      try {
        var concs = $("p-concs").value.split(",").map(function (s) { return parseFloat(s.trim()); });
        if (concs.some(isNaN)) throw new Error("浓度列表格式应为 40,25,30,20");
        var vols = calc.poolVolumes(concs, parseFloat($("p-target").value), parseFloat($("p-vol").value));
        var sum = vols.reduce(function (a, b) { return a + b; }, 0);
        var lines = vols.map(function (v, i) { return "文库" + (i + 1) + "（" + concs[i] + " nM）：" + fmt(v) + " µL"; });
        lines.push("补稀释液至 " + $("p-vol").value + " µL（取样合计 " + fmt(sum) + " µL）");
        out.className = "result";
        out.textContent = lines.join("\n");
      } catch (e) { out.className = "result bad"; out.textContent = "错误：" + e.message; }
    });

    $("pool-export").addEventListener("click", function () {
      try {
        var concs = $("p-concs").value.split(",").map(function (s) { return parseFloat(s.trim()); });
        var vols = calc.poolVolumes(concs, parseFloat($("p-target").value), parseFloat($("p-vol").value));
        var rows = [["文库编号", "浓度_nM", "取样体积_uL"]];
        vols.forEach(function (v, i) { rows.push(["L" + (i + 1), concs[i], fmt(v)]); });
        download("pooling.csv", csvText(rows));
        toast("已导出 pooling.csv");
      } catch (e) { toast("先完成有效的 pooling 计算"); }
    });

    $("dil-btn").addEventListener("click", function () {
      var out = $("dil-out");
      try {
        var c1 = parseFloat($("dil-c1").value), c2 = parseFloat($("dil-c2").value), v2 = parseFloat($("dil-v2").value);
        out.className = "result";
        var prefSingle = $("dil-single-first").checked !== false; // 默认优先单步
        var plan = calc.dilutionPlan(c1, c2, v2, parseFloat($("dil-min").value), prefSingle);
        var lines = [plan.note];
        plan.steps.forEach(function (s, i) {
          var src = i === 0 ? "母液" : "中间液";
          var dev = (s.actualConc - s.conc) / s.conc * 100;
          lines.push("第 " + (i + 1) + " 步：取" + src + " " + fmtVol(s.take, s.takePipette) + " µL（" + s.takePipette + "），加稀释液 " + fmtVol(s.diluent, s.diluentPipette) + " µL（" + s.diluentPipette + "）→ 实际总量 " + fmt(s.total) + " µL，实际浓度 " + fmt(s.actualConc) + "（目标 " + fmt(s.conc) + "，偏差 " + (dev >= 0 ? "+" : "") + dev.toFixed(1) + "%）");
        });
        out.textContent = lines.join("\n");
      } catch (e) { out.className = "result bad"; out.textContent = "错误：" + e.message; }
    });

    $("phix-btn").addEventListener("click", function () {
      var out = $("phix-out");
      try {
        out.className = "result";
        out.textContent = "PhiX 加入量：" + fmt(calc.phixVolume(parseFloat($("phix-vol").value), parseFloat($("phix-pct").value))) + " µL";
      } catch (e) { out.className = "result bad"; out.textContent = "错误：" + e.message; }
    });

    $("cost-btn").addEventListener("click", function () {
      var out = $("cost-out");
      try {
        var costs = {
          extraction: parseFloat($("c-ext").value), library: parseFloat($("c-lib").value),
          qc: parseFloat($("c-qc").value), consumable: parseFloat($("c-con").value),
          labor: parseFloat($("c-lab").value), run: parseFloat($("c-run").value)
        };
        var samples = parseFloat($("c-n").value);
        var fill = parseFloat($("c-fill").value);
        var fail = parseFloat($("c-fail").value);
        var r = calc.costPerSample(costs, samples, fill, fail);
        state.cost = r.expected;
        save();
        renderDashboard();
        out.className = "result";
        out.textContent = "直接成本：" + fmt(r.direct) + "\nrun 分摊/样本：" + fmt(r.runShare) +
          "\n小计/样本：" + fmt(r.subtotal) + "\n期望单样本成本：" + fmt(r.expected);

        var fills = [0.5, 0.7, 0.9];
        var fails = [0.05, 0.1, 0.2];
        var sens = calc.costSensitivity(costs, samples, fills, fails);
        var table = $("sens-table");
        table.textContent = "";
        var thead = document.createElement("thead");
        var hr = document.createElement("tr");
        hr.appendChild(document.createElement("th")).textContent = "装载率 \\ 失败率";
        fails.forEach(function (f) {
          var th = document.createElement("th");
          th.textContent = Math.round(f * 100) + "%";
          hr.appendChild(th);
        });
        thead.appendChild(hr);
        table.appendChild(thead);
        var tbody = document.createElement("tbody");
        sens.forEach(function (row, i) {
          var tr = document.createElement("tr");
          var th = document.createElement("td");
          th.textContent = Math.round(fills[i] * 100) + "%";
          tr.appendChild(th);
          row.forEach(function (cell) {
            var td = document.createElement("td");
            td.textContent = "¥" + fmt(cell.expected);
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
      } catch (e) { out.className = "result bad"; out.textContent = "错误：" + e.message; }
    });
  }

  /* ---------------- 厂家方案 ---------------- */
  var vendorCat = "全部";

  function labHas(id) {
    for (var cat in state.lab) {
      if (Array.isArray(state.lab[cat]) && state.lab[cat].indexOf(id) !== -1) return true;
    }
    return false;
  }

  function labDefaultFor(kitFilter) {
    for (var i = 0; i < (kitFilter || []).length; i++) {
      if (labHas(kitFilter[i])) return kitFilter[i];
    }
    return null;
  }

  function renderVendorMine() {
    var box = $("vendor-mine");
    if (!box) return;
    box.textContent = "";
    var mine = VENDORS.filter(function (v) { return labHas(v.id); });
    if (!mine.length) return;
    var card = document.createElement("div");
    card.className = "card vendor-card mine-card";
    var head = document.createElement("div");
    head.className = "vendor-head";
    var h = document.createElement("h4");
    h.textContent = "我的实验台（" + mine.length + " 项）";
    var b = document.createElement("span");
    b.className = "badge ok";
    b.textContent = "已置顶";
    head.appendChild(h); head.appendChild(b);
    card.appendChild(head);
    var p = document.createElement("p");
    p.className = "muted";
    p.textContent = mine.map(function (v) { return v.name; }).join("；");
    card.appendChild(p);
    box.appendChild(card);
  }

  /* ---------------- 我的实验台 ---------------- */
  function renderLab() {
    var cfg = $("lab-config"), man = $("lab-manual");
    if (!cfg) return;
    cfg.textContent = "";
    man.textContent = "";
    var cats = ["提取", "片段化", "建库", "杂交", "QC", "上机"];
    var total = 0;
    cats.forEach(function (cat) { total += (state.lab[cat] || []).length; });
    cats.forEach(function (cat) {
      var vs = VENDORS.filter(function (v) { return v.cat === cat; });
      if (!vs.length) return;
      var grp = document.createElement("div");
      grp.className = "lab-cat";
      var h = document.createElement("p");
      h.className = "pending-cat";
      h.textContent = cat;
      grp.appendChild(h);
      vs.forEach(function (v) {
        var lab = document.createElement("label");
        lab.className = "lab-item";
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = labHas(v.id);
        cb.addEventListener("change", function () {
          var arr = state.lab[cat] || (state.lab[cat] = []);
          if (cb.checked) { if (arr.indexOf(v.id) === -1) arr.push(v.id); }
          else { state.lab[cat] = arr.filter(function (x) { return x !== v.id; }); }
          save();
          renderLab();
          renderVendorView();
        });
        var span = document.createElement("span");
        span.textContent = v.name;
        lab.appendChild(cb); lab.appendChild(span);
        grp.appendChild(lab);
      });
      cfg.appendChild(grp);
    });
    $("lab-count").textContent = String(total);
    if (!total) {
      man.innerHTML = "<p class='muted'>在上方勾选你在用的试剂盒与设备，这里即时生成你的专属操作手册（逐步参数表 + 原厂注意点 + 手册来源）。</p>";
      return;
    }
    cats.forEach(function (cat) {
      (state.lab[cat] || []).forEach(function (id) {
        var v = vendorById(id);
        if (!v) return;
        var card = document.createElement("div");
        card.className = "card vendor-card";
        var head = document.createElement("div");
        head.className = "vendor-head";
        var h = document.createElement("h4");
        h.textContent = v.name;
        var tag = document.createElement("span");
        tag.className = "badge";
        var meta = VENDOR_META[v.id];
        tag.textContent = v.cat + (meta ? " · 核对 " + meta.date : "");
        head.appendChild(h); head.appendChild(tag);
        card.appendChild(head);
        card.appendChild(kitTable(v));
        var ul = document.createElement("ul");
        ul.className = "tips";
        v.tips.forEach(function (t) {
          var li = document.createElement("li");
          li.textContent = t;
          ul.appendChild(li);
        });
        card.appendChild(ul);
        var src = document.createElement("p");
        src.className = "muted small";
        var a = document.createElement("a");
        a.href = v.source; a.target = "_blank"; a.rel = "noopener";
        a.textContent = "原厂手册来源";
        src.appendChild(a);
        card.appendChild(src);
        man.appendChild(card);
      });
    });
  }

  function renderVendorView() {
    renderVendorMine();
    var q = (($("vendor-search") && $("vendor-search").value) || "").trim().toLowerCase();
    var cats = ["全部"];
    VENDORS.forEach(function (v) { if (cats.indexOf(v.cat) === -1) cats.push(v.cat); });
    var chipBox = $("vendor-cats");
    chipBox.textContent = "";
    cats.forEach(function (c) {
      var b = document.createElement("button");
      b.className = "chip" + (c === vendorCat ? " active" : "");
      b.textContent = c;
      b.addEventListener("click", function () { vendorCat = c; renderVendorView(); });
      chipBox.appendChild(b);
    });
    $("vendor-count").textContent = VENDORS.length + " 项已核对";
    var list = VENDORS.filter(function (v) {
      if (vendorCat !== "全部" && v.cat !== vendorCat) return false;
      if (!q) return true;
      var hay = (v.name + " " + v.cat + " " + v.steps.map(function (s) { return s.join(" "); }).join(" ") + " " + v.tips.join(" ")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    var box = $("vendor-list");
    box.textContent = "";
    list.forEach(function (v) {
      var card = document.createElement("div");
      card.className = "vendor-card";
      var head = document.createElement("div");
      head.className = "vendor-head";
      var title = document.createElement("h4");
      title.textContent = v.name;
      var tag = document.createElement("span");
      tag.className = "badge";
      tag.textContent = v.cat;
      head.appendChild(title);
      head.appendChild(tag);
      var table = document.createElement("table");
      table.className = "kv vendor-table";
      var trh = document.createElement("tr");
      ["步骤", "组分 / 体积", "程序", "备注"].forEach(function (h) {
        var th = document.createElement("th");
        th.textContent = h;
        trh.appendChild(th);
      });
      table.appendChild(trh);
      v.steps.forEach(function (s) {
        var tr = document.createElement("tr");
        s.forEach(function (cell) {
          var td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
      var ul = document.createElement("ul");
      ul.className = "vendor-tips";
      v.tips.forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
      });
      var src = document.createElement("a");
      src.href = v.source;
      src.target = "_blank";
      src.rel = "noopener";
      src.className = "vendor-src";
      src.textContent = "原厂手册 ↗";
      var meta = VENDOR_META[v.id];
      var badge = document.createElement("p");
      badge.className = "muted";
      badge.textContent = "已核对 " + (meta ? meta.date : "—") + (meta && meta.ver ? " · " + meta.ver : "");
      card.appendChild(head);
      card.appendChild(table);
      card.appendChild(ul);
      card.appendChild(src);
      card.appendChild(badge);
      box.appendChild(card);
    });
    var pend = $("vendor-pending");
    pend.textContent = "";
    var groups = {};
    var catOrder = [];
    VENDOR_CATALOG.forEach(function (p) {
      if (!groups[p.cat]) { groups[p.cat] = []; catOrder.push(p.cat); }
      groups[p.cat].push(p);
    });
    catOrder.forEach(function (cat) {
      var g = document.createElement("div");
      g.className = "pending-group";
      var h = document.createElement("p");
      h.className = "pending-cat";
      h.textContent = cat;
      g.appendChild(h);
      var grid = document.createElement("div");
      grid.className = "pending-grid";
      groups[cat].forEach(function (p) {
        var d = document.createElement("div");
        d.className = "pending-item";
        var strong = document.createElement("strong");
        strong.textContent = p.brand;
        d.appendChild(strong);
        d.appendChild(document.createTextNode(" · " + p.product));
        if (p.note) {
          var small = document.createElement("div");
          small.className = "pending-note";
          small.textContent = p.note;
          d.appendChild(small);
        }
        grid.appendChild(d);
      });
      g.appendChild(grid);
      pend.appendChild(g);
    });
  }

  if ($("vendor-search")) {
    $("vendor-search").addEventListener("input", renderVendorView);
  }

  /* ---------------- 技巧库 ---------------- */
  var TIPS = [
    { m: "M0", t: "读长不是越长越好", b: "短读长更准、更便宜；长读长用于结构变异、重复区和甲基化。" },
    { m: "M0", t: "Q30 高不等于数据好", b: "还要看比对率、覆盖均匀性、重复率与污染。" },
    { m: "M1", t: "样本分装", b: "按单次用量分装，避免反复冻融导致片段化。" },
    { m: "M1", t: "RNA 快速冻存", b: "离体后 30 min 内进入裂解液或 -80 ℃，减少降解。" },
    { m: "M1", t: "洗脱预热", b: "55–65 ℃ 洗脱并二次洗脱，可多回收 10–20%。" },
    { m: "M1", t: "FFPE 去交联", b: "去交联不足表现为得率低、片段短，先延长处理再判断可用性。" },
    { m: "M1", t: "cfDNA 防溶血", b: "溶血会带入白细胞 gDNA，采血与离心条件比提取试剂更关键。" },
    { m: "M2", t: "建库顺序", b: "末端修复 → 加 A → 接头连接，跳步会显著降低连接效率。" },
    { m: "M2", t: "磁珠不干燥", b: "过度干燥降低回收率，保持湿润直接洗脱。" },
    { m: "M2", t: "PCR 循环按 log2 估", b: "输入每减半加约 1 循环：100 ng DNA 约 9 循环，10 ng 约 12。" },
    { m: "M2", t: "dimer 先纯化", b: "adapter dimer 明显时再做一次纯化或片段选择，不要直接上机。" },
    { m: "M2", t: "接头比例", b: "adapter 过量是 dimer 的主因，按试剂盒比例并做预实验。" },
    { m: "M3", t: "NanoDrop 不定量文库", b: "ssDNA、RNA、引物都会干扰 A260，文库定量用 Qubit + qPCR。" },
    { m: "M3", t: "qPCR 与 Qubit 差异", b: "差异超过 2 倍先查稀释、末端修复与连接，再 pooling。" },
    { m: "M3", t: "小峰不一定是 dimer", b: "结合主峰位置与 qPCR 判断，避免误判重做。" },
    { m: "M4", t: "变性后冰上", b: "变性后立即冰上，室温久放会重新退火，loading 效率下降。" },
    { m: "M4", t: "PhiX 同体系混合", b: "PhiX 与 pool 在同一体系混匀，不要先稀释再加。" },
    { m: "M4", t: "低多样性提高 PhiX", b: "16S、扩增子等低多样性文库适当提高 PhiX 比例。" },
    { m: "M4", t: "记录批号", b: "流动池/芯片、试剂批号、loading 浓度必须记录，异常时可追溯。" },
    { m: "M5", t: "防断线", b: "长任务用 tmux 或 screen，避免 SSH 断开中断。" },
    { m: "M5", t: "原始数据只读", b: "raw 目录只读，先备份再清洗。" },
    { m: "M5", t: "路径避免空格与中文", b: "生信工具对空格和中文路径兼容性差，统一用英文短路径。" },
    { m: "M6", t: "高重复不一定是失败", b: "RNA-seq 高表达基因会带来高重复，结合 rRNA 与比对率判断。" },
    { m: "M6", t: "过度 trim 反效果", b: "过度修剪降低比对率，先确认接头类型再设参数。" },
    { m: "M6", t: "decoy 序列", b: "人/鼠比对加 decoy，减少假阳性比对。" },
    { m: "M6", t: "MAPQ 过滤", b: "变异检测慎用 MAPQ <20 的 reads。" },
    { m: "M7", t: "链特异性一致", b: "featureCounts 的 -s 必须与建库链特异性一致。" },
    { m: "M7", t: "先 PCA", b: "差异分析前先看 PCA，排除离群样本与批次。" },
    { m: "M7", t: "批次进 design", b: "批次与协变量写进 design，不要事后解释。" },
    { m: "M7", t: "LFC shrink", b: "排序和可视化前做 LFC shrink，减少低表达基因的噪声。" },
    { m: "M8", t: "移液器校准", b: "6–12 个月校准，异常先查吸头密封与活塞。" },
    { m: "M8", t: "离心机配平", b: "严格配平，异响立即停机检查转子。" },
    { m: "M8", t: "安全柜格栅", b: "物品不挡前后格栅，操作在台面中部。" },
    { m: "M8", t: "纯水电阻率", b: "配试剂前测 18.2 MΩ·cm，长期不用先放水。" },
    { m: "M9", t: "pooling 用 nM", b: "等摩尔混合按 nM 算体积，不要用 ng/µL 直接等体积。" },
    { m: "M9", t: "失败率折算", b: "期望成本 = 小计/(1−失败率)，失败率升高成本非线性上升。" },
    { m: "M9", t: "装载率", b: "fill rate 从 50% 提到 90%，测序分摊下降约 44%。" },
    { m: "M10", t: "版本成对记录", b: "参考基因组与注释版本必须成对记录，否则结果不可复现。" },
    { m: "M10", t: "每周导出", b: "记录与进度每周导出一次 JSON 备份，避免浏览器清理丢失。" }
  ];

  function renderTips(query) {
    var q = (query || "").trim().toLowerCase();
    var list = TIPS.filter(function (x) {
      if (!q) return true;
      return (x.m + " " + x.t + " " + x.b).toLowerCase().indexOf(q) !== -1;
    });
    var box = $("tip-list");
    box.textContent = "";
    list.forEach(function (x) {
      var card = document.createElement("div");
      card.className = "tip-card";
      var tag = document.createElement("div");
      tag.className = "tag";
      tag.textContent = x.m;
      var h = document.createElement("h4");
      h.textContent = x.t;
      var p = document.createElement("p");
      p.textContent = x.b;
      card.appendChild(tag);
      card.appendChild(h);
      card.appendChild(p);
      box.appendChild(card);
    });
    $("tip-count").textContent = list.length + " 条";
  }

  if ($("tip-search")) {
    $("tip-search").addEventListener("input", function () { renderTips(this.value); });
  }

  /* ---------------- 术语悬浮释义 ---------------- */
  var GLOSSARY = {
    "Q30": "质量值 ≥30 的碱基比例，对应错误率约 0.1%",
    "PF%": "Pass Filter：通过质量过滤的有效簇占比",
    "RIN": "RNA Integrity Number，1–10 评价 RNA 完整性，≥7 适合常规 RNA-seq",
    "DV200": "片段 >200 nt 的 RNA 占比，FFPE 样本的分级指标",
    "loading 浓度": "上机时文库的最终加样浓度，过高产生簇拥挤、过低产量不足",
    "PhiX": "Illumina 质控文库，用于平衡低多样性文库与监控运行质量",
    "index": "接头上的短条码序列，用于多样本混合后区分来源",
    "index hopping": "index 跳跃：游离接头造成样本间串扰，UDI 双端唯一 index 可控制",
    "adapter dimer": "接头二聚体：无插入片段的接头自连产物，浪费读长，需纯化去除",
    "插入片段": "文库中接头之间的目标 DNA 片段，决定有效读长利用",
    "覆盖度": "某一位点被 reads 覆盖的平均次数（深度）",
    "重复率": "序列完全相同的 reads 占比，高重复提示 PCR 过度或输入量低",
    "比对率": "能定位到参考基因组的 reads 比例，低比对先查污染与接头",
    "SPRI": "顺磁珠固相可逆固定技术，按磁珠/样本体积比选择性结合不同长度 DNA",
    "cfDNA": "循环游离 DNA，血浆中约 167 bp 的片段化 DNA",
    "DNB": "DNA 纳米球，MGI 平台的滚环扩增测序单元",
    "ssCir": "单链环化文库，MGI 上机前的环化中间体",
    "链霉亲和素磁珠": "结合生物素化探针的捕获磁珠，杂交捕获的核心耗材",
    "COT-1 DNA": "富含重复序列的封闭 DNA，杂交时屏蔽基因组重复区",
    "UDI": "Unique Dual Index，双端唯一 index，防 index hopping 串扰",
    "dUTP": "二链合成时掺入的标记碱基，配合 UDG 消化实现链特异性",
    "UDG/USER": "尿嘧啶糖基酶体系，消化含 dUTP 的二链，保留链特异性",
    "A260/280": "核酸纯度比值，DNA 约 1.8、RNA 约 2.0；偏低提示蛋白/酚污染",
    "A260/230": "核酸纯度比值，偏低提示盐、胍类或有机物残留"
  };
  var GLOSSARY_KEYS = Object.keys(GLOSSARY).sort(function (a, b) { return b.length - a.length; });
  var ANNOTATE_SKIP = { A: 1, BUTTON: 1, TEXTAREA: 1, INPUT: 1, SELECT: 1, OPTION: 1, SCRIPT: 1, STYLE: 1 };

  function annotateTerms(root) {
    if (!root || !root.childNodes) return;
    var nodes = Array.prototype.slice.call(root.childNodes);
    for (var ni = 0; ni < nodes.length; ni++) {
      var n = nodes[ni];
      if (n.nodeType === 1) {
        // 已标注的术语与内容模型不允许子元素的标签不递归
        if (!(n.classList && n.classList.contains("term")) && !ANNOTATE_SKIP[n.tagName]) annotateTerms(n);
        continue;
      }
      if (n.nodeType !== 3 || !n.data) continue;
      var text = n.data;
      var parent = n.parentNode;
      if (!parent) continue;
      for (var k = 0; k < GLOSSARY_KEYS.length; k++) {
        var term = GLOSSARY_KEYS[k];
        var i = text.indexOf(term);
        if (i === -1) continue;
        if (i > 0) parent.insertBefore(document.createTextNode(text.slice(0, i)), n);
        var span = document.createElement("span");
        span.className = "term";
        span.setAttribute("title", GLOSSARY[term]);
        span.textContent = term;
        parent.insertBefore(span, n);
        var rest = text.slice(i + term.length);
        if (rest) parent.insertBefore(document.createTextNode(rest), n);
        parent.removeChild(n);
        annotateTerms(parent); // 处理前后残留文本中的其他术语
        break;
      }
    }
  }
  window.NGSGlossary = { map: GLOSSARY, annotate: annotateTerms };

  /* ---------------- 自测 ---------------- */
  var QUIZ_BANK = [
    { m: "M0", q: "Q30 指什么？", o: ["质量值 ≥30 的碱基比例", "测序深度", "比对率", "重复率"], a: 0, w: "Q30 是质量值 ≥30 的碱基占比，错误率约 0.1%。" },
    { m: "M9", q: "12 ng/µL、450 bp 的文库约多少 nM？", o: ["40.4", "3.0", "12", "400"], a: 0, w: "nM = 12×10^6/(450×660) ≈ 40.4。" },
    { m: "M4", q: "等摩尔 pooling 按哪种浓度计算体积？", o: ["质量浓度 ng/µL", "摩尔浓度 nM", "OD260", "电导率"], a: 1, w: "等摩尔混合按分子数，必须用 nM。" },
    { m: "M3", q: "上机 loading 定量首选？", o: ["Qubit", "NanoDrop", "qPCR", "琼脂糖凝胶"], a: 2, w: "qPCR 测可扩增文库分子数。" },
    { m: "M2", q: "Adapter dimer 明显时首先应？", o: ["直接上机", "再纯化或片段选择", "提高 loading", "延长测序"], a: 1, w: "接头二聚体占用读长，应先去除。" },
    { m: "M1", q: "RNA 完整性常用指标是？", o: ["RIN / DV200", "Q30", "PF%", "GC 含量"], a: 0, w: "RIN 与 DV200 反映 RNA 降解程度。" },
    { m: "M4", q: "PhiX 的主要作用是？", o: ["提供能量", "质控与低多样性平衡", "增加读长", "标记样本"], a: 1, w: "PhiX 是已知序列对照，也用于平衡低多样性文库。" },
    { m: "M9", q: "失败率从 5% 升到 20%，期望单样本成本会？", o: ["下降", "不变", "上升", "先升后降"], a: 2, w: "期望成本 = 小计/(1−失败率)。" },
    { m: "M6", q: "比对率低时最先查？", o: ["直接做差异分析", "污染、接头、物种匹配", "提高测序深度", "换电脑"], a: 1, w: "先排除污染、接头残留与参考不匹配。" },
    { m: "M7", q: "DESeq2 用于？", o: ["组装", "变异检测", "差异表达", "引物设计"], a: 2, w: "DESeq2 是 RNA-seq 差异表达分析的常用 R 包。" },
    { m: "M2", q: "DNA 建库的正确顺序是？", o: ["加 A → 末端修复 → 接头连接", "末端修复 → 加 A → 接头连接", "接头连接 → 末端修复 → 加 A", "片段化 → 接头连接 → 末端修复"], a: 1, w: "先补平末端，再加 A，最后连接接头。" },
    { m: "M2", q: "磁珠纯化后，磁珠应？", o: ["完全干燥再洗脱", "保持湿润直接洗脱", "冷冻后洗脱", "超声洗脱"], a: 1, w: "过度干燥会降低回收率，磁珠应保持湿润。" },
    { m: "M3", q: "Qubit 与 qPCR 差异过大，提示？", o: ["文库结构异常或不可扩增", "样本太多", "测序仪故障", "缓冲液 pH 高"], a: 0, w: "qPCR 远低于 Qubit 说明可扩增文库比例低。" },
    { m: "M4", q: "低多样性文库的 PhiX 比例应？", o: ["降低", "提高", "不变", "设为 0"], a: 1, w: "低多样性文库需要更高比例 PhiX 来平衡。" },
    { m: "M0", q: "覆盖度（depth）指？", o: ["某位点被读到的次数", "读长", "Q30 比例", "文库浓度"], a: 0, w: "覆盖度是特定位点被 reads 覆盖的次数。" },
    { m: "M1", q: "柱式提取中，忘给漂洗液（如 RW/PW）加无水乙醇的后果是？", o: ["得率略降", "DNA/RNA 几乎全损", "只影响纯度", "无影响"], a: 1, w: "结合与洗涤体系依赖乙醇，漏加会导致核酸无法保留在柱上。" },
    { m: "M1", q: "提取血液 gDNA 时，白膜层（buffy coat）是？", o: ["红细胞层", "富集白细胞的中间层", "血浆层", "血小板层"], a: 1, w: "白细胞集中在新颖离心后的白膜层，是血液 DNA 的主要来源。" },
    { m: "M1", q: "RNA 提取后 A260/280 明显低于 2.0，最可能原因是？", o: ["盐残留", "蛋白/酚污染", "DNA 污染", "洗脱体积太小"], a: 1, w: "蛋白或酚残留拉低 A260/280；盐与胍类更影响 A260/230。" },
    { m: "M1", q: "做 small RNA-seq（miRNA）应选哪类提取方案？", o: ["普通柱式总 RNA 盒", "保留小 RNA 的方案（如 miRNeasy）", "DNA 提取盒", "任何方案都行"], a: 1, w: "普通柱式的结合条件丢失 <200 nt，必须用小 RNA 保留方案。" },
    { m: "M2", q: "末端修复/加 A 后立刻纯化的主要目的是？", o: ["浓缩文库", "去除酶与多余核苷酸，避免干扰连接", "灭菌", "片段化"], a: 1, w: "残留的酶与 dNTP 会干扰下游接头连接效率。" },
    { m: "M2", q: "PCR 循环数主要依据什么确定？", o: ["文库片段长度", "输入模板量与体系效率", "测序读长", "接头浓度"], a: 1, w: "输入越低循环越多；过度循环增加重复率与偏倚。" },
    { m: "M2", q: "dUTP/UDG 体系的作用是？", o: ["提高产量", "实现链特异性文库", "去除接头", "标记 index"], a: 1, w: "二链含 dUTP，UDG 消化后仅一链方向被扩增，保留链信息。" },
    { m: "M3", q: "TapeStation/Bioanalyzer 峰图出现约 60–120 bp 尖峰，提示？", o: ["文库正常", "接头二聚体残留", "基因组污染", "降解"], a: 1, w: "小分子量尖峰多为接头二聚体，需再纯化后复测。" },
    { m: "M3", q: "Qubit 定量前，标准品校准的主要风险是？", o: ["标准品反复冻融或未回温", "读数太快", "管子太干净", "室温太高"], a: 0, w: "标准品未回温混匀或降解会造成系统性偏差。" },
    { m: "M4", q: "Illumina 上机前文库变性常用？", o: ["加热 95 ℃", "NaOH 碱变性", "乙醇沉淀", "蛋白酶 K"], a: 1, w: "NaOH 碱变性为单链后稀释至 loading 浓度（各机型按指南）。" },
    { m: "M4", q: "MGI 平台上机前必须先完成的步骤是？", o: ["碱变性", "ssCir 环化与 DNB 制备", "桥式 PCR", "EM 乳液 PCR"], a: 1, w: "MGI 需环化 ssDNA 并制备 DNB 纳米球后上机。" },
    { m: "M5", q: "FASTQ 中每个碱基对应的质量字符代表？", o: ["GC 含量", "Phred 质量值的 ASCII 编码", "读长", "接头序列"], a: 1, w: "Q 值以 ASCII 字符编码，常见 Phred+33。" },
    { m: "M6", q: "FastQC 中接头含量过高，正确处理是？", o: ["直接比对", "去接头后重新质控", "提高 Q30", "丢弃全部数据"], a: 1, w: "用 fastp/Trim Galore 去接头后再比对，并复查质控。" },
    { m: "M7", q: "featureCounts 的作用是？", o: ["比对 reads", "按基因注释计数 reads", "拼接转录本", "检测变异"], a: 1, w: "featureCounts 把比对结果按基因/转录本汇总为表达计数矩阵。" },
    { m: "M8", q: "移液器日常最关键的维护是？", o: ["每天高温灭菌", "定期校准与垂直吸液操作", "用油润滑活塞", "倒放保存"], a: 1, w: "定期校准保证体积准确；垂直吸液、慢放减少误差与气溶胶。" },
    { m: "M8", q: "超净台/生物安全柜使用紫外线时应注意？", o: ["开着操作", "紫外时人员离开、用前关闭并通风", "与酒精同时喷", "无需注意"], a: 1, w: "紫外伤人眼与皮肤；消毒后关闭并通风再操作。" },
    { m: "M9", q: "Qubit 测的是？", o: ["所有吸光物质", "特异性荧光染料结合的核酸", "蛋白", "盐离子"], a: 1, w: "Qubit 染料对 dsDNA/RNA 特异，受杂质干扰小。" },
    { m: "杂交", q: "Twist、IDT、KAPA 三家标准杂交温度分别是？", o: ["70 / 65 / 55 ℃", "65 / 65 / 65 ℃", "55 / 60 / 70 ℃", "70 / 70 / 70 ℃"], a: 0, w: "三家温度互不通用：Twist 70 ℃、IDT 65 ℃、KAPA 55 ℃。" },
    { m: "杂交", q: "杂交捕获中 COT-1 DNA 的作用是？", o: ["提供模板", "封闭基因组重复序列，降低非特异捕获", "连接接头", "扩增文库"], a: 1, w: "COT-1 封闭重复区，减少脱靶背景。" },
    { m: "安全", q: "TRIzol/氯仿废液处理正确的是？", o: ["倒入下水道", "按有机危化废液收集处理", "与漂白剂混合", "敞口放置"], a: 1, w: "有机危化品专桶收集；且不可接触漂白剂（生成高活性物）。" }
  ];

  var currentQuiz = [];
  var quizWrongMode = false;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function updateWrongBtn() {
    var b = $("quiz-wrong-btn");
    if (b) b.textContent = "错题本（" + state.quizWrong.length + "）" + (quizWrongMode ? " · 练习中" : "");
  }

  function renderQuiz() {
    var pool;
    if (quizWrongMode) {
      pool = QUIZ_BANK.filter(function (item) { return state.quizWrong.indexOf(item.q) !== -1; })
        .map(function (item) { return { i: QUIZ_BANK.indexOf(item), item: item }; });
      if (!pool.length) {
        $("quiz-box").textContent = "";
        var empty = document.createElement("p");
        empty.className = "muted";
        empty.textContent = "错题本是空的——答错的题会自动收录到这里。";
        $("quiz-box").appendChild(empty);
        $("quiz-score").textContent = "";
        updateWrongBtn();
        currentQuiz = [];
        return;
      }
      pool = pool.slice(0, 10);
    } else {
      pool = shuffle(QUIZ_BANK.map(function (item, i) { return { i: i, item: item }; })).slice(0, 10);
    }
    currentQuiz = pool;
    var box = $("quiz-box");
    box.textContent = "";
    $("quiz-score").textContent = "";
    currentQuiz.forEach(function (entry, qi) {
      var item = entry.item;
      var div = document.createElement("div");
      div.className = "quiz-item";
      div.dataset.qi = qi;
      var p = document.createElement("p");
      p.textContent = (qi + 1) + ". [" + item.m + "] " + item.q;
      div.appendChild(p);
      item.o.forEach(function (opt, oi) {
        var label = document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "q" + qi;
        radio.value = oi;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        div.appendChild(label);
      });
      var explain = document.createElement("div");
      explain.className = "explain";
      div.appendChild(explain);
      box.appendChild(div);
    });
    updateWrongBtn();
  }

  $("quiz-submit").addEventListener("click", function () {
    var score = 0;
    currentQuiz.forEach(function (entry, qi) {
      var item = entry.item;
      var chosen = document.querySelector('input[name="q' + qi + '"]:checked');
      var box = document.querySelector('.quiz-item[data-qi="' + qi + '"] .explain');
      if (chosen && parseInt(chosen.value, 10) === item.a) {
        score += 1;
        box.className = "explain correct";
        box.textContent = "正确。" + item.w;
        var wi = state.quizWrong.indexOf(item.q);
        if (wi !== -1) state.quizWrong.splice(wi, 1);
      } else {
        box.className = "explain wrong";
        box.textContent = "正确答案：" + item.o[item.a] + "。" + item.w;
        if (state.quizWrong.indexOf(item.q) === -1) state.quizWrong.push(item.q);
      }
    });
    save();
    updateWrongBtn();
    $("quiz-score").textContent = "得分：" + score + " / " + currentQuiz.length;
    if (!quizWrongMode && score > 0 && (state.quizBest === null || score > state.quizBest)) {
      state.quizBest = score;
      save();
      renderDashboard();
    }
  });

  $("quiz-reset").addEventListener("click", renderQuiz);
  $("quiz-wrong-btn").addEventListener("click", function () {
    quizWrongMode = !quizWrongMode;
    renderQuiz();
  });

  /* ---------------- 记录与导出 ---------------- */
  function renderRecords() {
    $("json-preview").textContent = JSON.stringify(state, null, 2);
  }

  $("export-json").addEventListener("click", function () {
    download("ngs-workbench.json", JSON.stringify(state, null, 2), "application/json;charset=utf-8");
    toast("已导出 JSON");
  });

  $("export-samples").addEventListener("click", function () {
    var rows = [["样本编号", "类型", "体积_uL", "Qubit_ng_uL", "A260_280"]];
    state.samples.forEach(function (s) { rows.push([s.id, s.type, s.vol, s.qubit, s.a260]); });
    download("samples.csv", csvText(rows));
    toast("已导出样本 CSV");
  });

  $("export-equip").addEventListener("click", function () {
    var rows = [["设备", "上次维护", "周期天", "状态"]];
    EQUIPMENT.forEach(function (e) {
      var st = equipmentStatus(e);
      rows.push([e.name, state.equipment[e.id] || "", e.interval, st.label]);
    });
    download("equipment.csv", csvText(rows));
    toast("已导出设备 CSV");
  });

  $("export-template").addEventListener("click", function () {
    download("sample_template.csv", csvText([["样本编号", "类型", "体积_uL", "Qubit_ng_uL", "A260_280"]]));
    toast("已导出空白模板");
  });

  /* ---------------- 实验台配置共享 ---------------- */
  $("lab-export").addEventListener("click", function () {
    var n = Object.keys(state.lab).reduce(function (a, c) { return a + state.lab[c].length; }, 0);
    download("lab-config.json", JSON.stringify({ type: "ngs-lab-config", v: 1, lab: state.lab }, null, 2));
    toast("已导出实验台配置（" + n + " 项）");
  });

  $("lab-import").addEventListener("click", function () {
    var txt = $("lab-import-text").value.trim();
    if (!txt) { toast("请先粘贴配置 JSON"); return; }
    try {
      var obj = JSON.parse(txt);
      if (!obj || obj.type !== "ngs-lab-config" || !obj.lab || typeof obj.lab !== "object" || Array.isArray(obj.lab)) throw new Error("bad");
      var knownCats = {};
      VENDORS.forEach(function (v) { knownCats[v.cat] = 1; });
      var valid = Object.keys(obj.lab).every(function (c) {
        return knownCats[c] && Array.isArray(obj.lab[c]) && obj.lab[c].every(function (x) { return typeof x === "string"; });
      });
      if (!valid) throw new Error("bad");
      state.lab = obj.lab;
      save();
      renderLab();
      renderVendorMine();
      var n = Object.keys(obj.lab).reduce(function (a, c) { return a + obj.lab[c].length; }, 0);
      toast("实验台配置已导入（" + n + " 项）");
    } catch (e) {
      toast("配置格式无效，请核对后重试");
    }
  });

  /* ---------------- 数据联动 ---------------- */
  $("pool-import").addEventListener("click", function () {
    if (!state.samples.length) { toast("样本表为空，请先在记录页登记样本"); return; }
    var bp = parseFloat($("m-bp").value) || 450;
    var concs = state.samples
      .map(function (s) { return parseFloat(s.qubit); })
      .filter(function (q) { return Number.isFinite(q) && q > 0; })
      .map(function (q) { return calc.massToNm(q, bp); });
    if (!concs.length) { toast("样本缺少有效 Qubit 浓度"); return; }
    $("p-concs").value = concs.map(function (c) { return c.toFixed(2); }).join(",");
    toast("已带入 " + concs.length + " 个样本浓度（按 " + bp + " bp 折算）");
  });

  $("cost-filln").addEventListener("click", function () {
    $("c-n").value = String(state.samples.length);
    toast("样本数已带入：" + state.samples.length);
  });

  /* ---------------- 新手引导 ---------------- */
  var TOUR_STEPS = [
    { t: "欢迎使用 NGS 工作台", d: "从样本到报告的离线学习助手：进度、会话跟做、厂家协议、计算成本，全部数据只存在本机浏览器。" },
    { t: "第一步：我的实验台", d: "先勾选你实验室在用的试剂盒与设备——之后厂家方案会置顶「我的」，实验会话自动预填，还能生成专属操作手册。" },
    { t: "第二步：湿实验旅程 · 实验会话", d: "在「湿实验旅程」页底部按模板一步步跟做真实实验：勾选、计时、备注，完成后自动生成实验记录，刷新页面不丢失。" },
    { t: "第三步：厂家方案", d: "36 项官方手册核对的逐步参数（体积/温度/循环数），不同品牌差异点都在这里；未核实的只登记、不写参数。" },
    { t: "第四步：自测与错题本", d: "随机 10 题检验掌握度，答错自动进错题本，重练答对即移除；「自测与证明」页还能生成可打印的学习证明。" }
  ];
  var tourIdx = 0;

  function renderTourStep() {
    var s = TOUR_STEPS[tourIdx];
    $("tour-title").textContent = s.t + "（" + (tourIdx + 1) + "/" + TOUR_STEPS.length + "）";
    $("tour-text").textContent = s.d;
    $("tour-prev").style.visibility = tourIdx === 0 ? "hidden" : "visible";
    $("tour-next").textContent = tourIdx === TOUR_STEPS.length - 1 ? "开始使用" : "下一步";
  }

  function closeTour() {
    $("tour").classList.remove("show");
    state.seen = true;
    save();
  }

  $("tour-prev").addEventListener("click", function () { if (tourIdx > 0) { tourIdx -= 1; renderTourStep(); } });
  $("tour-next").addEventListener("click", function () {
    if (tourIdx < TOUR_STEPS.length - 1) { tourIdx += 1; renderTourStep(); } else { closeTour(); }
  });
  $("tour-skip").addEventListener("click", closeTour);

  /* ---------------- 学习证明 ---------------- */
  $("cert-btn").addEventListener("click", function () {
    var rows = state.sessions.map(function (r, i) {
      var done = r.steps.filter(function (st) { return st.done; }).length;
      return "<tr><td>" + (i + 1) + "</td><td>" + r.template + "</td><td>" + r.started.slice(0, 10) + "</td><td>" + done + "/" + r.steps.length + "</td></tr>";
    }).join("");
    var w = window.open("", "_blank");
    if (!w) { toast("浏览器拦截了弹出窗口"); return; }
    w.document.write(
      "<!DOCTYPE html><html lang='zh'><head><meta charset='utf-8'><title>学习证明</title>" +
      "<style>body{font-family:system-ui,sans-serif;max-width:720px;margin:32px auto;padding:0 16px;color:#0f172a}" +
      "table{border-collapse:collapse;width:100%;margin:12px 0}td,th{border:1px solid #cbd5e1;padding:6px 10px;font-size:14px}" +
      "h2{margin-bottom:4px}.muted{color:#64748b}ul{line-height:2}</style></head><body>" +
      "<h2>NGS 实验技能学习证明</h2>" +
      "<p class='muted'>由 NGS 工作台生成 · " + new Date().toLocaleString("zh-CN") + "（数据存于本机，不含个人身份信息）</p>" +
      "<ul>" +
      "<li>课程模块进度：<strong>" + state.progress.length + " / " + MODULES.length + "</strong></li>" +
      "<li>自测最高分：<strong>" + (state.quizBest === null ? "—" : state.quizBest + " / 10") + "</strong></li>" +
      "<li>完成实验会话：<strong>" + state.sessions.length + " 次</strong></li>" +
      "<li>在用试剂盒配置：<strong>" + Object.keys(state.lab).reduce(function (a, c) { return a + state.lab[c].length; }, 0) + " 项</strong></li>" +
      "</ul>" +
      (rows ? "<h3>实验会话记录</h3><table><tr><th>#</th><th>流程</th><th>日期</th><th>完成步数</th></tr>" + rows + "</table>" : "<p class='muted'>尚无完成的实验会话。</p>") +
      "<p style='margin-top:32px'>学员：____________　单位：____________　带教/考核人：____________</p>" +
      "<p><button onclick='window.print()'>打印</button></p></body></html>"
    );
    w.document.close();
  });

  $("clear-all").addEventListener("click", function () {
    if (!confirm("确定清空全部数据？此操作不可恢复。")) return;
    state = defaultState();
    try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
    renderAll();
    toast("已清空");
  });

  /* ---------------- 方法选型 ---------------- */
  var CHOICES = {
    wgs: "WGS（全基因组）：短读长、约 30×，适合 SNV/CNV/SV 全面筛查；成本与数据量最高。",
    wes: "WES（外显子组）：只测编码区，深度高、成本低于 WGS；适合编码区变异。",
    rna: "RNA-seq：看表达差异、可变剪接与融合；需决定 mRNA 富集还是 rRNA 去除。",
    "16s": "16S：群落组成与相对丰度，便宜、快；分辨率多到属水平，功能推断需谨慎。",
    sc: "scRNA-seq：单细胞异质性、细胞分群；需专用建库与降维聚类，成本高。",
    sv: "长读长（ONT/PacBio）：结构变异、重复区、甲基化；读长优势明显，成本与分析门槛较高。"
  };

  function renderChoice() {
    var box = $("choose-out");
    if (box) box.textContent = CHOICES[$("choose").value];
  }

  if ($("choose")) {
    $("choose").addEventListener("change", renderChoice);
  }

  /* ---------------- 实验会话 ---------------- */
  function vendorById(id) {
    for (var i = 0; i < VENDORS.length; i++) if (VENDORS[i].id === id) return VENDORS[i];
    return null;
  }

  function tplById(tid) {
    for (var i = 0; i < SESSION_TEMPLATES.length; i++) if (SESSION_TEMPLATES[i].id === tid) return SESSION_TEMPLATES[i];
    return null;
  }

  function sessionLog(msg) {
    if (state.session) state.session.log.push({ t: new Date().toISOString(), msg: msg });
  }

  function elapsedText(iso) {
    var ms = Date.now() - new Date(iso).getTime();
    var m = Math.floor(ms / 60000), h = Math.floor(m / 60);
    return h > 0 ? h + " h " + (m % 60) + " min" : m + " min";
  }

  function kitTable(v) {
    var t = document.createElement("table");
    t.className = "step-table";
    var head = document.createElement("tr");
    ["步骤", "配液/体积", "条件", "要点"].forEach(function (h) {
      var th = document.createElement("th"); th.textContent = h; head.appendChild(th);
    });
    t.appendChild(head);
    v.steps.forEach(function (s) {
      var tr = document.createElement("tr");
      s.forEach(function (c) { var td = document.createElement("td"); td.textContent = c; tr.appendChild(td); });
      t.appendChild(tr);
    });
    return t;
  }

  function startSession(tid) {
    var tpl = tplById(tid);
    if (!tpl) return;
    var preset = {};
    tpl.steps.forEach(function (st, i) {
      var def = labDefaultFor(st.kitFilter);
      if (def) preset[i] = def;
    });
    state.session = {
      tid: tid,
      started: new Date().toISOString(),
      choices: preset,
      steps: tpl.steps.map(function () { return { done: false, note: "", tEnd: null }; }),
      log: [{ t: new Date().toISOString(), msg: "会话开始：" + tpl.name + (Object.keys(preset).length ? "（按我的实验台预填试剂盒）" : "") }]
    };
    save();
    renderSession();
    toast("会话已开始");
  }

  function finishSession() {
    var s = state.session;
    var tpl = tplById(s.tid);
    var rec = {
      template: tpl.name,
      started: s.started,
      finished: new Date().toISOString(),
      kits: tpl.steps.map(function (st, i) {
        var v = s.choices[i] ? vendorById(s.choices[i]) : null;
        return { step: st.title, kit: v ? v.name : "—" };
      }),
      steps: tpl.steps.map(function (st, i) {
        return { step: st.title, done: s.steps[i].done, note: s.steps[i].note };
      }),
      log: s.log
    };
    state.sessions.unshift(rec);
    if (state.sessions.length > 20) state.sessions = state.sessions.slice(0, 20);
    state.session = null;
    save();
    renderSession();
    toast("会话已完成，记录已保存");
  }

  function abortSession() {
    if (!confirm("放弃当前会话？未完成的勾选与备注将丢失。")) return;
    sessionLog("会话放弃");
    state.session = null;
    save();
    renderSession();
  }

  function renderSessionStart(box) {
    box.textContent = "";
    var grid = document.createElement("div");
    grid.className = "tpl-grid";
    SESSION_TEMPLATES.forEach(function (t) {
      var card = document.createElement("div");
      card.className = "tpl-card";
      var h = document.createElement("h3");
      h.textContent = t.name;
      var p = document.createElement("p");
      var brands = [];
      t.steps.forEach(function (st) {
        (st.kitFilter || []).forEach(function (id) {
          var v = vendorById(id);
          if (v && brands.indexOf(v.name.split("（")[0]) === -1) brands.push(v.name.split("（")[0]);
        });
      });
      p.textContent = t.steps.length + " 步 · " + (brands.length ? brands.join(" / ") : "通用步骤");
      var btn = document.createElement("button");
      btn.className = "btn primary";
      btn.textContent = "开始会话";
      btn.addEventListener("click", function () { startSession(t.id); });
      card.appendChild(h); card.appendChild(p); card.appendChild(btn);
      grid.appendChild(card);
    });
    box.appendChild(grid);
  }

  function renderSessionHistory(box) {
    box.textContent = "";
    $("session-hist-count").textContent = String(state.sessions.length);
    if (!state.sessions.length) {
      box.innerHTML = "<p class='muted'>暂无完成的会话记录。</p>";
      return;
    }
    state.sessions.forEach(function (rec, idx) {
      var d = document.createElement("div");
      d.className = "hist-item";
      var done = rec.steps.filter(function (s) { return s.done; }).length;
      var info = document.createElement("span");
      info.textContent = rec.started.slice(0, 16).replace("T", " ") + " · " + rec.template + " · " + done + "/" + rec.steps.length + " 步完成";
      var bExp = document.createElement("button");
      bExp.className = "btn small";
      bExp.textContent = "导出 JSON";
      bExp.addEventListener("click", function () {
        download("实验记录-" + rec.started.slice(0, 10) + "-" + idx + ".json", JSON.stringify(rec, null, 2), "application/json");
      });
      var bView = document.createElement("button");
      bView.className = "btn small";
      bView.textContent = "查看/打印";
      bView.addEventListener("click", function () { showRecord(rec); });
      d.appendChild(info); d.appendChild(bView); d.appendChild(bExp);
      box.appendChild(d);
    });
  }

  function showRecord(rec) {
    var w = window.open("", "_blank");
    if (!w) { toast("请允许弹出窗口"); return; }
    var rows = rec.steps.map(function (s, i) {
      return "<tr><td>" + (i + 1) + "</td><td>" + s.step + "</td><td>" + (s.done ? "✓" : "✗") + "</td><td>" + (rec.kits[i] ? rec.kits[i].kit : "—") + "</td><td>" + (s.note || "") + "</td></tr>";
    }).join("");
    w.document.write("<!DOCTYPE html><html lang='zh'><head><meta charset='utf-8'><title>实验记录</title>" +
      "<style>body{font-family:system-ui,'Microsoft YaHei',sans-serif;margin:2em;color:#222}" +
      "table{border-collapse:collapse;width:100%}th,td{border:1px solid #999;padding:6px 8px;text-align:left;font-size:13px}" +
      "h1{font-size:20px}@media print{button{display:none}}</style></head><body>" +
      "<h1>实验记录</h1><p>" + rec.template + " · 开始 " + rec.started.slice(0, 16).replace("T", " ") +
      " · 结束 " + rec.finished.slice(0, 16).replace("T", " ") + "</p>" +
      "<table><tr><th>#</th><th>步骤</th><th>完成</th><th>试剂盒</th><th>备注</th></tr>" + rows + "</table>" +
      "<p><button onclick='window.print()'>打印</button></p></body></html>");
    w.document.close();
  }

  function renderSession() {
    var start = $("session-start"), active = $("session-active"), hist = $("session-history");
    if (!start) return;
    renderSessionHistory(hist);
    var s = state.session;
    if (!s) {
      active.style.display = "none";
      start.style.display = "";
      renderSessionStart(start);
      return;
    }
    start.style.display = "none";
    active.style.display = "";
    var tpl = tplById(s.tid);

    // 头部
    var head = $("session-head");
    head.textContent = "";
    var hh = document.createElement("div");
    hh.className = "card-head";
    var htitle = document.createElement("h3");
    htitle.textContent = tpl.name;
    var belapsed = document.createElement("span");
    belapsed.className = "badge session-elapsed-badge";
    belapsed.textContent = "已用时 " + elapsedText(s.started);
    hh.appendChild(htitle); hh.appendChild(belapsed);
    head.appendChild(hh);
    var btns = document.createElement("div");
    btns.className = "row";
    var bDone = document.createElement("button");
    bDone.className = "btn primary";
    bDone.textContent = "完成会话并生成记录";
    bDone.addEventListener("click", finishSession);
    var bAbort = document.createElement("button");
    bAbort.className = "btn";
    bAbort.textContent = "放弃";
    bAbort.addEventListener("click", abortSession);
    btns.appendChild(bDone); btns.appendChild(bAbort);
    head.appendChild(btns);
    // 进度条
    var doneCount = s.steps.filter(function (x) { return x.done; }).length;
    var bar = document.createElement("div");
    bar.className = "session-progress";
    var fill = document.createElement("div");
    fill.style.width = Math.round(doneCount / s.steps.length * 100) + "%";
    bar.appendChild(fill);
    var pct = document.createElement("p");
    pct.className = "muted";
    pct.textContent = doneCount + " / " + s.steps.length + " 步完成 · 开始于 " + s.started.slice(0, 16).replace("T", " ");
    head.appendChild(bar); head.appendChild(pct);

    // 步骤
    var box = $("session-steps");
    box.textContent = "";
    tpl.steps.forEach(function (st, i) {
      var stState = s.steps[i];
      var card = document.createElement("div");
      card.className = "card step-card" + (stState.done ? " step-done" : "");
      var chead = document.createElement("div");
      chead.className = "card-head";
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = stState.done;
      cb.addEventListener("change", function () {
        stState.done = cb.checked;
        sessionLog((cb.checked ? "完成" : "取消完成") + "：" + st.title);
        save(); renderSession();
      });
      var h = document.createElement("h3");
      h.textContent = (i + 1) + ". " + st.title;
      chead.appendChild(cb); chead.appendChild(h);
      card.appendChild(chead);

      if (st.hint) {
        var hint = document.createElement("p");
        hint.className = "muted";
        hint.textContent = st.hint;
        card.appendChild(hint);
      }

      // 试剂盒选择
      if (st.kitFilter) {
        var row = document.createElement("div");
        row.className = "row";
        var lab = document.createElement("label");
        lab.textContent = "试剂盒/方案 ";
        var sel = document.createElement("select");
        var opt0 = document.createElement("option");
        opt0.value = ""; opt0.textContent = "— 请选择 —";
        sel.appendChild(opt0);
        st.kitFilter.forEach(function (id) {
          var v = vendorById(id);
          if (!v) return;
          var o = document.createElement("option");
          o.value = id; o.textContent = v.name;
          sel.appendChild(o);
        });
        sel.value = s.choices[i] || "";
        sel.addEventListener("change", function () {
          if (sel.value) {
            s.choices[i] = sel.value;
            var v = vendorById(sel.value);
            sessionLog(st.title + " 选择 " + (v ? v.name : sel.value));
          } else { delete s.choices[i]; }
          save(); renderSession();
        });
        lab.appendChild(sel);
        row.appendChild(lab);
        card.appendChild(row);
        var chosen = s.choices[i] ? vendorById(s.choices[i]) : null;
        if (chosen) {
          var meta = VENDOR_META[chosen.id];
          var mp = document.createElement("p");
          mp.className = "muted small";
          mp.textContent = "已核对 " + (meta ? meta.date : "—") + (meta && meta.ver ? " · " + meta.ver : "");
          card.appendChild(mp);
          card.appendChild(kitTable(chosen));
        } else {
          var np = document.createElement("p");
          np.className = "muted";
          np.textContent = "选择试剂盒后显示已核对的逐步参数。";
          card.appendChild(np);
        }
      }

      // 计时器
      var trow = document.createElement("div");
      trow.className = "row timer-row";
      var tlab = document.createElement("label");
      tlab.textContent = "计时 ";
      var tmin = document.createElement("input");
      tmin.type = "number"; tmin.min = "1"; tmin.max = "999";
      tmin.value = String(st.timer || 15);
      tmin.className = "timer-min";
      tlab.appendChild(tmin);
      var tunit = document.createElement("span");
      tunit.textContent = " min ";
      var bStart = document.createElement("button");
      bStart.className = "btn small";
      bStart.textContent = "开始";
      var bCancel = document.createElement("button");
      bCancel.className = "btn small";
      bCancel.textContent = "取消";
      var disp = document.createElement("span");
      disp.className = "timer-disp";
      if (stState.tEnd) disp.setAttribute("data-timer-end", String(stState.tEnd));
      bStart.addEventListener("click", function () {
        var mins = Math.max(1, parseInt(tmin.value, 10) || 15);
        stState.tEnd = Date.now() + mins * 60000;
        sessionLog(st.title + " 计时 " + mins + " min");
        save(); renderSession();
      });
      bCancel.addEventListener("click", function () {
        stState.tEnd = null;
        save(); renderSession();
      });
      trow.appendChild(tlab); trow.appendChild(tunit); trow.appendChild(bStart); trow.appendChild(bCancel); trow.appendChild(disp);
      card.appendChild(trow);

      // 备注
      var note = document.createElement("textarea");
      note.className = "session-note";
      note.placeholder = "备注：异常、得率、批号……";
      note.value = stState.note;
      note.addEventListener("change", function () {
        stState.note = note.value;
        save();
      });
      card.appendChild(note);

      box.appendChild(card);
    });
    tickTimers();
  }

  var timerAlerted = false;
  function tickTimers() {
    var anyRing = false;
    document.querySelectorAll(".timer-disp[data-timer-end]").forEach(function (el) {
      var left = +el.getAttribute("data-timer-end") - Date.now();
      if (left <= 0) {
        el.textContent = "时间到";
        el.classList.add("ring");
        anyRing = true;
      } else {
        var sec = Math.ceil(left / 1000);
        var m = Math.floor(sec / 60), r = sec % 60;
        el.textContent = (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
      }
    });
    var eb = document.querySelector(".session-elapsed-badge");
    if (eb && state.session) eb.textContent = "已用时 " + elapsedText(state.session.started);
    if (anyRing && !timerAlerted) {
      timerAlerted = true;
      document.title = "⏰ 计时结束 - NGS 工作台";
      setTimeout(function () {
        document.title = "NGS 工作台";
        timerAlerted = false;
      }, 8000);
    }
  }
  setInterval(tickTimers, 1000);

  /* ---------------- 初始化 ---------------- */
  function renderAll() {
    renderDashboard();
    renderSampleTable();
    renderChecklist("check-extract", "extract");
    renderChecklist("check-library", "library");
    renderChecklist("check-capture", "capture");
    renderChecklist("check-seq", "seq");
    renderChecklist("check-equip", "equip");
    var libBox = $("library-detail");
    libBox.textContent = "";
    renderAccordion(libBox, LIBRARY_STEPS.dna, "DNA-seq 建库");
    renderAccordion(libBox, LIBRARY_STEPS.rna, "RNA-seq 建库");
    var capBox = $("capture-detail");
    capBox.textContent = "";
    renderAccordion(capBox, CAPTURE_STEPS, "杂交捕获");
    renderEquipment();
    renderFault();
    renderChoice();
    renderVendorView();
    renderLab();
    renderSession();
    renderTips("");
    renderQuiz();
    renderRecords();
    updateWrongBtn();
    annotateTerms(document.body);
  }

  bindCalc();
  renderAll();
  if (!state.seen) {
    tourIdx = 0;
    renderTourStep();
    $("tour").classList.add("show");
  }
})();
