#!/usr/bin/env python3
"""生成 S3 用的合成测试数据：小型基因组、GTF、双端 FASTQ。

用法：python tools/bohrium/make_testdata.py --out data/s3test
"""

from __future__ import annotations

import argparse
import gzip
import random
from pathlib import Path

BASES = "ACGT"
COMP = str.maketrans("ACGT", "TGCA")


def revcomp(seq: str) -> str:
    return seq.translate(COMP)[::-1]


def mutate(seq: str, rate: float, rng: random.Random) -> str:
    out = []
    for base in seq:
        if rng.random() < rate:
            out.append(rng.choice([b for b in BASES if b != base]))
        else:
            out.append(base)
    return "".join(out)


def write_fastq(path: Path, reads: list[tuple[str, str]], quality: str) -> None:
    with gzip.open(path, "wt", encoding="utf-8", newline="\n") as fh:
        for name, seq in reads:
            fh.write(f"@{name}\n{seq}\n+\n{quality}\n")


def main() -> int:
    parser = argparse.ArgumentParser(description="生成 S3 合成测试数据")
    parser.add_argument("--out", default="data/s3test", help="输出目录")
    parser.add_argument("--pairs", type=int, default=300, help="读对数量")
    parser.add_argument("--seed", type=int, default=42)
    args = parser.parse_args()

    rng = random.Random(args.seed)
    out = Path(args.out)
    (out / "ref").mkdir(parents=True, exist_ok=True)
    (out / "raw").mkdir(parents=True, exist_ok=True)

    genome_len = 20_000
    genome = "".join(rng.choice(BASES) for _ in range(genome_len))
    genes = [(1000, 5000), (6000, 10000), (11000, 15000), (16000, 20000)]

    (out / "ref" / "genome.fa").write_text(f">chr1\n{genome}\n", encoding="utf-8")

    with (out / "ref" / "annotation.gtf").open("w", encoding="utf-8", newline="\n") as fh:
        for idx, (start, end) in enumerate(genes, 1):
            gid = f"gene{idx}"
            fh.write(
                f'chr1\tctg\texon\t{start + 1}\t{end}\t.\t+\t.\t'
                f'gene_id "{gid}"; transcript_id "{gid}.1";\n'
            )

    frag_len, read_len = 300, 150
    quality = "I" * read_len
    r1_reads: list[tuple[str, str]] = []
    r2_reads: list[tuple[str, str]] = []

    for i in range(args.pairs):
        start, end = rng.choice(genes)
        pos = rng.randint(start, end - frag_len)
        frag = genome[pos:pos + frag_len]
        r1 = mutate(frag[:read_len], 0.005, rng)
        r2 = mutate(revcomp(frag[read_len:]), 0.005, rng)
        r1_reads.append((f"read{i}/1", r1))
        r2_reads.append((f"read{i}/2", r2))

    write_fastq(out / "raw" / "sample_R1.fastq.gz", r1_reads, quality)
    write_fastq(out / "raw" / "sample_R2.fastq.gz", r2_reads, quality)

    print(f"[OK] genome: {out/'ref'/'genome.fa'} ({genome_len} bp)")
    print(f"[OK] gtf:    {out/'ref'/'annotation.gtf'} ({len(genes)} genes)")
    print(f"[OK] reads:  {args.pairs} pairs x {read_len} bp")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
