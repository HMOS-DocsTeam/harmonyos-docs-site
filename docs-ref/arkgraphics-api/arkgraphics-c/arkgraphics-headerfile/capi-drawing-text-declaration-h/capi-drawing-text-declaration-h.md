---
title: "drawing_text_declaration.h"
sidebar_position: 39
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-declaration-h
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-text-declaration-h
---

# drawing\_text\_declaration.h

## 概述

提供2D绘制文本相关的数据结构声明。

****引用文件：**** &lt;native\_drawing/drawing\_text\_declaration.h&gt;

****库：**** libnative\_drawing.so

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 8

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection) | OH\_Drawing\_FontCollection | 用于加载字体。 |
| [OH\_Drawing\_Typography](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typography/capi-drawing-oh-drawing-typography) | OH\_Drawing\_Typography | 用于管理排版的布局和显示等。 |
| [OH\_Drawing\_TextStyle](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textstyle/capi-drawing-oh-drawing-textstyle) | OH\_Drawing\_TextStyle | 用于管理字体颜色、装饰等。 |
| [OH\_Drawing\_TypographyStyle](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typographystyle/capi-drawing-oh-drawing-typographystyle) | OH\_Drawing\_TypographyStyle | 用于管理排版风格，如文字方向等。 |
| [OH\_Drawing\_LineTypography](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-linetypography/capi-drawing-oh-drawing-linetypography) | OH\_Drawing\_LineTypography | 用于从一段文字中提取单行数据进行排版。 |
| [OH\_Drawing\_TypographyCreate](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typographycreate/capi-drawing-oh-drawing-typographycreate) | OH\_Drawing\_TypographyCreate | 用于创建[OH\_Drawing\_Typography](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typography/capi-drawing-oh-drawing-typography)。 |
| [OH\_Drawing\_TextBox](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textbox/capi-drawing-oh-drawing-textbox) | OH\_Drawing\_TextBox | 用于接收文本框的矩形大小、方向和数量大小。 |
| [OH\_Drawing\_PositionAndAffinity](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-positionandaffinity/capi-drawing-oh-drawing-positionandaffinity) | OH\_Drawing\_PositionAndAffinity | 用于接收字体的位置和亲和性。 |
| [OH\_Drawing\_Range](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-range/capi-drawing-oh-drawing-range) | OH\_Drawing\_Range | 用于接收字体的起始位置和结束位置。 |
| [OH\_Drawing\_TextShadow](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textshadow/capi-drawing-oh-drawing-textshadow) | OH\_Drawing\_TextShadow | 用于管理文本阴影。 |
| [OH\_Drawing\_FontParser](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontparser/capi-drawing-oh-drawing-fontparser) | OH\_Drawing\_FontParser | 用来解析系统字体文件。 |
| [OH\_Drawing\_TextTab](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-texttab/capi-drawing-oh-drawing-texttab) | OH\_Drawing\_TextTab | 用于管理文本制表符。 |
| [OH\_Drawing\_TextLine](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-textline/capi-drawing-oh-drawing-textline) | OH\_Drawing\_TextLine | 用于管理文本行。 |
| [OH\_Drawing\_Run](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-run/capi-drawing-oh-drawing-run) | OH\_Drawing\_Run | 用于管理文本渲染单元。 |
| [OH\_Drawing\_FontFullDescriptor](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfulldescriptor/capi-drawing-oh-drawing-fontfulldescriptor) | OH\_Drawing\_FontFullDescriptor | 用于描述字体的详细信息，即字体描述符。 |
