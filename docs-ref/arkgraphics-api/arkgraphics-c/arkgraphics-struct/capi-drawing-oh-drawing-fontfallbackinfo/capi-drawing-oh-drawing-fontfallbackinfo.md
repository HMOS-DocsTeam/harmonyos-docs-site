---
title: "OH_Drawing_FontFallbackInfo"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontfallbackinfo
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-fontfallbackinfo
---

# OH\_Drawing\_FontFallbackInfo

```
typedef struct OH_Drawing_FontFallbackInfo {...} OH_Drawing_FontFallbackInfo
```

## 概述

备用字体信息结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* language | 字体集所支持的语言类型，语言格式为bcp47。 |
| char\* familyName | 字体家族名。 |
