---
title: "FG_DispatchDescription_VK"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___v_k
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___dispatch_description___v_k
---

# FG\_DispatchDescription\_VK

## 概述

此结构体描述下发帧生成命令[HMS\_FG\_Dispatch\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk)需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_vk.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FG\_ImageInfo\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_info___v_k/x_f_g___image_info___v_k) [inputColorInfo](#inputcolorinfo) | 真实渲染帧颜色缓冲区图像实例，该图像实例由[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)创建，由[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)销毁。 |
| [FG\_ImageInfo\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_info___v_k/x_f_g___image_info___v_k) [inputDepthStencilInfo](#inputdepthstencilinfo) | 真实渲染帧深度模板缓冲区图像实例，该图像实例由[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)创建，由[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)销毁。 |
| [FG\_ImageInfo\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_info___v_k/x_f_g___image_info___v_k) [outputColorInfo](#outputcolorinfo) | 预测帧缓冲区图像实例 ，该图像实例由[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)创建，由[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)销毁。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) [viewProj](#viewproj) | 真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。 |
| [FG\_Mat4x4](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4) [invViewProj](#invviewproj) | 真实渲染帧视图投影逆矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。 |
| VkCommandBuffer [vkCommandBuffer](#vkcommandbuffer) | 用于录入超帧绘制指令的命令缓冲区。 |
| uint8\_t [frameIdx](#frameidx) | 当前帧序号，序号计数从0开始。该值必须小于[FG\_ContextDescription\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k)中的framesInFlight。 |

## 结构体成员变量说明

### frameIdx

```
uint8_t FG_DispatchDescription_VK::frameIdx
```

****描述****

当前帧序号，序号计数从0开始。该值必须小于[FG\_ContextDescription\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k)中的framesInFlight。

### inputColorInfo

```
FG_ImageInfo_VK FG_DispatchDescription_VK::inputColorInfo
```

****描述****

真实渲染帧颜色缓冲图像实例，该图像实例由[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)创建，由[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)销毁。

### inputDepthStencilInfo

```
FG_ImageInfo_VK FG_DispatchDescription_VK::inputDepthStencilInfo
```

****描述****

真实渲染帧深度模板缓冲区图像实例，该图像实例由[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)创建，由[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)销毁。

### invViewProj

```
FG_Mat4x4 FG_DispatchDescription_VK::invViewProj
```

****描述****

真实渲染帧视图投影逆矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

### outputColorInfo

```
FG_ImageInfo_VK FG_DispatchDescription_VK::outputColorInfo
```

****描述****

预测帧缓冲区图像实例，该图像实例由[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)创建，由[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)销毁。

### viewProj

```
FG_Mat4x4 FG_DispatchDescription_VK::viewProj
```

****描述****

真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

### vkCommandBuffer

```
VkCommandBuffer FG_DispatchDescription_VK::vkCommandBuffer
```

****描述****

用于录入超帧绘制指令的命令缓冲区。
