# Agilent SureSelect XT HS2 DNA（待补）

> 状态：原厂手册 PDF 抓取仍被额度拦截（HTTP 402，Exa credits 耗尽），**本页不写未核对的体积与时间**。已从手册原文（经搜索索引获取的逐字引文）确认**杂交温度 65 ℃**；其余参数待拿到手册全文后补齐。
> 官方手册：[G9983-90000](https://www.agilent.com/cs/library/usermanuals/public/G9983-90000.pdf) ｜ [Fast Hyb G9985-90000](https://www.agilent.com/cs/library/usermanuals/public/G9985-90000.pdf) ｜ [Post-capture Pooling G9983-90500](https://www.agilent.com/cs/library/usermanuals/public/G9983-90500.pdf)

## 已确认的流程框架

SureSelect XT HS2 DNA 是“建库 + 杂交捕获”一体方案，公开手册目录显示包含：

1. 文库构建：末端修复、加 A、接头连接、扩增。
2. 文库 QC 与 pooling。
3. 杂交：与 SureSelect 探针杂交，提供**快速（2–3 h）**与**过夜**两种模式。**杂交温度 65 ℃**（原厂手册 G9983-90500 原文：*Hybridization at 65 °C (steps 4 and 5) is optimal for XT HS designs*；部分 legacy XT 探针设计可能更低）。
4. 捕获：链霉亲和素磁珠富集。
5. 捕获后 PCR 与 QC。

## 待补清单（拿到手册后按此填写）

- [ ] 各步骤反应体积与组分
- [ ] 末端修复/加 A/连接的温度与时间
- [ ] 接头浓度与 index 方案
- [ ] 杂交时间、探针/blocker 用量（温度已确认 65 ℃，见上）
- [ ] 捕获洗涤温度与次数
- [ ] 捕获后 PCR 循环数
- [ ] 输入量范围与 FFPE/cfDNA 变体

## 使用建议

在补齐之前，按手头试剂盒附带的**批次说明书**执行；不要套用 NEB/KAPA/Twist 的体积。三者虽然都是“末端修复→连接→PCR”，但缓冲液体系与磁珠比例不同。

## 记录

试剂盒货号/批次、输入量、杂交模式（快速/过夜）、探针批次、捕获后 PCR 循环、Qubit、TapeStation、qPCR、捕获效率。
