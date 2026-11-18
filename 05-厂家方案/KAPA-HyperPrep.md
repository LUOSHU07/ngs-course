# KAPA HyperPrep Kit（KR0961 v7.19）

- 输入：1 ng–1 µg 片段化双链 DNA（50 µL）
- 总时长：约 3 h（不含片段化与 QC）
- 来源：[KAPA HyperPrep Technical Data Sheet](https://rochesequencingstore.com/wp-content/uploads/2022/07/KAPA-HyperPrep-Kit-Technical-Data-Sheet.pdf)

## 1. End Repair & A-Tailing（60 µL）

| 组分 | 体积 |
|------|------|
| 片段化 dsDNA | 50 µL |
| End Repair & A-Tailing Buffer | 7 µL |
| End Repair & A-Tailing Enzyme Mix | 3 µL |

20 ℃ 30 min → 65 ℃ 30 min → 4 ℃；热盖建议 85 ℃。Buffer 与 Enzyme 可预混后一次加入。

## 2. Adapter Ligation（110 µL）

| 组分 | 体积 |
|------|------|
| End Repair/A-Tailing 产物 | 60 µL |
| Adapter stock | 5 µL |
| PCR-grade water | 5 µL |
| Ligation Buffer | 30 µL |
| DNA Ligase | 10 µL |

20 ℃ 15 min。低输入可延长至最多 4 h（20 ℃）或 2–8 ℃ 过夜，但 dimer 会增加，接头浓度需重新优化。

## 3. Post-Ligation Cleanup（198 µL）

110 µL 连接产物 + 88 µL KAPA cleanup beads（0.8×）→ 室温 5–15 min → 磁力架 → 弃上清 → 200 µL 80% 乙醇洗 2 次（每次 ≥30 s）→ 室温干燥 3–5 min → 25 µL 洗脱（做双面选择则 55 µL）→ 取 20 µL（或 50 µL）。

## 4. Library Amplification（50 µL）

| 组分 | 体积 |
|------|------|
| KAPA HiFi HotStart ReadyMix (2X) | 25 µL |
| KAPA Library Amplification Primer Mix (10X) | 5 µL |
| 接头连接文库 | 20 µL |

98 ℃ 45 s → [98 ℃ 15 s → 60 ℃ 30 s → 72 ℃ 30 s] × N → 72 ℃ 1 min → 4 ℃。

循环数（Table 3，输入为 ER/AT 前 DNA）：

| 输入 | 100 ng 产量 | 1 µg 产量 |
|------|-------------|-----------|
| 1 µg | 0 | 1–2 |
| 500 ng | 0 | 2–4 |
| 250 ng | 0–2 | 4–6 |
| 100 ng | 2–3 | 6–7 |
| 50 ng | 3–5 | 7–8 |
| 25 ng | 5–7 | 8–10 |
| 10 ng | 7–9 | 11–13 |
| 5 ng | 9–11 | 13–14 |
| 2.5 ng | 11–13 | 14–16 |
| 1 ng | 13–15 | 17–19 |

（Table 4 按“已连接文库量”给循环：500 ng 1–2；100 ng 3–4；50 ng 5–6；10 ng 7–8；5 ng 8–9；1 ng 11–12；500 pg 12–13。）

## 5. Post-Amplification Cleanup（100 µL）

50 µL PCR 产物 + 50 µL 磁珠（1.0×）→ 洗 2 次 → 洗脱（再做一次纯化或双面选择则 55 µL）。

## 原厂明确写出的注意点

- Buffer/Enzyme 预混液室温 ≤24 h、4 ℃ ≤3 天、-20 ℃ ≤4 周。
- 65 ℃ 步骤必须开热盖；建议 85 ℃，不要用常规 ~105 ℃。
- 磁珠过度干燥会降低产量。
- 延长连接时间会提高转化率，但也提高 dimer，需同步优化接头浓度。

## 记录

样本 ID、输入量、Q-ratio（FFPE）、接头浓度、连接时间、磁珠批次、PCR 循环、Qubit、TapeStation、qPCR。
