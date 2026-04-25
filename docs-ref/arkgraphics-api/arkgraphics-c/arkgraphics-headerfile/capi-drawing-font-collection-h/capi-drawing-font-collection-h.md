---
title: "drawing_font_collection.h"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-font-collection-h
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-font-collection-h
---

# drawing\_font\_collection.h

## 概述

定义绘制模块中与字体集合相关的函数。

****引用文件：**** &lt;native\_drawing/drawing\_font\_collection.h&gt;

****库：**** libnative\_drawing.so

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 8

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Drawing\_FontCollection\* OH\_Drawing\_CreateFontCollection(void)](#oh_drawing_createfontcollection) | 创建字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)。 |
| [void OH\_Drawing\_DestroyFontCollection(OH\_Drawing\_FontCollection\* fontCollection)](#oh_drawing_destroyfontcollection) | 释放被字体集对象占据的内存。 |
| [void OH\_Drawing\_DisableFontCollectionFallback(OH\_Drawing\_FontCollection\* fontCollection)](#oh_drawing_disablefontcollectionfallback) | 禁用系统字体。 |
| [void OH\_Drawing\_DisableFontCollectionSystemFont(OH\_Drawing\_FontCollection\* fontCollection)](#oh_drawing_disablefontcollectionsystemfont) | 禁用系统字体。 |
| [OH\_Drawing\_FontCollection\* OH\_Drawing\_CreateSharedFontCollection(void)](#oh_drawing_createsharedfontcollection) | 创建可共享的字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)。 |
| [void OH\_Drawing\_ClearFontCaches(OH\_Drawing\_FontCollection\* fontCollection)](#oh_drawing_clearfontcaches) | 清理字体排版缓存（字体排版缓存本身设有内存上限和清理机制，所占内存有限，如无内存要求，不建议清理）。 |
| [OH\_Drawing\_FontCollection\* OH\_Drawing\_GetFontCollectionGlobalInstance(void)](#oh_drawing_getfontcollectionglobalinstance) | 获取全局字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)，可感知主题字信息，禁止释放该对象。 |

## 函数说明

### OH\_Drawing\_CreateFontCollection()

```
OH_Drawing_FontCollection* OH_Drawing_CreateFontCollection(void)
```

****描述****

创建字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 8

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* | 指向创建的字体集对象的指针。该函数创建的字体集指针对象OH\_Drawing\_FontCollection只能被一个[OH\_Drawing\_TypographyCreate](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-typographycreate/capi-drawing-oh-drawing-typographycreate)对象使用，无法被多个OH\_Drawing\_TypographyCreate对象共享使用。如需在多个OH\_Drawing\_TypographyCreate对象间共享同一个OH\_Drawing\_FontCollection，请使用[OH\_Drawing\_CreateSharedFontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-font-collection-h/capi-drawing-font-collection-h#oh_drawing_createsharedfontcollection)函数创建OH\_Drawing\_FontCollection对象。 |

### OH\_Drawing\_DestroyFontCollection()

```
void OH_Drawing_DestroyFontCollection(OH_Drawing_FontCollection* fontCollection)
```

****描述****

释放被字体集对象占据的内存。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* fontCollection | 指向字体集对象的指针。 |

### OH\_Drawing\_DisableFontCollectionFallback()

```
void OH_Drawing_DisableFontCollectionFallback(OH_Drawing_FontCollection* fontCollection)
```

****描述****

禁用系统字体。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****废弃版本：**** 18

****替代接口：**** [OH\_Drawing\_DisableFontCollectionSystemFont()](#oh_drawing_disablefontcollectionsystemfont)

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* fontCollection | 指向字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)的指针。 |

### OH\_Drawing\_DisableFontCollectionSystemFont()

```
void OH_Drawing_DisableFontCollectionSystemFont(OH_Drawing_FontCollection* fontCollection)
```

****描述****

禁用系统字体。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* fontCollection | 指向字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)的指针。 |

### OH\_Drawing\_CreateSharedFontCollection()

```
OH_Drawing_FontCollection* OH_Drawing_CreateSharedFontCollection(void)
```

****描述****

创建可共享的字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* | 指向创建的字体集对象的指针。 |

### OH\_Drawing\_ClearFontCaches()

```
void OH_Drawing_ClearFontCaches(OH_Drawing_FontCollection* fontCollection)
```

****描述****

清理字体排版缓存（字体排版缓存本身设有内存上限和清理机制，所占内存有限，如无内存要求，不建议清理）。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* fontCollection | 指向字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)的指针。 |

### OH\_Drawing\_GetFontCollectionGlobalInstance()

```
OH_Drawing_FontCollection* OH_Drawing_GetFontCollectionGlobalInstance(void)
```

****描述****

获取全局字体集对象[OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)，可感知主题字信息，禁止释放该对象。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 14

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_FontCollection](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontcollection/capi-drawing-oh-drawing-fontcollection)\* | 指向全局字体集对象的指针。 |
