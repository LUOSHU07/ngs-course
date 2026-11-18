# Illumina 上机：变性、稀释、PhiX、loading（MiSeq 全协议 + 各平台 loading 表）

- 来源 MiSeq：[Preparing DNA Libraries for Sequencing on the MiSeq (15039740 Rev A)](https://content.ilabsolutions.com/wp-content/uploads/2013/04/MiSeq-Preparing-DNA-libraries.pdf)（现行版：[MiSeq Denature & Dilute Guide](https://support-docs.illumina.com/IN/MiSeq_DnD/Content/MiSeq/DnD-MiSeq.htm)）
- 来源 loading 浓度：[Illumina DNA Prep Reference Guide v12](https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/1000000025416_12_idp.pdf)

## 一、MiSeq 完整变性稀释流程（4 nM 路线）

### 0. 新鲜配制 0.2 N NaOH（当天用）

- 800 µL 实验室级水 + 200 µL 1.0 N NaOH（配 1 mL，避免小体积移液误差）。
- 变性必须用新鲜稀释的 NaOH；备 PhiX 可在 12 h 内用同一批。

### 1. 文库变性（20 pM 母液）

| 步骤 | 操作 |
|------|------|
| 1 | 5 µL 4 nM 文库 + 5 µL 0.2 N NaOH |
| 2 | 涡旋，280 × g 离心 1 min |
| 3 | 室温 5 min 变性为单链 |
| 4 | 加 990 µL 预冷 HT1 → **20 pM（含 1 mM NaOH）**，置冰上 |

> NaOH 终浓度必须 ≤1 mM，更高会抑制杂交、降低簇密度。文库只有 2 nM 时用 2 nM 路线（同法得 10 pM）；需 >10 pM loading 时先浓缩到 4 nM。

### 2. 稀释到终浓度（600 µL）

| 终浓度 | 6 pM | 8 pM | 10 pM | 12 pM | 15 pM |
|---|---|---|---|---|---|
| 20 pM 母液 (µL) | 180 | 240 | 300 | 360 | 450 |
| 预冷 HT1 (µL) | 420 | 360 | 300 | 240 | 150 |

颠倒混匀、点离，置冰上。MiSeq 常规 loading 12 pM 起步，按簇密度上下调。

### 3. PhiX 对照

1. 2 µL 10 nM PhiX + 3 µL Tris-Cl pH 8.5/0.1% Tween 20 → 4 nM。
2. 同文库变性法 → 20 pM（20 pM 变性 PhiX 可 −15～−25 ℃ 存 3 周）。
3. 稀释到 12.5 pM：375 µL 20 pM + 225 µL HT1。

### 4. 混合与上样

| 文库类型 | PhiX | 样本文库 |
|---|---|---|
| 常规（1%） | 10 µL | 990 µL |
| 宏基因组/低多样性（≥25%） | 250 µL | 750 µL |

- 低多样性文库：单一转录本 >25% 的表达样本、少重扩增子 pool、16S、亚硫酸氢盐文库等。
- MiSeq 聚焦需要第一循环 C/T 通道有信号，低多样性必须靠 PhiX 补。
- 刺穿试剂盒 "Load Samples" 孔（其他孔不能刺），加入 **600 µL**，不触碰铝箔。

## 二、各平台起始浓度与 loading 浓度（DNA Prep v12 表）

| 平台 | 起始浓度 (nM) | 终 loading 浓度 |
|------|---------------|------------------|
| iSeq 100（v1 试剂） | 2 | 200 pM |
| iSeq 100（v2 试剂） | 2 | 100 pM |
| MiniSeq | 2 | 1.2–1.3 pM |
| MiSeq（v2/v3） | 4 | 12 pM |
| MiSeq i100 | 0.8 | 80 pM（机上变性） |
| NextSeq 500/550 | 2 | 1.2–1.3 pM |
| NextSeq 2000 | 2 | 750 pM |
| NovaSeq X | 2 | 150 pM |
| NovaSeq 6000 | 见原厂文档 | 见原厂文档 |

> NextSeq 2000、NovaSeq X 是 patterned flow cell，loading 浓度比 MiSeq 高两个量级，不能拿 MiSeq 的 12 pM 套。

## 三、操作经验

- 变性后立即置冰上，HT1 必须预冷；室温放久会复性，cluster 下降。
- 低吸附管、轻混，避免文库吸附损失。
- 每跑记录：文库 qPCR nM、变性时间、终 pM、PhiX 比例、流动池/试剂盒批号。
- 簇密度偏低先查：NaOH 是否新鲜、HT1 是否预冷、qPCR 定量是否做了片段校正、loading 浓度。
- 簇密度偏高先查：是否拿错了平台 loading 表（MiSeq 值用在 NextSeq 500 上会严重过簇）。

## 记录

文库来源与 qPCR 浓度、变性起止时间、终浓度、PhiX 比例、试剂盒/流动池批号、簇密度、PF%、Q30。
