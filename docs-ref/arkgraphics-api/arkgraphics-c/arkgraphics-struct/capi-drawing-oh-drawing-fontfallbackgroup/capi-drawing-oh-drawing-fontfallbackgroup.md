---
title: "OH_Drawing_FontFallbackGroup"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontfallbackgroup
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-fontfallbackgroup
---

# OH\_Drawing\_FontFallbackGroup

```
typedef struct OH_Drawing_FontFallbackGroup {...} OH_Drawing_FontFallbackGroup
```

## 概述

备用字体集信息结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* groupName | 备用字体集所对应的字体集名称，如果值为空，表示可以使用备用字体集列表集所有的字体。 |
| size\_t fallbackInfoSize | 备用字体集数量。 |
| [OH\_Drawing\_FontFallbackInfo](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontfallbackinfo/capi-drawing-oh-drawing-fontfallbackinfo)\* fallbackInfoSet | 备用字体字体集列表。 |
