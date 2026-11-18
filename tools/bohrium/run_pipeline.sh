#!/usr/bin/env bash
# S3 最小流程：fastp -> bwa-mem2 -> samtools -> featureCounts
# 用法：bash tools/bohrium/run_pipeline.sh data/s3test
set -euo pipefail

DATA_DIR="${1:-data/s3test}"
THREADS="${THREADS:-4}"

need() {
  command -v "$1" >/dev/null 2>&1 || { echo "[ERROR] 缺少命令: $1（先运行 setup_ngs_env.sh）" >&2; exit 2; }
}
for tool in fastp bwa-mem2 samtools featureCounts; do need "$tool"; done

R1="$DATA_DIR/raw/sample_R1.fastq.gz"
R2="$DATA_DIR/raw/sample_R2.fastq.gz"
REF="$DATA_DIR/ref/genome.fa"
GTF="$DATA_DIR/ref/annotation.gtf"

for f in "$R1" "$R2" "$REF" "$GTF"; do
  [[ -s "$f" ]] || { echo "[ERROR] 缺少输入: $f" >&2; exit 3; }
done

mkdir -p "$DATA_DIR/trimmed" "$DATA_DIR/bam" "$DATA_DIR/counts" "$DATA_DIR/logs"

echo "[STEP 1/4] fastp 清洗"
fastp -i "$R1" -I "$R2" \
  -o "$DATA_DIR/trimmed/sample_R1.fq.gz" -O "$DATA_DIR/trimmed/sample_R2.fq.gz" \
  -q 20 -l 50 -j "$DATA_DIR/logs/fastp.json" -h "$DATA_DIR/logs/fastp.html" \
  2> "$DATA_DIR/logs/fastp.log"

echo "[STEP 2/4] bwa-mem2 建索引"
bwa-mem2 index "$REF" > "$DATA_DIR/logs/bwa_index.log" 2>&1

echo "[STEP 3/4] 比对并排序"
bwa-mem2 mem -t "$THREADS" "$REF" \
  "$DATA_DIR/trimmed/sample_R1.fq.gz" "$DATA_DIR/trimmed/sample_R2.fq.gz" \
  2> "$DATA_DIR/logs/bwa_mem.log" \
  | samtools sort -@ "$THREADS" -o "$DATA_DIR/bam/sample.bam" -
samtools index "$DATA_DIR/bam/sample.bam"

echo "[STEP 4/4] featureCounts 定量"
featureCounts -T "$THREADS" -p -a "$GTF" \
  -o "$DATA_DIR/counts/counts.txt" "$DATA_DIR/bam/sample.bam" \
  > "$DATA_DIR/logs/featurecounts.log" 2>&1

echo "[DONE] 结果："
ls -lh "$DATA_DIR/bam/sample.bam" "$DATA_DIR/bam/sample.bam.bai" "$DATA_DIR/counts/counts.txt"
