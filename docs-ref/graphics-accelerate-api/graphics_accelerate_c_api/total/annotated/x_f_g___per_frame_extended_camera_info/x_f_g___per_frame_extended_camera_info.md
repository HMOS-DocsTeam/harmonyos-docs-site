---
title: "FG_PerFrameExtendedCameraInfo"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___per_frame_extended_camera_info
---

# FG\_PerFrameExtendedCameraInfo

## 概述

此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_base.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__base_8h/frame__generation__base_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) proj | 相机投影矩阵，即从视图空间到裁剪空间坐标系的转换矩阵。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) translatedInvViewProj | 平移视图投影矩阵的逆矩阵，即从裁剪空间到以相机为中心的世界空间坐标系的转换矩阵。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) translatedView | 平移视图矩阵，即从以相机为中心的世界空间到视图空间坐标系的转换矩阵。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) translatedViewProj | 平移视图投影矩阵，即从以相机为中心的世界空间到裁剪空间坐标系的转换矩阵。 |
| [FG\_Vec3D](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___vec3_d/x_f_g___vec3_d) worldPosition | 相机世界空间坐标。 |

## 结构体成员变量说明

### proj

```
FG_Mat4x4 FG_PerFrameExtendedCameraInfo::proj
```

****描述****

相机投影矩阵，即从视图空间到裁剪空间坐标系的转换矩阵。

### translatedInvViewProj

```
FG_Mat4x4 FG_PerFrameExtendedCameraInfo::translatedInvViewProj
```

****描述****

平移视图投影矩阵的逆矩阵，即从裁剪空间到以相机为中心的世界空间坐标系的转换矩阵。

### translatedView

```
FG_Mat4x4 FG_PerFrameExtendedCameraInfo::translatedView
```

****描述****

平移视图矩阵，即从以相机为中心的世界空间到视图空间坐标系的转换矩阵。

### translatedViewProj

```
FG_Mat4x4 FG_PerFrameExtendedCameraInfo::translatedViewProj
```

****描述****

平移视图投影矩阵，即从以相机为中心的世界空间到裁剪空间坐标系的转换矩阵。

### worldPosition

```
FG_Vec3D FG_PerFrameExtendedCameraInfo::worldPosition
```

****描述****

相机世界空间坐标。
