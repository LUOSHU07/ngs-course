"use strict";
const assert = require("assert");
const c = require("./calc.js");

function close(a, b, tol = 0.01, label = "") {
  assert.ok(Math.abs(a - b) < tol, `${label}: got ${a}, want ${b}`);
}

close(c.massToNm(12, 450), 40.4, 0.01, "12 ng/µL / 450 bp");
close(c.nmToMass(10, 500), 3.3, 0.01, "10 nM / 500 bp");
close(c.dilutionVolume(100, 2, 500), 10, 0.01, "100→2 nM / 500 µL");
close(c.phixVolume(100, 1), 1, 0.01, "1% PhiX / 100 µL");

const vols = c.poolVolumes([40, 25, 30, 20], 10, 100);
[6.25, 10, 8.333, 12.5].forEach((want, i) => close(vols[i], want, 0.01, `pool ${i + 1}`));

const cost = c.costPerSample(
  { extraction: 10, library: 150, qc: 25, consumable: 8, labor: 90, run: 1200 },
  10,
  0.9,
  0.1
);
close(cost.direct, 283, 0.01, "direct");
close(cost.runShare, 133.33, 0.01, "run share");
close(cost.expected, 462.59, 0.01, "expected");

const sens = c.costSensitivity(
  { extraction: 10, library: 150, qc: 25, consumable: 8, labor: 90, run: 1200 },
  10,
  [0.5, 0.9],
  [0.05, 0.2]
);
close(sens[1][0].expected, 438.24, 0.01, "fill 0.9 / fail 0.05");
close(sens[0][1].expected, 653.75, 0.01, "fill 0.5 / fail 0.2");

assert.strictEqual(c.pcrCycles(100, "dna").cycles, 9);
assert.strictEqual(c.pcrCycles(10, "dna").cycles, 12);
assert.strictEqual(c.pcrCycles(100, "rna").cycles, 14);

const mix = c.hybridMix({
  libMassNg: 500, libConc: 50, probeMassNg: 500, probeConc: 250,
  cot1MassUg: 5, cot1Conc: 1, blockersUl: 5, totalUl: 30
});
close(mix.libVol, 10, 0.01, "library volume");
close(mix.probeVol, 2, 0.01, "probe volume");
close(mix.cotVol, 5, 0.01, "Cot-1 volume");
close(mix.buffer, 8, 0.01, "buffer volume");
assert.throws(() => c.hybridMix({
  libMassNg: 500, libConc: 10, probeMassNg: 500, probeConc: 250,
  cot1MassUg: 5, cot1Conc: 1, blockersUl: 5, totalUl: 20
}), /超过总体积/);

const spri = c.spriVolumes(50, 1.8, 30);
close(spri.beads, 90, 0.01, "bead volume");
close(spri.total, 140, 0.01, "total volume");

assert.throws(() => c.poolVolumes([0, 10], 10, 100), /必须为正/);
assert.throws(() => c.dilutionVolume(2, 100, 500), /不能高于/);

