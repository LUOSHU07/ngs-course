# Roche KAPA HyperCap Workflow v3.2（HyperExome/HyperChoice/HyperExplore）

- 路线：KAPA HyperPrep 建库 → pre-capture PCR → **55 ℃ 杂交 16–20 h** → 链霉亲和素 Capture Beads 捕获 → 洗涤 → **珠上 post-capture PCR**（不洗脱）
- 来源：[KAPA HyperCap Workflow v3.2 IFU](https://rochesequencingstore.com/wp-content/uploads/2022/02/KAPA-HyperCap-Workflow.pdf)

## 1. 建库（HyperPrep 路线，同已核对 KAPA HyperPrep）

100 ng gDNA 35 µL + Frag Buffer 5 + Frag Enzyme 10 = 50 µL 酶切（目标 180–220 bp）→ ER/AT 60 µL（20 ℃ 30 min → 65 ℃ 30 min，热盖 85 ℃）→ adapter 10 + Ligation MM 40（Buffer 30 + Ligase 10）= 110 µL → 0.8×（88 µL）HyperPure Beads → 22 µL 洗脱取 20 µL。

## 2. Pre-capture PCR

文库 + **UDI Primer Mix 5 µL** + **KAPA HiFi HotStart ReadyMix 25 µL**（50 µL 体系，热盖 105 ℃）；循环：**HyperPrep 建库 8 循环、HyperPlus 建库 6 循环**（输入低可加 1–3）→ 70 µL 磁珠纯化 → 32 µL 水洗脱取 30 µL。QC：10× 稀释后 Qubit HS（5 µL）+ HS Bioanalyzer；阴性对照应 <1 ng/µL。

## 3. 杂交（55 ℃，与 Twist 70 ℃、IDT 65 ℃ 均不同）

1. 探针：冻干粉按标签体积 Probes Resuspension Buffer 复溶，涡旋 1 min，**分装 4 µL/capture**，−15~−25 ℃，禁反复冻融。
2. 文库：单样 1000 ng（pool 按设计）+ PCR 水补 **45 µL** + **COT Human DNA 20 µL** = 65 µL（非人源样本用 Hybrid Enhancer 20 µL 替代 COT）。
3. +HyperPure Beads 130 µL，室温 10 min，80% 乙醇洗 2 次，晾干，+**Universal Enhancing Oligos 13.4 µL** 重悬珠上 DNA。
4. 杂交母液：**Hybridization Buffer 28 + Component H 12 + 水 3 = 43 µL**。
5. 程序：**95 ℃ 5 min → 55 ℃ 16–20 h**（杂交液必须保持在 55 ℃ 直到转移上 Capture Beads）。

## 4. 捕获与洗涤

- 缓冲液稀释（每 capture）：10X Stringent 40+360 µL（55 ℃ 预热）、10X Wash I 10+90 µL（55 ℃）、Wash II/III 各 20+180 µL（室温）、2.5X Bead Wash 120+180 µL（室温）。
- Capture Beads 室温平衡、涡旋 15 s，1X Bead Wash 洗 2 次，**<40 Mbp panel 50 µL/反应、≥40 Mbp 100 µL/反应** 重悬（勿干燥）。
- 杂交液（60.4 µL）转入珠管结合 → 洗涤顺序：预温 Wash I 100 µL → **预温 Stringent 200 µL×2（55 ℃）** → 室温 Wash I 200 → Wash II 200 → Wash III 200 µL。
- **不洗脱**：富集文库留在珠上直接做 post-capture PCR。

## 5. Post-capture PCR 与 QC

珠上文库 + post-capture PCR oligos + HiFi，热盖 105 ℃；循环按 panel 优化（**20 循环会出现高分子的扩增伪峰**，见 IFU 图 A/B，宁少勿多）→ 磁珠纯化 → Qubit + 片段分析。

## 原厂注意点

- 磁珠过干 = 得率剧降（全程 Caution）；HyperPure Beads 避光保存、室温平衡。
- 杂交与 Stringent 洗涤的 55 ℃ 必须真实到达（预热缓冲液到 55 ℃ 再上机）。
- 非人源样本务必换 Hybrid Enhancer，COT Human DNA 只适用于人。
- 高重复率先降 pre/post-capture PCR 循环。

## 记录

panel 与目标大小（<40/≥40 Mbp）、探针批号、杂交时长、洗涤温度实测、两轮 PCR 循环数、阴性对照定量。
