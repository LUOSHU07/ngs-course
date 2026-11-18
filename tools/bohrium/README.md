# S3 玻尔云执行包

配合 [玻尔云容器使用](../../02-干实验/01-玻尔云容器使用.md) 使用。所有脚本为 Linux 环境编写，**尚未在真实 Bohrium 账号内实测**；首次运行请按下面的顺序逐条执行并记录报错。

## 文件

| 文件 | 作用 |
|------|------|
| `setup_ngs_env.sh` | 用 conda 建 `ngs` 环境，装 fastqc/fastp/bwa-mem2/samtools/subread/salmon/multiqc |
| `make_testdata.py` | 生成 20 kb 合成基因组、4 个基因的 GTF、300 对 2×150 bp FASTQ |
| `run_pipeline.sh` | fastp → bwa-mem2 → samtools → featureCounts 最小流程 |
| `job.example.json` | 作业模板，需替换 `project_id` 与 `machine_type` |

## 快速开始（容器节点内）

```bash
# 1. 课程放到持久目录
mkdir -p /share/ngs-course && cd /share/ngs-course

# 2. 装环境
bash tools/bohrium/setup_ngs_env.sh
conda activate ngs

# 3. 生成测试数据
python tools/bohrium/make_testdata.py --out data/s3test

# 4. 跑流程
bash tools/bohrium/run_pipeline.sh data/s3test

# 5. 看结果
cat data/s3test/counts/counts.txt
samtools flagstat data/s3test/bam/sample.bam
```

## 提交为作业

1. 复制模板：`cp tools/bohrium/job.example.json job.json`
2. 改 `project_id`（项目页）与 `machine_type`（价格页复制的 CPU 机型）。
3. 校验（不产生资源）：`bohr job submit -i job.json --input_directory ./ --dry-run`
4. 提交：`bohr job submit -i job.json --input_directory ./`
5. 日志：`bohr job log <BOHR_ID> --out ./logs`
6. 取回：`bohr job download <BOHR_ID> --out ./results`

## 预期结果

- `counts/counts.txt` 中 4 个基因应有非零计数（合成 reads 全部来自基因区）。
- `samtools flagstat` 的 properly paired 比例应接近 100%。

## 注意

- 首次 `conda create` 需要网络；国内可先配 TUNA/BFSU 镜像。
- `bwa-mem2 index` 会在 `ref/` 下生成多个索引文件。
- 作业结束后在平台关机/删除节点，避免继续计费。
