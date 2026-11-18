#!/usr/bin/env python3
"""NGS 浓度与摩尔浓度计算器（纯标准库）。

用法示例：
  python calc_molarity.py --ng 12 --bp 450
  python calc_molarity.py --mass --nm 10 --bp 500
  python calc_molarity.py --pool 40,25,30,20 --target 10 --volume 100
  python calc_molarity.py --dilute --c1 100 --c2 2 --v2 500
  python calc_molarity.py --phix --volume 100 --percent 1
  python calc_molarity.py --selftest
"""

from __future__ import annotations

import argparse
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

BP_MASS_G_PER_MOL = 660.0


def mass_to_nm(ng_per_ul: float, bp: float) -> float:
    """质量浓度 ng/µL -> 摩尔浓度 nM（dsDNA）。"""
    if ng_per_ul < 0 or bp <= 0:
        raise ValueError("浓度必须非负，片段长度必须为正")
    return ng_per_ul * 1e6 / (bp * BP_MASS_G_PER_MOL)


def nm_to_mass(nm: float, bp: float) -> float:
    """摩尔浓度 nM -> 质量浓度 ng/µL（dsDNA）。"""
    if nm < 0 or bp <= 0:
        raise ValueError("浓度必须非负，片段长度必须为正")
    return nm * bp * BP_MASS_G_PER_MOL / 1e6


def pool_volumes(concs_nm: list[float], target_nm: float, total_ul: float) -> list[float]:
    """等摩尔 pooling：返回每个文库所需体积（µL）。"""
    if not concs_nm:
        raise ValueError("至少需要一个文库浓度")
    if any(c <= 0 for c in concs_nm):
        raise ValueError("文库浓度必须为正")
    if target_nm <= 0 or total_ul <= 0:
        raise ValueError("目标浓度与总体积必须为正")
    per_lib_nm_ul = target_nm * total_ul / len(concs_nm)
    volumes = [per_lib_nm_ul / c for c in concs_nm]
    if sum(volumes) > total_ul + 1e-9:
        raise ValueError("各文库体积之和超过总体积，请降低目标浓度")
    return volumes


def dilution_volume(c1: float, c2: float, v2: float) -> float:
    """C1V1 = C2V2，返回母液体积 V1。"""
    if c1 <= 0 or c2 <= 0 or v2 <= 0:
        raise ValueError("浓度与体积必须为正")
    if c2 > c1:
        raise ValueError("目标浓度不能高于母液浓度")
    return c2 * v2 / c1


def phix_volume(total_ul: float, percent: float) -> float:
    """按体积百分比计算 PhiX 加入量。"""
    if total_ul <= 0 or not 0 <= percent <= 100:
        raise ValueError("体积必须为正，百分比须在 0–100")
    return total_ul * percent / 100.0


def _selftest() -> int:
    cases = [
        ("mass_to_nm 12ng/450bp", round(mass_to_nm(12, 450), 2), 40.40),
        ("nm_to_mass 10nM/500bp", round(nm_to_mass(10, 500), 2), 3.30),
        ("dilution 100->2/500", round(dilution_volume(100, 2, 500), 2), 10.00),
        ("phix 100/1%", round(phix_volume(100, 1), 2), 1.00),
    ]
    ok = True
    for name, got, want in cases:
        status = "PASS" if abs(got - want) < 0.01 else "FAIL"
        if status == "FAIL":
            ok = False
        print(f"[{status}] {name}: got={got} want={want}")

    vols = [round(v, 2) for v in pool_volumes([40, 25, 30, 20], 10, 100)]
    expected = [6.25, 10.0, 8.33, 12.5]
    pool_ok = all(abs(a - b) < 0.01 for a, b in zip(vols, expected))
    print(f"[{'PASS' if pool_ok else 'FAIL'}] pool volumes: got={vols} want={expected}")
    ok = ok and pool_ok

    print("SELFTEST_PASS" if ok else "SELFTEST_FAIL")
    return 0 if ok else 1


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="NGS 浓度/摩尔浓度计算器")
    parser.add_argument("--ng", type=float, help="质量浓度 ng/µL")
    parser.add_argument("--bp", type=float, help="平均片段长度 bp")
    parser.add_argument("--nm", type=float, help="摩尔浓度 nM")
    parser.add_argument("--mass", action="store_true", help="由 nM 反算 ng/µL")
    parser.add_argument("--pool", type=str, help="逗号分隔的各文库浓度 nM")
    parser.add_argument("--target", type=float, help="pooling 目标浓度 nM")
    parser.add_argument("--volume", type=float, help="pooling 总体积 µL")
    parser.add_argument("--dilute", action="store_true", help="计算稀释体积")
    parser.add_argument("--c1", type=float, help="母液浓度")
    parser.add_argument("--c2", type=float, help="目标浓度")
    parser.add_argument("--v2", type=float, help="目标体积 µL")
    parser.add_argument("--phix", action="store_true", help="计算 PhiX 体积")
    parser.add_argument("--percent", type=float, help="PhiX 百分比")
    parser.add_argument("--selftest", action="store_true", help="运行自检")
    args = parser.parse_args(argv)

    try:
        if args.selftest:
            return _selftest()
        if args.pool:
            concs = [float(x) for x in args.pool.split(",") if x.strip()]
            if args.target is None or args.volume is None:
                parser.error("--pool 需要同时提供 --target 与 --volume")
            vols = pool_volumes(concs, args.target, args.volume)
            for i, (c, v) in enumerate(zip(concs, vols), 1):
                print(f"文库{i}: 浓度 {c:g} nM -> 取 {v:.2f} µL")
            print(f"补稀释液至 {args.volume:g} µL（实际取样合计 {sum(vols):.2f} µL）")
        elif args.dilute:
            if args.c1 is None or args.c2 is None or args.v2 is None:
                parser.error("--dilute 需要 --c1 --c2 --v2")
            v1 = dilution_volume(args.c1, args.c2, args.v2)
            print(f"取母液 {v1:.2f} µL，加稀释液 {args.v2 - v1:.2f} µL 至 {args.v2:g} µL")
        elif args.phix:
            if args.volume is None or args.percent is None:
                parser.error("--phix 需要 --volume 与 --percent")
            print(f"PhiX 加入量: {phix_volume(args.volume, args.percent):.2f} µL")
        elif args.mass:
            if args.nm is None or args.bp is None:
                parser.error("--mass 需要 --nm 与 --bp")
            print(f"{nm_to_mass(args.nm, args.bp):.2f} ng/µL")
        else:
            if args.ng is None or args.bp is None:
                parser.error("需要 --ng 与 --bp，或使用 --pool/--dilute/--phix/--mass/--selftest")
            print(f"{mass_to_nm(args.ng, args.bp):.2f} nM")
    except ValueError as exc:
        print(f"错误: {exc}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
