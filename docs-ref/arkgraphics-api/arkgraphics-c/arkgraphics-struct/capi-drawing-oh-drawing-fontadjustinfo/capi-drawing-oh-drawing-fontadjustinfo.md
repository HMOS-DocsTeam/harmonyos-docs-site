---
title: "OH_Drawing_FontAdjustInfo"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontadjustinfo
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-fontadjustinfo
---

# OH\_Drawing\_FontAdjustInfo

```
typedef struct OH_Drawing_FontAdjustInfo {...} OH_Drawing_FontAdjustInfo
```

## 概述

字重映射信息结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int weight | 字体原本的字重值。 |
| int to | 字体在应用中显示的字重值。 |
