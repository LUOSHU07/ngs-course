#!/usr/bin/env bash
# 在 Bohrium 容器节点内安装 S3 所需生信工具。
# 用法：bash tools/bohrium/setup_ngs_env.sh
set -euo pipefail

ENV_NAME="${NGS_ENV:-ngs}"
PKGS=(fastqc fastp bwa-mem2 hisat2 samtools subread salmon multiqc)

# M7 差异分析（可选，体积较大）：
#   conda install -y -n "$ENV_NAME" -c conda-forge -c bioconda bioconductor-deseq2 r-tximport

if ! command -v conda >/dev/null 2>&1; then
  echo "[ERROR] 未找到 conda；Bohrium 基础镜像应自带 Anaconda，请检查 PATH" >&2
  exit 1
fi

eval "$(conda shell.bash hook)"
conda config --set channel_priority strict

if conda env list | awk '{print $1}' | grep -qx "$ENV_NAME"; then
  echo "[INFO] 环境 $ENV_NAME 已存在，补充安装"
  conda install -y -n "$ENV_NAME" -c conda-forge -c bioconda "${PKGS[@]}"
else
  echo "[INFO] 创建环境 $ENV_NAME"
  conda create -y -n "$ENV_NAME" -c conda-forge -c bioconda "${PKGS[@]}"
fi

echo "[INFO] 验证版本"
conda run -n "$ENV_NAME" fastp --version
conda run -n "$ENV_NAME" bwa-mem2 version
conda run -n "$ENV_NAME" samtools --version | head -n 1
conda run -n "$ENV_NAME" featureCounts -v 2>&1 | head -n 1
conda run -n "$ENV_NAME" hisat2 --version | head -n 1

echo "[DONE] 激活方式：conda activate $ENV_NAME"
