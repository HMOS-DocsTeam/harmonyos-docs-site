---
title: "abr_gles.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/abr__gles_8h
kit: 图形
last_updated: "2026-04-22"
slug: abr__gles_8h
---

# abr\_gles.h

## 概述

声明OpenGL ES图形API平台的ABR接口。

****引用文件：**** &lt;graphics\_game\_sdk/abr\_gles.h&gt;

****库：**** libabr.so

****系统能力：**** SystemCapability.GraphicsGame.RenderAccelerate

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [ABR\_ErrorCode](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1) [HMS\_ABR\_MarkFrameBuffer\_GLES](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_markframebuffer_gles)([ABR\_Context](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context)\* context) | 标记ABR进行自适应渲染处理的GLES Buffer，需要在GLES Buffer开始渲染前调用此接口。 |
| [ABR\_ErrorCode](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_errorcode-1) [HMS\_ABR\_GetScaledTexture\_GLES](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_abr_getscaledtexture_gles)([ABR\_Context](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#abr_context)\* context, uint32\_t originTexture, uint32\_t\* scaledTexture) | 根据原始GLES纹理获取ABR渲染后的GLES纹理。 |
