# QIAGEN MagAttract HMW DNA（67563，高分子量 DNA，03/2020）

- 样本：全血 200 µL（EDTA/枸橼酸/肝素均可）、组织 ≤25 mg、细菌沉淀
- 产物：**>150 kb HMW DNA**，ONT/PacBio 长读长提取标准方案
- 来源：[MagAttract HMW DNA Handbook 03/2020](https://www.qiagen.com/en-us/resources/download/kithandbookandprotocol/hb-1523-006-hb-magattract-hmw-dna-0320-ww)

## 血液流程

| 步骤 | 配液 | 条件 |
|------|------|------|
| 裂解 | 2 mL 管底加 **PK 20 µL** → 全血 200 µL → RNase A 4 µL → **Buffer AL 150 µL**，涡旋混匀 | **室温 30 min**（可 65 ℃ 10 min 加速） |
| 结合 | +MagAttract Suspension G **15 µL** + **Buffer MB 280 µL** | 磁珠用前**剧烈涡旋 ≥3 min**；摇床 1,400 rpm 室温 3 min |
| 分离 | 上磁力架 ~1 min 至澄清，去上清 | **吸头沿远离珠团一侧加液/吸液，绝不直冲珠团** |
| 洗涤 | MW1、PE 按手册（首用各加乙醇） | 水冲洗残留乙醇（防止带入洗脱液） |
| 洗脱 | **Buffer AE 100–200 µL**，1,400 rpm 室温 3 min | 200 µL 全血典型得率 5–6 µg |

## 组织流程

≤25 mg 组织 + ATL 220 µL + PK 20 µL，**56 ℃ 900 rpm 过夜（12–16 h）** 至完全裂解 → RNase A 4 µL 2 min → AL 150 µL → MB 280 µL + Suspension G **40 µL** → 结合/洗涤/洗脱同血液。不溶物可 20,000×g 3 min 去除。

## 细菌流程

沉淀 + ATL 180 µL + PK 20 µL，56 ℃ 900 rpm 30 min（革兰阳性先用 P1 160 µL + 溶菌酶 20 µL 37 ℃ 30 min–2 h）→ RNase A → AL/MB/磁珠同上。

## 原厂注意点

- **PK 勿直接加入 Buffer AL**（高浓度变性剂直接灭活）。
- MW1/PE 为浓缩液，首用按瓶标加乙醇；AL/MB 沉淀 37 ℃ 回溶。
- 定量读 A260 须**减 A320 背景**（磁珠残留会造成假性高读数）；用水洗脱会使 A260/280 漂移，用 AE。
- 血液短期（≤10 天）EDTA 管 2–8 ℃；长期 −90~−60 ℃；冻血 37 ℃ 水浴温和混匀。
- 所有移液动作轻柔——HMW DNA 对剪切敏感，禁用细吸头猛吹。

## 操作经验

- 下游 ONT/PacBio 前用 Femto Pulse/脉冲场电泳确认主峰 >50 kb，Qubit 定量。
- 得率低先查：磁珠是否充分重悬、裂解是否完全、血液冻融次数。
- 记录：样本类型/量、裂解时间、洗脱体积、Qubit、A260/280（减 A320）、主峰 kb。
