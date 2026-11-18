# NEBNext Ultra II Directional RNA（E7760/E7765 v7.0，链特异 dUTP 法）

- 输入：10 ng–1 µg 总 RNA（polyA 富集或 rRNA 去除后 RNA）
- 特点：与 Ultra II DNA 共用末端修复/连接体系；dUTP 标记链特异性
- 来源：[NEB E7760/E7765 手册 v7.0](https://www.neb.com/en/-/media/nebus/files/manuals/manuale7760_e7765.pdf)

## 1. mRNA 富集（polyA，Oligo d(T)25 磁珠）

1. 总 RNA 用 NF 水补到 50 µL；Oligo d(T)25 磁珠 20 µL 用 RNA Binding Buffer (2X) 50 µL 洗 2 次。
2. 磁珠 50 µL 加入 RNA，65 ℃ 5 min → 4 ℃ 变性结合，室温结合 5 min。
3. 磁力架，200 µL Wash Buffer 洗 2 次；50 µL Tris Buffer + 80 ℃ 2 min 洗脱 → 冷却到 25 ℃；加 50 µL Binding Buffer 二次结合；再洗 2 次。
4. 用 11.5 µL **一链缓冲液+随机引物混合液**（First Strand Buffer 8 + Random Primers 2 + 水 10，20 µL/反应）重悬。
5. **94 ℃ 15 min 片段化** → 冷却至 ~65 ℃ 立即置冰 1 min；转移 10 µL 上清。

## 2. 一链合成（20 µL）

| 组分 | 体积 |
|------|------|
| 片段化 mRNA | 10 µL |
| Strand Specificity Reagent | 8 µL |
| First Strand Enzyme Mix | 2 µL |

**25 ℃ 10 min → 42 ℃ 15 min → 70 ℃ 15 min**（插入片段 >200 bp 时 42 ℃ 延长到 50 min）。

## 3. 二链合成（80 µL）

| 组分 | 体积 |
|------|------|
| 一链产物 | 20 µL |
| Second Strand Buffer（含 dUTP） | 8 µL |
| Second Strand Enzyme Mix | 4 µL |
| NF 水 | 48 µL |

**16 ℃ 1 h**（热盖 ≤40 ℃ 或关闭）。

## 4. 纯化（1.8X）

+144 µL 磁珠 → 80% 乙醇 200 µL×2 → 53 µL 0.1X TE 洗脱 → 取 50 µL。

## 5. 末端修复 + 接头连接（与 Ultra II DNA 同体系）

- End Prep：50 + Buffer 7 + Enzyme 3 = 60 µL；20 ℃ 30 min → 65 ℃ 30 min。
- 接头稀释（Adaptor Dilution Buffer）：1000–250 ng **5×**；249–100 ng **25×**；99–10 ng **100×**。
- 连接：60 + 接头 2.5 + Enhancer 1 + Ligation MM 30 = 93.5 µL；20 ℃ 15 min；+USER 3 µL → 96.5 µL，37 ℃ 15 min。

## 6. 纯化与 PCR

- 0.9X（87 µL）纯化，17 µL 洗脱取 15 µL。
- PCR：15 + Q5 MM 25 + i7 5 + i5 5 = 50 µL；98 ℃ 30 s →（98 ℃ 10 s → 65 ℃ 75 s）×N → 65 ℃ 5 min；热盖 105 ℃；循环数按总 RNA 输入查手册 Table 1A.9.3B。
- PCR 后 0.9X（45 µL）纯化，23 µL 洗脱取 20 µL。

## 原厂注意点

- 过度扩增会在 Bioanalyzer 出现 ~1,000 bp 第二峰，循环数必须按输入控制。
- 128 bp 附近 dimer 峰：把样品补到 50 µL 后再做一次 0.9X 纯化。
- 接头必须先在冰浴 Adaptor Dilution Buffer 里稀释，禁止与 Master Mix 预混。
- rRNA 去除路线用 NEBNext rRNA Depletion Kit v2（E7400/E7405），手册 Section 2/3。

## 记录

RNA 来源、RIN/DV200、富集方式（polyA/去 rRNA）、片段化条件、接头稀释倍数、PCR 循环、Qubit、Bioanalyzer 峰形、链特异方向。
