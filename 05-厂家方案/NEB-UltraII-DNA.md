# NEBNext Ultra II DNA Library Prep（E7645 / E7103）

- 输入：500 pg–1 µg 片段化 DNA（体积 50 µL，不足用 1× TE 补）
- 总时长：约 3 h（不含片段化与 QC）
- 来源：[NEB E7645 手册 v6.1](https://www.neb.com/en/-/media/nebus/files/manuals/manuale7645.pdf)

## 1. End Prep（60 µL）

| 组分 | 体积 |
|------|------|
| Ultra II End Prep Enzyme Mix | 3 µL |
| Ultra II End Prep Reaction Buffer | 7 µL |
| 片段化 DNA | 50 µL |

 program：20 ℃ 30 min → 65 ℃ 30 min → 4 ℃ hold；热盖 ≥75 ℃。

## 2. Adaptor Ligation（93.5 µL）

| 组分 | 体积 |
|------|------|
| End Prep 产物 | 60 µL |
| NEBNext Adaptor（按输入稀释） | 2.5 µL |
| Ultra II Ligation Master Mix | 30 µL |
| Ligation Enhancer | 1 µL |

20 ℃ 15 min（热盖关闭）→ 加 3 µL USER → 37 ℃ 15 min（热盖 ≥47 ℃）。

接头稀释：1 µg–101 ng 不稀释；100–5 ng 1:10；<5 ng 1:25。

## 3. 纯化 / 片段选择

**双 SPRI（>50 ng，目标 200 bp 插入）**：96.5 µL 反应 + 40 µL 磁珠（0.4×）→ 取上清 → 加 20 µL 磁珠（0.2×）→ 弃上清 → 200 µL 80% 乙醇洗 2 次 → 空气干燥 ≤5 min → 17 µL 洗脱 → 取 15 µL。

**单次纯化（≤50 ng）**：加 87 µL 磁珠（0.9×）→ 洗 2 次 → 17 µL 洗脱 → 取 15 µL。

其他插入片段的首/二次磁珠体积：150 bp 50/25、250 bp 30/15、300–400 bp 25/10、400–500 bp 20/10、500–700 bp 15/10（µL）。

## 4. PCR（50 µL）

| 组分 | 体积 |
|------|------|
| 接头连接产物 | 15 µL |
| Ultra II Q5 Master Mix | 25 µL |
| i7 Index Primer | 5 µL |
| i5 Universal Primer | 5 µL |

98 ℃ 30 s → [98 ℃ 10 s → 65 ℃ 75 s] × 3–15 → 65 ℃ 5 min → 4 ℃。

循环数（标准建库，~100 ng 产量）：1 µg 3；500 ng 3；100 ng 3–4；10 ng 6–7；5 ng 7–8；1 ng 9–10；0.5 ng 10–11。
目标捕获（~1 µg 产量）：1 µg 3–4；500 ng 4–5；100 ng 6–7；50 ng 7–8；10 ng 9–10；1 ng 12–13；0.5 ng 14–15。

## 5. 终纯化

50 µL PCR 产物 + 45 µL 磁珠（0.9×）→ 洗 2 次 → 33 µL 洗脱 → 取 30 µL。

## 原厂明确写出的注意点

- Ligation Master Mix 很黏，必须吹打 10 次以上，混不匀直接降低连接效率。
- 磁珠不能过度干燥：仍呈深棕色、有光泽时洗脱；发白、开裂即过度。
- 接头过量是 dimer 主因，PCR 前必须去除多余接头。
- 低输入（≤100 ng）按上表稀释接头，不要用原液。

## 记录

样本 ID、输入量、片段化方法、接头稀释、磁珠批次、PCR 循环、Qubit、TapeStation、qPCR。
