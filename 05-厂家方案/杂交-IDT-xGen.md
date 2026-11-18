# IDT xGen Hybridization Capture（NGS-10122-PR v4）

- 用途：外显子 / Lockdown Panel 杂交捕获，兼容 Illumina 文库
- 特点：**65 ℃ 4 h 标准杂交**（GC 富集或小 panel 可延至 16 h）；单批最多 32 个样本
- 来源：[IDT xGen hybridization capture of DNA libraries（v4）](https://www.veritastk.co.jp/pdf/xgen-hybridization-capture-of-dna-libraries.pdf) ｜ [IDT 官网](https://www.idtdna.com/pages/products/next-generation-sequencing/workflow/xgen-ngs-hybridization-capture/hybridization-capture-core-reagents)

## 流程时间线

配缓冲液 15 min → 洗链霉磁珠 15 min（杂交期间做）→ 文库+blocker 15 min → 干燥 → 杂交 4–16 h → 磁珠捕获 45 min → 洗涤 30 min → 捕获后 PCR 30 min → 纯化 30 min。

## 1. 文库与 Blocker 混合

| 组分 | 每反应 |
|------|--------|
| Human Cot DNA | 5 µL |
| xGen Universal Blockers（TS / 10 bp TS / NXT） | 2 µL |
| 混合后加入每孔 | 7 µL |

每孔再加 **500 ng** 文库（多重时按比例），干燥（AMPure XP 浓缩或真空干燥，见 Appendix A）。

## 2. 杂交

| 组分 | 每反应 |
|------|--------|
| xGen 2X Hybridization Buffer | 8.5 µL |
| xGen Hybridization Buffer Enhancer | 2.7 µL |
| xGen Lockdown Panel / 探针 | 4 µL |

混合液 17 µL 加入干燥后的 DNA，充分重悬。**65 ℃ 4 h**（热盖，HYB 程序，结束后 65 ℃ hold）。
GC 富集或小 panel（<1000 探针）可延长至 16 h；同一项目内所有样本杂交时长必须一致。封严防蒸发——蒸发过度是捕获失败主因之一。

## 3. 磁珠准备与捕获

1. Dynabeads M-270 Streptavidin 50 µL/反应，室温平衡 ≥30 min。
2. 100 µL Bead Wash Buffer 洗 3 次。
3. 17 µL Bead Resuspension Mix（2X Bead Wash Buffer + 水 5.8 µL 等）重悬。
4. 加入杂交产物，室温捕获 45 min。

## 4. 洗涤（温度是关键）

- **热洗**：Wash Buffer 1 与 stringent wash buffer 先在水浴预热到 65 ℃ ≥15 min；65 ℃ 各洗 5 min。缓冲液必须真正到 65 ℃ 再开始。
- **室温洗**：Wash Buffer 2、Wash Buffer 3 室温各洗。

## 5. 捕获后 PCR 与纯化

- KAPA HiFi 等扩增（引物 xGen Library Amplification Primers），循环数按 panel 大小优化。
- AMPure XP 纯化，10 mM Tris-Cl pH 8.5（或 TE）洗脱，Qubit + TapeStation QC 后上机。

## 原厂注意点

- 单批不要超过 32 个样本，洗涤时间与温度会失控。
- 磁珠洗前必须回到室温。
- 热洗缓冲液提前 15 min 以上 65 ℃ 预热。
- Blocker 分 Illumina TS / 10 bp TS / Nextera NXT 三种，按文库接头选对。

## 记录

文库 pool、panel 批号、Cot DNA 用量、Blocker 类型、杂交起止时间与温度、热洗温度、PCR 循环、捕获效率。
