# PacBio SMRTbell prep kit 3.0（WGS，102-166-600 REV09）

- 用途：Revio / Vega / Sequel 的 HiFi 文库；目标插入 15–20 kb
- 总回收率：gDNA 输入到成库 10–32%（含 SRE、剪切、建库、ABC）
- 来源：[PacBio 官方 Procedure & Checklist](https://www.pacb.com/wp-content/uploads/Procedure-checklist-Preparing-whole-genome-and-metagenome-libraries-using-SMRTbell-prep-kit-3.0.pdf)

## 0. 可选：SRE（短片段去除）

50 ℃ 1 h；QC 稀释到 250 pg/µL 测 Femto Pulse；SRE 后 GQN₁₀kb >9.3。

## 1. 剪切

Megaruptor 3（100–130 µL）或移液剪切，目标 15–20 kb。65 µL 低量流程可跳过剪后纯化直接进修复。

## 2. 剪后纯化（1.0X SMRTbell cleanup beads）

剪切产物 + 1.0X 磁珠 → 室温 10 min → 80% 乙醇 200 µL 洗 2 次 → 47 µL Low TE 洗脱。

## 3. 修复与加 A（60 µL）

| 组分 | 体积 |
|------|------|
| 剪后 DNA | 46 µL |
| Repair master mix（Repair buffer 8 + End repair mix 4 + DNA repair mix 2） | 14 µL |

程序（热盖 ≥75 ℃）：**37 ℃ 30 min → 65 ℃ 5 min → 4 ℃ hold**。

## 4. SMRTbell 接头连接（95 µL）

| 组分 | 体积 |
|------|------|
| 修复产物 | 60 µL |
| Ligation master mix（SMRTbell adapter 4 + Ligation mix 30 + Ligation enhancer 1） | 35 µL |

程序（热盖 ≥30 ℃）：**20 ℃ 30 min → 4 ℃ hold**。
带 index 时：barcoded adapter 4 µL 替代通用 adapter，加 31 µL 混合液。

## 5. 连接后纯化（1X）与核酸酶处理

- +95 µL SMRTbell cleanup beads → 室温 10 min → 80% 乙醇洗 2 次 → 40 µL Elution buffer 洗脱。
- 核酸酶：Nuclease buffer 5 µL + Nuclease mix 5 µL 加入 40 µL → 50 µL，**37 ℃ 15 min → 4 ℃**。
- 储存前必须去除核酸酶（AMPure PB 或 1X SMRTbell 纯化）。

## 6. 片段选择（3.1X AMPure PB）

- AMPure PB 先用 Elution buffer 稀释到 35% v/v（4 ℃ 可存 30 天）。
- 加 3.1X（155 µL）→ 室温 20 min → 乙醇洗 2 次 → 26 µL 洗脱。
- 片段选择对磁珠浓度敏感，稀释和加样体积必须精确。

## 7. ABC（退火/结合/纯化，上机前）

- 文库浓度必须 <60 ng/µL，否则 P1 loading 低。
- 退火：Annealing mix 25 µL（Annealing buffer 12.5 + Standard sequencing primer 12.5）+ 文库 25 µL = 50 µL。
- 聚合酶结合：Polymerase buffer 47 µL + Sequencing polymerase 3 µL = 50 µL 加入 → 100 µL。
- 结合后纯化：+100 µL SMRTbell cleanup beads → **不用乙醇洗、不可干燥** → Loading buffer 25/50 µL 洗脱。

## 原厂注意点

- 磁珠室温放置 ≥30 min，每次加样前立即涡旋重悬，否则回收率低。
- 酶类不涡旋，颠倒混匀即可；温度敏感试剂全程冰上。
- 带制冷功能的离心机做 SRE 时，把目标温度设到室温以上（如 29–30 ℃），避免误制冷。
- 成库 QC：1 µL 稀释 10 倍测 Qubit，250 pg/µL 上 Femto Pulse。

## 记录

样本 ID、GQN₁₀kb（SRE 前后）、剪切方式与体积、修复/连接/核酸酶批号、3.1X 磁珠稀释日期、各步 Qubit、最终回收率、ABC 体积。
