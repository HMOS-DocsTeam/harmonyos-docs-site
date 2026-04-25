---
title: "OH_Drawing_LineMetrics"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-linemetrics
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-linemetrics
---

# OH\_Drawing\_LineMetrics

```
typedef struct OH_Drawing_LineMetrics {...} OH_Drawing_LineMetrics
```

## 概述

文字行位置信息。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| double ascender | 文字相对于基线以上取绝对值后的高度。 |
| double descender | 文字相对于基线以下取绝对值后的高度。 |
| double capHeight | 大写字母的高度。 |
| double xHeight | 小写字母的高度。 |
| double width | 文字宽度。 |
| double height | 行高。 |
| double x | 文字左端到容器左端距离，左对齐为0，右对齐为容器宽度减去行文字宽度。 |
| double y | 文字上端到容器上端高度，第一行为0，第二行为第一行高度。 |
| size\_t startIndex | 行起始位置字符索引。 |
| size\_t endIndex | 行结束位置字符索引。 |
| [OH\_Drawing\_Font\_Metrics](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-font-metrics/capi-drawing-oh-drawing-font-metrics) firstCharMetrics | 第一个字的度量信息。 |
