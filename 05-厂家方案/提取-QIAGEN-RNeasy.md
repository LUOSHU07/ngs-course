# QIAGEN RNeasy Mini（74104/74106，动物总 RNA 柱式）

- 样本：动物细胞 ≤1×10⁷、动物组织 ≤30 mg；结合容量 100 µg、片段 >200 nt；最小洗脱 30 µL
- 来源：[RNeasy Mini Handbook 第四版](http://clough.cropsci.illinois.edu/protocols/qiagen/RNeasy_Mini_Handbook.pdf)

## 试剂准备（开始前）

- Buffer RLT 加 **β-ME 10 µL/mL**（通风橱操作；可加 20 µL 2 M DTT/mL 替代），含 β-ME 的 RLT 室温可存 1 个月。
- Buffer RPE 为浓缩液，首次使用前加 4 倍体积 96–100% 乙醇。
- 全程室温（20–25 ℃），离心机不低于 20 ℃；RLT 出沉淀时回溶再用。

## 流程（动物细胞/组织，spin 法）

| 步骤 | 操作 | 条件 |
|------|------|------|
| 裂解 | 细胞沉淀弹松后加 Buffer RLT（体积按手册 Table 5/6，常见 350 µL 级）；组织 ≤30 mg 匀浆 | 涡旋混匀 |
| 匀浆 | QIAshredder 柱全速 2 min；或 rotor-stator 30 s；或 20G 钝针注射器 ≥5 次 | 三选一 |
| 结合 | 加 **1 倍体积 70% 乙醇**，吹打混匀，勿离心 | — |
| 上柱 | 转移 ≤700 µL 至 RNeasy 柱（含沉淀一并转移） | 8,000×g 15 s |
| 洗 1 | Buffer RW1 700 µL | 8,000×g 15 s，弃流穿（做柱上 DNase 则跳过本步） |
| 洗 2 | Buffer RPE 500 µL | 8,000×g 15 s，弃流穿 |
| 洗 3 | Buffer RPE 500 µL | 8,000×g **2 min**（长离心干燥膜，防乙醇带入洗脱液） |
| （可选） | 膜外残留 RPE 时全速 1 min | 消除携带 |
| 洗脱 | RNase-free 水 30–50 µL 直接加膜中央 | 8,000×g 1 min；预期 >30 µg 时换 30–50 µL 二次洗脱 |

## 可选：柱上 DNase 消化（RNase-Free DNase Set，附录 D）

DNase I 孵育混合液 **80 µL**（Buffer RDD 70 + DNase I 10）**直接加到柱膜上**，20–30 ℃ 15 min（勿粘壁/O 圈，否则消化不完全）→ 加 RW1 **350 µL** → 8,000×g 15 s → 继续 RPE 洗涤。

## 原厂注意点

- 起始量超量会得率不稳：高 RNA 含量细胞系（如 COS）≤3×10⁶，HeLa ≤7×10⁶，未知细胞系先 ≤3–4×10⁶。
- 组织离体后须立即液氮速冻或 RNA later，否则表达谱漂移。
- RLT/RW1 含胍盐，**禁与含漂白剂消毒剂接触**。
- RNeasy 富集 >200 nt RNA；小 RNA（miRNA 等）需专用流程。

## 操作经验

- A260/280 低（<1.8）多因乙醇带入：重做一次 RPE 长离心或延长干燥。
- 测浓度用 NanoDrop/Qubit RNA 均可，但下游建库前必须跑 TapeStation 看 RIN 与降解。
- 洗脱水直接点膜中央，沿壁加会降低回收。
- 记录：起始量、RLT 体积、是否 DNase、洗脱体积、浓度、RIN、A260/280。
