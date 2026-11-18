"""核对 vendors.js 与两份 README 的计数口径一致性。

检查项：
1. vendors.js 中 VENDORS（已核对）与 VENDOR_CATALOG（已登记）的实际数量；
2. 05-厂家方案/README.md 中的"N 项已核对协议（分类计数）"与"N 项市场全景目录"；
3. interactive/README.md 中的"N 项已核对原厂协议"与"N 项市场全景目录"；
4. VENDORS 每项在 05-厂家方案/README.md 中有对应的 [已核对] 行（按品牌名模糊匹配）。

用法：python tools/check_vendor_sync.py
退出码：0 = 全部一致；1 = 存在不一致。
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VENDORS_JS = ROOT / "interactive" / "vendors.js"
README_VENDOR = ROOT / "05-厂家方案" / "README.md"
README_INTERACTIVE = ROOT / "interactive" / "README.md"
SOP_WET = ROOT / "01-湿实验" / "00-湿实验全流程SOP.md"

DUMP_JS = (
    "const fs=require('fs');"
    "const s=fs.readFileSync('vendors.js','utf8');"
    "eval(s.replace('var VENDORS','VENDORS').replace('var VENDOR_CATALOG','VENDOR_CATALOG'));"
    "const c={};VENDORS.forEach(v=>c[v.cat]=(c[v.cat]||0)+1);"
    "console.log(JSON.stringify({n:VENDORS.length,cats:c,catalog:VENDOR_CATALOG.length,"
    "names:VENDORS.map(v=>v.name)}));"
)


def load_vendor_data() -> dict:
    result = subprocess.run(
        ["node", "-e", DUMP_JS],
        cwd=VENDORS_JS.parent,
        capture_output=True,
        check=True,
    )
    return json.loads(result.stdout.decode("utf-8"))


def check_count(text: str, pattern: str, expected: int, label: str, errors: list[str]) -> None:
    m = re.search(pattern, text)
    if not m:
        errors.append(f"{label}：未找到计数表述（{pattern}）")
        return
    actual = int(m.group(1))
    if actual != expected:
        errors.append(f"{label}：写的是 {actual}，实际是 {expected}")


def main() -> int:
    data = load_vendor_data()
    n_verified: int = data["n"]
    n_catalog: int = data["catalog"]
    cats: dict[str, int] = data["cats"]

    errors: list[str] = []

    rv = README_VENDOR.read_text(encoding="utf-8")
    check_count(rv, r"(\d+) 项已核对协议", n_verified, "05-README 已核对总数", errors)
    check_count(rv, r"(\d+) 项市场全景目录", n_catalog, "05-README 全景总数", errors)
    for cat, cnt in cats.items():
        check_count(rv, rf"{cat} (\d+)", cnt, f"05-README 分类计数[{cat}]", errors)

    ri = README_INTERACTIVE.read_text(encoding="utf-8")
    check_count(ri, r"(\d+) 项已核对原厂协议", n_verified, "交互-README 已核对总数", errors)
    check_count(ri, r"(\d+) 项市场全景目录", n_catalog, "交互-README 全景总数", errors)

    sop = SOP_WET.read_text(encoding="utf-8")
    check_count(sop, r"（(\d+) 项已核对协议）", n_verified, "湿实验SOP 已核对总数", errors)

    # 每个已核对协议应在 05-README 中有 [已核对] 行（取名称首段做模糊匹配）
    for name in data["names"]:
        key = name.split("（")[0].split("(")[0].strip()
        brand = key.split()[0]
        if brand and brand not in rv:
            errors.append(f"05-README 缺少品牌行：{name}")

    print(f"VENDORS 已核对: {n_verified}  分类: {cats}  CATALOG: {n_catalog}")
    if errors:
        print("不一致项：")
        for e in errors:
            print(f"  [X] {e}")
        return 1
    print("全部一致 OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