// —— NaN / 边界路径（清空输入框 parseFloat("")=NaN 的回归）——
assert.throws(() => c.massToNm(NaN, 450), /必须非负/);
assert.throws(() => c.massToNm(-1, 450), /必须非负/);
assert.throws(() => c.nmToMass(NaN, 500), /必须非负/);
assert.throws(() => c.dilutionVolume(NaN, 2, 500), /必须为正/);
assert.throws(() => c.poolVolumes([NaN], 10, 100), /必须为正/);
assert.throws(() => c.poolVolumes([], 10, 100), /至少需要/);
assert.throws(() => c.phixVolume(100, -1), /0–100/);
assert.throws(() => c.phixVolume(100, 101), /0–100/);
assert.throws(() => c.phixVolume(NaN, 1), /必须为正/);
assert.throws(() => c.pcrCycles(0), /必须为正/);
assert.throws(() => c.spriVolumes(0, 1.8, 30), /必须为正/);
assert.strictEqual(c.pcrCycles(100000, "dna").cycles, 5, "PCR 循环下限钳位");
assert.strictEqual(c.pcrCycles(0.001, "dna").cycles, 18, "PCR 循环上限钳位");
assert.throws(() => c.costPerSample({ extraction: 1, library: 1, qc: 1, consumable: 1, labor: 1, run: 1 }, 0, 0.9, 0.1), /必须为正/);
assert.throws(() => c.costPerSample({ extraction: 1, library: 1, qc: 1, consumable: 1, labor: 1, run: 1 }, 10, 0, 0.1), /fill/);
assert.throws(() => c.costPerSample({ extraction: 1, library: 1, qc: 1, consumable: 1, labor: 1, run: 1 }, 10, 0.9, 1), /fail/);
assert.throws(() => c.hybridMix({ libMassNg: NaN, libConc: 50, probeMassNg: 500, probeConc: 250, cot1MassUg: 5, cot1Conc: 1, blockersUl: 5, totalUl: 30 }), /有限非负/);

// —— 稀释方案（0 偏差硬约束 + 移液器刻度）——
const plan1 = c.dilutionPlan(100, 2, 500);
assert.strictEqual(plan1.steps.length, 1, "常规稀释单步完成");
close(plan1.steps[0].take, 10, 0.01, "单步取样体积");
close(plan1.steps[0].actualConc, 2, 1e-9, "单步浓度严格精确");
const plan2 = c.dilutionPlan(1000, 1, 100);
assert.strictEqual(plan2.steps.length, 2, "高倍稀释分两步");
assert.strictEqual(plan2.stockUsed, 2, "两步母液消耗最优（2 µL）");
close(plan2.steps[0].actualConc, 50, 1e-9, "中间液浓度严格精确");
close(plan2.steps[1].actualConc, 1, 1e-9, "终浓度严格精确");
assert.ok(plan2.steps.every(s => s.take >= 2), "两步取样均 ≥ 2 µL 刻度下限");
assert.throws(() => c.dilutionPlan(100, 1, 30, 4000), /无 0 偏差解/, "量程内无解时诚实报错");
assert.throws(() => c.dilutionPlan(NaN, 1, 10), /必须为正/, "NaN 拦截");

// —— 移液器量程与最小刻度 ——
assert.strictEqual(c.pickPipette(6.36).name, "P10", "6.36 µL 归 P10");
assert.strictEqual(c.pickPipette(23.6).name, "P100", "23.6 µL 归 P100");
assert.strictEqual(c.pickPipette(1500).name, "P5000", "1500 µL 归 P5000");
assert.strictEqual(c.pickPipette(0.1), null, "0.1 µL 超量程返回 null");

