#!/usr/bin/env python3
"""静态检查交互页：JS 引用的 DOM id 是否都存在于 index.html。"""

from __future__ import annotations

import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

HERE = Path(__file__).resolve().parent
html = (HERE / "index.html").read_text(encoding="utf-8")
js = (HERE / "app.js").read_text(encoding="utf-8")

ids = set(re.findall(r'id="([^"]+)"', html))
refs = set(re.findall(r'\$\("([^"]+)"\)', js))
missing = sorted(refs - ids)

print(f"index.html id 数: {len(ids)}；app.js 引用数: {len(refs)}")
print("缺失 id:", missing if missing else "无")
for name in ("styles.css", "calc.js", "app.js"):
    print(f"{name}: {'存在' if (HERE / name).exists() else '缺失'}")

raise SystemExit(1 if missing else 0)
