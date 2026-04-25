---
title: "OH_Drawing_FontConfigInfo"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontconfiginfo
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-fontconfiginfo
---

# OH\_Drawing\_FontConfigInfo

```
typedef struct OH_Drawing_FontConfigInfo {...} OH_Drawing_FontConfigInfo
```

## 概述

系统字体配置信息结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| size\_t fontDirSize | 系统字体文件路径数量。 |
| size\_t fontGenericInfoSize | 通用字体集列表数量。 |
| size\_t fallbackGroupSize | 备用字体集列表数量。 |
| char\*\* fontDirSet | 系统字体文件路径列表。 |
| [OH\_Drawing\_FontGenericInfo](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontgenericinfo/capi-drawing-oh-drawing-fontgenericinfo)\* fontGenericInfoSet | 通用字体集列表。 |
| [OH\_Drawing\_FontFallbackGroup](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfallbackgroup/capi-drawing-oh-drawing-fontfallbackgroup)\* fallbackGroupSet | 备用字体集列表。 |
