---
title: "FG_DispatchDescription_GLES"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___dispatch_description___g_l_e_s
---

# FG\_DispatchDescription\_GLES

## 概述

此结构体描述下发帧生成命令[HMS\_FG\_Dispatch\_GLES](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles)需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_gles.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [inputColor](#inputcolor) | 真实渲染帧颜色缓冲区索引，支持格式包括GL\_RGBA8、GL\_R11F\_G11F\_B10F、GL\_RGBA16F。  取值范围：[0, 2^32 -1]。 |
| uint32\_t [inputDepthStencil](#inputdepthstencil) | 真实渲染帧深度模板缓冲区索引，支持格式包括GL\_DEPTH24\_STENCIL8、GL\_DEPTH32F\_STENCIL8。  取值范围：[0, 2^32 -1]。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) [viewProj](#viewproj) | 真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) [invViewProj](#invviewproj) | 真实渲染帧逆视图投影矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。 |
| uint32\_t [outputColor](#outputcolor) | 预测帧缓冲区索引，此预测帧缓冲区需要用户创建并输入，支持格式包括GL\_RGBA8、GL\_R11F\_G11F\_B10F、GL\_RGBA16F。  取值范围：[0, 2^32 -1]。 |

## 结构体成员变量说明

### inputColor

```
uint32_t FG_DispatchDescription_GLES::inputColor
```

****描述****

真实渲染帧颜色缓冲区索引，支持格式包括GL\_RGBA8、GL\_R11F\_G11F\_B10F、GL\_RGBA16F。

### inputDepthStencil

```
uint32_t FG_DispatchDescription_GLES::inputDepthStencil
```

****描述****

真实渲染帧深度模板缓冲区索引，支持格式包括GL\_DEPTH24\_STENCIL8、GL\_DEPTH32F\_STENCIL8。

### invViewProj

```
FG_Mat4x4 FG_DispatchDescription_GLES::invViewProj
```

****描述****

真实渲染帧逆视图投影矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

### outputColor

```
uint32_t FG_DispatchDescription_GLES::outputColor
```

****描述****

预测帧缓冲区索引，此预测帧缓冲区需要用户创建并输入，支持格式包括GL\_RGBA8、GL\_R11F\_G11F\_B10F、GL\_RGBA16F。

### viewProj

```
FG_Mat4x4 FG_DispatchDescription_GLES::viewProj
```

****描述****

真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。
