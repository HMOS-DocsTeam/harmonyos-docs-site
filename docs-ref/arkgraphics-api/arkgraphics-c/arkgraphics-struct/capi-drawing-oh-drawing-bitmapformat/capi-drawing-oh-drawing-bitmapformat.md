---
title: "OH_Drawing_BitmapFormat"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-bitmapformat
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-bitmapformat
---

# OH\_Drawing\_BitmapFormat

```
typedef struct {...} OH_Drawing_BitmapFormat
```

## 概述

结构体用于描述位图像素的格式，包括颜色类型和透明度类型。

****起始版本：**** 8

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_bitmap.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-bitmap-h/capi-drawing-bitmap-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| OH\_Drawing\_ColorFormat colorFormat | 描述位图像素的存储格式。 |
| OH\_Drawing\_AlphaFormat alphaFormat | 描述位图像素的透明度分量。 |
