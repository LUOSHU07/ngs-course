# QIAGEN QIAamp Circulating Nucleic Acid（cfDNA，真空柱式）

- 样本：1–5 mL 血浆/血清（柱容量按 ≤10 mL 血浆优化；更大体积分多柱）
- 特点：大体积真空抽滤 + 小体积洗脱，液体活检主流方案
- 来源：[QIAGEN Handbook](https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/en-qiaamp-circulating-nucleic-acid-handbook)；实验室 SOP（Pugh Lab, 2020.02.003，[PDF](https://charmconsortium.ca/wp-content/uploads/2025/07/2020.02.003_cfDNA_Extraction_QIAamp_Circulating_Nucleic_Acid_kit.pdf)）

## 1. 血浆前处理

- 室温解冻后**立即置冰**；高速离心 16,000×g、4 ℃、5 min，去除冷沉淀与细胞碎片。
- 转移到 50 mL 管，留底部 ≤0.5 mL（冷沉淀），准确记录体积（决定试剂用量）。
- 样本量超过水浴容量或柱容量时分批/分柱处理（如 14 mL 分两个 7 mL）。

## 2. 裂解与结合（按每 mL 血浆计）

| 试剂 | 每 mL 血浆 | 操作 |
|------|-----------|------|
| QIAGEN Proteinase K | 0.1 mL | 加入 |
| Buffer ACL | 0.8 mL | 脉冲涡旋 30 s（必须见明显涡旋） |
| — | — | **60 ℃ 30–60 min**（以试剂盒手册为准；上述 SOP 用 60 min 提得率） |
| Buffer ACB | 1.8 mL | 涡旋 30 s |
| — | — | **冰上 10 min** |

## 3. 真空抽滤

1. 组装 QIAvac 24 Plus：VacValve → VacConnector → QIAamp Mini 柱 → 20 mL 延长管。
2. 确认真空泵可达 800–1000 mbar，工作时维持 ≥300 mbar。
3. 裂解液倒入延长管抽滤；50 mL 管点离后把残液补进延长管。
4. 全部抽干后关 VacValve，弃延长管。

## 4. 洗涤（真空下依次加）

| 试剂 | 体积 |
|------|------|
| Buffer ACW1 | 600 µL |
| Buffer ACW2 | 750 µL |
| 96–100% 乙醇 | 750 µL |

## 5. 干燥与洗脱

1. 柱子转入 2 mL 收集管，**全速离心 3 min**。
2. 开盖 56 ℃ 烘 6 min，彻底干燥膜（残醇抑制建库）。
3. 转入 1.5 mL 低吸附管，**AVE 60–80 µL 加在膜中央**，室温 5–10 min，全速 2 min。
4. 第二次洗脱 40–50 µL AVE，室温 5 min，全速 2 min，合并。
5. Qubit HS 定量，−80 ℃ 保存。低产量样本可把首次洗脱降到 50 µL 提高浓度。

## 操作经验

- 溶血是 cfDNA 最大污染源：离心后血浆发黄/红要记录，必要时重采。
- 抽滤速度不一致属正常（与血浆成分有关），每柱抽干后立即关对应 VacValve。
- 延长管、VacValve、Luer 塞可重复使用，按 QIAGEN 附录清洗。
- cfDNA 主峰约 167 bp，Qubit 浓度常 <1 ng/µL，定量要用 HS 试剂盒并加样 10–20 µL。

## 记录

血浆体积、溶血情况、高速离心参数、ACL/ACB 批号、抽滤时长、洗脱体积、Qubit 浓度、片段分布（如有）。
