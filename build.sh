#!/bin/bash
set -e

echo "=== Install dependencies ==="
npm ci

echo "=== Build Docusaurus site ==="
NODE_OPTIONS='--max-old-space-size=6144' npx docusaurus build --no-minify

echo "=== Done! ==="
