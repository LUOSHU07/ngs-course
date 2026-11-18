/* 厂家方案数据：体积/温度/循环数均取自原厂手册，禁止“通用化”改写。 */
var VENDORS = [
  {
    id: "neb", cat: "建库", name: "NEB NEBNext Ultra II DNA（E7645 v6.1）",
    source: "https://www.neb.com/en/-/media/nebus/files/manuals/manuale7645.pdf",
    steps: [
      ["末端修复", "DNA 50 µL + End Prep 酶 3 µL + 缓冲液 7 µL = 60 µL", "20 ℃ 30 min → 65 ℃ 30 min，热盖 ≥75 ℃", "吹打 ≥10 次混匀"],
      ["接头连接", "产物 60 + 接头 2.5 + Ligation MM 30 + Enhancer 1 = 93.5 µL", "20 ℃ 15 min，热盖关闭", "≤100 ng 接头 1:10 稀释；<5 ng 1:25"],
      ["USER 酶切", "+3 µL USER", "37 ℃ 15 min，热盖 ≥47 ℃", "仅 NEBNext 接头需要"],
      ["纯化/片段选择", ">50 ng：0.4×+0.2× 双 SPRI；≤50 ng：87 µL（0.9×）", "室温 5 min，80% 乙醇 200 µL 洗 2 次", "17 µL 洗脱取 15 µL；其他片段查表"],
      ["PCR 扩增", "产物 15 + Q5 MM 25 + i7 5 + i5 5 = 50 µL", "98 ℃ 30 s →（98 ℃ 10 s → 65 ℃ 75 s）×N → 65 ℃ 5 min", "100 ng 3–4 循环；10 ng 6–7；1 ng 9–10；捕获用 1 µg 表"],
      ["终纯化", "+45 µL 磁珠（0.9×）", "乙醇洗 2 次", "33 µL 洗脱取 30 µL"]
    ],
    tips: ["Ligation Master Mix 很黏，吹打不足直接降低连接效率", "磁珠深棕有光泽时洗脱，发白开裂即过度干燥", "接头过量是 dimer 主因，PCR 前必须去除", "低输入按表稀释接头，不要用原液"]
  },
  {
    id: "kapa", cat: "建库", name: "KAPA HyperPrep（KR0961 v7.19）",
    source: "https://rochesequencingstore.com/wp-content/uploads/2022/07/KAPA-HyperPrep-Kit-Technical-Data-Sheet.pdf",
    steps: [
      ["末端修复/加A", "DNA 50 + 缓冲液 7 + 酶 3 = 60 µL", "20 ℃ 30 min → 65 ℃ 30 min，热盖 85 ℃", "缓冲液+酶可预混，室温稳定 ≤24 h"],
      ["接头连接", "60 + 接头 5 + 水 5 + Ligation Buffer 30 + Ligase 10 = 110 µL", "20 ℃ 15 min（低输入可延至 4 h 或 2–8 ℃ 过夜）", "延长连接升转化率也升 dimer"],
      ["连接后纯化", "+88 µL KAPA cleanup beads（0.8×）", "室温 5–15 min，乙醇 200 µL 洗 2 次", "25 µL 洗脱取 20 µL（双面选择则 55/50）"],
      ["PCR 扩增", "HiFi ReadyMix 25 + Primer Mix 5 + 文库 20 = 50 µL", "98 ℃ 45 s →（98 ℃ 15 s → 60 ℃ 30 s → 72 ℃ 30 s）×N → 72 ℃ 1 min", "100 ng：2–3（100 ng 产量）/ 6–7（1 µg 产量）"],
      ["终纯化", "+50 µL 磁珠（1.0×）", "乙醇洗 2 次", "洗脱后 4 ℃ 1–2 周或 −20 ℃ 3 个月"]
    ],
    tips: ["65 ℃ 步骤热盖设 85 ℃，不要用常规 105 ℃", "磁珠过度干燥降低产量", "PCR-free 路线 ≥50 ng 输入可省略扩增", "预混液 -20 ℃ 可存 4 周"]
  },
  {
    id: "ilmn", cat: "建库", name: "Illumina DNA Prep（1000000025416 v12）",
    source: "https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/1000000025416_12_idp.pdf",
    steps: [
      ["Tagmentation", "DNA 1–500 ng（补水到 30 µL）+ Master Mix 20 µL（BLT 11 + TB1 11）= 50 µL", "55 ℃ 15 min → 10 ℃，热盖 100 ℃", "BLT 涡旋 10 s，禁止离心；勿用 <2 ℃ 保存过的 BLT"],
      ["PTC 终止洗涤", "+10 µL TSB；TWB 100 µL 洗 2 次", "37 ℃ 15 min → 10 ℃，热盖 100 ℃", "最后留 100 µL TWB 防磁珠干燥"],
      ["PCR 扩增", "Master Mix 40 µL（EPM 22 + 水 22）+ index 10 µL", "68 ℃ 3 min → 98 ℃ 3 min →（98 ℃ 45 s → 62 ℃ 30 s → 68 ℃ 2 min）×N → 68 ℃ 1 min", "1–9 ng 12 循环；10–24 ng 8；25–49 ng 6；50–500 ng 5"],
      ["双面纯化", "45 µL 上清 + 40 µL 水 + 45 µL IPB；再 15 µL IPB + 125 µL 上清", "各室温 5 min，乙醇 200 µL 洗 2 次", "32 µL RSB 洗脱取 30 µL；<500 bp 片段改 81 µL IPB 单切"]
    ],
    tips: ["TWB 含表活，慢吹打防气泡", "10 bp index 与旧 8 bp 不兼容，测序设置要改", "<100 ng 输入必须逐个定量，不能统一体积 pooling", "血/唾液样本有专用裂解流程"]
  },
  {
    id: "twist", cat: "杂交", name: "Twist Target Enrichment（DOC-001085 Rev 4.0）",
    source: "https://8494339.fs1.hubspotusercontent-na1.net/hubfs/8494339/Protocol_NGS_TargetEnrichmentStandardHybridization_v1Protocol_2FEB22_Rev4.0.pdf",
    steps: [
      ["文库 pooling", "等摩尔混合 8–24 文库，总 500 ng–1 µg，浓缩 ≤8 µL", "—", "index 无冲突"],
      ["杂交", "Hyb Mix 20 + Panel 4 + 水 0–4 = 28 µL；+ Enhancer 30 µL 覆盖", "70 ℃ 16 h，热盖 85 ℃", "Hyb Mix 先 65 ℃ 溶 10 min 再冷却；封紧防蒸发"],
      ["捕获", "100 µL 链霉磁珠 + 200 µL Binding Buffer 预洗", "室温旋转 30 min", "从 70 ℃ 立即转移；降温 5 min 脱靶 +10–20%"],
      ["洗涤", "Wash 1 200 µL；Wash 2 200 µL ×3", "48 ℃ 每次 5 min", "磁珠不涡旋、不干燥"],
      ["捕获后 PCR", "磁珠浆 22.5 + 引物 2.5 + Amp Mix 25 = 50 µL", "98 ℃ 45 s →（98 ℃ 15 s → 60 ℃ 30 s → 72 ℃ 30 s）×N → 72 ℃ 1 min", "循环数按 panel 规模预实验"],
      ["纯化 QC", "+50 µL DNA Purification Beads（1.0×）", "乙醇洗 2 次", "洗脱 30 µL；主峰 375–425 bp"]
    ],
    tips: ["Twist 杂交是 70 ℃，不是 65 ℃", "杂交结束到磁珠的转移速度是特异性关键", "最后一次洗后磁珠保持湿润", "剩余磁珠浆可 −20 ℃ 留存复测"]
  },
  {
    id: "qiagen", cat: "提取", name: "QIAGEN DNeasy Blood & Tissue（HB-2061-004）",
    source: "https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/hb-2061-004-hb-dny-blood-tissue-0623-ww",
    steps: [
      ["血液上样", "PK 20 µL + 血 50–100 µL（PBS 补 220 µL）", "—", "有核红细胞血 5–10 µL；肝素抑制下游酶"],
      ["裂解", "+Buffer AL 200 µL 涡旋", "56 ℃ 10 min", "AL 不含乙醇；必须立即混成均相"],
      ["加醇", "+96–100% 乙醇 200 µL 涡旋", "—", ""],
      ["结合上柱", "转入 DNeasy 柱", "6000×g 1 min", "弃滤液（含胍盐，勿混漂白剂）"],
      ["洗 AW1", "500 µL", "6000×g 1 min", ""],
      ["洗 AW2", "500 µL", "20,000×g 3 min", "干燥膜；残醇抑制建库"],
      ["洗脱", "AE 直接加膜中央，≤200 µL", "室温 1 min → 6000×g 1 min", "AE pH 9.0；首洗出 60–80%"],
      ["组织变体", "≤25 mg（脾 ≤10 mg）+ ATL 180 µL + PK 20 µL", "56 ℃ 至完全裂解", "之后 AL 200 + 乙醇 200，步骤同血液"]
    ],
    tips: ["样本分装避免反复冻融", "AW1/AW2 浓缩液先按瓶标加乙醇", "取柱勿让柱头接触滤液", "组织裂解后在 ATL 中室温可存 6 个月"]
  },
  {
    id: "covaris", cat: "片段化", name: "Covaris M220（PN 010252 Rev J）",
    source: "https://www.covaris.com/wp-content/uploads/pn_010252.pdf",
    steps: [
      ["microTUBE-130：150/200/300 bp", "PIP 50 W，DF 20%，CpB 200", "330 / 150 / 65 s，20 ℃", "样品 130 µL，TE pH 8.0"],
      ["microTUBE-130：400/500/800 bp", "PIP 50 W，DF 10/10/5%，CpB 200", "70 / 50 / 52 s", ""],
      ["microTUBE-130：1000/1500 bp", "PIP 50 W，DF 2%，CpB 200", "90 / 20 s", ""],
      ["microTUBE-50：350 bp（55 µL）", "PIP 75 W，DF 10%，CpB 200", "80 s", "确认水与 insert 接触，水槽 16 mL"],
      ["microTUBE-15：350 bp（15 µL）", "PIP 30 W，DF 20%，CpB 50", "42 s", "上机前 3000×g 离心 30 s"],
      ["miniTUBE：2/3/5 kb（200 µL）", "PIP 8/6/8 W，DF 20%，CpB 1000", "900（7 ℃）/ 600 / 600 s", "6–20 kb 改用 g-TUBE"]
    ],
    tips: ["gDNA 需 >10 kb，低质量 DNA 先做时间梯度", "管子不能用于储存，处理完立即转移", "每种管子对应专用 Holder/Insert", "目标分布以 Bioanalyzer 电泳图为准"]
  },
  {
    id: "qubit", cat: "QC", name: "Qubit dsDNA HS（MAN0002326 Rev C.0）",
    source: "https://documents.thermofisher.com/TFS-Assets/LSG/manuals/Qubit_dsDNA_HS_Assay_UG.pdf",
    steps: [
      ["配工作液", "Reagent 1:200 稀释进 Buffer", "塑料管配制，禁玻璃容器", "8 样本约配 2 mL"],
      ["标准管", "190 µL 工作液 + 10 µL Standard ×2", "—", "校准用，按顺序插入"],
      ["样品管", "180–199 µL 工作液 + 1–20 µL 样品", "终体积 200 µL", ""],
      ["混匀孵育", "涡旋 3–5 s 避免气泡", "室温孵育 2 min", "避光可稳定 3 h"]
    ],
    tips: ["量程 5 pg/µL–120 ng/µL", "标签贴管盖不贴管壁", "回室温再测，勿手捂管", "异常缓冲液要同步加到标准管"]
  },
  {
    id: "kapaqpcr", cat: "QC", name: "KAPA 文库 qPCR 定量（KR0405 v9.17）",
    source: "https://rochesequencingstore.com/wp-content/uploads/2022/07/KAPA-Library-Quantification-Kit-Technical-Data-Sheet.pdf",
    steps: [
      ["文库稀释", "1:1000–1:100,000，10 mM Tris pH 8.0–8.5 + 0.05% Tween 20", "现配现用，冰上", "严禁用水；大稀释拆成连续小步"],
      ["反应体系", "SYBR+Primer 12 µL + 模板 4 µL + 水至 20 µL", "—", "标准品从 Std 6→1 顺序加"],
      ["程序", "95 ℃ 5 min →（95 ℃ 30 s → 60 ℃ 45 s）×35", ">700 bp 文库延伸 90 s", "熔解曲线可选"],
      ["合格线", "效率 90–110%、R²≥0.99、ΔCq 3.1–3.6、NTC 晚 3 循环", "不满足重做", "复孔差 ≤0.2 循环"],
      ["换算", "浓度 ×（452 / 平均片段 bp）× 稀释倍数", "452 为标准品长度", "平均片段取 TapeStation 主峰"]
    ],
    tips: ["标准品 20→0.0002 pM 共 6 点", "每文库至少两个稀释度", "每 assay 带一个内参（200 pM 质控/旧文库/PhiX）", "Qubit 与 qPCR 差 >2 倍先查连接效率"]
  },
  {
    id: "miseq", cat: "上机", name: "Illumina MiSeq 变性稀释（15039740 Rev A）",
    source: "https://content.ilabsolutions.com/wp-content/uploads/2013/04/MiSeq-Preparing-DNA-libraries.pdf",
    steps: [
      ["配 0.2 N NaOH", "水 800 µL + 1.0 N NaOH 200 µL", "当天新鲜配制", "配 1 mL 减小移液误差"],
      ["文库变性", "4 nM 文库 5 µL + 0.2 N NaOH 5 µL", "室温 5 min", "涡旋 + 280×g 1 min"],
      ["中和", "+990 µL 预冷 HT1 → 20 pM（1 mM NaOH）", "置冰上", "NaOH 终浓度必须 ≤1 mM"],
      ["终稀释", "20 pM 母液 180/240/300/360/450 µL + HT1 补 600 µL", "→ 6/8/10/12/15 pM", "MiSeq 常规 12 pM 起步"],
      ["PhiX", "10 nM → 4 nM → 同法变性 → 12.5 pM", "1%；低多样性 ≥25%", "20 pM 变性 PhiX 可 −20 ℃ 存 3 周"],
      ["上样", "刺穿 Load Samples 孔，加 600 µL", "—", "勿刺其他孔、勿触铝箔"]
    ],
    tips: ["各平台 loading 不可互套：MiSeq 12 pM、NextSeq 500/550 1.2–1.3 pM、NextSeq 2000 750 pM、NovaSeq X 150 pM", "HT1 必须预冷，变性后立即置冰", "低多样性文库需 C/T 通道首循环有信号", "每跑记录 qPCR 浓度、变性时间、终 pM、批号"]
  },
  {
    id: "idt", cat: "杂交", name: "IDT xGen Hybridization Capture（NGS-10122-PR v4）",
    source: "https://www.veritastk.co.jp/pdf/xgen-hybridization-capture-of-dna-libraries.pdf",
    steps: [
      ["文库+Blocker", "Human Cot DNA 5 µL + Universal Blockers 2 µL = 7 µL/反应；加 500 ng 文库", "干燥至干", "Blocker 按接头选 TS/10 bp TS/NXT"],
      ["杂交", "2X Hyb Buffer 8.5 + Enhancer 2.7 + 探针 4 µL，混合液 17 µL 重悬干燥 DNA", "65 ℃ 4 h（GC 高/小 panel 至 16 h）", "同项目时长一致；封严防蒸发"],
      ["磁珠捕获", "Dynabeads M-270 50 µL，100 µL Bead Wash Buffer 洗 3 次，17 µL 重悬", "室温 45 min", "磁珠先回室温"],
      ["洗涤", "Wash 1 + stringent wash：65 ℃ 预热 ≥15 min", "65 ℃ 各 5 min；再室温洗", "缓冲液必须真到 65 ℃"],
      ["捕获后 PCR", "xGen 扩增引物 + HiFi", "按 panel 优化循环", "AMPure XP 纯化，Tris pH 8.5 洗脱"]
    ],
    tips: ["单批 ≤32 样本，洗涤温度会失控", "杂交 4 h 是 IDT 标准，比 Twist 的 16 h 短", "蒸发过度是捕获失败主因", "热洗缓冲液提前 15 min 预热"]
  },
  {
    id: "mgi", cat: "建库", name: "MGI MGIEasy Fast FS V2.0（Manual 3.0）",
    source: "https://mgi-tech.com/uploads/files/20250818/f9e41c9729cb0df7ff07f9ddade2324b.pdf",
    steps: [
      ["片段化", "gDNA 1–1000 ng（TE 补 45 µL）+ FS Buffer II 10 + FS Enzyme II 5 = 60 µL", "30 ℃（≥200 ng 12 min；1 ng 22 min）→ 65 ℃ 15 min，热盖 70 ℃", "酶只能颠倒混匀；此步后不可停"],
      ["片段选择", "单面 <200 ng：48 µL En-Beads；双面 ≥200 ng：36+12 µL", "室温各 5 min", "45 µL En-TE 洗脱"],
      ["接头连接", "产物 45 + UDB Adapter 5 + Ligation Buffer 23 + Ligase 5 + Enhancer 2 = 80 µL", "25 ℃ 10 min，热盖 30 ℃", "接头稀释：>50 ng 原液；1 ng 50×"],
      ["连接后纯化", "+22 µL En-TE + 20 µL En-Beads", "160 µL 80% 乙醇洗 2 次", "干燥至无光泽不开裂；取 19 µL"],
      ["PCR", "产物 19 + PCR Enzyme Mix 25 + UDB Primer 6 = 50 µL", "1000 ng 3 循环；100 ng 4–5；1 ng 11–12", "循环严控，过循环引入 bias"],
      ["环化", "Dual Barcode Circularization Kit → ssCir → DNB", "或 Onestep DNB V1/V2", "MGI 独有步骤，Illumina 文库不适用"]
    ],
    tips: ["UDB Adapter 存放勿超 30 ℃", "每 lane ≥8 文库，碱基占比 12.5–62.5%", "Ligation Buffer 黏稠，涡旋 6×3 s", "DNB 是滚环产物，不是簇"]
  },
  {
    id: "ont", cat: "建库", name: "ONT Ligation Sequencing Kit V14（SQK-LSK114）",
    source: "https://nanoporetech.com/document/genomic-dna-by-ligation-sqk-lsk114",
    steps: [
      ["末端修复", "DNA 1 µg（47 µL）+ FFPE Repair Buffer v2 7 + Repair Mix 2 + Ultra II End-prep 3 = 60 µL", "约 35 min（含纯化）", "酶禁涡旋；Buffer 沉淀/淡黄属正常"],
      ["接头连接", "产物 60 + LA 5 + LNB 25 + Salt-T4 Ligase 10 = 100 µL", "约 20 min", "推荐 Salt-T4（M0467）"],
      ["纯化", "AMPure XP 0.4X；洗液 LFB（富集 >3 kb）或 SFB（全片段）", "—", "连接后严禁乙醇洗（马达蛋白变性）"],
      ["上样", "<1 kb 100 fmol；1–10 kb 35–50 fmol；>10 kb 300 ng", "芯片先室温 20 min", "Flow Cell Check 先测孔数"]
    ],
    tips: ["AXP 比例 <0.4 会丢片段", "LIB 磁珠沉降快，用前立即混匀", "润洗前排净气泡，气泡毁孔", "先跑 Lambda 对照再正式样本"]
  },
  {
    id: "pacbio", cat: "建库", name: "PacBio SMRTbell prep kit 3.0（REV09）",
    source: "https://www.pacb.com/wp-content/uploads/Procedure-checklist-Preparing-whole-genome-and-metagenome-libraries-using-SMRTbell-prep-kit-3.0.pdf",
    steps: [
      ["剪切+纯化", "Megaruptor 3 至 15–20 kb；1.0X SMRTbell beads", "室温 10 min", "47 µL Low TE 洗脱"],
      ["修复加A", "DNA 46 + Repair MM 14（buffer 8 + End repair 4 + repair 2）= 60 µL", "37 ℃ 30 min → 65 ℃ 5 min，热盖 ≥75 ℃", "酶不涡旋"],
      ["接头连接", "产物 60 + adapter 4 + Ligation mix 30 + enhancer 1 = 95 µL", "20 ℃ 30 min，热盖 ≥30 ℃", "index 样本用 barcoded adapter"],
      ["核酸酶", "Nuclease buffer 5 + Nuclease mix 5 加入 40 µL = 50 µL", "37 ℃ 15 min", "储存前必须去核酸酶"],
      ["片段选择", "35% AMPure PB 稀释液，3.1X（155 µL）", "室温 20 min", "稀释液 4 ℃ 可存 30 天"],
      ["ABC 上机", "退火 25 + 文库 25；聚合酶 50（buffer 47 + 酶 3）", "结合后 1X 纯化，无乙醇、不干燥", "文库必须 <60 ng/µL；Loading buffer 洗脱"]
    ],
    tips: ["磁珠回室温 ≥30 min，用前立即涡旋", "SRE 50 ℃ 1 h 去短片段", "总回收率 10–32% 属正常", "Femto Pulse 用 250 pg/µL 测"]
  },
  {
    id: "qiagencna", cat: "提取", name: "QIAGEN QIAamp Circulating NA（cfDNA 真空柱式）",
    source: "https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/en-qiaamp-circulating-nucleic-acid-handbook",
    steps: [
      ["血浆前处理", "室温解冻后置冰；16,000×g 4 ℃ 5 min", "去冷沉淀与碎片", "留底部 ≤0.5 mL；准确记录体积"],
      ["裂解", "每 mL 血浆：PK 0.1 mL + ACL 0.8 mL，涡旋 30 s", "60 ℃ 30–60 min", "以试剂盒手册为准；实验室 SOP 常用 60 min"],
      ["结合", "+ACB 1.8 mL/mL 血浆，涡旋 30 s", "冰上 10 min", ""],
      ["真空抽滤", "裂解液经 20 mL 延长管过 QIAamp Mini 柱", "真空 ≥300 mbar", "柱容量按 ≤10 mL 血浆优化，超量分柱"],
      ["洗涤", "ACW1 600 µL → ACW2 750 µL → 96–100% 乙醇 750 µL", "真空下依次抽干", ""],
      ["干燥洗脱", "全速离心 3 min；开盖 56 ℃ 6 min", "AVE 60–80 µL 加膜中央，室温 5–10 min，全速 2 min", "二次洗脱 40–50 µL；低量样本首洗可降到 50 µL"]
    ],
    tips: ["溶血是最大污染源，血浆发黄即记录", "每柱抽干立即关对应 VacValve", "cfDNA 主峰 ~167 bp，Qubit HS 加样 10–20 µL", "Qubit 定量后 −80 ℃ 保存"]
  },
  {
    id: "kaparna", cat: "建库", name: "KAPA RNA HyperPrep + RiboErase HMR（KR1351 v1.16）",
    source: "https://genome.med.harvard.edu/documents/libraryPrep/KAPAHyperPrepKitwithRiboEraseProtocol.pdf",
    steps: [
      ["rRNA 杂交去除", "RNA 10 µL + 杂交液 10 µL；+RNase H 液 5 µL = 25 µL", "降至 45 ℃；45 ℃ 30 min", "输入 25 ng–1 µg，≤10 µL RNase-free 水"],
      ["去除后纯化", "+55 µL Pure Beads（2.2X），弃 75 µL 上清", "80% 乙醇 200 µL×2", "洗脱 22 µL 取 20 µL"],
      ["DNase 消化", "+混合液 22 µL（Buffer 2.2 + DNase 2 + 水 17.8）", "37 ℃ 30 min", "+44 µL 磁珠纯化"],
      ["片段化", "FPE Buffer 2X 11 + 水 11 重悬，取 20 µL", "94 ℃ 8 min（100–200 bp）/ 94 ℃ 6 min（200–300）/ 85 ℃ 6 min（300–400）", "FFPE 用 65 ℃ 1 min"],
      ["一链合成", "+混合液 10 µL（Buffer 11 + KAPA Script 1）= 30 µL", "25 ℃ 10 min → 42 ℃ 15 min → 70 ℃ 15 min", ""],
      ["二链+加A", "+混合液 30 µL（Marking Buffer 31 + 酶 2）= 60 µL", "16 ℃ 30 min", "dUTP 标记，链特异性"],
      ["接头连接", "60 + 连接液 45（Buffer 40 + Ligase 10）+ adapter 5 = 110 µL", "孵育按手册 step 9", "adapter 1.5 µM 或 7 µM"],
      ["两次纯化", "① +70 µL 磁珠；② +35 µL PEG/NaCl", "各乙醇洗 2 次", "第二次去 dimer，不可省；取 20 µL"],
      ["文库扩增", "20 + 混合液 30（HiFi 25 + Primer 5）= 50 µL", "25–100 ng 11–15 循环；101–250 ng 9–12；251–500 ng 7–10；>500 ng 6–8", "+50 µL 磁珠纯化，洗脱取 20 µL"]
    ],
    tips: ["磁珠室温平衡 ≥30 min", "PEG/NaCl −20 ℃ 不冻属正常", "rRNA 残留高先查 45 ℃ 去除步骤", "第二次纯化后可用 qPCR 定量定循环"]
  },
  {
    id: "tapestation", cat: "QC", name: "Agilent TapeStation 4200/4150（ScreenTape 各 assay）",
    source: "https://protocols.hostmicrobe.org/tapestation-protocol",
    steps: [
      ["D1000（1–50 ng/µL）", "Buffer 3 µL + 样品 1 µL；A1 位 Buffer 3 + Ladder 1 µL", "室温平衡 ≥30 min", "看主峰与 128 bp dimer"],
      ["HS D1000（<1 ng/µL）", "Buffer 2 µL + 样品 2 µL", "同上", "低浓度文库用"],
      ["D5000（1–50 ng/µL）", "Buffer 10 + 样品 1 + Ladder 1 µL", "同上", "大片段文库"],
      ["Genomic DNA", "Buffer 10 + 样品 1 + Ladder 1 µL", "同上", "出 DIN 值"],
      ["RNA / HS RNA", "Buffer 5+1 µL / 1+2 µL", "72 ℃ 3 min → 冰上 2 min", "必须变性；出 RIN，FFPE 看 DV200"],
      ["上机", "联管方向正确；ScreenTape 彩面朝自己插入闪灯槽", "软件勾选孔数", "不用 ladder 时 A1 右键 Electronic Ladder"]
    ],
    tips: ["气泡是峰形异常主因，加样后点离轻弹", "超量程先稀释，过饱和峰会平顶", "dimer 判断结合 qPCR，避免误判重做", "FFPE 用 DV200 不用 RIN"]
  },
  {
    id: "magmax", cat: "提取", name: "Thermo MagMAX Ultra 2.0 + KingFisher（MAN0017325 F）",
    source: "https://documents.thermofisher.com/TFS-Assets/LSG/manuals/MAN0017325_MagMAX_MultiSampleUltra2_WholeBlood_UG.pdf",
    steps: [
      ["摆板", "Wash I、Wash II×2、Elution、Tip Comb 按机位表", "全程室温 20–25 ℃", "Flex 与 Apex 板位不同"],
      ["Sample Plate", "先 Enhancer → 样本 → 最后 Proteinase K", "板上消化约 20 min", "顺序固定；禁肝素钠血"],
      ["Bead Mix（200 µL 档）", "Lysis/Binding 200 + Beads 20 = 220 µL/孔", "消化期间现配", "400 µL 档 440 µL；1 mL 档 1100 µL；2 mL 档 2200 µL"],
      ["洗涤", "Wash I 500–5000 µL；Wash II（自配 80% 乙醇）两次", "按档位查表", "程序 .bdz（Flex）/.kfx（Apex）按档下载"],
      ["洗脱", "50–100 µL（96 头）/ 150–300 µL（24 头）", "结束立即转移", "−20 ℃ 长期保存"]
    ],
    tips: ["Bead Mix 黏稠，慢吸慢打防气泡", "批量前先用 8 样本验证", "Lysis/Binding 发黄属正常", "每板留空白孔监控交叉污染"]
  },
  {
    id: "nebrna", cat: "建库", name: "NEBNext Ultra II Directional RNA（E7760/E7765 v7.0）",
    source: "https://www.neb.com/en/-/media/nebus/files/manuals/manuale7760_e7765.pdf",
    steps: [
      ["mRNA 富集", "Oligo d(T)25 磁珠 20 µL；RNA 50 µL；Binding Buffer 50 µL", "65 ℃ 5 min → 室温 5 min；80 ℃ 2 min 洗脱→二次结合", "200 µL Wash Buffer 洗 2×2"],
      ["片段化", "一链缓冲液+随机引物 11.5 µL 重悬", "94 ℃ 15 min → 冰上 1 min", "取 10 µL 上清"],
      ["一链合成", "RNA 10 + Strand Specificity 8 + 酶 2 = 20 µL", "25 ℃ 10 min → 42 ℃ 15 min → 70 ℃ 15 min", ">200 bp 插入 42 ℃ 延至 50 min"],
      ["二链合成", "产物 20 + dUTP Buffer 8 + 酶 4 + 水 48 = 80 µL", "16 ℃ 1 h，热盖 ≤40 ℃", "1.8X（144 µL）纯化，53 µL 洗脱取 50"],
      ["末端修复", "50 + End Prep Buffer 7 + 酶 3 = 60 µL", "20 ℃ 30 min → 65 ℃ 30 min", "与 Ultra II DNA 同体系"],
      ["接头连接", "60 + 接头 2.5 + Enhancer 1 + MM 30 = 93.5 µL；+USER 3", "20 ℃ 15 min → USER 37 ℃ 15 min", "接头稀释：1000–250 ng 5×；100–10 ng 100×"],
      ["PCR", "15 + Q5 25 + i7 5 + i5 5 = 50 µL", "98 ℃ 30 s →（98/65）×N → 65 ℃ 5 min", "循环按 RNA 输入查 Table 1A.9.3B"],
      ["终纯化", "0.9X（45 µL）", "乙醇洗 2 次", "23 µL 洗脱取 20 µL"]
    ],
    tips: ["过扩增出现 ~1000 bp 第二峰，循环按输入控制", "128 bp dimer：补到 50 µL 再做一次 0.9X", "接头先在冰浴 Dilution Buffer 稀释，禁与 MM 预混", "dUTP 法，分析时按链特异设置"]
  },
  {
    id: "rneasy", cat: "提取", name: "QIAGEN RNeasy Mini（74104/74106，总 RNA 柱式）",
    source: "http://clough.cropsci.illinois.edu/protocols/qiagen/RNeasy_Mini_Handbook.pdf",
    steps: [
      ["试剂准备", "RLT 加 β-ME 10 µL/mL；RPE 加 4 倍体积乙醇", "全程室温", "RLT 出沉淀先回溶"],
      ["裂解", "细胞 ≤1×10⁷、组织 ≤30 mg + Buffer RLT", "匀浆：QIAshredder 全速 2 min", "高 RNA 细胞系 COS ≤3×10⁶"],
      ["结合", "+1 倍体积 70% 乙醇吹打，勿离心", "上柱 ≤700 µL", "8,000×g 15 s"],
      ["洗涤", "RW1 700 µL；RPE 500 µL×2", "RPE 第二次 8,000×g 2 min 干燥膜", "做柱上 DNase 时跳过第一个 RW1"],
      ["柱上 DNase", "RDD 70 + DNase I 10 = 80 µL 直接加膜", "20–30 ℃ 15 min；再 RW1 350 µL", "勿粘壁，否则消化不全"],
      ["洗脱", "RNase-free 水 30–50 µL 点膜中央", "8,000×g 1 min", ">30 µg 预期时二次洗脱"]
    ],
    tips: ["A260/280 低多为乙醇带入，重做 RPE 长离心", "洗脱液沿壁加会降低回收", "组织离体立即液氮/RNA later，防表达谱漂移", "RLT/RW1 禁接触漂白剂"]
  },
  {
    id: "maxwell", cat: "提取", name: "Promega Maxwell RSC Blood DNA（AS1400，TM419）",
    source: "https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/maxwell-rsc-blood-dna-kit-protocol.pdf?la=en",
    steps: [
      ["预处理", "PK 30 µL → 全血 ≤300 µL → Lysis Buffer 300 µL", "涡旋 10 s；56 ℃ 20 min", "顺序固定；EDTA/ACD/肝素管均可"],
      ["卡式盒", "印字面背对洗脱管；撕净封膜；柱塞入 #8；洗脱管加 Elution Buffer 50 µL", "—", "洗脱管只能用随盒 0.5 mL 管"],
      ["上样", "裂解液转入 #1 孔（Binding Buffer 所在）", "—", "#2 磁珠，#3–6 洗液，#7 空"],
      ["上机", "选 RSC Blood DNA 方法", "约 40 min", "中止运行样本全废"],
      ["收样", "柱塞应回 #8；取洗脱管盖紧", "−20 ℃ 保存", "卡式盒/柱塞/洗脱管一次性"]
    ],
    tips: ["裂解液红色=漏加 PK，绿色=正常", "50 µL 洗脱浓度优先，需体积可 50–200 µL", "每批跑对照血验证批间一致性", "托盘禁用漂白剂"]
  },
  {
    id: "mgicirc", cat: "上机", name: "MGI MGIEasy 双 barcode 环化（Manual 7.0）",
    source: "https://global-mgitech.com/wp-content/uploads/Documents/SOP-013-B02-185-7.0-MGIEasy-Dual-Barcode-Circularization-Kit-User-Manual-2.pdf",
    steps: [
      ["变性", "1 pmol PCR 产物 + TE 补 48 µL", "95 ℃ 3 min（盖 105 ℃）→ 冰上 2 min", "1 pmol = 主峰 bp×0.66 ng"],
      ["环化", "+Splint Buffer 11.6 + Ligase 0.5 = 12.1 µL", "37 ℃ 30 min（盖 45 ℃）", "紫盖试剂；混合液冰上配"],
      ["消化", "+Digestion Buffer 1.4 + Enzyme 2.6 = 4.0 µL", "37 ℃ 30 min（盖 45 ℃）", "白盖试剂；去线性残留"],
      ["终止", "+Stop Buffer 7.5 µL", "转入 1.5 mL 管", "立即加，勿延"],
      ["纯化", "Clean Beads 170 µL；乙醇 500 µL×2", "磁珠平衡 30 min", "晾干哑光不开裂，过干降得率"],
      ["洗脱 QC", "TE 22 µL 洗脱取 20 µL；Qubit ssDNA 定量", "得率 ≥80 fmol", "ssCir −20 ℃ 存 1 个月"]
    ],
    tips: ["得率低先查主峰定量与磁珠过干", "环化/消化同程序可连跑", "pooling barcode 组合须符合 UDB 规则", "DNB 制备按机型 Loading 手册"]
  },
  {
    id: "powersoil", cat: "提取", name: "QIAGEN DNeasy PowerSoil Pro（粪便/土壤微生物）",
    source: "https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/hb-2495-006-hb-dny-powersoil-pro-0623-ww",
    steps: [
      ["加样", "PowerBead 管 + ≤250 mg 样本 + CD1 800 µL", "短暂涡旋", "难裂解菌 65 ℃ 10 min 预处理"],
      ["破碎", "水平固定涡旋 10 min（>12 样本 +5–10 min）", "或 PowerLyzer/TissueLyser", "15,000×g 1 min 后转上清"],
      ["去抑制物", "+CD2 200 µL 涡旋 5 s；15,000×g 1 min 取 ≤700 µL", "CD2 含 IRT 去腐殖酸", "CD2 存 2–8 ℃"],
      ["结合上柱", "+CD3 600 µL 涡旋 5 s；分次 650 µL 上柱", "15,000×g 1 min/次", "CD3 沉淀 60 ℃ 回溶"],
      ["洗涤洗脱", "EA 500 µL；C5 按手册；空离干燥", "C6 50–100 µL 点膜中央", "C6 无 EDTA，DNA 须冻存"]
    ],
    tips: ["每批带空白提取对照监背景菌", "DNA 发黄+PCR 抑制=腐殖酸残留，查 CD2 步", "减剪切：70 ℃ 5 min×2 替代涡旋", "粪便用姊妹盒 PowerFecal Pro 同流程"]
  },
  {
    id: "magattract", cat: "提取", name: "QIAGEN MagAttract HMW DNA（长读长 HMW）",
    source: "https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/hb-1523-006-hb-magattract-hmw-dna-0320-ww",
    steps: [
      ["血液裂解", "PK 20 µL → 血 200 µL → RNase A 4 µL → AL 150 µL", "室温 30 min（或 65 ℃ 10 min）", "PK 勿直接入 AL"],
      ["组织裂解", "≤25 mg + ATL 220 + PK 20 µL", "56 ℃ 900 rpm 过夜", "完全裂解后继续"],
      ["结合", "+Suspension G 15 µL + MB 280 µL", "1,400 rpm 室温 3 min", "磁珠用前剧烈涡旋 ≥3 min"],
      ["洗涤", "MW1、PE（首用加乙醇）", "磁力架 ~1 min 澄清", "吸液沿远离珠团一侧"],
      ["洗脱", "AE 100–200 µL", "1,400 rpm 3 min", "200 µL 血典型 5–6 µg"]
    ],
    tips: ["定量减 A320 背景（磁珠残留）", "全程轻吹打，禁细吸头猛吸", "上 ONT/PacBio 前 Femto Pulse 看主峰 >50 kb", "革兰阳性先溶菌酶 37 ℃ 30 min–2 h"]
  },
  {
    id: "generead", cat: "提取", name: "QIAGEN GeneRead DNA FFPE（UNG 去伪突变）",
    source: "https://www.qiagen.com/en-US/resources/download/kitHandbookAndProtocol/hb-1757-002-hb-gr-dna-ffpe-0220-ww",
    steps: [
      ["脱蜡", "Deparaffinization Solution 160 µL 涡旋 10 s", "56 ℃ 3 min → 室温冷却", "<18 ℃ 凝固，30 ℃ 液化"],
      ["裂解", "+水 55 + FTB 25 + PK 20 µL", "56 ℃ 1 h", "脱蜡液分层属正常"],
      ["去交联", "同管", "90 ℃ 1 h", "更久更热加剧片段化"],
      ["UNG 修复", "取下层清相 + 水 115 + UNG 35 µL", "50 ℃ 1 h", "去 C>T 脱氨伪突变"],
      ["结合洗涤", "+AL 250 + 乙醇 250 µL；上柱 700 µL 分次", "AW1 500 → AW2 500 → 乙醇 250 µL", "离心 15–25 ℃，低温堵柱"],
      ["洗脱", "ATE 20–40 µL 点膜中央", "室温 1–5 min，最高速 1 min", "静置 5 min 提得率"]
    ],
    tips: ["变异检测前测 DV200", "UNG 步骤不可省，否则伪突变进列表", "起始量宁少勿多", "三台温浴 56/90/50 ℃ 提前预热"]
  },
  {
    id: "tiangen", cat: "提取", name: "天根 TIANamp 基因组 DNA（DP304，20170328）",
    source: "https://www.tiangen.com/upload/file/20220901/20220901155222_90016.pdf",
    steps: [
      ["红细胞裂解", "血 + 3×体积 RT122，颠倒混匀", "室温 5 min；10,000 rpm 1 min", "白细胞沉淀 + GA 200 µL"],
      ["消化", "+GB 200 µL + PK 20 µL", "70 ℃ 10 min 至清亮", "禽/鸟/两栖血 5–20 µL+GS 补足"],
      ["结合上柱", "+无水乙醇 200 µL 振荡 15 s，全部上 CB3", "12,000 rpm 30 s", "絮状沉淀一并上柱"],
      ["洗涤", "GD 500 µL → PW 600 µL×2（首用加乙醇）", "各 12,000 rpm 30 s", "PW 必须加乙醇"],
      ["干燥洗脱", "空离 2 min + 开盖晾 2 min", "TE 50–200 µL 点膜中央，RT 2 min", "乙醇残留抑制酶反应"]
    ],
    tips: ["1 mL 血分两次裂解再上柱", "TE 悬空滴膜中央", "晾干步骤不可省", "血凝块先用 CX1 液化柱"]
  },
  {
    id: "simgen", cat: "提取", name: "Simgen 新景 全血 DNA 小量（3001050，01/2022）",
    source: "https://www.simgen.cn/files/%E5%85%A8%E8%A1%80DNA%E5%B0%8F%E9%87%8F%E8%AF%95%E5%89%82%E7%9B%92%E8%AF%B4%E6%98%8E%E4%B9%A620211231-ut-20220105030914.pdf",
    steps: [
      ["溶血", "L1 300 µL + 全血 400 µL，猛摇 3–5 次", "剧烈涡旋 30 s", "无 PK 体系，剧烈混匀是关键"],
      ["沉淀", "+L2 300 µL，涡旋 30 s", "13,000 rpm 2 min", "L1:血:L2 严格 3:4:3"],
      ["上柱洗涤", "上清入柱 12,000 rpm 30 s；WA 500 → WB 600 µL", "各 12,000 rpm 30 s", "WA/WB 首用加乙醇，顺序不可换"],
      ["干燥", "置回 2 mL 管 14,000 rpm 1 min", "不可开盖晾干", "过度干燥不利洗脱"],
      ["洗脱", "TE 100–200 µL（56 ℃ 预热）点膜中央", "RT 1–15 min，12,000 rpm 30 s", "400 µL 血典型 5–15 µg"]
    ],
    tips: ["全程 15–20 min，比酶解法快一倍", "批量用管架猛摇 30 s 替代逐管涡旋", "2–8 ℃ 血勿存超两周", "黏稠血样吸头反复吸注辅助"]
  },
  {
    id: "cwbio", cat: "提取", name: "康为世纪 Universal Genomic DNA（CW2298，08/2023）",
    source: "https://www.cwbio.com/uploads/20240202/a5157d2aa7c53fde2aff3e2fc6f361d6.pdf",
    steps: [
      ["预处理", "血/细胞 + GTL 补 200 µL；组织 25 mg + GTL 180", "禽/鸟血 5–10 µL", "组织先研磨/匀浆"],
      ["消化", "+PK 20 µL + GL 200 µL，立即涡旋", "血/细胞 56 ℃ 10 min；组织 1–3 h（鼠尾 6–8 h）", "GL 结晶 56 ℃ 回溶"],
      ["结合上柱", "+乙醇 200 µL 立即涡旋，全部上 DM 柱", "12,000 rpm 1 min", "白色沉淀正常"],
      ["洗涤", "GW1 500 → GW2 500 µL（首用加乙醇）", "各 12,000 rpm 1 min", "提纯度可重复 GW2"],
      ["干燥洗脱", "空离 2 min + 室温晾数分钟", "GE 50–200 µL（65–70 ℃ 预热）RT 2–5 min", "DNA <1 µg 用 50 µL 洗脱"]
    ],
    tips: ["加 GL/乙醇后立即涡旋", "革兰阳性先溶菌酶 37 ℃ 30 min", "水洗脱须调 pH 7.0–8.5", "长期保存用 GE −20 ℃"]
  },
  {
    id: "magen", cat: "提取", name: "美基 HiPure Blood DNA（中量柱 1–10 mL 血）",
    source: "https://www.magentec.com.cn/upfile/2023041211151678.pdf",
    steps: [
      ["消化（1 mL 方案）", "PK 100 µL + 血 1 mL + AL 1 mL，颠倒 3–5 次", "最高速涡旋 1 min", "AL 黏稠，吸头先润洗"],
      ["结合", "+无水乙醇 1 mL 涡旋 1 min", "中量柱 5,000 rpm 3 min", "分次转移"],
      ["洗涤", "DW1 2 mL → DW2 3 mL×2（首用加乙醇）", "各 5,000 rpm 3 min", "2/3/5/10 mL 方案按表放大"],
      ["干燥", "空柱 5,000 rpm 10–15 min", "勿超 5,000 rpm", "乙醇去尽是下游成败"],
      ["洗脱", "AE 200 µL（65 ℃ 预热）点膜中央，RT 3 min", "5,000 rpm 3 min；二次洗脱", "一次回收 30–60%，二次 60–90%"]
    ],
    tips: ["混匀不充分是得率低首因", "痕量样本 AL 中加 2 µL Carrier RNA", "小量样本选 Mini 版（10–250 µL）", "自动化选 MagPure 磁珠线"]
  },
  {
    id: "vazyme", cat: "提取", name: "诺唯赞 FastPure DNA（DC112，V21.1）",
    source: "https://cellagentech.com/content/product_files/Vazyme/DC112_FastPure_Blood_Cell_Tissue_Bacteria_DNA_Isolation_Mini_Kit.pdf",
    steps: [
      ["血液消化", "ACL 补 200 µL + PK 20 + BCL 200 µL", "70 ℃ 10 min", "细胞/细菌用 56 ℃ 10 min"],
      ["组织消化", "ACL 200 + PK 20 µL，56 ℃ 至完全（0.5–3 h，鼠尾过夜）→ BCL 200", "脾肾 <10 mg", "革兰阳性先溶菌酶 37 ℃ 30 min"],
      ["结合上柱", "+无水乙醇 150 µL（注意非 200）", "12,000 rpm 1 min", "絮状沉淀一并上柱"],
      ["洗涤", "WA 500 µL → WB 600 µL×2（首用加乙醇）", "各 12,000 rpm 1 min", "空离 2 min + 开盖晾 2–5 min"],
      ["洗脱", "EB 50–200 µL（55 ℃ 预热）点膜中央", "RT 2–5 min，12,000 rpm 1 min", "洗脱液可回柱二次洗脱"]
    ],
    tips: ["血液 70 ℃ 与细胞 56 ℃ 勿混", "去 RNA：RNase A 4 µL 室温 2–5 min", "洗脱液 pH 须 8.0–9.0", ">200 µL 血换 DC111"]
  },
  {
    id: "zymo", cat: "提取", name: "Zymo Quick-DNA Miniprep Plus（D4068/69，PK 消化体系）",
    source: "https://files.zymoresearch.com/protocols/_d4068_d4069_quick-dna_miniprep_plus_kit.pdf",
    steps: [
      ["消化", "样本 ≤200 µL + BioFluid & Cell Buffer（红）200 µL + PK 20 µL", "55 ℃ 10 min（可过夜）", "PK：每管 20 mg + Storage Buffer 1040 µL，用后 −20 ℃"],
      ["组织", "≤25 mg + Solid Tissue Buffer（蓝）0.5×体积 + PK 10 µL", "55 ℃ 1–3 h 至溶解", "难裂解细菌换 D6005"],
      ["结合上柱", "+1 倍体积 Genomic Binding Buffer 混匀", "Zymo-Spin 柱 ≥12,000×g 1 min", "结合靠 GBB 而非乙醇"],
      ["洗涤", "DNA Pre-Wash 400 → g-DNA Wash 700 → 200 µL", "各 ≥12,000×g 1 min", ""],
      ["洗脱", "EB ≥50 µL（60–70 ℃ 预热）点基质", "RT 浸润 5 min，最高速 1 min", "回柱二次洗脱；最小 35 µL"]
    ],
    tips: ["现行手册是 PK 消化路线，无 Genomic Lysis Buffer", "洗脱液必须浸润基质满 5 min", "拭子：BioFluid 200+EB 200+PK 20，55 ℃ 10 min", "水洗脱 pH >6.0；血样勿超 200 µL"]
  },
  {
    id: "trizol", cat: "提取", name: "Thermo TRIzol（酚法总 RNA，MAN0001271）",
    source: "https://documents.thermofisher.com/TFS-Assets%2FLSG%2Fmanuals%2Ftrizol_reagent.pdf",
    steps: [
      ["裂解", "组织 50–100 mg 或细胞 5–10×10⁶ + TRIzol 1 mL 匀浆", "RT 5 min", "可选 12,000×g 5 min 去残渣"],
      ["分相", "+氯仿 0.2 mL 用力振摇，RT 静置", "12,000×g 15 min 4 ℃", "取水相，勿碰中间相"],
      ["沉淀", "水相 +异丙醇 0.5 mL，RT 孵育", "12,000×g 10 min 4 ℃", "比例 0.2:0.5:1.0 勿记错"],
      ["洗涤", "75% 乙醇 1 mL 重悬沉淀，涡旋后 4 ℃ 离心", "重复一次", "RNA 可在 75% 乙醇 −20 ℃ 存一年"],
      ["溶解", "弃乙醇短晾（勿过干）+ RNase-free 水 20–50 µL", "难溶 55–60 ℃ 助溶", "酚残留抑制下游，建库前柱纯化"]
    ],
    tips: ["TRIzol LS 比例不同勿混用", "分相不清：氯仿不纯/振摇不够/样本含有机溶剂", "废液禁接触漂白剂", "同一样本可顺序回收 DNA 与蛋白"]
  },
  {
    id: "mirneasy", cat: "提取", name: "QIAGEN miRNeasy Mini（含 miRNA，217004）",
    source: "https://mops.dkfz.de/fileadmin/legacy-files/Qiagen_miRNeasy_Mini_Handbook.pdf",
    steps: [
      ["裂解", "组织 ≤50 mg/细胞 ≤1×10⁷ + QIAzol 700 µL", "RT 5 min", "TissueLyser：5 mm 钢珠 20 Hz 2 min"],
      ["分相", "+氯仿 140 µL 振摇 15 s，RT 2–3 min", "12,000×g 15 min 4 ℃", "取水相约 400 µL"],
      ["结合", "水相 +1.5 倍体积 100% 乙醇，吹打混匀勿离心", "分次上 RNeasy 柱", "保留 ≥18 nt 小 RNA"],
      ["洗涤", "RWT 700 → RPE 500 → RPE 500", "各 15 s；末次 RPE 2 min 干膜", "RWT/RPE 首用加乙醇"],
      ["洗脱", "RNase-free 水 30–50 µL 点膜", "≥8,000×g 1 min", ">30 µg 二次洗脱"]
    ],
    tips: ["做 small RNA-seq 必须用小 RNA 保留方案", "柱上 DNase 一般不需（可选附录 B）", "单独富集 <200 nt 需 MinElute 74204", "测纯度用 10 mM Tris pH 7.5 稀释"]
  },
  {
    id: "rnaprep", cat: "提取", name: "天根 RNAprep Pure Tissue（DP431，含柱上 DNase）",
    source: "https://en.tiangen.com/upload/file/20250701/20250701093814_66511.pdf",
    steps: [
      ["准备", "RL 加 β-ME 至 1%（现配）；RW 加乙醇；DNase 1500 U 溶 550 µL", "工作液：DNase 10+RDD 70", "β-ME 配后 2–8 ℃ 存 1 月"],
      ["裂解", "组织 10–20 mg 液氮研磨 + RL 300 µL → +ddH₂O 590 + PK 10 µL", "按手册温育后离心取上清", "细胞按表加 RL；细菌溶菌酶预处理"],
      ["结合上柱", "上清 +1 倍体积 70% 乙醇（通常 350 µL）", "分次上 CR3 柱", ">700 µL 分批过柱"],
      ["DNase 消化", "RW1 350 洗 → DNase 工作液 80 µL 点膜中央", "室温消化（按手册）→ RW1 350 再洗", "本步去 gDNA 不可省"],
      ["洗涤洗脱", "RW 500 µL×2（首用加乙醇）→ 空离", "ddH₂O 30–100 µL 点膜洗脱", "勿低于 30 µL"]
    ],
    tips: ["与 DP304（DNA）缓冲液命名不同别混放", "液氮速冻后研磨防 RNase", "微量样本选 DP420/血液 DP433", "RW 忘加乙醇 = 全损"]
  },
  {
    id: "rnavazyme", cat: "提取", name: "诺唯赞 FastPure Total RNA V2（RC112，6 min）",
    source: "https://www.biorbyt.com/images/pub/media/additional_documents/New_site/Manual/vazyme/Vazyme_RC112_Manual-V22.2.pdf",
    steps: [
      ["裂解", "组织 10–20 mg（肝 350）或细胞 <5×10⁶ + RL 500 µL", "冰上匀浆", "无 β-ME/酚氯仿"],
      ["去 gDNA", "全液过 gDNA-Filter III，收集滤液弃柱", "12,000 rpm 30 s", "无需 DNase 消化"],
      ["结合", "滤液 +0.5× 无水乙醇（肝：1× 50% 乙醇）", "浑浊正常直接用", "肝组织分支勿省略"],
      ["洗涤", "RW1 700 → RW2 700 → RW2 500（RW2 加乙醇）", "前两次 30 s；末次 2 min", "柱壁残盐沿壁加 RW2"],
      ["洗脱", "RNase-free ddH₂O 50–200 µL（65 ℃ 预热）", "RT 1–5 min，12,000 rpm 1 min", "可二次洗脱；柱容量 200 µg"]
    ],
    tips: ["组织 ≤20 mg、肝脾肾 ≤10 mg 勿超量", "RC101 产量更高/RC112 更快，按需求选", "电泳槽 3% 双氧水泡 20 min", "柱碰滤液回管补离 1 min"]
  },
  {
    id: "ilmnmrna", cat: "建库", name: "Illumina Stranded mRNA Prep（v02）",
    source: "https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/RNA/illumina-stranded-mrna-reference-guide-1000000124518-02.pdf",
    steps: [
      ["mRNA 捕获", "RNA 25 µL（25–1000 ng）+ RPBX 25 µL", "65 ℃ 5 min → 室温结合", "提取须含 DNase"],
      ["片段化", "EPH3 10.5 + BBB 25 µL", "94 ℃ 8 min", "转移 17 µL"],
      ["一链", "+FSA 混合液 8 µL（含 RVT 1）", "FSS ~43 min（25/42/70 ℃）", "放线菌素 D 保链特异"],
      ["二链", "+SMM 25 µL（dUTP）= 50 µL", "SSS ~1 h（16 ℃）", "AMPure 90 µL 纯化取 17.5"],
      ["加A+锚定", "+ATL4 12.5（ATAIL ~38 min）→ 锚定+LIGX → STL 5 终止", "室温", "纯化取 20 µL"],
      ["扩增", "文库 20 + EPM 20 + UDP index 10 = 50 µL", "25 ng 15 循环 / 100 ng 13 / 1000 ng 10", "AMPure 50 µL 纯化取 15"]
    ],
    tips: ["T-overhang 致 Read1 首循环低多样性，需 Trim 1", "index 在 PCR 才加入，此前不可混样", "转移上清勿带 RPBX 磁珠", "NextSeq 用 KAPA qPCR（1:10000 稀释）"]
  },
  {
    id: "hypercap", cat: "杂交", name: "Roche KAPA HyperCap v3.2（55 ℃ 杂交）",
    source: "https://rochesequencingstore.com/wp-content/uploads/2022/02/KAPA-HyperCap-Workflow.pdf",
    steps: [
      ["pre-capture PCR", "文库 + UDI 5 + HiFi 25 µL", "HyperPrep 8 循环 / HyperPlus 6", "70 µL 磁珠纯化取 30 µL"],
      ["杂交准备", "文库 1000 ng 补 45 µL + COT 20 µL；+磁珠 130 浓缩；+Enhancing Oligos 13.4", "95 ℃ 5 min", "非人源换 Hybrid Enhancer 20 µL"],
      ["杂交", "Hyb Buffer 28 + Component H 12 + 水 3 = 43 µL；探针 4 µL", "55 ℃ 16–20 h", "保持 55 ℃ 直到上捕获珠"],
      ["捕获", "Capture Beads 50 µL（<40 Mbp）/100 µL（≥40）", "BWB 洗 2 次勿干燥", "杂交液 60.4 µL 直接上珠"],
      ["洗涤", "55 ℃ 预温 Wash I 100 → Stringent 200×2 → 室温 Wash I/II/III 各 200", "严格温控", "不洗脱，珠上 PCR"],
      ["post-PCR", "珠上文库 + oligos + HiFi", "循环宁少勿多（20 循环出伪峰）", "磁珠纯化后 QC"]
    ],
    tips: ["55 ℃ 是 HyperCap 特色，勿套用 Twist 70 ℃", "Stringent 与 Wash I 必须预温到 55 ℃", "高重复率先降 PCR 循环", "阴性对照应 <1 ng/µL"]
  }
];

