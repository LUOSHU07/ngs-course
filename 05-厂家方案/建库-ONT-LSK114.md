# Oxford Nanopore Ligation Sequencing Kit V14（SQK-LSK114，revAC 24Sep2025）

- 输入：1 µg（100–200 fmol）gDNA；全程约 65 min；免 PCR；兼容 R10.4.1 芯片
- 来源：[ONT 官方协议](https://nanoporetech.com/document/genomic-dna-by-ligation-sqk-lsk114)

## 1. DNA 修复与末端制备（约 35 min，含纯化）

| 组分 | 体积 |
|------|------|
| DNA（1 µg，NF 水补到 47 µL） | 47 µL |
| DNA CS 对照（可选） | 1 µL |
| NEBNext FFPE DNA Repair Buffer v2 | 7 µL |
| NEBNext FFPE DNA Repair Mix | 2 µL |
| NEBNext Ultra II End-prep Enzyme Mix | 3 µL |
| 合计 | 60 µL |

- 酶（Repair Mix、End-prep Enzyme）只能颠倒/弹混，**禁止涡旋**；Repair Buffer v2 可涡旋，白色沉淀或淡黄色属正常。
- 之后 AMPure XP 纯化；每次加试剂间吹打 10–20 次。

## 2. 接头连接与纯化（约 20 min）

| 组分 | 体积 |
|------|------|
| 末端制备产物 | 60 µL |
| Ligation Adapter (LA) | 5 µL |
| Ligation Buffer (LNB) | 25 µL |
| Salt-T4 DNA Ligase（NEB M0467） | 10 µL |
| 合计 | 100 µL |

- 纯化洗液二选一：**LFB 富集 >3 kb**；**SFB 保留所有片段**。
- **连接后绝不能用乙醇洗**——乙醇会使接头上的马达蛋白变性，直接毁掉文库。

## 3. 上样量（按文库长度）

| 文库长度 | 上样量 |
|----------|--------|
| <1 kb | 100 fmol |
| 1–10 kb | 35–50 fmol |
| >10 kb | 300 ng |

## 4. 芯片准备与上样（约 10 min）

- 芯片室温放置 20 min 再润洗（便于观察阵列）。
- 先 Flow Cell Check 确认孔数；润洗前排净 priming port 附近气泡（气泡会不可逆损伤纳米孔）。
- Library Beads (LIB) 沉降极快，**用前立即混匀**；上样后保持遮光罩。

## 操作经验

- AXP 磁珠比例低于 0.4:1 会丢失任意长度片段；先测 DNA 长度再定比例。
- 磁珠沉降快，每次加样前重新涡旋；磁力架上等上清完全澄清再吸。
- 乙醇浓度必须 ≥80%（end-prep 阶段），低于 70% 会把 DNA 从磁珠上洗脱。
- 文库 4 ℃ 短期保存（可重复上样），>3 个月 −80 ℃，用 LoBind 管。
- 先做 Lambda 对照实验熟悉流程再正式上样。

## 记录

样本 ID、输入量、末端制备批号、LFB/SFB 选择、AXP 比例、文库 Qubit 与长度、芯片 ID 与初始孔数、上样 fmol。
