#!/usr/bin/env python3
"""课程一致性审计：本地链接、术语变体、模块编号。

用法：python tools/audit_course.py
退出码：0 无问题；1 发现断链。
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parent.parent
LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
MODULE_RE = re.compile(r"\bM(\d{1,2})\b")


def main() -> int:
    md_files = sorted(ROOT.rglob("*.md"))
    broken: list[tuple[str, str]] = []
    modules: dict[str, set[str]] = {}

    for path in md_files:
        text = path.read_text(encoding="utf-8")
        rel = path.relative_to(ROOT).as_posix()
        for match in LINK_RE.finditer(text):
            target = match.group(2).strip()
            if target.startswith(("http://", "https://", "#", "mailto:")):
                continue
            local = target.split("#")[0]
            if not local:
                continue
            if not (path.parent / local).resolve().exists():
                broken.append((rel, target))
        for mod in MODULE_RE.findall(text):
            modules.setdefault(rel, set()).add(f"M{int(mod)}")

    print(f"扫描 Markdown 文件: {len(md_files)}")
    for rel, target in broken:
        print(f"[BROKEN] {rel} -> {target}")
    print(f"断链数: {len(broken)}")

    print("\n模块编号分布:")
    for rel in sorted(modules):
        print(f"  {rel}: {', '.join(sorted(modules[rel], key=lambda x: int(x[1:])))}")

    variants = ["pooling", "Pooling", "混样", "混池", "Q30", "Q 30",
                "PhiX", "phix", "µL", "uL", "NGS", "二代测序", "RIN", "DV200"]
    print("\n术语计数:")
    corpus = "\n".join(p.read_text(encoding="utf-8") for p in md_files)
    for term in variants:
        print(f"  {term}: {corpus.count(term)}")

    return 1 if broken else 0


if __name__ == "__main__":
    raise SystemExit(main())
