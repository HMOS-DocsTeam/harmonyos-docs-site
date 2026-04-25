#!/bin/bash
set -e

echo "=== Step 1: Install dependencies ==="
npm ci

echo "=== Step 2: Install Python dependencies ==="
pip3 install aiohttp beautifulsoup4 markdownify lxml 2>/dev/null || pip install aiohttp beautifulsoup4 markdownify lxml 2>/dev/null || true

echo "=== Step 3: Crawl guides docs ==="
python3 scripts/crawler.py --catalog guides

echo "=== Step 4: Crawl ref docs ==="
python3 scripts/crawler.py --catalog ref --generate-mapping

echo "=== Step 5: Sync to Docusaurus ==="
python3 scripts/sync_to_docusaurus.py --all

echo "=== Step 6: Build Docusaurus site ==="
NODE_OPTIONS='--max-old-space-size=6144' npx docusaurus build --no-minify

echo "=== Done! ==="
