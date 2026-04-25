---
title: "FG_ImageFormat_VK"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___image_format___v_k
---

# FG\_ImageFormat\_VK

## 概述

此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_vk.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkFormat [inputColorFormat](#inputcolorformat) | 真实渲染帧颜色缓冲区图像格式。 |
| VkFormat [inputDepthStencilFormat](#inputdepthstencilformat) | 深度模板缓冲区图像格式。 |
| VkFormat [outputColorFormat](#outputcolorformat) | 预测帧缓冲区图像格式。 |

## 结构体成员变量说明

### inputColorFormat

```
VkFormat FG_ImageFormat_VK::inputColorFormat
```

****描述****

真实渲染帧颜色缓冲区图像格式。

### inputDepthStencilFormat

```
VkFormat FG_ImageFormat_VK::inputDepthStencilFormat
```

****描述****

深度模板缓冲区图像格式。

### outputColorFormat

```
VkFormat FG_ImageFormat_VK::outputColorFormat
```

****描述****

预测帧缓冲区图像格式。
