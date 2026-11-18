# QIAGEN DNeasy PowerSoil Pro（47014，土壤/粪便微生物 DNA，06/2023）

- 样本：≤250 mg 土壤/沉积物/堆肥/粪肥；粪便用姊妹盒 QIAamp PowerFecal Pro（同流程）
- 特点：PowerBead 管机械破碎 + CD2（IRT）去腐殖酸/抑制物；16S/宏基因组标准提取
- 来源：[DNeasy PowerSoil Pro Handbook 06/2023](https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/hb-2495-006-hb-dny-powersoil-pro-0623-ww)

## 流程

| 步骤 | 操作 | 条件 |
|------|------|------|
| 加样 | PowerBead Pro 管点离使珠沉底；加 ≤250 mg 样本 + **CD1 800 µL**，短暂涡旋 | 难裂解菌可 65 ℃ 10 min 预处理 |
| 破碎 | 管水平固定在 Vortex Adapter 上**涡旋 10 min**（>12 个样本时延长 5–10 min）；或用 PowerLyzer/TissueLyser | 管需在离心机中自由旋转不蹭壁 |
| 沉淀 | 15,000×g 1 min，转移上清至新 2 mL 管 | 湿土可预先 10,000×g 30 s 去水 |
| 去抑制物 | +**CD2 200 µL**，涡旋 5 s | CD2 含 IRT，沉淀腐殖酸/蛋白/细胞碎片 |
| 再沉淀 | 15,000×g 1 min，转移 ≤700 µL 上清 | 避开沉淀 |
| 结合 | +**CD3 600 µL**，涡旋 5 s | CD3 高盐调结合条件；沉淀可 60 ℃ 回溶 |
| 上柱 | 分次 650 µL 上 MB Spin Column | 15,000×g 1 min/次，弃流穿 |
| 洗涤 | Solution **EA 500 µL**，15,000×g 1 min；再用 C5 洗涤（体积按手册）→ 空离干燥膜 | EA/C5 易燃；离心 15–25 ℃ |
| 洗脱 | **C6 50–100 µL 点膜中央** | 15,000×g 1 min；C6 无 EDTA，DNA 须冻存（−30~−15 ℃） |

## 原厂注意点

- CD2 2–8 ℃ 保存，其余室温；CD1/CD3 含胍盐禁漂白剂。
- 减剪切替代法：加 CD1 后涡旋 3–4 s → 70 ℃ 5 min ×2（得率降但片段更完整）。
- 浓缩：5–10 µL 3 M NaCl + 100 µL 冷乙醇，−30~−15 ℃ 30 min，10,000×g 5 min，干燥勿过度。
- 高通量：DNeasy 96 PowerSoil Pro（2×96，4,500×g）；自动化：QIAcube HT / QIAsymphony PowerFecal Pro。

## 操作经验

- 16S 项目每批带**空白提取对照**（只加 CD1）监控试剂背景菌。
- 腐殖酸残留的表现是 DNA 发黄、PCR 抑制：检查 CD2 步骤与上清转移是否避开了沉淀。
- 记录：样本类型/质量、破碎方式与时间、得率、A260/280/230、空白对照结果。
