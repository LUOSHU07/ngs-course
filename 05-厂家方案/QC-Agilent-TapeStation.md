# Agilent 4200/4150 TapeStation 上机操作（ScreenTape 各 assay）

- 用途：文库片段分布（D1000/D5000）、RNA 完整性（RIN）、gDNA 完整性（DIN）
- 来源：[Agilent 各 assay Quick Guide](https://www.agilent.com/cs/library/usermanuals/public/D1000_QuickGuide.pdf)（官方 PDF）；实验室协议（[HostMicrobe](https://protocols.hostmicrobe.org/tapestation-protocol)）、[Cornell Walk-Up Guide](https://www.biotech.cornell.edu/sites/default/files/2026-09/TapeStation_4200_WalkUp_Guide.pdf)

## 各 assay 上样配方

| Assay | 定量范围 (ng/µL) | Sample Buffer | 样品 | Ladder |
|-------|------------------|---------------|------|--------|
| RNA | 25–500 | 5 µL | 1 µL | — |
| HS RNA | 1–25 | 1 µL | 2 µL | — |
| Genomic DNA | 25–50 | 10 µL | 1 µL | 1 µL |
| D1000 | 1–50 | 3 µL | 1 µL | 1 µL（A1 位，Buffer 3 + Ladder 1） |
| HS D1000 | <1 | 2 µL | 2 µL | — |
| D5000 | 1–50 | 10 µL | 1 µL | 1 µL |
| HS D5000 | <1 | 2 µL | 2 µL | 2 µL |

## 操作流程

1. ScreenTape、Sample Buffer、Ladder 提前 **≥30 min 室温平衡**。
2. 按上表加 Buffer 与样品到专用联管，盖紧，涡旋，点离。
3. **RNA / HS RNA 必须变性**：72 ℃ 3 min → 立即冰上 2 min → 点离。
4. 上机：联管放入管位（注意方向），ScreenTape 彩色面朝自己、星标朝上插入闪灯槽位；确认吸头够。
5. 软件勾选实际孔数；不用 ladder 时在 A1 右键选 "Use Electronic Ladder"。
6. 运行后 TapeStation Analysis 出图，Create Report 存 PDF。

## 关键读数

- D1000/HS D1000：看主峰位置（文库目标片段）、128 bp 附近的 adapter dimer、小片段拖尾。
- RNA：RIN；FFPE 样本看 DV200（>200 nt 片段百分比），不是 RIN。
- gDNA：DIN；NGS 建库建议 DIN 高、主峰 >10 kb。

## 操作经验

- 气泡是峰形异常的常见原因：加样后点离，必要时轻弹。
- 标签贴联管侧面；上样后尽快运行，避免挥发。
- 文库浓度超量程时先稀释再上机，过饱和的峰会平顶失真。
- dimer 判断结合 Qubit/qPCR：小峰 + qPCR 正常 → 多半是残留引物而非连接失败。

## 记录

assay 类型、ScreenTape 批号与已用孔数、稀释倍数、主峰 bp、RIN/DV200/DIN、dimer 情况。
