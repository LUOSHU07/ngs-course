# MGI MGIEasy Fast FS Library Prep Set V2.0（User Manual 3.0）

- 输入：1–1000 ng gDNA，TE（pH 8.0）补到 45 µL
- 特点：Fast FS 酶法一步片段化+末端修复；UDB 双 barcode；总耗时约 2 h（手动操作 19–20 min）
- 来源：[MGI 官方手册 PDF](https://mgi-tech.com/uploads/files/20250818/f9e41c9729cb0df7ff07f9ddade2324b.pdf)

## 1. 片段化（60 µL）

| 组分 | 体积 |
|------|------|
| gDNA（1–1000 ng）+ TE | 45 µL |
| Fast FS Buffer II | 10 µL |
| Fast FS Enzyme II | 5 µL |

程序（热盖 70 ℃）：4 ℃ hold → **30 ℃**（时间按下表）→ 65 ℃ 15 min → 4 ℃。

| gDNA 输入 | 1000/500/200 ng | 100 ng | 50/25 ng | 10 ng | 5 ng | 1 ng |
|---|---|---|---|---|---|---|
| 30 ℃ 时间 | 12 min | 13 min | 16 min | 18 min | 20 min | 22 min |
| 片段选择方式 | 双面 | 单面 | 单面 | 单面 | 单面 | 单面 |

> **此步后不可停顿**；Fast FS Enzyme II 只能颠倒混匀，**禁止涡旋**。

## 2. 片段选择

- 单面（<200 ng）：产物补到 60 µL + 48 µL En-Beads，室温 5 min，磁力架弃上清，45 µL En-TE 洗脱。
- 双面（≥200 ng）：+36 µL En-Beads，取 96 µL 上清；再加 12 µL En-Beads，弃上清，45 µL En-TE 洗脱。

## 3. 接头连接（80 µL）

| 组分 | 体积 |
|------|------|
| 片段选择产物 | 45 µL |
| UDB Adapter（按输入稀释） | 5 µL |
| Fast Ligation Buffer | 23 µL |
| Ad Ligase | 5 µL |
| Ligation Enhancer | 2 µL |

接头稀释：>50 ng 不稀释；25 ng 2×；10 ng 5×；5 ng 10×；1 ng 50×。
程序：**25 ℃ 10 min** → 4 ℃ hold，热盖 30 ℃。

## 4. 连接后纯化

+22 µL En-TE + 20 µL En-Beads → 室温 5 min → 160 µL 80% 乙醇洗 2 次 → 空气干燥至无光泽（不开裂）→ 洗脱取 19 µL。

## 5. PCR（50 µL）

| 组分 | 体积 |
|------|------|
| 连接产物 | 19 µL |
| PCR Enzyme Mix | 25 µL |
| UDB PCR Primer Mix | 6 µL |

循环数（300 ng 产量）：1000 ng 3；500/200 ng 3；100 ng 4–5；50 ng 5–6；25 ng 6–7；10 ng 7–8；5 ng 8–10；1 ng 11–12。
（600 ng / 1000 ng 产量对应 4–5 / 5–6 … 12–14 循环，见手册 Table 33。）

## 6. PCR 后纯化与环化

- +38 µL En-Beads → 160 µL 乙醇洗 2 次 → 洗脱取 30 µL；可 −20 ℃ 保存。
- 环化三选一：MGIEasy Dual Barcode Circularization Kit（→ ssCir → DNB）；Onestep DNB V2.0（OS-DB）；Onestep DNB V1.0。

## 原厂注意点

- UDB Adapter 是双链，**存放不要超 30 ℃**，防止变性影响性能。
- UDB Primer 要按 pooling guide 组合：每 lane 至少 8 个文库，任一测序位置单碱基含量 12.5%–62.5%。
- Fast Ligation Buffer 黏稠，涡旋 6 次（每次 3 s）混匀，连接混合液 30 min 内用完。
- PCR 循环严格控制，过循环引入 bias、重复、嵌合和突变积累。

## 记录

样本 ID、输入量、30 ℃ 片段化时间、片段选择方式、接头稀释倍数、PCR 循环、环化方式、Qubit（dsDNA + ssDNA）、TapeStation 片段。
