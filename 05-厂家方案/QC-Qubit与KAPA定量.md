# 文库定量：Qubit dsDNA HS + KAPA qPCR（组合使用）

- Qubit：总 dsDNA 质量浓度（ng/µL），30 秒级，判断总量。
- KAPA qPCR：可扩增分子浓度（pM），决定 loading 浓度。
- 只用 Qubit 或 NanoDrop 决定 loading，是簇密度失控的常见原因。

## 一、Qubit dsDNA HS Assay（Q32851/Q32854，MAN0002326 Rev C.0）

来源：[Thermo Fisher Qubit dsDNA HS Assay UG](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/Qubit_dsDNA_HS_Assay_UG.pdf)

- 量程：初始样本 5 pg/µL–120 ng/µL（assay range 0.1–120 ng）。
- 对 dsDNA 高选择性，耐受盐、游离核苷酸、去污剂、蛋白。

| 步骤 | 操作 |
|------|------|
| 1 | 配制工作液：dsDNA HS Reagent 按 **1:200** 稀释进 Buffer（用塑料管，禁止玻璃容器） |
| 2 | 标准管：190 µL 工作液 + 10 µL Standard（2 个标准，校准用） |
| 3 | 样品管：180–199 µL 工作液 + 1–20 µL 样品，**每管终体积 200 µL** |
| 4 | 涡旋 3–5 s（避免气泡） |
| 5 | 室温孵育 **2 min** 后读数；避光下信号可稳定 3 h |

工作液用量估算：N 个样本 + 2 标准 ≈ (N+2)×200 µL，例如 8 样本配 2 mL（10 µL reagent + 1990 µL buffer）。

### 原厂注意点

- 标签贴在管盖上，不要贴管壁（挡光路）。
- 所有溶液回到室温再测；读数前不要用手握管（温度漂移）。
- 异常缓冲液样本：标准管里补等体积该缓冲液，保持基质一致。
- 每管读数约 3 s，随测随插，不要让管子在仪器里升温。

## 二、KAPA Library Quantification Kit（KR0405 v9.17，qPCR 绝对定量）

来源：[KAPA Library Quantification TDS](https://rochesequencingstore.com/wp-content/uploads/2022/07/KAPA-Library-Quantification-Kit-Technical-Data-Sheet.pdf)

- 标准品：452 bp 线性 dsDNA，20 / 2 / 0.2 / 0.02 / 0.002 / 0.0002 pM（10 倍系列，Standard 1–6）。
- 引物：结合 Illumina P5/P7 接头（Primer 1: AATGATACGGCGACCACCGA；Primer 2: CAAGCAGAAGACGGCATACGA）。
- 动态范围：20–0.0002 pM；文库必须稀释到范围内。

### 稀释（最容易出错的环节）

- 稀释液：**10 mM Tris-HCl pH 8.0–8.5 + 0.05% Tween 20**，严禁用水（无缓冲稀 DNA 会降解、吸附管壁）。
- 常规文库 1:1000–1:100,000；推荐做两个 10 倍梯度（如 1:1000 和 1:10,000），保证至少一个落在曲线内。
- 大稀释倍数拆成连续小步（两个 1:100，不做一次 1:10,000）。
- 现配现用，冰上放置；每步换新吸头；标准品从 Std 6 → Std 1 顺序加，防交叉污染。

### 反应体系（20 µL）

| 组分 | 体积 |
|------|------|
| KAPA SYBR FAST (2×) + Primer Premix (10×) | 12.0 µL |
| ROX High/Low (50×)（视机型） | 0.4 µL（不用则补水 4.0 µL） |
| PCR 水 | 3.6 µL |
| 标准品/文库稀释液 | 4.0 µL |

10 µL 体系减半（6 + 0.2 + 模板 4 µL 不变，水相应减）。

### 程序

| 步骤 | 温度 | 时间 | 循环 |
|------|------|------|------|
| 初始变性 | 95 ℃ | 5 min | 1 |
| 变性 | 95 ℃ | 30 s | 35 |
| 退火/延伸+采集 | 60 ℃ | 45 s（>700 bp 文库延长到 90 s） | |
| 熔解曲线（可选） | 65–95 ℃ | — | 1 |

### 合格标准（不满足则重做，不可用于 loading 计算）

- 标准曲线效率 90–110%（斜率 −3.1～−3.6），R² ≥ 0.99。
- 相邻标准 ΔCq 3.1–3.6。
- 复孔 Cq 差 ≤0.2 循环；建议三复孔，至少两复孔 + 每个文库两个稀释度。
- NTC Cq 至少比 Std 6 晚 3 循环。
- 文库 Cq 早于 Std 1 或晚于 Std 6 → 稀释倍数不对，重测。

### 浓度换算（必须做片段校正）

$$\text{文库浓度 (pM)} = \text{qPCR 测得浓度} \times \frac{452}{\text{文库平均片段 (bp)}} \times \text{稀释倍数}$$

452 是标准品长度；文库平均片段取 TapeStation/Bioanalyzer 主峰。550 bp 的文库不校正会把浓度低估约 18%。

### 内参建议

- 每个 assay 带一个内参：KAPA Dilution Control（200 pM）、近期成功上机的文库、或 PhiX。
- 同批稀释、同批上机，内参测值漂移说明操作有问题。

## 三、两种结果怎么一起用

| 场景 | 结论 | 处理 |
|------|------|------|
| Qubit 高、qPCR 高 | 正常 | 进入 pooling |
| Qubit 高、qPCR 低（>2 倍） | 不可扩增分子多：接头没连上、片段缺末端、有抑制剂 | 查建库连接步骤，必要时重做 |
| Qubit 低、qPCR 高 | 定量误差或片段校正没做 | 复核稀释与片段长度 |
| 两者都低 | 产量不足 | 查输入量、PCR 循环、纯化损失 |

## 记录

Qubit 浓度、TapeStation 平均片段、qPCR 稀释度与 Cq、标准曲线效率/R²、校正后 pM、内参测值。
