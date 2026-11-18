# Illumina Stranded mRNA Prep, Ligation（20040532/20040534，v02 2021）

- 输入：25–1000 ng 高质量总 RNA（含 DNase 处理）；polyA 捕获 + dUTP 链特异
- 来源：[Reference Guide 1000000124518 v02](https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/RNA/illumina-stranded-mrna-reference-guide-1000000124518-02.pdf)

## 流程

| 步骤 | 配液 | 程序 |
|------|------|------|
| mRNA 捕获 | RNA 25 µL（25–1000 ng）+ **RPBX 25 µL**（RNA 纯化磁珠） | 65 ℃ 5 min 变性 → 室温结合；BWB 洗涤 |
| 片段化 | +EPH3 10.5 µL（Elute-Prime-Fragment）+ BBB 25 µL | **94 ℃ 8 min**（DEN94_8）；转移 17 µL |
| 一链合成 | +First Strand Master Mix 8 µL（FSA 含放线菌素 D + RVT 1 µL） | FSS 程序 ~43 min（25 ℃→42 ℃→70 ℃） |
| 二链合成 | +**SMM 25 µL**（dUTP 标记）= 50 µL | SSS 程序 ~1 h（16 ℃） |
| 纯化 | +**AMPure XP 90 µL** | 乙醇洗 2 次；RSB 洗脱，取 17.5 µL |
| 加 A | +**ATL4 12.5 µL** = 30 µL | ATAIL 程序 ~38 min |
| 锚定连接 | +RNA Index Anchors + LIGX；+**STL 5 µL** 终止 | 室温；纯化后取 20 µL |
| 扩增 | 文库 20 + **EPM 20 µL** + UDP index 10 µL = 50 µL | **25 ng→15 循环；100 ng→13；1000 ng→10** |
| 终纯化 | +AMPure XP 50 µL | 取 15 µL |

## 原厂注意点

- 提取时务必 DNase 处理；RNA −85~−65 ℃ 保存，避免反复冻融；RIN 与 DV200 先评估。
- 循环数按输入严格执行：25/100/1000 ng → 15/13/10。
- **T-overhang 首循环低多样性**：Stranded mRNA 在插入片段 5' 端引入 T，Read 1 第 1 循环碱基多样性低——用 BaseSpace Trim 1 或样本表设置剪掉首碱基。
- 上机定量：NextSeq 1000/2000 用 KAPA qPCR（文库 1:10000 稀释后取 2 µL），平均片段按 300–400 bp。
- 磁珠步骤 280×g 10 s 点离、磁力架 2 min 为标准节拍。

## 操作经验

- 与 NEB/KAPA RNA 的差异：Illumina 用**锚定连接 + PCR 加 index** 的两段式接头，index 在 PCR 才引入——pooling 灵活性高，但 PCR 前样本间不能混。
- 建库失败的常见排查点：RPBX 捕获步骤的磁珠残留（转移上清时勿带珠）。
- 记录：RIN、输入量、PCR 循环、index 组合、qPCR nM、片段分布。
