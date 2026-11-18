"""商业级一键 QA：汇总全部质量门禁，任一失败 exit 1。

用法：python tools/qa_all.py
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INTER = ROOT / "interactive"

CHECKS: list[tuple[str, list[str], Path]] = [
    ("语法 vendors.js", ["node", "--check", "vendors.js"], INTER),
    ("语法 app.js", ["node", "--check", "app.js"], INTER),
    ("语法 calc.js", ["node", "--check", "calc.js"], INTER),
    ("计算器断言", ["node", "test_calc.js"], INTER),
    ("运行时冒烟", ["node", "test_runtime.js"], INTER),
    ("页面 id 覆盖", [sys.executable, "check_ids.py"], INTER),
    ("厂家计数同步", [sys.executable, str(ROOT / "tools" / "check_vendor_sync.py")], ROOT),
    ("课程断链审计", [sys.executable, str(ROOT / "tools" / "audit_course.py")], ROOT),
    ("来源快照全量归档", [sys.executable, str(ROOT / "tools" / "archive_sources.py")], ROOT),
]


def main() -> int:
    failed = []
    for label, cmd, cwd in CHECKS:
        r = subprocess.run(cmd, cwd=cwd, capture_output=True)
        tail = (r.stdout + r.stderr).decode("utf-8", "replace").strip().splitlines()
        status = "PASS" if r.returncode == 0 else "FAIL"
        print(f"[{status}] {label}" + ("" if r.returncode == 0 else f"  ← {tail[-1] if tail else 'no output'}"))
        if r.returncode != 0:
            failed.append(label)
    print()
    if failed:
        print("FAILED:", "、".join(failed))
        return 1
    print(f"ALL {len(CHECKS)} QA GATES PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
