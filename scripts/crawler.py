#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HarmonyOS Developer Documentation Crawler
抓取华为鸿蒙开发者文档并转换为Markdown文件

Usage:
    python3 crawler.py              # 全量抓取
    python3 crawler.py --test       # 测试模式（只抓5篇）
    python3 crawler.py --concurrency 30  # 指定并发数
"""

import asyncio
import aiohttp
import json
import os
import re
import sys
import time
import hashlib
import html as html_module
from pathlib import Path
from datetime import datetime
from bs4 import BeautifulSoup, Comment
from markdownify import markdownify


# ============ 配置 ============

BASE_DIR = Path(__file__).parent
SITE_DIR = BASE_DIR.parent  # Docusaurus 站点根目录
OUTPUT_DIR = SITE_DIR / "docs"
MAPPING_FILE = BASE_DIR / "mapping.json"
CATALOG_TREE_FILE = BASE_DIR / "catalog_tree.json"
CHANGELOG_FILE = BASE_DIR / "changelog.md"
HASH_DIR = BASE_DIR / ".cache"

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
API_HEADERS = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
}
ORIGIN_URL_PREFIX = "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/"

DEFAULT_CONCURRENCY = 20
MAX_RETRIES = 3
RETRY_DELAY = 2  # seconds

# objectId → 嵌套路径 映射（在 main() 中从 mapping.json 构建）
OID_PATH_MAP: dict = {}
# 跨 catalog 映射（references → guides, guides → references）
CROSS_CATALOG_MAP: dict = {}  # {oid: (catalog_prefix, path)}
# 图片本地化控制（在 main() 中设置）
_DOWNLOAD_IMAGES = True

# 动态配置（由 main() 根据 --catalog 参数设置）
_CATALOG_NAME = "harmonyos-guides"
_OUTPUT_DIR = OUTPUT_DIR
_HASH_DIR = HASH_DIR
_ORIGIN_PREFIX = ORIGIN_URL_PREFIX

# 数字开头的 relateDocument → 安全替代名（避免 Docusaurus 路径问题）
DIGIT_PREFIX_RENAMES = {
    "24-hour-battery-usage-event": "battery-usage-event",
}


# ============ 路径安全化 ============

def safe_dirname(name: str) -> str:
    """确保目录名不以数字、-、_ 开头（Docusaurus / 文件系统限制）"""
    name = DIGIT_PREFIX_RENAMES.get(name, name)
    if name and name[0] in '-_':
        name = 'x' + name
    return name


# ============ HTML 预处理 ============

def preprocess_html(html_str):
    """清理华为文档HTML中的杂乱标签"""
    soup = BeautifulSoup(html_str, "lxml")

    # 移除所有注释
    for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()

    # 移除华为锚点标记 <a name="ZH-CN_TOPIC_xxx"></a>
    for a_tag in soup.find_all("a", attrs={"name": re.compile(r"ZH-CN_TOPIC_")}):
        a_tag.decompose()

    # 移除空的 <a name="..."></a> 锚点
    for a_tag in soup.find_all("a", attrs={"name": True}):
        if not a_tag.get_text(strip=True) and not a_tag.get("href"):
            a_tag.decompose()

    # 移除空段落
    for p in soup.find_all("p"):
        if not p.get_text(strip=True) and not p.find("img"):
            p.decompose()

    body = soup.find("body")
    if body:
        return str(body)
    return str(soup)


# ============ 图片本地化 ============

# 图片 URL → 本地路径缓存（跨文档复用）
_IMAGE_CACHE: dict = {}  # {url_path_key: local_path}
_IMAGE_SEMAPHORE = None


def _get_image_local_path(url: str, doc_path: str) -> Path:
    """根据图片 URL 和文档路径确定本地存储路径
    
    存储结构: docs/images/{md5(url_path)[:8]}/{filename}
    """
    parsed = __import__('urllib.parse', fromlist=['urlparse']).urlparse(url)
    url_path = __import__('urllib.parse', fromlist=['unquote']).unquote(parsed.path)
    filename = Path(url_path).name
    
    # 用 URL 路径（不含 query）的 md5 前 8 位作为子目录
    url_hash = hashlib.md5(url_path.encode()).hexdigest()[:8]
    local_dir = _OUTPUT_DIR / "images" / url_hash
    local_path = local_dir / filename
    return local_path


def _compute_img_relative_path(from_md: Path, to_img: Path) -> str:
    """计算从 md 文件到图片的相对路径"""
    import os
    try:
        return os.path.relpath(to_img, from_md.parent)
    except ValueError:
        return str(to_img)


async def _download_one_image(session, url: str, local_path: Path):
    """下载单张图片"""
    if local_path.exists() and local_path.stat().st_size > 0:
        return True  # 已存在
    
    global _IMAGE_SEMAPHORE
    if _IMAGE_SEMAPHORE is None:
        _IMAGE_SEMAPHORE = asyncio.Semaphore(5)  # 图片下载并发限制
    
    for attempt in range(2):
        try:
            async with _IMAGE_SEMAPHORE:
                async with session.get(url, timeout=aiohttp.ClientTimeout(total=15)) as resp:
                    if resp.status == 200:
                        data = await resp.read()
                        if data:
                            local_path.parent.mkdir(parents=True, exist_ok=True)
                            local_path.write_bytes(data)
                            return True
                    return False
        except Exception:
            if attempt == 0:
                await asyncio.sleep(0.5)
    return False


async def download_and_localize_images(html_content: str, doc_info: dict, session) -> str:
    """从 HTML 中提取图片 URL → 下载 → 替换为本地相对路径
    
    必须在 HTML 阶段执行（此时 URL 带有效签名）。
    
    Args:
        html_content: 原始 HTML
        doc_info: 文档信息字典
        session: aiohttp session
    
    Returns:
        替换后的 HTML（img src 指向本地路径）
    """
    if not _DOWNLOAD_IMAGES:
        return html_content
    
    # 提取所有 img src
    img_pattern = re.compile(r'<img[^>]+src="(https://contentcenter[^"]+)"', re.IGNORECASE)
    matches = list(img_pattern.finditer(html_content))
    
    if not matches:
        return html_content
    
    # 计算文档的输出路径（用于计算相对路径）
    output_path = get_output_path(doc_info)
    
    # 收集需要下载的图片
    download_tasks = []
    url_to_local = {}  # 原始 URL -> 本地路径
    
    for match in matches:
        url = match.group(1)
        # HTML 中 &amp; 需要还原为 &
        download_url = html_module.unescape(url)
        # 用 URL 路径（不含签名参数）作为缓存 key
        url_key = download_url.split('?')[0]
        
        if url_key in _IMAGE_CACHE:
            url_to_local[url] = _IMAGE_CACHE[url_key]
        else:
            local_path = _get_image_local_path(download_url, doc_info['path'])
            url_to_local[url] = local_path
            _IMAGE_CACHE[url_key] = local_path
            download_tasks.append((download_url, local_path))
    
    # 并发下载
    if download_tasks:
        tasks = [_download_one_image(session, url, lp) for url, lp in download_tasks]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        success = sum(1 for r in results if r is True)
        failed = len(results) - success
        # 静默失败——保留原始 CDN URL 即可
    
    # 替换 HTML 中的 img src
    def replace_src(m):
        original_url = m.group(1)
        if original_url in url_to_local:
            local_path = url_to_local[original_url]
            # 只有下载成功才替换
            if local_path.exists() and local_path.stat().st_size > 0:
                rel_path = _compute_img_relative_path(output_path, local_path)
                return m.group(0).replace(original_url, rel_path)
        return m.group(0)
    
    html_content = img_pattern.sub(replace_src, html_content)
    return html_content


# ============ HTML → Markdown 转换 ============

def html_to_markdown(html_str, title=""):
    """将HTML转换为高质量Markdown"""
    # 预处理
    clean_html = preprocess_html(html_str)

    # 使用 markdownify 转换
    md_text = markdownify(
        clean_html,
        heading_style="ATX",
        bullets="-",
        strong_em_symbol="**",
        strip=["script", "style"],
    )

    # 后处理
    md_text = postprocess_markdown(md_text)

    return md_text


def postprocess_markdown(md_text):
    """Markdown后处理：修复常见问题"""
    # 1. 移除连续3个以上空行 → 最多2个换行
    md_text = re.sub(r'\n{4,}', '\n\n\n', md_text)

    # 2. 修复标题层级：华为文档 h4 实际语义规则：
    #    h1          → #   文档标题（保持）
    #    h4（无标记）→ ##  一级章节
    #    h4 [h2]xxx  → ### 二级章节（去掉 [h2] 前缀）
    lines = md_text.split('\n')
    new_lines = []
    for line in lines:
        # 处理 #### [h2]xxx → ### xxx
        m = re.match(r'^####\s+\[h([1-6])\]\s*(.*)', line)
        if m:
            sub_level = int(m.group(1))
            text = m.group(2)
            # [h2] 表示该标题属于 h2 的子级 → h3
            # [h3] 则为 h4，以此类推
            new_level = sub_level + 1
            new_lines.append('#' * new_level + ' ' + text)
            continue
        # 处理 #### xxx（无 [hX] 标记）→ ## xxx
        m = re.match(r'^####\s+(.*)', line)
        if m:
            text = m.group(1)
            new_lines.append('## ' + text)
            continue
        new_lines.append(line)
    md_text = '\n'.join(new_lines)

    # 3. 修复列表项间距
    md_text = re.sub(r'\n(- [^\n]+)\n\n(- )', r'\n\1\n\2', md_text)

    # 4. 清理开头多余空行
    md_text = md_text.lstrip('\n')

    # 5. 确保文件末尾有换行
    md_text = md_text.rstrip('\n') + '\n'

    return md_text


# ============ MDX 兼容性修复 ============

def _escape_generics_in_table(line):
    """转义表格单元格中的泛型类型参数（如 Array<number>, Map<string, Object>）"""
    parts = line.split('|')
    new_parts = []
    for part in parts:
        # 如果单元格含有 Word<...> 模式（泛型），转义所有 < >
        if re.search(r'\w<', part):
            part = part.replace('<', '&lt;').replace('>', '&gt;')
        new_parts.append(part)
    return '|'.join(new_parts)


def _escape_fake_html_tags(line: str) -> str:
    """转义正文中非标准 HTML 标签，如 <pos>, <T>, <abc>, <uint32_t> 等。
    
    排除标准 HTML 标签（div, span, table, a, img, p, br, hr, ul, ol, li, 
    h1-h6, strong, em, code, pre, blockquote 等）和 Markdown 粗体/斜体语法。
    """
    # 标准 HTML 标签列表（不转义）
    standard_tags = {
        'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base',
        'blockquote', 'body', 'br', 'button', 'caption', 'cite', 'code', 'col',
        'colgroup', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
        'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html',
        'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li',
        'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript',
        'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture',
        'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script',
        'section', 'select', 'small', 'source', 'span', 'strong', 'style',
        'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea',
        'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var',
        'video', 'wbr',
    }
    
    def replace_tag(m):
        tag_name = m.group(1).lower()
        # 只转义非标准标签
        if tag_name in standard_tags:
            return m.group(0)
        return m.group(0).replace('<', '&lt;').replace('>', '&gt;')
    
    # 匹配 <word> 形式的标签（闭合或自闭合）
    # 排除 HTML 注释 <!-- 和 Markdown 链接语法
    result = re.sub(r'<([a-zA-Z][a-zA-Z0-9_]*)[^>]*>', replace_tag, line)
    return result


def _escape_curly_braces(line: str) -> str:
    """转义正文中不在反引号内的花括号，防止 MDX 解析为 JSX 表达式。
    
    策略：保护反引号内容 → 替换 { } → 恢复反引号内容。
    """
    # 保护反引号中的内容
    placeholders = {}
    counter = [0]
    def _save(m):
        key = f'\x00BRACE{counter[0]}\x00'
        counter[0] += 1
        placeholders[key] = m.group(0)
        return key
    
    line = re.sub(r'`[^`]*`', _save, line)
    
    # 保护已有的 HTML 实体
    line = re.sub(r'&[a-zA-Z]+;', _save, line)
    
    # 替换 { }（但不替换已经是 HTML 实体的）
    line = line.replace('{', '\\{').replace('}', '\\}')
    
    # 恢复
    for key, val in placeholders.items():
        line = line.replace(key, val)
    
    return line


def _fix_bare_urls_outside_codeblocks(md_text: str) -> str:
    """用反引号包裹代码块外的裸 URL，防止 Docusaurus 解析失败。

    触发场景：
    - 含 @ 的非标准 URL（如 http://user:pass@proxy:port）
    - www.xxx.com 后直接跟中文
    - 其他 http/https 裸 URL 在正文/表格中
    """
    result_lines = []
    in_code_block = False
    for line in md_text.split('\n'):
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            result_lines.append(line)
            continue
        if in_code_block:
            result_lines.append(line)
            continue

        # 跳过已经是 markdown 链接 [text](url) 中的 URL
        # 策略：先保护 markdown 链接，再处理裸 URL
        if 'http://' in line or 'https://' in line or 'www.' in line:
            line = _wrap_bare_urls(line)

        result_lines.append(line)
    return '\n'.join(result_lines)


def _wrap_bare_urls(line: str) -> str:
    """将行内的裸 URL 用反引号包裹，但不影响已有的 markdown 链接语法。"""
    # 保护已有的 markdown 链接: [text](url) → 占位符
    placeholders = {}
    counter = [0]
    def _save_placeholder(m):
        key = f'\x00LINK{counter[0]}\x00'
        counter[0] += 1
        placeholders[key] = m.group(0)
        return key

    line = re.sub(r'\[([^\]]*)\]\(([^)]+)\)', _save_placeholder, line)

    # 保护已在反引号中的 URL
    line = re.sub(r'`[^`]*`', _save_placeholder, line)

    # 现在包裹剩余的裸 URL
    # http/https URLs（含 @ 等特殊字符）
    line = re.sub(
        r'(?<![`\w/])(https?://[^\s)`\]]+)',
        r'`\1`',
        line
    )
    # www. 开头的裸域名（后跟中文或其他非空白）
    line = re.sub(
        r'(?<![`\w/@-])(www\.[^\s)`\]]+[a-zA-Z0-9])',
        r'`\1`',
        line
    )

    # 恢复占位符
    for key, val in placeholders.items():
        line = line.replace(key, val)

    return line


def fix_mdx_compatibility(md_text: str) -> str:
    """修复 Markdown 内容中 Docusaurus MDX 不兼容的部分"""

    # 0. 分离 front matter 和正文，只修改正文
    front_matter = ""
    body = md_text
    if md_text.startswith('---'):
        end_fm = md_text.find('---', 3)
        if end_fm != -1:
            front_matter = md_text[:end_fm + 3]
            body = md_text[end_fm + 3:]

    # 1. 表格中的 < > 转义（泛型类型参数如 Array<number>, Map<string, Object>）
    #    表格行：以 | 开头且含 | 的行，不在代码块内
    # 2. 正文中非标准 HTML 标签 <word> 转义（如 <pos>, <T>, <abc>）
    # 3. 正文中花括号 {} 转义
    result_lines = []
    in_code_block = False
    for line in body.split('\n'):
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            result_lines.append(line)
            continue
        if in_code_block:
            result_lines.append(line)
            continue

        # 表格行：转义泛型
        if '|' in line and line.strip().startswith('|'):
            line = _escape_generics_in_table(line)
        else:
            # 非表格正文：转义伪 HTML 标签（<word> 形式，排除标准 HTML）
            line = _escape_fake_html_tags(line)
            # 转义花括号（不在已有反引号中的）
            line = _escape_curly_braces(line)

        result_lines.append(line)

    body = '\n'.join(result_lines)
    md_text = front_matter + body

    # 4. 裸 URL 后跟中文标点 → 用反引号包裹 URL
    #    例如 https://xxx.com/foo， → `https://xxx.com/foo`，
    md_text = re.sub(
        r'(?<!`)(https?://[^\s)`]+)([，。、；：！）】」』」])',
        r'`\1`\2',
        md_text
    )

    # 5. 裸 URL 用反引号包裹（防止 Docusaurus URL 解析失败）
    #    覆盖：http://user:pass@proxy:port、www.xxx.com中文 等模式
    md_text = _fix_bare_urls_outside_codeblocks(md_text)

    # 6. Front matter 标题中的特殊字符处理（引号、冒号）
    #    由 generate_frontmatter 统一加引号处理

    return md_text


# ============ 内部链接重写 ============

def rewrite_internal_links(md_text: str, current_path: str) -> str:
    """将文档内部的 harmonyos-guides/references 链接重写为相对路径
    
    支持三种模式：
    1. 同 catalog 内链接 → 相对路径（../../xxx）
    2. 跨 catalog 链接（guides→ref 或 ref→guides）→ Docusaurus 跨插件路径
    3. 不在映射中的 → 保留原外链
    
    Args:
        md_text: Markdown 内容
        current_path: 当前文档的嵌套路径（如 getting-started/quick-start/start-overview）
    """
    if not OID_PATH_MAP and not CROSS_CATALOG_MAP:
        return md_text

    def replace_link(match):
        full_url = match.group(0)
        bracket_text = match.group(1)
        href = match.group(2)

        # 匹配 harmonyos-guides/xxx 或 harmonyos-references/xxx 模式
        gm = re.search(r'harmonyos-(guides|references)/([a-zA-Z0-9_-]+)(#.*)?$', href)
        if gm:
            catalog_type = gm.group(1)  # guides 或 references
            oid = gm.group(2)
            anchor = gm.group(3) or ''
            current_catalog = 'references' if _CATALOG_NAME == 'harmonyos-references' else 'guides'

            # 同 catalog 内链接 → 使用绝对路径
            if catalog_type == current_catalog and oid in OID_PATH_MAP:
                target_path = OID_PATH_MAP[oid]
                # ref 文档的同 catalog 链接需要 /ref/ 前缀
                prefix = '/ref' if current_catalog == 'references' else ''
                abs_path = f'{prefix}/{target_path}'
                return f'[{bracket_text}]({abs_path}{anchor})'

            # 跨 catalog 链接 → 绝对路径
            if oid in CROSS_CATALOG_MAP:
                cross_prefix, cross_path = CROSS_CATALOG_MAP[oid]
                if current_catalog == 'guides' and catalog_type == 'references':
                    return f'[{bracket_text}](/ref/{cross_path}{anchor})'
                elif current_catalog == 'references' and catalog_type == 'guides':
                    return f'[{bracket_text}](/{cross_path}{anchor})'

            # 不在映射中的，保留原链接

        return full_url

    # 替换所有 [text](url) 格式的链接
    md_text = re.sub(r'\[([^\]]*)\]\(([^)]+)\)', replace_link, md_text)

    return md_text


def compute_relative_path(from_path: str, to_path: str) -> str:
    """计算两个嵌套路径之间的相对路径
    
    Args:
        from_path: 源文档路径，如 getting-started/quick-start/start-overview
        to_path: 目标文档路径，如 application-framework/foo/bar
    
    Returns:
        相对路径，如 ../../application-framework/foo/bar
    """
    from_parts = from_path.split('/')
    to_parts = to_path.split('/')

    # 找到共同前缀
    common = 0
    for i in range(min(len(from_parts), len(to_parts))):
        if from_parts[i] == to_parts[i]:
            common += 1
        else:
            break

    # 从源文档向上回到共同祖先，再向下到目标
    up_count = len(from_parts) - common - 1  # -1 因为文件名不算目录层级
    up_parts = ['..'] * up_count if up_count > 0 else ['.']
    down_parts = to_parts[common:]

    result = '/'.join(up_parts + down_parts)
    return result


# ============ Frontmatter 生成 ============

def generate_frontmatter(doc_info, title, updated_date):
    """生成 Docusaurus 兼容的 frontmatter（无 slug 字段）"""
    object_id = doc_info["objectId"]
    dir_path = doc_info["dir"]
    pos = doc_info.get("pos", 1)

    original_url = f"{_ORIGIN_PREFIX}{object_id}"

    # 提取日期
    date_str = ""
    if updated_date:
        try:
            dt = datetime.strptime(updated_date, "%Y-%m-%d %H:%M:%S")
            date_str = dt.strftime("%Y-%m-%d")
        except:
            date_str = updated_date[:10] if len(updated_date) >= 10 else updated_date

    # 转义标题中的双引号
    safe_title = title.replace('"', '\\"')

    frontmatter = f"""---
