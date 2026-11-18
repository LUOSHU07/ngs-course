# 厂家方案库

同一句话“提取/建库/上机”，不同厂家的体积、温度、磁珠比例、循环数、loading 浓度都不同。本库按**原厂手册**逐条记录，不做“通用化”改写。个别条目的来源链接为官方手册的**内容镜像**（官方 PDF 无法直接抓取时采用，镜像 URL 保留溯源）；无论来源如何，实际操作一律以随盒说明书为最终准绳。

## 总览矩阵（按流程步骤）

### 1. 核酸提取

| 厂家 | 方案 | 状态 |
|------|------|------|
| QIAGEN | DNeasy Blood & Tissue（柱式） | [已核对](提取-QIAGEN-DNeasy.md) |
| QIAGEN | QIAamp Circulating Nucleic Acid（cfDNA） | [已核对](提取-QIAGEN-cfDNA.md) |
| QIAGEN | RNeasy Mini（总 RNA） | [已核对](提取-QIAGEN-RNeasy.md) |
| Thermo | TRIzol（酚法总 RNA） | [已核对](提取-Thermo-TRIzol.md) |
| QIAGEN | miRNeasy Mini（含 miRNA） | [已核对](提取-QIAGEN-miRNeasy.md) |
| 天根 | RNAprep Pure Tissue（DP431，含 DNase） | [已核对](提取-天根-RNAprep.md) |
| 诺唯赞 | FastPure Total RNA V2（RC112） | [已核对](提取-Vazyme-RC112.md) |
| QIAGEN | DNeasy PowerSoil Pro（粪便/微生物） | [已核对](提取-QIAGEN-PowerSoil.md) |
| QIAGEN | MagAttract HMW DNA（长读长） | [已核对](提取-QIAGEN-MagAttract.md) |
| QIAGEN | GeneRead DNA FFPE（UNG 修复） | [已核对](提取-QIAGEN-GeneRead-FFPE.md) |
| 天根 | TIANamp 基因组 DNA（DP304） | [已核对](提取-天根-DP304.md) |
| Simgen 新景 | 全血 DNA 小量（无 PK 体系） | [已核对](提取-Simgen-全血DNA.md) |
| 康为世纪 | Universal Genomic DNA（CW2298） | [已核对](提取-康为-CW2298.md) |
| 美基 | HiPure Blood DNA（中量柱 1–10 mL） | [已核对](提取-美基-HiPure血液.md) |
| 诺唯赞 | FastPure DNA（DC112） | [已核对](提取-Vazyme-DC112.md) |
| Zymo | Quick-DNA Miniprep Plus | [已核对](提取-Zymo-QuickDNA.md) |
| Thermo | KingFisher / MagMAX（磁珠自动） | [已核对](提取-Thermo-MagMAX.md) |
| Promega | Maxwell RSC Blood DNA | [已核对](提取-Promega-Maxwell.md) |

### 2. 片段化

| 厂家 | 设备/方案 | 状态 |
|------|-----------|------|
| Covaris | M220（microTUBE-15/50/130/500、miniTUBE） | [已核对](片段化-Covaris.md) |
| Covaris | E220 / ME220 / R230 | 待核对 |
| Diagenode | Bioruptor | 待核对 |
| 酶法 | NEB/KAPA/Illumina 酶切或转座 | 见各建库页 |

### 2B. 纯化与片段选择

| 主题 | 内容 | 状态 |
|------|------|------|
| SPRI 磁珠 | 原理、已核对比例汇总、操作红线、错误速查 | [已核对](纯化-SPRI与片段选择.md) |

### 3. 文库构建

| 厂家 | 试剂盒 | 状态 |
|------|--------|------|
| NEB | NEBNext Ultra II DNA | [已核对](NEB-UltraII-DNA.md) |
| NEB | NEBNext Ultra II Directional RNA | [已核对](建库-NEB-UltraII-RNA.md) |
| Illumina | Stranded mRNA Prep | [已核对](建库-Illumina-Stranded-mRNA.md) |
| Roche/KAPA | KAPA HyperPrep（DNA） | [已核对](KAPA-HyperPrep.md) |
| Roche/KAPA | KAPA RNA HyperPrep + RiboErase | [已核对](建库-KAPA-RNA-HyperPrep.md) |
| Illumina | Illumina DNA Prep | [已核对](Illumina-DNA-Prep.md) |
| MGI | MGIEasy Fast FS V2.0 | [已核对](建库-MGI-FastFS.md) |
| ONT | SQK-LSK114 连接建库 | [已核对](建库-ONT-LSK114.md) |
| PacBio | SMRTbell prep kit 3.0 | [已核对](建库-PacBio-SMRTbell.md) |
| Agilent | SureSelect XT HS2 | [框架页（PDF 抓取受限，未写体积）](Agilent-SureSelect-XT-HS2.md) |
| QIAGEN | QIAseq | 待核对 |

