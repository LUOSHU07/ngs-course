"""归档已核对厂家协议的来源快照，支撑"可复验"声明。

原理：web/ 下每个抓取件第 2 行为 "URL: <原始链接>"；
vendors.js 每个已核对条目带 source。按 URL 匹配后把快照复制到
references/手册快照/<vendor-id>.md，并生成索引 README。

用法：python tools/archive_sources.py
退出码：0 = 覆盖率 ≥80%；1 = 覆盖率不足（打印缺失清单）。
"""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT.parents[1] / "web"
SNAP = ROOT / "references" / "手册快照"
VENDORS_JS = ROOT / "interactive" / "vendors.js"

DUMP_JS = (
    "const fs=require('fs');"
    "const s=fs.readFileSync('vendors.js','utf8');"
    "eval(s.replace('var VENDORS','VENDORS'));"
    "console.log(JSON.stringify(VENDORS.map(v=>({id:v.id,name:v.name,source:v.source}))))"
)


def load_sources() -> dict[str, str]:
    """返回 {原始URL: 本地抓取件路径}。"""
    mapping: dict[str, str] = {}
    for f in WEB.glob("*.md"):
        try:
            with f.open(encoding="utf-8", errors="replace") as fh:
                for _ in range(5):
                    line = fh.readline()
                    if not line:
                        break
                    m = re.match(r"URL:\s*(\S+)", line.strip())
                    if m:
                        mapping[m.group(1)] = str(f)
                        break
        except OSError:
            continue
    return mapping


# 官方下载页与核对时实际抓取的镜像 URL 不一致时的别名表（vendor id → 抓取件 URL）
ALIASES = {
    "qiagen": "https://www.beanbeetle.org/new_website/wp-content/uploads/2019/08/EN-DNeasy-Blood-Tissue-Handbook.pdf",
    "qiagencna": "https://charmconsortium.ca/wp-content/uploads/2025/07/2020.02.003_cfDNA_Extraction_QIAamp_Circulating_Nucleic_Acid_kit.pdf",
}

# 需要在索引中声明的快照注意事项
NOTES = {
    "qiagen": "镜像件为 2006 版手册，与声明来源（2023-06 下载页）版本不同；复核以 QIAGEN 官网现行版为准。",
    "qiagencna": "镜像件为第三方转载页而非 QIAGEN 官方件；复核以 QIAGEN 官网现行版为准。",
}


def main() -> int:
    result = subprocess.run(
        ["node", "-e", DUMP_JS], cwd=VENDORS_JS.parent, capture_output=True, check=True
    )
    vendors = json.loads(result.stdout.decode("utf-8"))
    fetched = load_sources()

    SNAP.mkdir(parents=True, exist_ok=True)
    ok, missing = [], []
    for v in vendors:
        src = v["source"]
        hit = fetched.get(src) or fetched.get(ALIASES.get(v["id"], ""))
        if hit:
            shutil.copy2(hit, SNAP / f"{v['id']}.md")
            ok.append(v)
        else:
            missing.append(v)

    lines = ["# 厂家协议来源快照索引", "",
             "由 `tools/archive_sources.py` 生成；快照为核对时抓取的官方手册（或其镜像）提取文本，",
             "用于第三方复验各协议页的参数出处。复核时以厂商官网最新版为准。", "",
             "| 协议 | 快照 | 来源 |", "|------|------|------|"]
    for v in ok:
        note = f" ⚠️ {NOTES[v['id']]}" if v["id"] in NOTES else ""
        lines.append(f"| {v['name']} | [{v['id']}.md]({v['id']}.md) | {v['source']}{note} |")
    if missing:
        lines += ["", "## 未归档（web/ 无对应抓取件）", ""]
        for v in missing:
            lines.append(f"- {v['name']} — {v['source']}")
    (SNAP / "README.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"已归档 {len(ok)}/{len(vendors)}；未归档 {len(missing)} 项")
    for v in missing:
        print(f"  [缺] {v['id']}: {v['source']}")
    # 全量归档才算通过：任一缺失即失败，防止覆盖率口径被悄悄放宽
    return 0 if not missing else 1


if __name__ == "__main__":
    sys.exit(main())
