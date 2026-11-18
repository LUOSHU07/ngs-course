# Illumina DNA Prep（原 Nextera DNA Flex）

- 输入：1–500 ng DNA（体积 2–30 µL，补水到 30 µL）
- 特点：转座酶 tagmentation 一步完成片段化 + 加接头
- 来源：[Illumina DNA Prep Reference Guide v12](https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/1000000025416_12_idp.pdf)

## 1. Tagment Genomic DNA（50 µL）

| 组分 | 体积 |
|------|------|
| DNA（1–500 ng） | 2–30 µL |
| Nuclease-free water | 补至 30 µL |
| Tagmentation Master Mix（BLT 11 + TB1 11） | 20 µL |

TAG program：55 ℃ 15 min → 10 ℃ hold；热盖 100 ℃，反应体积 50 µL。

注意：BLT 用前涡旋 10 s，**不要离心**；不要使用低于 2 ℃ 保存过的 BLT。

## 2. Post Tagmentation Clean Up（60 µL）

1. 加 10 µL TSB，吹打 10 次，运行 PTC program：37 ℃ 15 min → 10 ℃。
2. 磁力架至澄清（约 3 min），弃上清。
3. 加 100 µL TWB，缓慢吹打重悬，磁力架至澄清，弃上清；重复一次。
4. 再加 100 µL TWB 重悬，磁力架，**保留 TWB 防止磁珠干燥**，直接进入 PCR。

## 3. Amplify Tagmented DNA（50 µL）

| 组分 | 体积 |
|------|------|
| PCR Master Mix（EPM 22 + 水 22） | 40 µL |
| Index adapter（i7 + i5） | 10 µL |

BLT PCR program：68 ℃ 3 min → 98 ℃ 3 min → [98 ℃ 45 s → 62 ℃ 30 s → 68 ℃ 2 min] × N → 68 ℃ 1 min → 10 ℃。

循环数：1–9 ng 12；10–24 ng 8；25–49 ng 6；50–99 ng 5；100–500 ng 5；血/唾液 5。

## 4. Clean Up Libraries（双面 IPB）

1. 取 45 µL PCR 上清到 MIDI 板。
2. 加 40 µL 水 + 45 µL IPB，混匀，室温 5 min；磁力架至澄清。
3. 另取 15 µL IPB 到新 MIDI 板，转移 125 µL 上清过去，混匀，室温 5 min。
4. 磁力架，弃上清；200 µL 80% 乙醇洗 2 次；干燥 5 min。
5. 加 32 µL RSB，室温 2 min；磁力架，取 30 µL。

小于 500 bp 的 PCR 扩增子：改为 81 µL IPB 单次纯化，避免短片段丢失。

## 原厂明确写出的注意点

- BLT 必须充分重悬，不能离心。
- TWB 含表面活性剂，吹打要慢，避免起泡导致体积不准。
- 10 bp index 与旧 8 bp index 不兼容，测序设置要改。
- 输入 <100 ng 时需逐个定量，不能按统一体积 pooling。

## 记录

样本 ID、输入量、BLT 批次、TAG/PTC 程序、PCR 循环、index 组合、IPB 批次、Qubit、Bioanalyzer。
