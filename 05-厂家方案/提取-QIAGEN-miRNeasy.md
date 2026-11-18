# QIAGEN miRNeasy Mini（217004）——含 miRNA 的总 RNA

- 样本：组织 ≤50 mg（脂肪 ≤100 mg）、细胞 ≤1×10⁷；柱容量 100 µg RNA
- 与 RNeasy Mini 的本质区别：QIAzol 酚法裂解 + 特定乙醇结合条件，**保留 ≥18 nt 小 RNA**（RNeasy 标准流程丢失 <200 nt）
- 来源：[miRNeasy Mini Handbook（10/2007）](https://mops.dkfz.de/fileadmin/legacy-files/Qiagen_miRNeasy_Mini_Handbook.pdf)（新版手册见 QIAGEN 官网，流程一致）

## 标准流程

| 步骤 | 操作 | 条件 |
|------|------|------|
| 裂解 | 组织/细胞 +**QIAzol 700 µL** 匀浆（细胞沉淀先弹松再加） | 室温 5 min（解离核蛋白） |
| 分相 | +**氯仿 140 µL**，用力振摇 15 s，室温静置 2–3 min | 12,000×g 15 min，4 ℃ |
| 结合 | 取水相 +**1.5 倍体积 100% 乙醇**（按手册），吹打混匀（勿离心） | 分次上 RNeasy Mini 柱 |
| 上柱 | ≥8,000×g（≥10,000 rpm）15 s ×每次上样 | 弃流穿（含 QIAzol，禁接触漂白剂） |
| 洗涤 | **RWT 700 µL**（组织必做/细胞可选）→ **RPE 500 µL** → **RPE 500 µL 再洗** | 各 15 s；第二次 RPE 离心 2 min 干燥膜 |
| 洗脱 | **RNase-free 水 30–50 µL** 点膜中央 | ≥8,000×g 1 min；得率 >30 µg 时二次洗脱 |

## 关键变体

- **单独富集 <200 nt 小 RNA**（附录 A）：需另购 RNeasy MinElute Cleanup Kit（74204），80% 乙醇洗涤替代 RPE，小 RNA 与 >200 nt 分馏收集。
- **柱上 DNase**（附录 B）：RWT 350 µL 预洗 → DNase I/RDD 80 µL 膜上消化 → RWT 350 µL 再洗；一般不需要（QIAzol 已去除大部分 DNA）。
- **TissueLyser 匀浆**：2 mL 管 + QIAzol 700 µL + 5 mm 钢珠 + ≤50 mg 组织，20 Hz 2 min。

## 原厂注意点

- 分相后取水相约 400 µL，宁少勿碰中间相。
- RWT/RPE 首用按标签加乙醇；RWT 沉淀需温热回溶。
- 盐残留：确保 RPE 在 20–30 ℃ 使用；乙醇残留：第二次 RPE 务必离干。
- 测纯度用 10 mM Tris pH 7.5 稀释而非水（pH 影响 A260/280）。

## 操作经验

- 做 miRNA-seq/small RNA-seq 必须用 miRNeasy 或同类小 RNA 保留方案——用普通 RNeasy 提的样本做 small RNA 文库是无效投入。
- 冻存样本勿解冻直接入 QIAzol；QIAzol 中的匀浆可 −70 ℃ 存数月。
- 记录：样本量、是否柱上 DNase、洗脱体积、得率、A260/280、RIN 与小 RNA 比例。