// —— 0 偏差搜索与成本披露 ——
const plan3 = c.dilutionPlan(94.3, 20, 30);
assert.ok(/0 偏差/.test(plan3.note), "note 声明 0 偏差");
assert.ok(/母液消耗/.test(plan3.note), "note 披露母液消耗");
assert.strictEqual(plan3.steps.length, 2, "该比例下单步精确解体积过大，选两步");
assert.strictEqual(plan3.stockUsed, 8, "两步母液消耗 8 µL（接近理论 6.36）");
assert.strictEqual(plan3.steps[0].take, 8, "第 1 步取母液 8 µL");
close(plan3.steps[0].actualConc, 40, 1e-9, "中间液 40 nM 严格精确");
close(plan3.steps[1].actualConc, 20, 1e-9, "终浓度 20 nM 严格精确");
assert.ok(plan3.steps[0].total >= plan3.steps[1].take + 2, "中间液留转移余量");
const planTiny = c.dilutionPlan(94.3, 20, 10);
assert.strictEqual(planTiny.steps.length, 1, "需要 10 µL：单步精确解存在");
assert.strictEqual(planTiny.steps[0].take, 4, "母液 4 µL");
close(planTiny.steps[0].diluent, 14.86, 0.001, "稀释液 14.86 µL");
close(planTiny.steps[0].actualConc, 20, 1e-9, "严格精确");
const plan5 = c.dilutionPlan(94.3, 20, 5);
assert.strictEqual(plan5.steps.length, 2, "上机取 5 µL：两步精确");
assert.strictEqual(plan5.stockUsed, 5, "母液消耗 5 µL");
close(plan5.steps[1].actualConc, 20, 1e-9, "终浓度严格精确");
const planBoost = c.dilutionPlan(100, 4, 40);
assert.strictEqual(planBoost.v2Used, 50, "100→4 nM/40 µL：精确单步 2+48=50 µL");
assert.strictEqual(planBoost.steps[0].take, 2, "母液整数 2 µL");
assert.strictEqual(planBoost.steps[0].diluent, 48, "稀释液整数 48 µL");
const planBig = c.dilutionPlan(100, 2, 500);
assert.strictEqual(planBig.v2Used, 500, "需要量大按量配制");
assert.ok(planBig.steps.length === 1 && /母液消耗 10/.test(planBig.note), "常规单步含母液消耗");
const planNeat = c.dilutionPlan(35, 20, 30);
assert.strictEqual(planNeat.steps[0].take, 20, "整洁度优先：选整数 20 µL 而非一位小数的 18 µL（母液 18 更省但不够整）");
assert.strictEqual(planNeat.steps[0].diluent, 15, "稀释液整数 15 µL");
assert.strictEqual(plan3.steps[0].diluent, 10.86, "无更整精确解时保留当前方案（10.86 两位小数）");

// —— 单步精确解不存在时的透明说明（86.45→20/15 用户实例）——
const plan86 = c.dilutionPlan(86.45, 20, 15);
assert.strictEqual(plan86.steps.length, 2, "86.45→20 量程内无单步精确解，给两步");
assert.strictEqual(plan86.stockUsed, 5, "母液消耗 5 µL");
assert.ok(/不存在单步精确解/.test(plan86.note), "note 说明单步为何不可行");
assert.strictEqual(plan86.steps[0].take, 5, "第 1 步取母液整数 5 µL");
close(plan86.steps[0].diluent, 13.2, 0.001, "第 1 步稀释液 13.2 µL（一位小数）");
assert.strictEqual(plan86.steps[1].take, 16, "第 2 步取中间液整数 16 µL");
assert.strictEqual(plan86.steps[1].diluent, 3, "第 2 步稀释液整数 3 µL");
close(plan86.steps[1].actualConc, 20, 1e-9, "终浓度严格精确");

// —— 全部方案逐步核验：每个体积都在刻度上、每步浓度严格精确 ——
[plan1, plan2, plan3, planTiny, plan5, planBoost, planBig].forEach(p => {
  p.steps.forEach(s => {
    assert.ok(c.pickPipette(s.take) && c.pickPipette(s.diluent), "每个体积都在某把枪量程内");
    close(s.actualConc, s.conc, Math.max(1e-9, s.conc * 1e-6), "每步浓度严格精确（0 偏差）");
    const pT = c.PIPETTES.find(x => x.name === s.takePipette);
    const pD = c.PIPETTES.find(x => x.name === s.diluentPipette);
    close(s.take / pT.inc, Math.round(s.take / pT.inc), 1e-6, "取样是刻度整数倍");
    close(s.diluent / pD.inc, Math.round(s.diluent / pD.inc), 1e-6, "稀释液是刻度整数倍");
  });
});
plan3.steps.forEach(s => {
  const incTake = c.PIPETTES.find(p => p.name === s.takePipette).inc;
  const incDil = c.PIPETTES.find(p => p.name === s.diluentPipette).inc;
  close(s.take / incTake, Math.round(s.take / incTake), 1e-6, "取样体积是刻度整数倍");
  close(s.diluent / incDil, Math.round(s.diluent / incDil), 1e-6, "稀释液体积是刻度整数倍");
});

console.log("ALL TESTS PASS");
