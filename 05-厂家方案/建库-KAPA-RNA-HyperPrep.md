# KAPA RNA HyperPrep Kit with RiboErase (HMR)（KR1351 v1.16）

- 输入：25 ng–1 µg 总 RNA（人/小鼠/大鼠），≤10 µL RNase-free 水
- 特点：rRNA 探针去除（非 polyA），保留非编码 RNA 与降解样本信息；2nd strand 标记（dUTP）链特异性
- 来源：[KAPA RNA HyperPrep with RiboErase TDS](https://genome.med.harvard.edu/documents/libraryPrep/KAPAHyperPrepKitwithRiboEraseProtocol.pdf)（Roche 官方版本见测序商店）

## 1. rRNA 探针杂交与去除（45 ℃ 体系）

| 步骤 | 体系 | 条件 |
|------|------|------|
| 杂交 | RNA 10 µL + 混合液 10 µL（Hyb Buffer 4 + Hyb Oligos 4 + 水 2）= 20 µL | 以 −0.1 ℃/s 降到 45 ℃，暂停 |
| RNase H 去除 | +混合液 5 µL（Depletion Buffer 3 + RNase H 2）= 25 µL | **45 ℃ 30 min** → 4 ℃ |
| 磁珠纯化 | +55 µL KAPA Pure Beads（2.2X），弃 75 µL 上清，80% 乙醇 200 µL×2 | 洗脱 22 µL，取 20 µL |

## 2. DNase 消化

+混合液 22 µL（DNase Buffer 2.2 + DNase 2 + 水 17.8）；**37 ℃ 30 min** → 4 ℃。
纯化：+44 µL 磁珠，弃 60 µL 上清，乙醇洗 2 次。

## 3. 片段化/引物/洗脱（一体）

- 磁珠重悬于 22 µL（Fragment, Prime & Elute Buffer 2X 11 + 水 11），取 20 µL。
- 片段化温度时间按目标插入片段：

| 目标插入片段 | 条件 |
|--------------|------|
| 100–200 bp | 94 ℃ 8 min |
| 200–300 bp | 94 ℃ 6 min |
| 300–400 bp | 85 ℃ 6 min |
| 降解 RNA（如 FFPE） | 85 ℃ 1–6 min 或 65 ℃ 1 min |

## 4. 一链合成（30 µL）

+混合液 10 µL（1st Strand Synthesis Buffer 11 + KAPA Script 1）：
**25 ℃ 10 min → 42 ℃ 15 min → 70 ℃ 15 min → 4 ℃**。

## 5. 二链合成 + 加 A（60 µL）

+混合液 30 µL（2nd Strand Marking Buffer 31 + 酶 2）：**16 ℃ 30 min** → 4 ℃。

## 6. 接头连接（110 µL）

+连接混合液 45 µL（Ligation Buffer 40 + DNA Ligase 10）+ adapter 5 µL（1.5 µM 或 7 µM，按输入）；孵育条件按手册 step 9。

## 7. 两次连接后纯化

1. 110 µL + 70 µL 磁珠，弃 175 µL 上清，乙醇洗 2 次，重悬 50 µL。
2. 50 µL + 35 µL PEG/NaCl，弃 80 µL 上清，乙醇洗 2 次，重悬 22 µL，取 20 µL。
   （第二次用 PEG/NaCl 是去接头二聚体的关键，不要省。）

## 8. 文库扩增（50 µL）

+混合液 30 µL（KAPA HiFi ReadyMix 25 + Primer Mix 5）。
循环数按输入：25–100 ng → 11–15；101–250 ng → 9–12；251–500 ng → 7–10；501–1000 ng → 6–8。
纯化：+50 µL 磁珠，弃 95 µL 上清，乙醇洗 2 次，洗脱 22 µL，取 20 µL。

## 原厂注意点

- RNA >10 µL 先浓缩（乙醇沉淀/磁珠/真空），洗脱用 12 µL RNase-free 水。
- KAPA Pure Beads 室温平衡 ≥30 min；PEG/NaCl 在 −20 ℃ 不冻结，属正常。
- 重悬磁珠后 4 ℃ 只能放 ≤24 h；洗脱的未扩增文库 4 ℃ ≤1 周。
- 第二次连接后纯化后可用 KAPA Library Quantification 定量，帮助确定扩增循环数。

## 记录

RNA 来源、RIN/DV200、输入量、片段化条件、adapter 浓度、两次纯化体积、PCR 循环、Qubit、TapeStation、rRNA 残留。
