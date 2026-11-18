#!/usr/bin/env Rscript
# DESeq2 差异分析模板（NGS 课程 M7）
# 用法: Rscript deseq2_template.R counts.csv design.csv outdir
#   counts.csv: 行=基因(首列 ID)，列=样本的整数计数矩阵（featureCounts 整理）
#   design.csv: 两列 sample,condition，sample 顺序与 counts 列一致
# 依赖: DESeq2（Bioconductor）。仅用基础绘图，不依赖 ggplot2。

args <- commandArgs(trailingOnly = TRUE)
if (length(args) < 3) stop("用法: Rscript deseq2_template.R counts.csv design.csv outdir")
counts_file <- args[1]
design_file <- args[2]
outdir <- args[3]

suppressMessages(library(DESeq2))

counts <- read.csv(counts_file, row.names = 1, check.names = FALSE)
design <- read.csv(design_file, stringsAsFactors = TRUE)
stopifnot(all(colnames(counts) == design$sample))

# 参考水平决定 log2FC 方向：factor 默认按字母序取首水平为参考。
# 若对照组不是字母序第一（如 "WT" 排在 "KO" 后），log2FC 方向会静默反转——
# 请显式指定参考水平：
# design$condition <- relevel(design$condition, ref = "对照组名")
# 或解读时改用 results(dds, contrast = c("condition", "处理", "对照"))。

dds <- DESeqDataSetFromMatrix(round(as.matrix(counts)), design, ~ condition)
dds <- dds[rowSums(counts(dds)) >= 10, ] # 低表达过滤：总计数 <10 的基因不提供检验功效
dds <- DESeq(dds)
res <- results(dds, alpha = 0.05)
res <- res[order(res$padj), ]

dir.create(outdir, showWarnings = FALSE, recursive = TRUE)
write.csv(as.data.frame(res), file.path(outdir, "deseq2_results.csv"))

# 火山图（基础绘图；y 轴用 padj 与显著性判据一致，pmax 防 -log10(0)=Inf）
png(file.path(outdir, "volcano.png"), width = 800, height = 700)
res_df <- as.data.frame(res)
is_sig <- !is.na(res_df$padj) & res_df$padj < 0.05 & abs(res_df$log2FoldChange) > 1
plot(res_df$log2FoldChange, -log10(pmax(res_df$padj, 1e-300)),
     pch = 20, cex = 0.5, col = ifelse(is_sig, "red", "grey60"),
     xlab = "log2 fold change", ylab = "-log10 padj", main = "Volcano")
abline(v = c(-1, 1), lty = 2)
dev.off()

# PCA（rlog 变换后）
rld <- rlog(dds, blind = TRUE)
pca <- prcomp(t(assay(rld)))
png(file.path(outdir, "pca.png"), width = 800, height = 700)
plot(pca$x[, 1:2], col = as.integer(design$condition) + 1, pch = 19,
     xlab = "PC1", ylab = "PC2", main = "PCA (rlog)")
text(pca$x[, 1:2], labels = design$sample, pos = 3, cex = 0.7)
dev.off()

cat("完成:", outdir, "\n")
cat("显著差异基因 (padj<0.05 且 |log2FC|>1):", sum(is_sig), "\n")