var VENDOR_CATALOG = [
  { cat: "提取", brand: "QIAGEN", product: "AllPrep DNA/RNA（同一样本双提）", note: "DNA+RNA 同时纯化" },
  { cat: "提取", brand: "QIAGEN", product: "QIAamp DNA Blood Mini（血液 DNA）", note: "经典血液柱式" },
  { cat: "提取", brand: "Thermo Fisher", product: "Dynabeads MyOne SILANE", note: "自配磁珠提取体系" },
  { cat: "提取", brand: "Roche", product: "MagNA Pure 24/96", note: "经典自动提取平台" },
  { cat: "提取", brand: "Zymo", product: "Quick-cfDNA / Quick-DNA 其他规格", note: "Miniprep Plus 已核对" },
  { cat: "提取", brand: "Omega Bio-tek", product: "Mag-Bind Blood & Tissue DNA", note: "磁珠法，自动化友好" },
  { cat: "提取", brand: "MN", product: "NucleoSpin / NucleoMag", note: "柱式与磁珠全系列" },
  { cat: "提取", brand: "诺唯赞 Vazyme", product: "FastPure RNA（RC101）/ DC111 大血量", note: "DC112/RC112 已核对" },
  { cat: "提取", brand: "康为世纪 CWBiotech", product: "血液 cfDNA / RNA / 粪便等其他系列", note: "通用柱式已核对，其余待核对" },
  { cat: "提取", brand: "美基生物 Magen", product: "MagPure 磁珠线 / AllPure 共提 / 预装板", note: "中量柱式已核对，磁珠线待核对" },
  { cat: "提取", brand: "全式金 TransGen", product: "EasyPure 基因组/病毒核酸系列", note: "国产主流" },
  { cat: "提取", brand: "百泰克 BioTeke", product: "柱式提取 + 自动提取仪", note: "国产主流" },
  { cat: "提取", brand: "生工 Sangon", product: "SanPrep 柱式系列", note: "国产老牌" },
  { cat: "提取", brand: "博日 Bioer", product: "提取试剂 + GenePure 自动化", note: "国产仪器+试剂" },
  { cat: "提取", brand: "艾科瑞 Accurate", product: "SteadyPure 系列", note: "国产主流" },
  { cat: "提取", brand: "百力格 BiOligo", product: "通用基因组提取（免醇漂洗，XGP0101）", note: "磁珠三步法；其主力为 NGS 建库/捕获原料" },
  { cat: "提取", brand: "Simgen 新景", product: "磁珠法基因组/RNA/粪便/唾液全系列", note: "全血柱式已核对，磁珠线待核对" },
  { cat: "提取", brand: "Beckman", product: "GenFind v3", note: "SPRI 磁珠基因组提取" },
  { cat: "片段化", brand: "Covaris", product: "ME220 / E220 evolution / LE220-plus / R230", note: "通量梯度机型，参数逻辑同 M220" },
  { cat: "片段化", brand: "Covaris", product: "g-TUBE", note: "6–20 kb 大片段，离心机即可" },
  { cat: "片段化", brand: "Diagenode", product: "Bioruptor Pico / UCD-300", note: "水浴超声，ChIP 常用" },
  { cat: "建库", brand: "KAPA", product: "HyperPlus（酶切一体化）", note: "片段化+建库单管" },
  { cat: "建库", brand: "KAPA", product: "EvoPlus / EvoPure", note: "新一代自动化友好" },
  { cat: "建库", brand: "Illumina", product: "DNA PCR-Free Prep", note: "无 PCR 基因组文库" },
  { cat: "建库", brand: "Illumina", product: "Stranded Total RNA（Ribo-Zero）", note: "去 rRNA 全转录组" },
  { cat: "建库", brand: "Agilent", product: "Magnis NGS Prep 系统", note: "全自动建库+捕获" },
  { cat: "建库", brand: "Watchmaker", product: "DNA Library Prep（含片段化）", note: "高转化、低 bias" },
  { cat: "建库", brand: "Tecan", product: "Celero / Universal Plus", note: "含 UMI 的低输入建库" },
  { cat: "建库", brand: "Takara", product: "ThruPLEX DNA-Seq / SMART-Seq v4", note: "低输入与单细胞" },
  { cat: "建库", brand: "10x Genomics", product: "Chromium GEM-X 单细胞", note: "scRNA/scATAC/scDNA" },
  { cat: "建库", brand: "MGI", product: "MGIEasy Universal DNA / RNA", note: "DNBSEQ 全系配套" },
  { cat: "建库", brand: "诺唯赞 Vazyme", product: "ND607 系列 DNA/RNA 建库", note: "国产主流" },
  { cat: "建库", brand: "翌圣 Yeasen", product: "Hieff NGS 建库系列", note: "国产主流" },
  { cat: "杂交", brand: "Twist", product: "Fast Hybridization v2（快速杂交）", note: "Standard 16 h 已核对" },
  { cat: "杂交", brand: "IDT", product: "xGen Hyb & Wash v3 试剂盒", note: "新版洗涤体系" },
  { cat: "杂交", brand: "Agilent", product: "SureSelect XT HS2 / QXT / RNA", note: "PDF 抓取受限，待核对" },
  { cat: "杂交", brand: "Roche/KAPA", product: "HyperCap 快速杂交变体（Tech Note）", note: "v3.2 标准流程已核对" },
  { cat: "杂交", brand: "Illumina", product: "TruSight Oncology 500 / Exome", note: "固定 panel 体系" },
  { cat: "杂交", brand: "纳昂达 Nanodigmbio", product: "NadPrep 靶向捕获", note: "国产靶向方案" },
  { cat: "杂交", brand: "MGI/华大", product: "靶向捕获套装", note: "DNBSEQ 兼容" },
  { cat: "QC", brand: "Thermo Fisher", product: "NanoDrop One/Eight", note: "纯度检查，非文库终定量" },
  { cat: "QC", brand: "Agilent", product: "Bioanalyzer 2100", note: "经典芯片电泳" },
  { cat: "QC", brand: "Agilent", product: "Fragment Analyzer / Femto Pulse / ZAG", note: "高通量与大片段" },
  { cat: "QC", brand: "PerkinElmer", product: "LabChip GX Touch", note: "微流控电泳" },
  { cat: "QC", brand: "BiOptic", product: "Qsep100/Qsep400", note: "国产实验室常用" },
  { cat: "QC", brand: "NEB", product: "NEBNext Library Quant", note: "qPCR 定量，与 KAPA 同类" },
  { cat: "QC", brand: "QIAGEN", product: "QIAseq Library Quant", note: "qPCR 定量" },
  { cat: "QC", brand: "Roche", product: "LightCycler 480/96 qPCR 平台", note: "文库定量承载平台" },
  { cat: "上机", brand: "Illumina", product: "iSeq 100 / MiniSeq / MiSeq i100", note: "小通量机型" },
  { cat: "上机", brand: "Illumina", product: "NextSeq 500/550 / 1000/2000", note: "中通量，loading 见已核对页" },
  { cat: "上机", brand: "Illumina", product: "NovaSeq 6000 / X / X Plus", note: "高通量，150 pM 级 loading" },
  { cat: "上机", brand: "MGI", product: "DNBSEQ-G99 / G400 / T7 / T20 DNB 制备与 loading", note: "DNB 滚环扩增平台，各机型 Loading 手册" },
  { cat: "上机", brand: "MGI", product: "DNBSEQ-E25", note: "小型快速机型" },
  { cat: "上机", brand: "PacBio", product: "Sequel IIe / Revio / Vega / Onso", note: "HiFi 长读长；Onso 为短读长" },
  { cat: "上机", brand: "ONT", product: "MinION / GridION / PromethION P2-P48", note: "纳米孔长读长" },
  { cat: "上机", brand: "Element", product: "AVITI / AVITI24", note: "Avidity 化学" },
  { cat: "上机", brand: "Singular", product: "G4", note: "快速中通量" },
  { cat: "上机", brand: "Ultima", product: "UG100", note: "高通量新平台" },
  { cat: "上机", brand: "华大序风", product: "CycloneSEQ-WT02/WY01", note: "国产纳米孔" },
  { cat: "上机", brand: "真迈 GeneMind", product: "GenoLab 系列", note: "国产可逆末端终止" },
  { cat: "上机", brand: "赛陆医疗", product: "Salus Pro", note: "国产中高通量" }
];

