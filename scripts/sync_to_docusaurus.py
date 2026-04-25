#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将 crawler 抓取的 docs/ 同步到 Docusaurus 站点，并生成 sidebars.js 等配置。

Usage:
    python3 sync_to_docusaurus.py [--site-dir /path/to/site]
"""

import json
import os
import re
import shutil
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent
SITE_DIR = BASE_DIR.parent  # Docusaurus 站点根目录
DEFAULT_SITE_DIR = SITE_DIR

# ============ 配置 ============

DIGIT_PREFIX_RENAMES = {
    "24-hour-battery-usage-event": "battery-usage-event",
}

# 顶级分类自定义排序：按 nodeName 排列
# 修改此列表即可调整侧边栏顺序
# 用元组表示分组：(组名, [子项列表])
# 普通字符串表示平级分类
SIDEBAR_ORDER = [
    '基础入门',
    '应用开发准备',
    '应用框架',
    '系统',
    '媒体',
    '图形',
    '应用服务',
    'AI',
    '一次开发，多端部署',
    '自由流转',
    'NDK开发',
    ('工具', [
        '开发环境搭建',
        '使用AI智能辅助编程',
        '编写与调试应用',
        '构建应用',
        '优化应用性能',
        '发布应用',
        '命令行工具',
    ]),
    '应用测试',
    '应用体验建议',
]


def safe_dirname(name: str) -> str:
    """确保目录名不以数字、-、_ 开头（Docusaurus / 文件系统限制）"""
    name = DIGIT_PREFIX_RENAMES.get(name, name)
    if name and name[0] in '-_':
        name = 'x' + name
    return name


# ============ 同步文件 ============

def sync_docs(src_dir: Path, dst_dir: Path):
    """将抓取的 docs/ 复制到 Docusaurus 站点"""
    print(f"同步文件: {src_dir} → {dst_dir}")
    shutil.rmtree(dst_dir, ignore_errors=True)
    dst_dir.mkdir(parents=True, exist_ok=True)

    copied = 0
    for root, _, fs in os.walk(src_dir):
        for f in fs:
            sf = os.path.join(root, f)
            rel = os.path.relpath(sf, src_dir)
            df = os.path.join(dst_dir, rel)
            os.makedirs(os.path.dirname(df), exist_ok=True)
            shutil.copy2(sf, df)
            copied += 1
    print(f"  复制 {copied} 个文件")


def _fix_ref_links(docs_dir: Path):
    r"""修正 ref markdown 中的 /ref/ 交叉引用链接。

    原始文档中的链接格式为 /ref/a/b/c（华为官网路径），
    但 Docusaurus 生成 URL 为 /ref/a/b/c/c（double-leaf + slug）。
    需要将 ](/ref/xxx) 替换为 ](/ref/xxx/xxx)。

    处理三种格式:
      - ](/ref/abc)           → ](/ref/abc/abc)
      - ](/ref/a/b/c)         → ](/ref/a/b/c/c)
      - ](/ref/a/b/c#hash)    → ](/ref/a/b/c/c#hash)
    跳过已经是 double-leaf 格式的链接（如 /ref/a/b/c/c）。
    """
    pattern = re.compile(r'\]\((/ref/((?:[a-z0-9][a-z0-9_-]*/)*)([a-z0-9][a-z0-9_-]*))(?=[/#\)])')
    count = 0
    for md_file in docs_dir.rglob('*.md'):
        if md_file.name.startswith('_'):
            continue
        content = md_file.read_text(encoding='utf-8')
        original = content

        def replacer(m):
            full_path = m.group(1)   # /ref/a/b/c
            prefix = m.group(2)      # a/b/
            leaf = m.group(3)        # c
            # 如果已经是 double-leaf (prefix 以 leaf/ 结尾)，跳过
            if prefix.rstrip('/').endswith('/' + leaf) or (not prefix and False):
                return m.group(0)
            return f']({full_path}/{leaf}'

        content = pattern.sub(replacer, content)
        if content != original:
            md_file.write_text(content, encoding='utf-8')
            count += 1
    print(f"  修正 /ref/ 链接: {count} 个文件")


def _add_slug_frontmatter(docs_dir: Path):
    """为每个 ref md 文件添加 slug frontmatter。
    
    当文件名等于目录名时（如 a/b/c/c.md），Docusaurus 会自动简化 URL 为 /ref/a/b/c/
    但 doc_id 仍然是 a/b/c/c，导致 href 和实际 URL 不匹配。
    添加 slug: <leaf> 强制 URL = /ref/a/b/c/c，与 doc_id 和 href 一致。
    """
    count = 0
    for md_file in docs_dir.rglob('*.md'):
        # 跳过非文档文件
        if md_file.name.startswith('_'):
            continue
        leaf = md_file.stem  # filename without .md
        parent_name = md_file.parent.name
        
        # 只处理 filename == dirname 的情况（double-leaf）
        if leaf != parent_name:
            continue
        
        content = md_file.read_text(encoding='utf-8')
        
        # 如果已有 slug，跳过
        if 'slug:' in content[:200]:
            continue
        
        # 在 frontmatter 的 --- 结束标记前添加 slug
        if content.startswith('---'):
            end = content.find('---', 3)
            if end > 0:
                frontmatter = content[3:end]
                content = '---' + frontmatter.rstrip() + f'\nslug: {leaf}\n---' + content[end + 3:]
                md_file.write_text(content, encoding='utf-8')
                count += 1
    print(f"  添加 slug frontmatter: {count} 个文件")


# ============ _category_.json ============

def generate_category_jsons(tree: dict, dst_dir: Path):
    """为每个目录生成 _category_.json"""
    dir_info = {}

    def collect(nodes, prefix=""):
        for i, node in enumerate(nodes):
            rd = node.get('relateDocument', '')
            name = node.get('nodeName', '')
            children = node.get('children', [])
            if rd:
                s = safe_dirname(rd)
                fp = f"{prefix}/{s}" if prefix else s
                dir_info[fp] = {'label': name, 'position': i + 1}
                cp = fp
            else:
                cp = prefix
            if children:
                collect(children, cp)

    collect(tree.get('value', {}).get('catalogTreeList', []))

    written = 0
    for path, info in dir_info.items():
        d = os.path.join(dst_dir, path)
        if os.path.isdir(d):
            with open(os.path.join(d, '_category_.json'), 'w', encoding='utf-8') as f:
                json.dump({'label': info['label'], 'position': info['position']}, f, ensure_ascii=False, indent=2)
            written += 1
    print(f"  生成 {written} 个 _category_.json")


# ============ sidebars.js ============

def generate_sidebars(tree: dict, mapping: list, site_dir: Path):
    """生成 sidebars.js"""
    rd_to_path = {item['objectId']: item['path'] for item in mapping}

    # 识别叶子节点
    leaf_rds = set()
    def find_leaves(nodes):
        for node in nodes:
            children = node.get('children', [])
            rd = node.get('relateDocument', '')
            if rd and not children:
                leaf_rds.add(rd)
            if children:
                find_leaves(children)
    find_leaves(tree.get('value', {}).get('catalogTreeList', []))

    def get_doc_id(rd):
        path = rd_to_path.get(rd, rd)
        safe_path = '/'.join(safe_dirname(p) for p in path.split('/'))
        leaf = safe_path.split('/')[-1]
        return f"{safe_path}/{leaf}"

    def build_items(nodes):
        items = []
        for node in nodes:
            rd = node.get('relateDocument', '')
            name = node.get('nodeName', '')
            children = node.get('children', [])
            if children:
                ci = build_items(children)
                if ci:
                    lbl = name.replace("'", "\\'").replace('"', '\\"')
                    items.append({'type': 'category', 'label': lbl, 'collapsed': True, 'items': ci})
            if rd and rd in leaf_rds:
                doc_id = get_doc_id(rd)
                # 只引用实际存在的 md 文件
                md_path = site_dir / 'docs' / f'{doc_id}.md'
                if md_path.exists():
                    items.append(doc_id)
        return items

    catalog_list = tree.get('value', {}).get('catalogTreeList', [])

    # 构建 nodeName → catalog node 映射
    node_map = {node.get('nodeName', ''): node for node in catalog_list}

    # 按 SIDEBAR_ORDER 构建 sidebar，支持分组
    sidebar_cats = []
    for entry in SIDEBAR_ORDER:
        if isinstance(entry, str):
            # 普通顶级分类
            name = entry
            if name not in node_map:
                continue
            node = node_map[name]
            ci = build_items(node.get('children', []))
            rd = node.get('relateDocument', '')
            if rd and rd in leaf_rds:
                ci.insert(0, get_doc_id(rd))
            if ci:
                lbl = name.replace("'", "\\'").replace('"', '\\"')
                sidebar_cats.append({'type': 'category', 'label': lbl, 'collapsed': True, 'items': ci})
        elif isinstance(entry, tuple):
            # 分组：(组名, [子项列表])
            group_name, sub_names = entry
            group_items = []
            for sub_name in sub_names:
                if sub_name not in node_map:
                    continue
                node = node_map[sub_name]
                ci = build_items(node.get('children', []))
                rd = node.get('relateDocument', '')
                if rd and rd in leaf_rds:
                    ci.insert(0, get_doc_id(rd))
                if ci:
                    lbl = sub_name.replace("'", "\\'").replace('"', '\\"')
                    group_items.append({'type': 'category', 'label': lbl, 'collapsed': True, 'items': ci})
            if group_items:
                gl = group_name.replace("'", "\\'").replace('"', '\\"')
                sidebar_cats.append({'type': 'category', 'label': gl, 'collapsed': True, 'items': group_items})

    def items_js(items, indent=6):
        p = ' ' * indent
        parts = []
        for item in items:
            if isinstance(item, str):
                parts.append(f"{p}'{item}',")
            else:
                cj = items_js(item['items'], indent + 4)
                parts.append(
                    f"{p}{{\n"
                    f"{p}  type: 'category',\n"
                    f"{p}  label: '{item['label']}',\n"
                    f"{p}  collapsed: true,\n"
                    f"{p}  items: [\n"
                    f"{cj}\n"
                    f"{p}  ],\n"
                    f"{p}}},"
                )
        return '\n'.join(parts)

    js = "module.exports = {\n  docs: [\n"
    for cat in sidebar_cats:
        cj = items_js(cat['items'], 8)
        js += (
            f"    {{\n"
            f"      type: 'category',\n"
            f"      label: '{cat['label']}',\n"
            f"      collapsed: true,\n"
            f"      items: [\n"
            f"{cj}\n"
            f"      ],\n"
            f"    }},\n"
        )
    js += "  ],\n};\n"

    out = site_dir / 'sidebars.js'
    with open(out, 'w', encoding='utf-8') as f:
        f.write(js)

    # 验证
    doc_refs = set(r for r in re.findall(r"'([a-z][a-z0-9_/-]+[a-z0-9])'", js) if '/' in r)
    docs_dir = site_dir / 'docs'
    missing = [r for r in doc_refs if not (docs_dir / f'{r}.md').exists()]
    print(f"  sidebars.js: {len(doc_refs)} doc refs, {len(missing)} missing")

    # 打印最终顺序
    print("  侧边栏顺序:")
    idx = 0
    for entry in SIDEBAR_ORDER:
        if isinstance(entry, str):
            idx += 1
            print(f"    {idx:2d}. {entry}")
        elif isinstance(entry, tuple):
            group_name, sub_names = entry
            idx += 1
            print(f"    {idx:2d}. {group_name}")
            for sub in sub_names:
                print(f"        - {sub}")


# ============ docusaurus.config.js ============

# navbar 首页文档 — 固定指向有意义的首页，不用随机 rglob
NAVBAR_GUIDES_DOCID = 'application-dev-guide/application-dev-guide'
NAVBAR_REF_DOCID = 'development-intro-api/development-intro-api'


def update_navbar(site_dir: Path):
    """更新 navbar docId — 指向固定的首页文档"""
    cfg_path = site_dir / 'docusaurus.config.js'
    with open(cfg_path, 'r') as f:
        config = f.read()

    # 验证目标文件确实存在
    guides_id = NAVBAR_GUIDES_DOCID
    ref_id = NAVBAR_REF_DOCID
    if not (site_dir / 'docs' / f'{guides_id}.md').exists():
        # 降级：找任意存在的 doc
        for md in sorted((site_dir / 'docs').rglob('*.md')):
            if not md.name.startswith('_'):
                guides_id = str(md.relative_to(site_dir / 'docs').with_suffix(''))
                break
    if not (site_dir / 'docs-ref' / f'{ref_id}.md').exists():
        for md in sorted((site_dir / 'docs-ref').rglob('*.md')):
            if not md.name.startswith('_'):
                ref_id = str(md.relative_to(site_dir / 'docs-ref').with_suffix(''))
                break

    # 更新 navbar 中所有 docId（按出现顺序：guides 的、ref 的）
    replacements = []
    def replacer(m):
        if not replacements:
            replacements.append(True)
            return f"docId: '{guides_id}'"
        else:
            return f"docId: '{ref_id}'"

    config = re.sub(r"docId: '[^']*'", replacer, config)

    with open(cfg_path, 'w') as f:
        f.write(config)
    print(f"  更新 navbar docId: guides={guides_id}, ref={ref_id}")


def generate_sidebars_ref(tree: dict, mapping: list, site_dir: Path):
    """生成 sidebars-ref.js（API参考）— 带顶级分组 category"""
    rd_to_path = {item['objectId']: item['path'] for item in mapping}

    def get_doc_id(rd):
        path = rd_to_path.get(rd, rd)
        safe_path = '/'.join(safe_dirname(p) for p in path.split('/'))
        leaf = safe_path.split('/')[-1]
        return f"{safe_path}/{leaf}"

    def build_items(nodes, is_root=False):
        """构建 sidebar items。
        
        is_root=True 时，顶级分组节点（无 relateDocument）也生成 category，
        这样 "应用框架"、"系统"、"媒体" 等会作为一级目录显示。
        """
        items = []
        for node in nodes:
            rd = node.get('relateDocument', '')
            name = node.get('nodeName', '')
            children = node.get('children', [])

            child_items = build_items(children) if children else []

            if rd and rd in rd_to_path:
                doc_id = get_doc_id(rd)
                # 分支节点（有 children 的导航索引页）：
                # 只作为 category 显示，不包含自己的 doc_id（不生成页面）
                md_path = site_dir / 'docs-ref' / f'{doc_id}.md'
                if child_items:
                    lbl = name.replace("'", "\\'").replace('"', '\\"')
                    items.append({
                        'type': 'category', 'label': lbl,
                        'collapsed': True, 'items': child_items,
                    })
                elif md_path.exists():
                    # 纯叶子节点且有文件 → 直接引用
                    items.append(doc_id)
                # 无子节点且无文件 → 跳过
            elif child_items:
                # 无 relateDocument 但有子节点 → 纯分组 category
                lbl = name.replace("'", "\\'").replace('"', '\\"')
                items.append({
                    'type': 'category', 'label': lbl,
                    'collapsed': True, 'items': child_items,
                })
        return items

    catalog_list = tree.get('value', {}).get('catalogTreeList', [])
    all_items = build_items(catalog_list, is_root=True)

    def items_js(items, indent=6):
        p = ' ' * indent
        parts = []
        for item in items:
            if isinstance(item, str):
                parts.append(f"{p}'{item}',")
            else:
                cj = items_js(item['items'], indent + 4)
                parts.append(
                    f"{p}{{\n"
                    f"{p}  type: 'category',\n"
                    f"{p}  label: '{item['label']}',\n"
                    f"{p}  collapsed: true,\n"
                    f"{p}  items: [\n"
                    f"{cj}\n"
                    f"{p}  ],\n"
                    f"{p}}},"
                )
        return '\n'.join(parts)

    js = "module.exports = {\n  ref: [\n"
    for item in all_items:
        if isinstance(item, str):
            js += f"    '{item}',\n"
        else:
            cj = items_js(item['items'], 8)
            js += (
                f"    {{\n"
                f"      type: 'category',\n"
                f"      label: '{item['label']}',\n"
                f"      collapsed: true,\n"
                f"      items: [\n"
                f"{cj}\n"
                f"      ],\n"
                f"    }},\n"
            )
    js += "  ],\n};\n"

    out = site_dir / 'sidebars-ref.js'
    with open(out, 'w', encoding='utf-8') as f:
        f.write(js)

    # 验证
    doc_refs = set(r for r in re.findall(r"'([a-z][a-z0-9_/-]+[a-z0-9])'", js) if '/' in r)
    docs_dir = site_dir / 'docs-ref'
    missing = [r for r in doc_refs if not (docs_dir / f'{r}.md').exists()]
    print(f"  sidebars-ref.js: {len(doc_refs)} doc refs, {len(missing)} missing")


# ============ 主函数 ============

def main():
    site_dir = DEFAULT_SITE_DIR
    sync_ref = False
    sync_all = False
    for arg in sys.argv[1:]:
        if arg.startswith('--site-dir'):
            idx = sys.argv.index(arg)
            site_dir = Path(sys.argv[idx + 1])
        elif arg == '--ref':
            sync_ref = True
        elif arg == '--all':
            sync_all = True

    if sync_all:
        # 同步 guides + ref
        _sync_guides(site_dir)
        _sync_ref(site_dir)
    elif sync_ref:
        _sync_ref(site_dir)
    else:
        _sync_guides(site_dir)

    # 更新 navbar — 必须在 guides 和 ref 都同步完成后执行
    # 否则 --all 时 update_navbar 读到的 docs-ref 可能是旧数据
    print("\n更新配置...")
    update_navbar(site_dir)

    print("\n✅ 同步完成!")


def _sync_guides(site_dir: Path):
    """同步 guides（开发指南）"""
    src_docs = SITE_DIR / "docs"
    dst_docs = site_dir / "docs"

    print(f"\n=== 同步 Guides（开发指南）===")
    print(f"  源: {src_docs}")
    print(f"  目标: {site_dir}")

    # 1. 复制文件
    sync_docs(src_docs, dst_docs)

    # 1.5 修正 /ref/ 交叉引用链接（guides → ref 的链接需要 double-leaf 修正）
    _fix_ref_links(dst_docs)

    # 2. 加载数据
    with open(BASE_DIR / 'catalog_tree.json', 'r') as f:
        tree = json.load(f)
    with open(BASE_DIR / 'mapping.json', 'r') as f:
        mapping = json.load(f)

    # 3. 生成 _category_.json
    print("生成 _category_.json...")
    generate_category_jsons(tree, dst_docs)

    # 4. 生成 sidebars.js
    print("生成 sidebars.js...")
    generate_sidebars(tree, mapping, site_dir)


def _sync_ref(site_dir: Path):
    """同步 ref（API参考）"""
    src_docs = SITE_DIR / "docs-ref"
    dst_docs = site_dir / "docs-ref"

    print(f"\n=== 同步 Ref（API参考）===")
    print(f"  源: {src_docs}")
    print(f"  目标: {site_dir}")

    if not src_docs.exists():
        print("  ⚠️  docs-ref 目录不存在，跳过。请先运行: python3 crawler.py --catalog ref")
        return

    # 1. 复制文件
    sync_docs(src_docs, dst_docs)

    # 1.5 为每个 ref md 添加 slug frontmatter
    # Docusaurus 在 filename == dirname 时会简化 URL 为 /ref/a/b/c/（去掉重复 leaf）
    # 但 doc_id 仍是 a/b/c/c，导致 href 和实际 URL 不匹配
    # 添加 slug: <leaf> 强制 URL = /ref/a/b/c/c，与 doc_id 一致
    _add_slug_frontmatter(dst_docs)

    # 1.6 修正 /ref/ 交叉引用链接（/ref/a/b/c → /ref/a/b/c/c）
    _fix_ref_links(dst_docs)

    # 2. 加载数据
    ref_tree_file = BASE_DIR / 'ref_catalog_tree.json'
    ref_mapping_file = BASE_DIR / 'ref_mapping.json'
    if not ref_tree_file.exists() or not ref_mapping_file.exists():
        print("  ⚠️  ref_catalog_tree.json 或 ref_mapping.json 不存在，跳过。")
        print("  请先运行: python3 crawler.py --catalog ref --generate-mapping")
        return

    with open(ref_tree_file, 'r') as f:
        tree = json.load(f)
    with open(ref_mapping_file, 'r') as f:
        mapping = json.load(f)

    # 3. 生成 _category_.json
    print("生成 _category_.json...")
    generate_category_jsons(tree, dst_docs)

    # 4. 生成 sidebars-ref.js
    print("生成 sidebars-ref.js...")
    generate_sidebars_ref(tree, mapping, site_dir)


if __name__ == "__main__":
    main()
