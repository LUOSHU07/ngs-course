/* NGS 计算核心：浏览器与 Node 共用，纯函数、无 DOM 依赖。 */
(function (global) {
  "use strict";

  var BP_MASS = 660;

  function massToNm(ngPerUl, bp) {
    if (!Number.isFinite(ngPerUl) || ngPerUl < 0 || !Number.isFinite(bp) || bp <= 0) throw new Error("浓度必须非负，片段长度必须为正");
    return (ngPerUl * 1e6) / (bp * BP_MASS);
  }

  function nmToMass(nm, bp) {
    if (!Number.isFinite(nm) || nm < 0 || !Number.isFinite(bp) || bp <= 0) throw new Error("浓度必须非负，片段长度必须为正");
    return (nm * bp * BP_MASS) / 1e6;
  }

  function poolVolumes(concs, targetNm, totalUl) {
    if (!concs.length) throw new Error("至少需要一个文库浓度");
    if (concs.some(function (c) { return !Number.isFinite(c) || c <= 0; })) throw new Error("文库浓度必须为正");
    if (!Number.isFinite(targetNm) || targetNm <= 0 || !Number.isFinite(totalUl) || totalUl <= 0) throw new Error("目标浓度与总体积必须为正");
    var perLib = (targetNm * totalUl) / concs.length;
    var vols = concs.map(function (c) { return perLib / c; });
    var sum = vols.reduce(function (a, b) { return a + b; }, 0);
    if (sum > totalUl + 1e-9) throw new Error("各文库体积之和超过总体积，请降低目标浓度");
    return vols;
  }

  function dilutionVolume(c1, c2, v2) {
    if (!Number.isFinite(c1) || c1 <= 0 || !Number.isFinite(c2) || c2 <= 0 || !Number.isFinite(v2) || v2 <= 0) throw new Error("浓度与体积必须为正");
    if (c2 > c1) throw new Error("目标浓度不能高于母液浓度");
    return (c2 * v2) / c1;
  }

  /* 标准移液器量程与最小刻度单位（通用型号参考值，Eppendorf/Gilson 系典型规格；
     与实验室实际移液器不符时以实物为准）。decimals 为显示小数位。 */
  var PIPETTES = [
    { name: "P2", min: 0.2, max: 2, inc: 0.002, decimals: 3 },
    { name: "P10", min: 1, max: 10, inc: 0.02, decimals: 2 },
    { name: "P20", min: 2, max: 20, inc: 0.02, decimals: 2 },
    { name: "P100", min: 10, max: 100, inc: 0.1, decimals: 1 },
    { name: "P200", min: 20, max: 200, inc: 0.2, decimals: 1 },
    { name: "P1000", min: 100, max: 1000, inc: 1, decimals: 0 },
    { name: "P5000", min: 500, max: 5000, inc: 5, decimals: 0 }
  ];

  function pickPipette(v) {
    for (var i = 0; i < PIPETTES.length; i++) {
      if (v <= PIPETTES[i].max + 1e-12 && v >= PIPETTES[i].min - 1e-12) return PIPETTES[i];
    }
    return null;
  }

  function roundToInc(v, inc) {
    return Math.round(v / inc) * inc;
  }

  /* 工作体积决策常量：SLACK 为"贴近需要量"的体积窗口。
     0 偏差是硬约束：方案必须浓度数学精确（c1·t/(t+d)=c2），
     母液与稀释液都落在移液器刻度上；找不到小体积解才降级。 */
  var SLACK_UL = 10;

  /* 体积是否落在某把移液器的刻度上（量程内且为最小刻度整数倍） */
  function isSettable(v) {
    var p = pickPipette(v);
    if (!p) return null;
    var r = v / p.inc;
    if (Math.abs(r - Math.round(r)) > 1e-6) return null;
    return p;
  }

  /* 体积整洁度罚分：整数 0，一位小数 1，两位小数 10，三位小数 100。
     评分采用字典序：整洁度 ×1000 优先，体积/母液消耗为次——
     即在 0 偏差硬约束下尽量取整或一位小数，做不到才保留两位小数的精确解。 */
  function neatPenalty(v) {
    if (Math.abs(v - Math.round(v)) < 1e-9) return 0;
    if (Math.abs(v - Math.round(v * 10) / 10) < 1e-9) return 1;
    if (Math.abs(v - Math.round(v * 100) / 100) < 1e-9) return 10;
    return 100;
  }

  /* 0 偏差单步搜索（窗口内全枚举选优）：枚举取样 t（0.02 µL 网格，≥minUl），
     稀释液 d = t·(c1/c2 − 1) 必须也落在刻度上，总量 ∈ [vNeed, vCap]。
     slack 传 Infinity 时搜索到量程上限。 */
  function fitExactStep(cFrom, cTarget, vNeed, minUl, slack) {
    var ratio = (cFrom - cTarget) / cTarget;
    var vCap = slack === Infinity ? 5000 : vNeed + slack;
    var best = null;
    for (var k = 0; ; k++) {
      var t = minUl + k * 0.02;
      t = Math.round(t * 50) / 50; // 0.02 网格防 FP 漂移
      var v2 = t * (1 + ratio);
      if (v2 > vCap) break;
      if (v2 < vNeed) continue;
      var pT = isSettable(t);
      if (!pT) continue;
      var d = v2 - t;
      var pD = isSettable(d);
      if (!pD) continue;
      var score = (neatPenalty(t) + neatPenalty(d)) * 1000 + (v2 - vNeed);
      if (best && score >= best.score) continue;
      best = { score: score, take: t, takePipette: pT.name, diluent: d, diluentPipette: pD.name, total: v2, conc: cTarget, actualConc: (cFrom * t) / v2 };
    }
    return best;
  }

  /* 0 偏差两步搜索（全枚举选优）：第二步枚举整数 (t2, d2)，反推所需中间浓度 ci，
     再验证 ci 能否由母液以刻度体积一步配出。
     硬约束：中间液总量 ≥ 第二步取量 + 2 µL（转移余量）。
     评分：整洁度 ×1000（字典序优先）+ 母液消耗 ×10 + 超需要量 ×0.5，取最小。 */
  function fitExactTwoStep(c1, c2, vNeed, minUl, slack) {
    var best = null;
    for (var t2 = Math.ceil(minUl); t2 <= 50; t2++) {
      var pT2 = isSettable(t2);
      if (!pT2) continue;
      for (var d2 = 1; d2 <= 950; d2++) {
        var v2 = t2 + d2;
        if (v2 < vNeed || v2 > vNeed + slack) continue;
        var pD2 = isSettable(d2);
        if (!pD2) continue;
        var ci = (c2 * v2) / t2;
        if (ci <= c2 || ci >= c1) continue;
        for (var t1 = Math.ceil(minUl); t1 <= 20; t1++) {
          var pT1 = isSettable(t1);
          if (!pT1) continue;
          var d1 = t1 * (c1 / ci - 1);
          if (d1 < 1) continue;
          var pD1 = isSettable(d1);
          if (!pD1) continue;
          var vMid = t1 + d1;
          if (vMid < t2 + 2) continue; // 中间液转移余量
          var score = (neatPenalty(t1) + neatPenalty(d1) + neatPenalty(t2) + neatPenalty(d2)) * 1000 + t1 * 10 + (v2 - vNeed) * 0.5;
          if (best && score >= best.score) continue;
          best = {
            score: score,
            steps: [
              { take: t1, takePipette: pT1.name, diluent: d1, diluentPipette: pD1.name, total: vMid, conc: ci, actualConc: (c1 * t1) / vMid },
              { take: t2, takePipette: pT2.name, diluent: d2, diluentPipette: pD2.name, total: v2, conc: c2, actualConc: ((c1 * t1) / vMid) * t2 / v2 }
            ]
          };
        }
      }
    }
    return best ? best.steps : null;
  }

  /* 0 偏差稀释方案（浓度数学精确是硬约束，不返回带偏差的方案）：
     preferSingle（默认 true）时的降级链：
       1) 贴近需要量的精确单步（+SLACK 窗口）；
       2) 适度单步：总量 ≤3× 需要量即一步完成（少一管、少一次误差，体积代价如实说明）；
       3) 精确两步（终体积贴近需要量、中间液以刻度体积配出）；
       4) 大体积精确单步（搜索到量程上限）；
       5) 以上都无解 → 报错，绝不返回近似浓度。
     preferSingle=false（优先省母液）：1) → 3) → 4) → 5)。
     输出恒含母液消耗（成本主要驱动：稀释液近似免费，母液按体积消耗）。 */
  function dilutionPlan(c1, c2, vNeed, minUl, preferSingle) {
    if (!Number.isFinite(c1) || c1 <= 0 || !Number.isFinite(c2) || c2 <= 0 || !Number.isFinite(vNeed) || vNeed <= 0) throw new Error("浓度与体积必须为正");
    if (c2 > c1) throw new Error("目标浓度不能高于母液浓度");
    if (!Number.isFinite(minUl) || minUl <= 0) minUl = 2;
    if (preferSingle === undefined) preferSingle = true;
    var ex1 = fitExactStep(c1, c2, vNeed, minUl, SLACK_UL);
    if (ex1) {
      return { steps: [ex1], v2Used: ex1.total, stockUsed: ex1.take,
        note: "0 偏差单步方案：母液与稀释液均在移液器刻度上，浓度数学精确；母液消耗 " + (Math.round(ex1.take * 100) / 100) + " µL" };
    }
    if (preferSingle) {
      var exM = fitExactStep(c1, c2, vNeed, minUl, vNeed * 2); // 总量 ≤3× 需要量
      if (exM) {
        return { steps: [exM], v2Used: exM.total, stockUsed: exM.take,
          note: "0 偏差单步方案：总量 " + (Math.round(exM.total * 100) / 100) + " µL（需要量的 " + (Math.round(exM.total / vNeed * 10) / 10) + " 倍，换取一步完成）；母液消耗 " + (Math.round(exM.take * 100) / 100) + " µL。如需更省母液可关闭「优先单步」改用两步方案" };
      }
    }
    var ex2 = fitExactTwoStep(c1, c2, vNeed, minUl, SLACK_UL);
    if (ex2) {
      var exCmp = preferSingle ? fitExactStep(c1, c2, vNeed, minUl, Infinity) : null;
      var cmp = exCmp
        ? "；单步精确解最小需配 " + (Math.round(exCmp.total * 100) / 100) + " µL（取母液 " + (Math.round(exCmp.take * 100) / 100) + " + 稀释液 " + (Math.round(exCmp.diluent * 100) / 100) + " µL），故两步更合理"
        : (preferSingle ? "；该比例在移液器量程（≤5000 µL）内不存在单步精确解，两步是当前唯一精确方案" : "");
      return { steps: ex2, v2Used: ex2[1].total, stockUsed: ex2[0].take,
        note: "0 偏差两步方案：母液消耗 " + (Math.round(ex2[0].take * 100) / 100) + " µL" + cmp };
    }
    var exU = fitExactStep(c1, c2, vNeed, minUl, Infinity);
    if (exU) {
      return { steps: [exU], v2Used: exU.total, stockUsed: exU.take,
        note: "0 偏差所需的最小总量为 " + (Math.round(exU.total * 100) / 100) + " µL（实际需要 " + vNeed + " µL）：该比例下小体积无法在移液器刻度上配出精确浓度；母液消耗 " + (Math.round(exU.take * 100) / 100) + " µL" };
    }
    throw new Error("该比例在移液器量程内无 0 偏差解；请调整目标浓度或需要量，或改用称重法定容");
  }

  function phixVolume(totalUl, percent) {
    if (!Number.isFinite(totalUl) || totalUl <= 0 || !Number.isFinite(percent) || percent < 0 || percent > 100) throw new Error("体积必须为正，百分比须在 0–100");
    return (totalUl * percent) / 100;
  }

  /* costs: {extraction, library, qc, consumable, labor, run} 单位元；run 为整 run 成本 */
  function costPerSample(costs, samples, fill, fail) {
    if (samples <= 0) throw new Error("样本数必须为正");
    if (!(fill > 0 && fill <= 1)) throw new Error("fill 必须在 (0,1]");
    if (!(fail >= 0 && fail < 1)) throw new Error("fail 必须在 [0,1)");
    var direct = costs.extraction + costs.library + costs.qc + costs.consumable + costs.labor;
    var runShare = costs.run / (samples * fill);
    var subtotal = direct + runShare;
    return { direct: direct, runShare: runShare, subtotal: subtotal, expected: subtotal / (1 - fail) };
  }

  function costSensitivity(costs, samples, fills, fails) {
    return fills.map(function (fill) {
      return fails.map(function (fail) {
        return { fill: fill, fail: fail, expected: costPerSample(costs, samples, fill, fail).expected };
      });
    });
  }

  /* PCR 循环建议：以 100 ng 为基准，输入每翻倍减 1 循环。 */
  function pcrCycles(inputNg, type) {
    if (!(inputNg > 0)) throw new Error("输入量必须为正");
    var base = type === "rna" ? 14 : 9;
    var cycles = Math.round(base - Math.log2(inputNg / 100));
    cycles = Math.max(5, Math.min(18, cycles));
    return { cycles: cycles, low: Math.max(5, cycles - 1), high: Math.min(18, cycles + 1) };
  }

  /* 杂交配液：返回各组分体积与缓冲液补足量（µL）。 */
  function hybridMix(o) {
    ["libMassNg", "libConc", "probeMassNg", "probeConc", "cot1MassUg", "cot1Conc", "blockersUl", "totalUl"].forEach(function (k) {
      if (!Number.isFinite(o[k]) || o[k] < 0) throw new Error("杂交配液参数必须为有限非负数：" + k);
    });
    if (o.libConc <= 0 || o.probeConc <= 0 || o.cot1Conc <= 0 || o.totalUl <= 0) throw new Error("浓度与总体积必须为正");
    var libVol = o.libMassNg / o.libConc;
    var probeVol = o.probeMassNg / o.probeConc;
    var cotVol = o.cot1MassUg / o.cot1Conc;
    var used = libVol + probeVol + cotVol + o.blockersUl;
    var buffer = o.totalUl - used;
    if (buffer < 0) throw new Error("各组分体积已超过总体积，请降低用量或增大总体积");
    return {
      libVol: libVol, probeVol: probeVol, cotVol: cotVol,
      blockers: o.blockersUl, buffer: buffer, used: used
    };
  }

  /* 磁珠纯化：样品体积 × 比例 = 磁珠体积。 */
  function spriVolumes(sampleUl, ratio, elutionUl) {
    if (!(sampleUl > 0) || !(ratio > 0) || !(elutionUl > 0)) throw new Error("体积与比例必须为正");
    return { beads: sampleUl * ratio, total: sampleUl * (1 + ratio), elution: elutionUl };
  }

  var api = {
    massToNm: massToNm,
    nmToMass: nmToMass,
    poolVolumes: poolVolumes,
    dilutionVolume: dilutionVolume,
    dilutionPlan: dilutionPlan,
    pickPipette: pickPipette,
    PIPETTES: PIPETTES,
    phixVolume: phixVolume,
    costPerSample: costPerSample,
    costSensitivity: costSensitivity,
    pcrCycles: pcrCycles,
    hybridMix: hybridMix,
    spriVolumes: spriVolumes
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  global.NGSCalc = api;
})(typeof window !== "undefined" ? window : globalThis);