// 核对元数据：id → { date: 核对日期, ver: 手册版本（未知则不写） }
var VENDOR_META = {
  neb: { date: "2026-11", ver: "E7645 手册" },
  nebrna: { date: "2026-11", ver: "E7760/E7765 v7.0" },
  kapa: { date: "2026-11", ver: "HyperPrep TDS" },
  kaparna: { date: "2026-11", ver: "KR1351 v1.16" },
  ilmn: { date: "2026-11", ver: "文档 v12" },
  twist: { date: "2026-11", ver: "DOC-001085 v1" },
  idt: { date: "2026-11", ver: "NGS-10122-PR v4" },
  qiagen: { date: "2026-11", ver: "DNeasy Handbook" },
  qiagencna: { date: "2026-11", ver: "手册+实验室 SOP" },
  powersoil: { date: "2026-11", ver: "Handbook 06/2023" },
  magattract: { date: "2026-11", ver: "Handbook 03/2020" },
  generead: { date: "2026-11", ver: "Handbook 02/2020" },
  tiangen: { date: "2026-11", ver: "20170328 官方指南" },
  simgen: { date: "2026-11", ver: "说明书 01/2022" },
  cwbio: { date: "2026-11", ver: "08/2023" },
  magen: { date: "2026-11", ver: "HiPure Blood 说明书" },
  vazyme: { date: "2026-11", ver: "V21.1" },
  zymo: { date: "2026-11", ver: "D4068/69 说明书（PK 消化版）" },
  trizol: { date: "2026-11", ver: "MAN0001271 Rev D" },
  mirneasy: { date: "2026-11", ver: "Handbook 10/2007" },
  rnaprep: { date: "2026-11", ver: "GDP431 手册 2025-07" },
  rnavazyme: { date: "2026-11", ver: "V22.2" },
  ilmnmrna: { date: "2026-11", ver: "1000000124518 v02" },
  hypercap: { date: "2026-11", ver: "Workflow v3.2" },
  rneasy: { date: "2026-11", ver: "Handbook 第四版" },
  magmax: { date: "2026-11", ver: "MAN0017325 Rev F" },
  maxwell: { date: "2026-11", ver: "TM419 Rev 1/25" },
  covaris: { date: "2026-11", ver: "PN 010252 Rev J" },
  mgi: { date: "2026-11", ver: "Manual 3.0" },
  ont: { date: "2026-11", ver: "revAC" },
  pacbio: { date: "2026-11", ver: "REV09" },
  qubit: { date: "2026-11", ver: "MAN0002326" },
  kapaqpcr: { date: "2026-11", ver: "KR0405" },
  tapestation: { date: "2026-11", ver: "Quick Guides" },
  miseq: { date: "2026-11", ver: "15039740 Rev A（旧版镜像）" },
  mgicirc: { date: "2026-11", ver: "SOP-013-B02-185 v7.0" }
};

