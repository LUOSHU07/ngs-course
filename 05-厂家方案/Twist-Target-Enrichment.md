# Twist Target Enrichment Standard Hybridization（DOC-001085 Rev 4.0）

- 用途：外显子/panel 杂交捕获，单重或多重（最多 24-plex）
- 流程：两天；杂交 16 h
- 来源：[Twist Standard Hybridization v1 Protocol](https://8494339.fs1.hubspotusercontent-na1.net/hubfs/8494339/Protocol_NGS_TargetEnrichmentStandardHybridization_v1Protocol_2FEB22_Rev4.0.pdf)

## 1. 文库准备与 pooling

1. 用 Twist Library Preparation Kit 建库，QC 合格。
2. 按等摩尔比例混合 indexed library，总量 500 ng–1 µg（按 panel 与反应规模）。
3. 浓缩到 ≤8 µL（真空浓缩或 Dry Down Beads）。

## 2. 杂交（16 h）

探针液：

| 组分 | 体积 |
|------|------|
| Hybridization Mix | 20 µL |
| Twist panel | 4 µL |
| 水（或 secondary panel） | 0–4 µL |
| 合计 | 28 µL |

1. Hybridization Mix 65 ℃ 加热 10 min 溶解沉淀，室温冷却 5 min。
2. 探针液加到文库 pool，涡旋混匀，短暂离心。
3. 加 30 µL Hybridization Enhancer 覆盖液面。
4. 70 ℃ 16 h，热盖 85 ℃（**注意：Twist 是 70 ℃，不是 65 ℃**）。

## 3. 捕获

1. 100 µL Streptavidin Binding Beads + 200 µL Binding Buffer，磁力架 1 min，弃上清。
2. 杂交结束立即从 70 ℃ 转移到磁珠，**不要让杂交液降温**（降温 5 min 可使脱靶增加 10–20%）。
3. 室温旋转/摇动 30 min。
4. 磁力架 1 min，弃上清；200 µL Wash Buffer 1 洗涤。
5. 200 µL 48 ℃ Wash Buffer 2，48 ℃ 5 min，重复共 3 次。
6. 弃尽上清，加 45 µL 水重悬，冰上放置（Streptavidin Binding Bead slurry）。

## 4. 捕获后 PCR（50 µL）

| 组分 | 体积 |
|------|------|
| Bead slurry | 22.5 µL |
| Amplification Primers | 2.5 µL |
| Equinox Library Amp Mix (2×) | 25 µL |

98 ℃ 45 s → [98 ℃ 15 s → 60 ℃ 30 s → 72 ℃ 30 s] × N → 72 ℃ 1 min。

循环数按杂交反应规模与 panel 大小调整（原厂未给固定值，需预实验）。

## 5. 纯化与 QC

1. 加 50 µL DNA Purification Beads（1.0×），混匀。
2. 磁力架，弃上清；200 µL 80% 乙醇洗 2 次；干燥。
3. 洗脱 30 µL。
4. Qubit + Bioanalyzer/TapeStation；平均片段 375–425 bp（150–1000 bp 范围）。

## 原厂明确写出的注意点

- 杂交 70 ℃、16 h，热盖 85 ℃，管子必须封紧防蒸发。
- 从 70 ℃ 到磁珠的转移要快，降温会显著增加脱靶。
- Streptavidin 磁珠不能涡旋，温和混匀即可。
- 最后一次洗涤后不能干燥磁珠。

## 记录

文库 pool、panel 批次、Hybridization Mix/Enhancer 批号、杂交起止时间与温度、洗涤温度、PCR 循环、Qubit、片段分布、捕获效率。
