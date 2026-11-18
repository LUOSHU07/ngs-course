# Thermo MagMAX DNA Multi-Sample Ultra 2.0 + KingFisher（全血/骨髓，A36570）

- 样本：全血 50 µL–2 mL、骨髓 200 µL；96 深孔头（≤400 µL）或 24 深孔头（≤2 mL）
- 机型：KingFisher Flex（.bdz 程序）/ Apex（.kfx）/ Duo Prime
- 来源：[Thermo MAN0017325 Rev F](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/MAN0017325_MagMAX_MultiSampleUltra2_WholeBlood_UG.pdf)

## 三档流程（全血）

| 输入 | 50–200 µL | 200–400 µL | 500 µL–1 mL | 1.1–2 mL |
|------|-----------|------------|-------------|----------|
| 磁头 | 96 深孔 | 96 深孔 | 24 深孔 | 24 深孔 |
| Lysis/Binding Solution | 200 µL | 400 µL | 1,000 µL | 2,000 µL |
| DNA Binding Beads | 20 µL | 40 µL | 100 µL | 200 µL |
| Wash I | 500 µL | 1,000 µL | 2,500 µL | 5,000 µL |
| Wash II（两次） | 500+500 µL | 1,000+500 µL | 2,500+1,000 µL | 4,000+2,000 µL |
| Elution | 50–100 µL | 50–100 µL | 150–200 µL | 250–300 µL |
| 通量 | 96/板 | 96/板 | 24/板 | 24/板 |

## 流程

1. 摆板：Wash I（板 2/3）、Wash II ×2、Elution、Tip Comb 按机位放好（Flex 与 Apex 板位不同，按手册表）。
2. Sample Plate：先加 **Enhancer Solution**，再加样本，最后加 **Proteinase K**（顺序固定）。
3. 上机，先进行板上蛋白酶 K 消化（约 20 min）。
4. 消化期间配 DNA Binding Bead Mix（Lysis/Binding + Beads，整板量 +10% 余量，当天用完）。
5. 仪器提示时取出 Sample Plate，按上表加 Bead Mix，立即放回继续运行。
6. 结束后立即取板，把洗脱液转移到保存管，−20 ℃ 长期保存。

## 原厂注意点

- **禁止肝素钠抗凝血**（抑制下游）。
- 全程室温（20–25 ℃）；Enhancer 与 Lysis/Binding 低温出沉淀时 37 ℃ 回溶。
- Lysis/Binding 与 Wash I 发黄属正常，不影响性能。
- Wash II 是自配 80% 乙醇（无水乙醇 + Nuclease-Free Water）。
- Bead Mix 黏稠且磁珠沉降快：反复重悬、慢吸慢打、避免气泡。
- 程序文件（.bdz/.kfx）按输入档位从产品页下载，装错档位整板报废。

## 操作经验

- 96 通道批量提取前先跑 8 样本验证得率与纯度（A260/280 1.7–1.9）。
- 洗脱液体积按下游需求选下限（NGS 建库浓度优先）。
- 每板留 1–2 个空孔做空白对照，判断交叉污染。
- 记录：输入体积、程序文件名与版本、试剂批号、得率、A260/280、Qubit。