// 实验会话模板：kitFilter 引用 VENDORS 的 id（单数据源）
var SESSION_TEMPLATES = [
  {
    id: "dna", name: "DNA-seq：提取 → 建库 → 上机",
    steps: [
      { title: "样本登记与接收", hint: "核对类型/体积/保存条件；编号 项目号-类型-序号；登记溶血/凝固/降解状态", timer: 0 },
      { title: "核酸提取", kitFilter: ["qiagen", "tiangen", "simgen", "cwbio", "magen", "vazyme", "zymo", "magmax", "maxwell", "powersoil", "magattract", "generead"], timer: 0 },
      { title: "片段化", kitFilter: ["covaris"], timer: 0 },
      { title: "文库构建", kitFilter: ["neb", "kapa", "ilmn", "mgi"], timer: 30 },
      { title: "文库 QC 与定量", kitFilter: ["qubit", "kapaqpcr", "tapestation"], timer: 0 },
      { title: "上机与运行监控", kitFilter: ["miseq", "mgicirc"], timer: 5 }
    ]
  },
  {
    id: "rna", name: "RNA-seq：提取 → 建库 → 上机",
    steps: [
      { title: "样本登记与接收", hint: "RNA 样本全程 RNase-free；离体尽快裂解或 −80 ℃", timer: 0 },
      { title: "总 RNA 提取", kitFilter: ["rneasy", "trizol", "mirneasy", "rnaprep", "rnavazyme"], timer: 0 },
      { title: "RNA 文库构建", kitFilter: ["nebrna", "kaparna", "ilmnmrna"], timer: 30 },
      { title: "文库 QC 与定量", kitFilter: ["qubit", "kapaqpcr", "tapestation"], timer: 0 },
      { title: "上机与运行监控", kitFilter: ["miseq"], timer: 5 }
    ]
  },
  {
    id: "capture", name: "杂交捕获（WES / panel）",
    steps: [
      { title: "建库完成确认", hint: "确认文库定量与片段分布合格；等摩尔混样", timer: 0 },
      { title: "杂交捕获", kitFilter: ["twist", "idt", "hypercap"], timer: 0 },
      { title: "捕获后 QC", kitFilter: ["qubit", "kapaqpcr", "tapestation"], timer: 0 },
      { title: "上机与运行监控", kitFilter: ["miseq"], timer: 5 }
    ]
  },
  {
    id: "cfdna", name: "cfDNA：血浆处理 → 提取 → 建库",
    steps: [
      { title: "血浆前处理", hint: "室温解冻置冰；16,000×g 4 ℃ 5 min 去冷沉淀；观察溶血", timer: 5 },
      { title: "cfDNA 提取", kitFilter: ["qiagencna"], timer: 0 },
      { title: "QC（Qubit HS + 片段）", kitFilter: ["qubit", "tapestation"], timer: 0 },
      { title: "文库构建", kitFilter: ["neb", "kapa"], timer: 30 }
    ]
  },
  {
    id: "mgi", name: "MGI：提取 → 建库 → 环化 → 上机",
    steps: [
      { title: "样本登记与接收", hint: "同 DNA-seq；确认 DNBSEQ 机型与 lane 数", timer: 0 },
      { title: "核酸提取", kitFilter: ["qiagen", "tiangen", "simgen", "cwbio", "magen", "vazyme", "zymo", "magmax", "maxwell", "powersoil", "magattract"], timer: 0 },
      { title: "MGI 文库构建", kitFilter: ["mgi"], timer: 30 },
      { title: "环化（ssCir）", kitFilter: ["mgicirc"], timer: 30 },
      { title: "文库 QC 与定量", kitFilter: ["qubit", "kapaqpcr"], timer: 0 },
      { title: "上机与运行监控", kitFilter: ["mgicirc"], timer: 0 }
    ]
  }
];
