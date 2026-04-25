---
title: "OH_Drawing_Image_Info"
sidebar_position: 30
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-image-info
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-image-info
---

# OH\_Drawing\_Image\_Info

```
typedef struct {...} OH_Drawing_Image_Info
```

## 概述

定义图片信息结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_types.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t width | 宽度，单位为像素。 |
| int32\_t height | 高度，单位为像素。 |
| [OH\_Drawing\_ColorFormat](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_colorformat) colorType | 颜色类型[OH\_Drawing\_ColorFormat](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_colorformat)。 |
| [OH\_Drawing\_AlphaFormat](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_alphaformat) alphaType | 透明度类型[OH\_Drawing\_AlphaFormat](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_alphaformat)。 |