### 4. 杂交捕获

| 厂家 | 方案 | 状态 |
|------|------|------|
| Twist | Target Enrichment Standard Hyb | [已核对](Twist-Target-Enrichment.md) |
| IDT | xGen Hybridization Capture | [已核对](杂交-IDT-xGen.md) |
| Roche/KAPA | HyperCap v3.2（55 ℃ 杂交） | [已核对](杂交-KAPA-HyperCap.md) |
| Agilent | SureSelect | [框架页](Agilent-SureSelect-XT-HS2.md) |

### 5. 文库 QC 与定量

| 厂家 | 方案 | 状态 |
|------|------|------|
| Thermo | Qubit dsDNA HS | [已核对](QC-Qubit与KAPA定量.md) |
| Roche/KAPA | Library Quantification（qPCR） | [已核对](QC-Qubit与KAPA定量.md) |
| Agilent | TapeStation 4200 D1000/HS D1000 | [已核对](QC-Agilent-TapeStation.md) |
| Agilent | Fragment Analyzer / Femto Pulse | 待核对 |

### 6. 上机测序

| 厂家 | 平台 | 状态 |
|------|------|------|
| Illumina | MiSeq 变性稀释全协议 + 各平台 loading 表 | [已核对](上机-Illumina.md) |
| MGI | 双 barcode 环化（ssCir） | [已核对](上机-MGI环化.md) |
| MGI | DNB 制备与各机型 loading | 待核对 |
| ONT | MinION/GridION（SQK-LSK114） | 待核对 |
| PacBio | Revio/Sequel（SMRTbell） | 待核对 |
| Element | AVITI | 待核对 |

## 已核对方案的关键差异速查

| 环节 | 方案 A | 方案 B | 差异点 |
|------|--------|--------|--------|
| 末端修复 | NEB：20 ℃ 30 min → 65 ℃ 30 min | KAPA：同温度但热盖要 85 ℃ | 热盖温度 |
| 纯化 | NEB：0.4×/0.2× 双 SPRI | KAPA：0.8× 单次 | 磁珠比例与策略 |
| 建库路线 | Illumina DNA Prep：转座酶 55 ℃ 15 min 一步 | NEB/KAPA：片段化→修复→连接 | 酶法 vs 转座 |
| 杂交温度 | Twist：70 ℃ 16 h | 常见误区：65 ℃ | 5 ℃ 差异影响特异性 |
| 文库定量 | Qubit：总量 | KAPA qPCR：可扩增量，需 452/片段校正 | 两者不可互换 |
| Loading | MiSeq 12 pM | NextSeq 2000 750 pM | 相差两个量级，不能套 |

## 使用方式

1. 先确认手头试剂盒/设备的**货号与版本**，不同版本体积可能变化。
2. 打开对应厂家页，按步骤表逐条执行；“操作经验/原厂注意点”均取自手册原文。
3. 计算用交互页「计算与成本」；湿实验检查点用「湿实验」。
4. 交互页「厂家方案」视图含 **36 项已核对协议**（提取 18：DNA 类 12 + RNA 类 6、片段化 1、建库 9、杂交 3、QC 3、上机 2；可按步骤/关键词筛选）与 **61 项市场全景目录**（已登记待核对，不写未核实参数）。「我的实验台」视图可勾选在用的试剂盒，自动生成专属操作手册并在会话中预填。
5. 全部 36 项协议的核对来源快照归档于 [references/手册快照/](../references/手册快照/README.md)（由 `tools/archive_sources.py` 生成，供第三方复验；个别镜像件版本已在索引中标注）。

> 所有已核对参数均来自原厂公开手册；版本更新后以最新手册为准。“待核对”项在未拿到原厂文档前不写体积，避免误导。
