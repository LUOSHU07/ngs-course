#!/usr/bin/env python3
"""NGS 单样本成本模型（纯标准库）。

prices.csv 列：name,category,unit_price,basis,qty
  basis: sample（按样本计）或 run（按 run 计，分摊到样本）
  qty: 每个样本/每个 run 的数量

用法：
  python cost_model.py --prices data/prices.csv --samples 10 --fill 0.9 --fail 0.1
  python cost_model.py --prices data/prices.csv --selftest
"""

from __future__ import annotations

import argparse
import csv
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")


def load_prices(path: str) -> list[dict]:
    rows: list[dict] = []
    with open(path, newline="", encoding="utf-8-sig") as fh:
        reader = csv.DictReader(fh)
        required = {"name", "category", "unit_price", "basis", "qty"}
        if not required.issubset(reader.fieldnames or []):
            raise ValueError(f"CSV 缺少列: {required - set(reader.fieldnames or [])}")
        for row in reader:
            basis = row["basis"].strip().lower()
            if basis not in {"sample", "run"}:
                raise ValueError(f"basis 必须是 sample 或 run: {row['basis']}")
            rows.append(
                {
                    "name": row["name"].strip(),
                    "category": row["category"].strip(),
                    "unit_price": float(row["unit_price"]),
                    "basis": basis,
                    "qty": float(row["qty"]),
                }
            )
    return rows


def compute(rows: list[dict], samples: int, fill: float, fail: float) -> dict:
    if samples <= 0:
        raise ValueError("样本数必须为正")
    if not 0 < fill <= 1:
        raise ValueError("fill 必须在 (0,1]")
    if not 0 <= fail < 1:
        raise ValueError("fail 必须在 [0,1)")

    sample_cost = sum(r["unit_price"] * r["qty"] for r in rows if r["basis"] == "sample")
    run_cost = sum(r["unit_price"] * r["qty"] for r in rows if r["basis"] == "run")
    run_share = run_cost / (samples * fill)
    subtotal = sample_cost + run_share
    expected = subtotal / (1 - fail)
    return {
        "sample_cost": sample_cost,
        "run_cost": run_cost,
        "run_share": run_share,
        "subtotal": subtotal,
        "expected": expected,
        "per_sample": expected,
    }


def print_breakdown(rows: list[dict], result: dict, samples: int, fill: float, fail: float) -> None:
    print(f"{'项目':<28}{'类别':<12}{'单价':>10}{'计费':>8}{'数量':>8}{'小计':>12}")
    print("-" * 78)
    for r in rows:
        line = r["unit_price"] * r["qty"]
        if r["basis"] == "run":
            line = line / (samples * fill)
        print(f"{r['name']:<28}{r['category']:<12}{r['unit_price']:>10.2f}{r['basis']:>8}{r['qty']:>8.1f}{line:>12.2f}")
    print("-" * 78)
    print(f"按样本直接成本: {result['sample_cost']:.2f}")
    print(f"按 run 成本:    {result['run_cost']:.2f}（分摊后每样本 {result['run_share']:.2f}）")
    print(f"小计/样本:      {result['subtotal']:.2f}")
    print(f"失败率折算:     {fail:.0%} -> 期望单样本成本 {result['expected']:.2f}")


def _selftest() -> int:
    rows = [
        {"name": "extraction", "category": "reagent", "unit_price": 10, "basis": "sample", "qty": 1},
        {"name": "library", "category": "reagent", "unit_price": 150, "basis": "sample", "qty": 1},
        {"name": "qc", "category": "reagent", "unit_price": 25, "basis": "sample", "qty": 1},
        {"name": "consumables", "category": "consumable", "unit_price": 8, "basis": "sample", "qty": 1},
        {"name": "labor", "category": "labor", "unit_price": 90, "basis": "sample", "qty": 1},
        {"name": "sequencing", "category": "reagent", "unit_price": 1200, "basis": "run", "qty": 1},
    ]
    res = compute(rows, samples=10, fill=0.9, fail=0.1)
    # sample=283, run_share=133.333, subtotal=416.333, expected=462.593
    checks = [
        ("sample_cost", res["sample_cost"], 283.0),
        ("run_share", res["run_share"], 133.33),
        ("expected", res["expected"], 462.59),
    ]
    ok = True
    for name, got, want in checks:
        status = "PASS" if abs(got - want) < 0.1 else "FAIL"
        if status == "FAIL":
            ok = False
        print(f"[{status}] {name}: got={got:.2f} want={want:.2f}")
    print("SELFTEST_PASS" if ok else "SELFTEST_FAIL")
    return 0 if ok else 1


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="NGS 单样本成本模型")
    parser.add_argument("--prices", required=True, help="价格 CSV 路径")
    parser.add_argument("--samples", type=int, default=1, help="样本数")
    parser.add_argument("--fill", type=float, default=1.0, help="run 装载利用率 (0,1]")
    parser.add_argument("--fail", type=float, default=0.0, help="失败率 [0,1)")
    parser.add_argument("--selftest", action="store_true", help="运行内置自检")
    args = parser.parse_args(argv)

    try:
        if args.selftest:
            return _selftest()
        rows = load_prices(args.prices)
        result = compute(rows, args.samples, args.fill, args.fail)
        print_breakdown(rows, result, args.samples, args.fill, args.fail)
    except (OSError, ValueError) as exc:
        print(f"错误: {exc}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
