# MGI MGIEasy Dual Barcode Circularization Kit（1000020570/1000018650，User Manual 7.0）

- 用途：把 UDB/dual barcode 文库 PCR 产物转成单链环状 DNA（ssCir），用于 DNB 制备与 DNBSEQ 上机
- 输入：**1 pmol** PCR 产物（最低 0.5 pmol）；多样本 pooling 总量 1 pmol，等摩尔
- 来源：[User Manual 7.0（SOP-013-B02-185）](https://global-mgitech.com/wp-content/uploads/Documents/SOP-013-B02-185-7.0-MGIEasy-Dual-Barcode-Circularization-Kit-User-Manual-2.pdf)

## 输入换算（1 pmol dsDNA）

质量（ng）= PCR 产物主峰（bp）× 0.66。速查：282 bp → 187 ng；382 bp → 253 ng；482 bp → 319 ng；582 bp → 385 ng；632 bp → 418 ng。

## 流程

| 步骤 | 配液 | 程序 | 要点 |
|------|------|------|------|
| 变性 | 1 pmol PCR 产物 + TE Buffer 补到 **48 µL** | **95 ℃ 3 min**（热盖 105 ℃）→ 立即冰上 2 min | TE 自备 |
| 环化 | +Splint Buffer 11.6 + DNA Rapid Ligase 0.5 = 12.1 µL（总 60.1 µL） | **37 ℃ 30 min**（热盖 45 ℃）→ 4 ℃ | 混合液冰上配；Splint Buffer 室温化冻，Ligase 轻弹混匀 |
| 消化 | +Digestion Buffer 1.4 + Digestion Enzyme 2.6 = 4.0 µL（总 64.1 µL） | **37 ℃ 30 min**（热盖 45 ℃） | 消化去除线性残留 |
| 终止 | 立即 +Digestion Stop Buffer 7.5 µL，涡旋 3×3 s | — | 转入 1.5 mL 离心管 |
| 纯化 | +DNA Clean Beads **170 µL**，室温 10 min；磁力架 2–5 min 去上清 | 80% 乙醇 **500 µL×2**，各 30 s | 磁珠室温平衡 30 min；开盖晾干到**哑光无光泽但不开裂**（过干降得率） |
| 洗脱 | +TE Buffer **22 µL**，室温 10 min，磁力架后取 **20 µL** | — | ssCir −20 ℃ 可存 1 个月 |

## QC

- 用 **Qubit ssDNA Assay Kit** 定量（不是 dsDNA HS）。
- 得率要求 **≥80 fmol**；换算：质量（ng）= 0.08 × 主峰（bp）× 0.33。速查：282 bp → 7.5 ng；382 bp → 10.1 ng；482 bp → 12.8 ng；632 bp → 16.7 ng。

## 时间预算（8 反应）

变性+环化 45–50 min → 消化 35–40 min → 纯化 50 min → QC 15–20 min。

## 原厂注意点

- 试剂按盖色识别：紫色 = 环化（Splint Buffer/Ligase），白色 = 消化系（Buffer/Enzyme/Stop）。
- 环化模块 −25~−15 ℃ 保存；Clean Beads 2–8 ℃。
- 加液或吸上清时勿扰磁珠；扰动则打回重新分离。
- pooling 样本的 barcode 组合必须满足 UDB 规则（见 UDB 手册）。
- 热盖不能调 45 ℃ 时用预设 105 ℃。
- DNB 制备与 loading 按 DNBSEQ 机型对应 Loading 手册执行（本页仅环化）。

## 操作经验

- 得率 <80 fmol 先查：PCR 产物是否按主峰定量（不是均值）、变性后是否立即置冰、磁珠是否过干。
- 环化与消化共用一个 37 ℃/45 ℃ 热盖程序，可编程两段连跑。
- 记录：PCR 主峰 bp、投入 pmol、ssCir 得率 fmol、试剂批号。
