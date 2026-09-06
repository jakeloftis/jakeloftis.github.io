#!/usr/bin/env python3
"""
Recursively scans the repo for folders that contain an index.html and
writes manifest.json, which the landing page (index.html) fetches to
build its list of links. Works at any nesting depth, e.g. both
`my-project/index.html` and `thebazaar/thedragons/index.html` are found.

A folder is included if:
  - it contains an index.html file
  - it's not the repo root itself (that's the landing page, not a link)
  - no part of its path is a hidden/system folder (.git, .github, etc.)

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
    leaf = slug.rstrip("/").split("/")[-1]
    return leaf.replace("-", " ").replace("_", " ").strip().title()


def is_excluded(dirnames):
    return [d for d in dirnames if d in EXCLUDED_DIRS or d.startswith(".")]


def main() -> None:
    entries = []

    for dirpath, dirnames, filenames in os.walk(ROOT):
        # Prune excluded/hidden directories in place so os.walk skips them entirely.
        for excluded in is_excluded(dirnames):
            dirnames.remove(excluded)

        rel_path = os.path.relpath(dirpath, ROOT)
        if rel_path == ".":
            continue  # skip the repo root itself, that's the landing page

        if "index.html" not in filenames:
            continue

        slug = rel_path.replace(os.sep, "/")
        index_path = os.path.join(dirpath, "index.html")

        title = fallback_title(slug)
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

        entries.append({"slug": slug, "title": title})

    entries.sort(key=lambda e: e["slug"])

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(entries, f, indent=2)
        f.write("\n")

    print(f"Wrote {len(entries)} entr{'y' if len(entries) == 1 else 'ies'} to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
