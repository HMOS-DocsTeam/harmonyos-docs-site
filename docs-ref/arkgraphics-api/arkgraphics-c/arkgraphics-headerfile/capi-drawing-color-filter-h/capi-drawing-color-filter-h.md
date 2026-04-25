---
title: "drawing_color_filter.h"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-color-filter-h
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-color-filter-h
---

# drawing\_color\_filter.h

## 概述

声明与绘图模块中的颜色滤波器对象相关的函数。

****引用文件：**** &lt;native\_drawing/drawing\_color\_filter.h&gt;

****库：**** libnative\_drawing.so

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateBlendMode(uint32\_t color, OH\_Drawing\_BlendMode blendMode)](#oh_drawing_colorfiltercreateblendmode) | 创建具有混合模式的颜色滤波器。 |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateCompose(OH\_Drawing\_ColorFilter\* outerColorFilter,OH\_Drawing\_ColorFilter\* innerColorFilter)](#oh_drawing_colorfiltercreatecompose) | 将两个颜色滤波器合成一个新的颜色滤波器。  本接口会产生错误码，可以通过[OH\_Drawing\_ErrorCodeGet](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。  outerColorFilter、innerColorFilter任意一个为NULL时返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。 |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateMatrix(const float matrix[20])](#oh_drawing_colorfiltercreatematrix) | 创建具有5x4颜色矩阵的颜色滤波器。  本接口会产生错误码，可以通过[OH\_Drawing\_ErrorCodeGet](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。  matrix为NULL时返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。 |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateLinearToSrgbGamma(void)](#oh_drawing_colorfiltercreatelineartosrgbgamma) | 创建一个从线性颜色空间转换到SRGB颜色空间的颜色滤波器。 |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateSrgbGammaToLinear(void)](#oh_drawing_colorfiltercreatesrgbgammatolinear) | 创建颜色滤波器将RGB颜色通道应用于SRGB的伽玛曲线。 |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateLuma(void)](#oh_drawing_colorfiltercreateluma) | 创建一个颜色滤波器将其输入的亮度值乘以透明度通道，并将红色、绿色和蓝色通道设置为零。 |
| [OH\_Drawing\_ColorFilter\* OH\_Drawing\_ColorFilterCreateLighting(uint32\_t mulColor, uint32\_t addColor)](#oh_drawing_colorfiltercreatelighting) | 创建一个光照颜色滤波器，此滤波器会将RGB通道的颜色值乘以一种颜色值并加上另一种颜色值，计算结果会被限制在0到255范围内。 |
| [void OH\_Drawing\_ColorFilterDestroy(OH\_Drawing\_ColorFilter\* colorFilter)](#oh_drawing_colorfilterdestroy) | 销毁颜色滤波器对象，并回收该对象占用的内存。 |

## 函数说明

### OH\_Drawing\_ColorFilterCreateBlendMode()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateBlendMode(uint32_t color, OH_Drawing_BlendMode blendMode)
```

****描述****

创建具有混合模式的颜色滤波器。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| uint32\_t color | 表示颜色，是一个32位（ARGB）变量。 |
| [OH\_Drawing\_BlendMode](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode) blendMode | 表示混合模式。支持可选的混合模式具体可见[OH\_Drawing\_BlendMode](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h#oh_drawing_blendmode)枚举。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterCreateCompose()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateCompose(OH_Drawing_ColorFilter* outerColorFilter,OH_Drawing_ColorFilter* innerColorFilter)
```

****描述****

将两个颜色滤波器合成一个新的颜色滤波器。

本接口会产生错误码，可以通过[OH\_Drawing\_ErrorCodeGet](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。

outerColorFilter、innerColorFilter任意一个为NULL时返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* outerColorFilter | 指向颜色滤波器对象一的指针。 |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* innerColorFilter | 指向颜色滤波器对象二的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterCreateMatrix()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateMatrix(const float matrix[20])
```

****描述****

创建具有5x4颜色矩阵的颜色滤波器。

本接口会产生错误码，可以通过[OH\_Drawing\_ErrorCodeGet](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-error-code-h/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。

matrix为NULL时返回OH\_DRAWING\_ERROR\_INVALID\_PARAMETER。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| matrix | 表示矩阵，以长度为20的浮点数组表示。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterCreateLinearToSrgbGamma()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateLinearToSrgbGamma(void)
```

****描述****

创建一个从线性颜色空间转换到SRGB颜色空间的颜色滤波器。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterCreateSrgbGammaToLinear()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateSrgbGammaToLinear(void)
```

****描述****

创建颜色滤波器将RGB颜色通道应用于SRGB的伽玛曲线。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterCreateLuma()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateLuma(void)
```

****描述****

创建一个颜色滤波器将其输入的亮度值乘以透明度通道，并将红色、绿色和蓝色通道设置为零。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterCreateLighting()

```
OH_Drawing_ColorFilter* OH_Drawing_ColorFilterCreateLighting(uint32_t mulColor, uint32_t addColor)
```

****描述****

创建一个光照颜色滤波器，此滤波器会将RGB通道的颜色值乘以一种颜色值并加上另一种颜色值，计算结果会被限制在0到255范围内。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| uint32\_t mulColor | 用来乘法运算的颜色值。 |
| uint32\_t addColor | 用来加法运算的颜色值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* | 返回创建的颜色滤波器对象的指针。 |

### OH\_Drawing\_ColorFilterDestroy()

```
void OH_Drawing_ColorFilterDestroy(OH_Drawing_ColorFilter* colorFilter)
```

****描述****

销毁颜色滤波器对象，并回收该对象占用的内存。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeDrawing

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_Drawing\_ColorFilter](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-colorfilter/capi-drawing-oh-drawing-colorfilter)\* colorFilter | 表示指向颜色滤波器对象的指针。 |
