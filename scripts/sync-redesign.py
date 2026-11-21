#!/usr/bin/env python3
"""Copy redesign/ (the source of truth) into nextjs/public/redesign.

redesign/ is self-contained and uses document-relative paths (img/, fonts/,
styles.css), so it opens from the file system and from any folder URL.
Next.js serves the page at /redesign with no trailing slash, where relative
paths would resolve against the site root, so the deployed copy gets
absolute /redesign/ paths.

Run from anywhere:  python3 scripts/sync-redesign.py
"""
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "redesign"
DST = ROOT / "nextjs" / "public" / "redesign"

if DST.exists():
    shutil.rmtree(DST)
shutil.copytree(SRC, DST)

page = DST / "index.html"
html = page.read_text()
html = re.sub(r'(["\s,])(img|fonts)/', r"\1/redesign/\2/", html)
html = html.replace('href="styles.css"', 'href="/redesign/styles.css"')
assert 'src="img/' not in html and 'href="fonts/' not in html
page.write_text(html)
print(f"synced {sum(1 for _ in DST.rglob('*') if _.is_file())} files to {DST.relative_to(ROOT)}")
