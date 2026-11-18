# Promega Maxwell RSC Blood DNA（AS1400/ASB1400，TM419 Rev 1/25）

- 样本：≤300 µL 全血/卡式盒（EDTA、ACD、肝素管均可，新鲜或冻存）；骨髓按 200 µL
- 机型：Maxwell RSC / RSC 48；可选 Maxprep 液体工作站预处理
- 来源：[TM419 技术手册](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/maxwell-rsc-blood-dna-kit-protocol.pdf?la=en)

## 手动预处理（Section 3）

1. 血液室温混匀 ≥5 min。
2. 孵育管依次加：**Proteinase K Solution 30 µL → 全血 ≤300 µL → Lysis Buffer 300 µL**。
3. 涡旋 10 s，**56 ℃ 孵育 20 min**。
4. 裂解液全部转入卡式盒 **#1 孔**（#1 孔最大、最靠印字面、离洗脱管最远）。

## 卡式盒准备（Section 3.B）

- 换手套后操作；卡式盒按进托盘，**印字面背对洗脱管**，前后按压卡紧。
- 撕掉全部封膜与残胶（否则液面检测失败）。
- **柱塞插入 #8 孔**；洗脱位放随盒 0.5 mL 洗脱管（**只能用随盒管**），管底加 **Elution Buffer 50 µL**。

## 卡式盒孔位

| 孔 | 内容 |
|----|------|
| 1 | Binding Buffer + 预处理样本 |
| 2 | 磁珠（Magnetic Particles） |
| 3–6 | Wash Solution ×4 |
| 7 | 空 |
| 8 | 柱塞（运行后应回到 #8） |

## 上机

1. 选择 "RSC Blood DNA" 方法（或扫盒上 2D 码自动选）。
2. 核对检查清单：#1 有样本、柱塞在 #8、洗脱管开盖且已有 Elution Buffer。
3. Start 运行；结束后柱塞应位于 #8，取洗脱管盖紧。
4. 卡式盒、柱塞、洗脱管一次性使用；托盘禁用漂白剂。

## Maxprep 自动化预处理（Section 4）

2 mL 深孔板中自动加入：样本 + PK 30 µL + Lysis Buffer 300 µL → 20 min 孵育 → 转入卡式盒 → 托盘送 RSC。方法变量：Sample Number / Sample Volume / Elution Volume。

## 故障速查（手册 Troubleshooting）

- 得率低：反复冻融降解 DNA；全血未混匀（白细胞未悬浮）；白细胞计数低。
- **裂解液呈红色 = 漏加 PK**（加足 PK 的样本呈绿褐色，可作快速自查）。
- 中止运行（Abort）后**该批样本全部作废**。

## 操作经验

- 50 µL 洗脱是浓度优先；需要体积时按 Genomic DNA Kit（TM708）可到 50–200 µL，但浓度相应稀释。
- 每批至少跑 1 个已知浓度对照血，验证批间一致性。
- 记录：抗凝管类型、输入体积、方法名与版本、洗脱体积、Qubit 得率、A260/280、批号。
