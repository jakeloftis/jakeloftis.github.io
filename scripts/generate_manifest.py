#!/usr/bin/env python3
"""
Scans the repo root for top-level folders that contain an index.html
and writes manifest.json, which the landing page (index.html) fetches
to build its list of links.

A folder is included if:
  - it's a directory at the repo root
  - it's not a hidden/system folder (.git, .github, node_modules, etc.)
  - it contains an index.html file

The link title is pulled from that page's <title> tag; falls back to
the folder name (with dashes/underscores turned into spaces) if no
<title> is found.
"""

import json
import os
import re

ROOT = "."
OUTPUT_FILE = "manifest.json"

EXCLUDED_DIRS = {
    ".git",
    ".github",
    "node_modules",
    "scripts",
    "assets",
    "_site",
}

TITLE_RE = re.compile(r"<title>(.*?)</title>", re.IGNORECASE | re.DOTALL)


def fallback_title(slug: str) -> str:
    return slug.replace("-", " ").replace("_", " ").strip().title()


def main() -> None:
    entries = []

    for name in sorted(os.listdir(ROOT)):
        path = os.path.join(ROOT, name)

        if not os.path.isdir(path):
            continue
        if name in EXCLUDED_DIRS or name.startswith("."):
            continue

        index_path = os.path.join(path, "index.html")
        if not os.path.isfile(index_path):
            continue

        title = fallback_title(name)
        try:
            with open(index_path, "r", encoding="utf-8") as f:
                content = f.read()
            match = TITLE_RE.search(content)
            if match:
                extracted = match.group(1).strip()
                if extracted:
                    title = extracted
        except (OSError, UnicodeDecodeError):
            pass  # keep fallback title if the file can't be read

        entries.append({"slug": name, "title": title})

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(entries, f, indent=2)
        f.write("\n")

    print(f"Wrote {len(entries)} entr{'y' if len(entries) == 1 else 'ies'} to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