title: "{safe_title}"
sidebar_position: {pos}
original_url: {original_url}
kit: {dir_path}
last_updated: "{date_str}"
---

"""
    return frontmatter


# ============ 文件路径生成 ============

def get_output_path(doc_info):
    """根据映射信息生成输出文件路径（嵌套目录结构）"""
    # path 字段已经包含完整的嵌套路径（如 getting-started/quick-start/start-overview）
    nested_path = doc_info["path"]

    # 对路径中的每个段做安全化（处理数字开头等）
    parts = nested_path.split('/')
    safe_parts = [safe_dirname(p) for p in parts]

    # 文件放在最后一个段同名的目录下
    # 例如 getting-started/quick-start/start-overview
    # → docs/getting-started/quick-start/start-overview/start-overview.md
    filename = f"{safe_parts[-1]}.md"
    dir_path = _OUTPUT_DIR / '/'.join(safe_parts)

    return dir_path / filename


def get_category_json(doc_info):
    """生成 _category_.json 的路径和内容"""
    nested_path = doc_info["path"]
    parts = nested_path.split('/')
    safe_parts = [safe_dirname(p) for p in parts]

    # 为路径上的每个中间目录生成 _category_.json
    categories = []
    for i in range(len(safe_parts)):
        dir_path = _OUTPUT_DIR / '/'.join(safe_parts[:i+1])
        categories.append(dir_path)

    return categories


# ============ 变更检测 ============

def get_content_hash(content):
    """计算内容hash用于变更检测"""
    return hashlib.md5(content.encode('utf-8')).hexdigest()


def load_previous_hashes():
    """加载上次的hash记录"""
    hash_file = _HASH_DIR / "hashes.json"
    if hash_file.exists():
        with open(hash_file, 'r') as f:
            return json.load(f)
    return {}


def save_hashes(hashes):
    """保存hash记录"""
    _HASH_DIR.mkdir(parents=True, exist_ok=True)
    hash_file = _HASH_DIR / "hashes.json"
    with open(hash_file, 'w') as f:
        json.dump(hashes, f, ensure_ascii=False)


# ============ 异步抓取 ============

async def fetch_document(session, doc_info, semaphore, results, progress):
    """异步抓取单个文档"""
    object_id = doc_info["objectId"]
    payload = json.dumps({
        "objectId": object_id,
        "version": "",
        "catalogName": _CATALOG_NAME,
        "language": "cn"
    }).encode('utf-8')

    for attempt in range(MAX_RETRIES):
        try:
            async with semaphore:
                async with session.post(API_URL, data=payload, headers=API_HEADERS, timeout=aiohttp.ClientTimeout(total=30)) as resp:
                    if resp.status != 200:
                        progress['errors'].append(f"[HTTP {resp.status}] {object_id}")
                        return

                    data = await resp.read()
                    result = json.loads(data)

                    if result.get('code') != 0:
                        progress['errors'].append(f"[API Error] {object_id}: {result.get('message', '')}")
                        return

                    value = result.get('value', {})
                    html_content = value.get('content', {}).get('content', '')
                    title = value.get('title', object_id)
                    updated_date = value.get('updatedDate', '')

                    if not html_content:
                        progress['empty'].append(object_id)
                        return

                    # 图片本地化（必须在 HTML 阶段，URL 签名有效）
                    html_content = await download_and_localize_images(html_content, doc_info, session)

                    # 转换为Markdown
                    md_content = html_to_markdown(html_content, title)

                    # MDX 兼容性修复
                    md_content = fix_mdx_compatibility(md_content)

                    # 内部链接重写
                    current_path = doc_info["path"]
                    md_content = rewrite_internal_links(md_content, current_path)

                    # 生成 frontmatter（无 slug）
                    frontmatter = generate_frontmatter(doc_info, title, updated_date)
                    full_content = frontmatter + md_content

                    # 写入文件
                    output_path = get_output_path(doc_info)
                    output_path.parent.mkdir(parents=True, exist_ok=True)
                    with open(output_path, 'w', encoding='utf-8') as f:
                        f.write(full_content)

                    # 写入 _category_.json（如果不存在）
                    for cat_dir in get_category_json(doc_info):
                        cat_file = cat_dir / "_category_.json"
                        if not cat_file.exists():
                            # 从 mapping.json 中找不到 nodeName，跳过
                            # _category_.json 由 generate_sidebars.py 单独生成
                            pass

                    # 计算hash
                    content_hash = get_content_hash(full_content)
                    results[object_id] = {
                        'hash': content_hash,
                        'title': title,
                        'path': str(output_path.relative_to(BASE_DIR)),
                        'updated': updated_date,
                    }

                    progress['done'] += 1
                    if progress['done'] % 100 == 0 or progress['done'] == progress['total']:
                        elapsed = time.time() - progress['start_time']
                        rate = progress['done'] / elapsed if elapsed > 0 else 0
                        eta = (progress['total'] - progress['done']) / rate if rate > 0 else 0
                        print(f"  [{progress['done']}/{progress['total']}] "
                              f"{rate:.1f} docs/s, ETA: {eta:.0f}s, "
                              f"errors: {len(progress['errors'])}, empty: {len(progress['empty'])}")
                    return

        except asyncio.TimeoutError:
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
            else:
                progress['errors'].append(f"[Timeout] {object_id}")
                return
        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
            else:
                progress['errors'].append(f"[Error] {object_id}: {str(e)}")
                return


async def crawl_all(docs, concurrency=DEFAULT_CONCURRENCY):
    """并发抓取所有文档"""
    semaphore = asyncio.Semaphore(concurrency)

    progress = {
        'total': len(docs),
        'done': 0,
        'errors': [],
        'empty': [],
        'start_time': time.time(),
    }

    results = {}

    connector = aiohttp.TCPConnector(limit=concurrency, limit_per_host=concurrency)
    async with aiohttp.ClientSession(connector=connector) as session:
        tasks = [fetch_document(session, doc, semaphore, results, progress) for doc in docs]
        await asyncio.gather(*tasks)

    elapsed = time.time() - progress['start_time']
    print(f"\n{'='*60}")
    print(f"抓取完成!")
    print(f"  总耗时: {elapsed:.1f}s")
    print(f"  成功: {len(results)}")
    print(f"  空文档: {len(progress['empty'])}")
    print(f"  失败: {len(progress['errors'])}")

    if progress['errors']:
        print(f"\n错误列表 (前20条):")
        for err in progress['errors'][:20]:
            print(f"  {err}")

    if progress['empty']:
        print(f"\n空文档 ({len(progress['empty'])} 篇):")
        for e in progress['empty'][:20]:
            print(f"  {e}")

    return results, progress


# ============ 变更记录 ============

def generate_changelog(results, prev_hashes):
    """生成变更记录"""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    new_docs = []
    updated_docs = []
    unchanged_docs = []
    deleted_docs = []

    current_ids = set(results.keys())
    prev_ids = set(prev_hashes.keys())

    for doc_id in current_ids:
        if doc_id not in prev_ids:
            new_docs.append(doc_id)
        elif results[doc_id]['hash'] != prev_hashes.get(doc_id, {}).get('hash', ''):
            updated_docs.append(doc_id)
        else:
            unchanged_docs.append(doc_id)

    for doc_id in prev_ids:
        if doc_id not in current_ids:
            deleted_docs.append(doc_id)

    # 写入 changelog
    changelog_lines = [
        f"# 变更记录",
        f"",
        f"## {now}",
        f"",
        f"- 新增文档: **{len(new_docs)}** 篇",
        f"- 更新文档: **{len(updated_docs)}** 篇",
        f"- 未变化: **{len(unchanged_docs)}** 篇",
        f"- 删除文档: **{len(deleted_docs)}** 篇",
        f"",
    ]

    if new_docs:
        changelog_lines.append("### 新增文档")
        changelog_lines.append("")
        for doc_id in sorted(new_docs):
            title = results[doc_id].get('title', doc_id)
            changelog_lines.append(f"- {title} (`{doc_id}`)")
        changelog_lines.append("")

    if updated_docs:
        changelog_lines.append("### 更新文档")
        changelog_lines.append("")
        for doc_id in sorted(updated_docs):
            title = results[doc_id].get('title', doc_id)
            changelog_lines.append(f"- {title} (`{doc_id}`)")
        changelog_lines.append("")

    if deleted_docs:
        changelog_lines.append("### 删除文档")
        changelog_lines.append("")
        for doc_id in sorted(deleted_docs):
            old_title = prev_hashes.get(doc_id, {}).get('title', doc_id)
            changelog_lines.append(f"- {old_title} (`{doc_id}`)")
        changelog_lines.append("")

    changelog_content = '\n'.join(changelog_lines)

    # 追加到changelog文件
    if CHANGELOG_FILE.exists():
        with open(CHANGELOG_FILE, 'r') as f:
            old_content = f.read()
        # 跳过标题行，追加新内容
        with open(CHANGELOG_FILE, 'w') as f:
            f.write(changelog_content + "\n" + old_content.split('\n', 3)[-1] if old_content.startswith('# 变更记录') else changelog_content + "\n\n" + old_content)
    else:
        with open(CHANGELOG_FILE, 'w') as f:
            f.write(changelog_content)

    print(f"\n变更记录已保存到 {CHANGELOG_FILE}")
    print(f"  新增: {len(new_docs)}, 更新: {len(updated_docs)}, "
          f"未变化: {len(unchanged_docs)}, 删除: {len(deleted_docs)}")

    return new_docs, updated_docs, unchanged_docs, deleted_docs


# ============ Catalog Tree 抓取 & Mapping 生成 ============

CATALOG_TREE_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree"
NAVIGATION_ADDRESS_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getNavigationAddress"


def fetch_catalog_tree(catalog_name: str) -> dict:
    """从 API 抓取 catalog tree"""
    import urllib.request
    payload = json.dumps({"language": "cn", "catalogName": catalog_name}).encode('utf-8')
    req = urllib.request.Request(
        CATALOG_TREE_URL,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Referer": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read())
            if data.get('code') == 0:
                return data
            else:
                print(f"  API 错误: {data.get('message', '')}")
                return None
    except Exception as e:
        print(f"  请求失败: {e}")
        return None


def generate_mapping_from_tree(tree: dict, skip_branch=False) -> list:
    """从 catalog tree 生成 mapping 列表（包含完整字段：objectId, nodeName, dir, pos, path, isBranch）
    
    skip_branch=True 时，跳过有 children 的分支节点（ref 抓取用，这些只是导航索引页）。
    注意：skip_branch=True 时仍保留分支节点在返回列表中（标记 isBranch），
    以便 OID_PATH_MAP 和 sidebars 知道它们的存在。
    """
    mapping = []

    def walk(nodes, prefix_parts=None, top_level_name=""):
        if prefix_parts is None:
            prefix_parts = []
        for i, node in enumerate(nodes):
            rd = node.get('relateDocument', '')
            name = node.get('nodeName', '')
            children = node.get('children', [])

            if rd:
                safe_rd = safe_dirname(rd)
                current_parts = prefix_parts + [safe_rd]
                path = '/'.join(current_parts)
                # dir = 顶级分类名
                dir_name = top_level_name if top_level_name else safe_rd
                is_branch = bool(children)
                mapping.append({
                    'objectId': rd,
                    'nodeName': name,
                    'dir': dir_name,
                    'pos': i + 1,
                    'path': path,
                    'isBranch': is_branch,
                })
                # 递归子节点
                if children:
                    walk(children, current_parts, dir_name)
            else:
                # 无 relateDocument 的分组节点（如 ref 的顶级分组）
                # 用 nodeName 作为顶级分类传递给子节点
                walk(children, prefix_parts, name)

    nodes = tree.get('value', {}).get('catalogTreeList', [])
    walk(nodes)

    return mapping


# ============ 主函数 ============

def main():
    # 解析参数
    args = sys.argv[1:]
    test_mode = "--test" in args
    catalog = "guides"  # 默认 guides
    concurrency = DEFAULT_CONCURRENCY
    generate_mapping = "--generate-mapping" in args
    no_images = "--no-images" in args

    for i, arg in enumerate(args):
        if arg == "--catalog" and i + 1 < len(args):
            catalog = args[i + 1]
        elif arg.startswith("--concurrency"):
            try:
                concurrency = int(args[i + 1])
            except:
                pass

    # 根据 catalog 选择配置文件
    if catalog == "ref" or catalog == "references":
        catalog_name = "harmonyos-references"
        mapping_file = BASE_DIR / "ref_mapping.json"
        output_dir = SITE_DIR / "docs-ref"
        hash_dir = BASE_DIR / ".cache-ref"
        origin_prefix = "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/"
    else:
        catalog_name = "harmonyos-guides"
        mapping_file = MAPPING_FILE
        output_dir = OUTPUT_DIR
        hash_dir = HASH_DIR
        origin_prefix = ORIGIN_URL_PREFIX

    # 动态设置（用于 fetch_document 中）
    global _CATALOG_NAME, _OUTPUT_DIR, _HASH_DIR, _ORIGIN_PREFIX, _DOWNLOAD_IMAGES
    _CATALOG_NAME = catalog_name
    _OUTPUT_DIR = output_dir
    _HASH_DIR = hash_dir
    _ORIGIN_PREFIX = origin_prefix
    _DOWNLOAD_IMAGES = not no_images

    # --- Catalog Tree 抓取 & Mapping 生成 ---
    tree_file = BASE_DIR / ("ref_catalog_tree.json" if catalog in ("ref", "references") else "catalog_tree.json")

    if generate_mapping or not mapping_file.exists():
        print(f"抓取 catalog tree: {catalog_name} ...")
        tree = fetch_catalog_tree(catalog_name)
        if tree:
            with open(tree_file, 'w', encoding='utf-8') as f:
                json.dump(tree, f, ensure_ascii=False)
            print(f"  catalog tree 已保存: {tree_file}")
            # 生成 mapping
            mapping_list = generate_mapping_from_tree(tree)
            with open(mapping_file, 'w', encoding='utf-8') as f:
                json.dump(mapping_list, f, ensure_ascii=False, indent=2)
            print(f"  mapping 已生成: {mapping_file} ({len(mapping_list)} 篇)")
        else:
            print(f"  ⚠️  catalog tree 抓取失败，使用已有文件")

    if generate_mapping:
        print("映射生成完成，退出。")
        return

    # 加载映射
    print(f"抓取目录: {catalog_name}")
    print("加载文档映射...")
    with open(mapping_file, 'r') as f:
        docs = json.load(f)

    # ref catalog: 跳过分支节点（只有导航链接的索引页，无实际 API 内容）
    if catalog in ("ref", "references"):
        total = len(docs)
        docs = [d for d in docs if not d.get('isBranch', False)]
        skipped = total - len(docs)
        if skipped:
            print(f"跳过 {skipped} 个分支节点（纯导航索引页），实际抓取 {len(docs)} 篇")

    print(f"共 {len(docs)} 篇文档待抓取")

    # 构建 objectId → path 映射（用于内部链接重写）
    # 对路径段做安全化
    global OID_PATH_MAP, CROSS_CATALOG_MAP
    for doc in docs:
        parts = doc["path"].split('/')
        safe_parts = [safe_dirname(p) for p in parts]
        OID_PATH_MAP[doc["objectId"]] = '/'.join(safe_parts)
    print(f"内部链接映射: {len(OID_PATH_MAP)} 个文档")

    # 构建跨 catalog 映射（guides↔references 交叉链接）
    cross_mapping_file = BASE_DIR / ("mapping.json" if catalog in ("ref", "references") else "ref_mapping.json")
    if cross_mapping_file.exists():
        with open(cross_mapping_file, 'r') as f:
            cross_docs = json.load(f)
        for doc in cross_docs:
            parts = doc["path"].split('/')
            safe_parts = [safe_dirname(p) for p in parts]
            cross_path = '/'.join(safe_parts)
            cross_catalog = 'ref' if catalog in ("ref", "references") else 'guides'
            CROSS_CATALOG_MAP[doc["objectId"]] = (cross_catalog, cross_path)
        print(f"跨 catalog 映射: {len(CROSS_CATALOG_MAP)} 个文档")

    if test_mode:
        docs = docs[:5]
        print(f"[测试模式] 只抓取前 {len(docs)} 篇")
    
    # --dir 过滤：只抓取指定 dir 的文档
    dir_filter = None
    for i, arg in enumerate(args):
        if arg == "--dir" and i + 1 < len(args):
            dir_filter = args[i + 1]
    if dir_filter:
        before = len(docs)
        docs = [d for d in docs if d.get('dir') == dir_filter]
        print(f"[--dir {dir_filter}] 过滤: {before} → {len(docs)} 篇")

    # 创建输出目录
    output_dir.mkdir(parents=True, exist_ok=True)

    # 加载上次hash
    hash_file = hash_dir / "hashes.json"
    prev_hashes = {}
    if hash_file.exists():
        with open(hash_file, 'r') as f:
            prev_hashes = json.load(f)
    print(f"上次抓取记录: {len(prev_hashes)} 篇")

    # 开始抓取
    print(f"\n开始抓取 (并发数: {concurrency})...")
    results, progress = asyncio.run(crawl_all(docs, concurrency))

    # 生成变更记录
    new_hashes = {doc_id: info for doc_id, info in results.items()}
    generate_changelog(results, prev_hashes)

    # 保存hash
    hash_dir.mkdir(parents=True, exist_ok=True)
    with open(hash_file, 'w') as f:
        json.dump(new_hashes, f, ensure_ascii=False)

    print(f"\n完成! 文档保存在 {_OUTPUT_DIR}")


if __name__ == "__main__":
    main()
