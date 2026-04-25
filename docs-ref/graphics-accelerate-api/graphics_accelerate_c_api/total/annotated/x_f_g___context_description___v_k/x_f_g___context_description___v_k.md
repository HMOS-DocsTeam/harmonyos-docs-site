---
title: "FG_ContextDescription_VK"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___context_description___v_k
---

# FG\_ContextDescription\_VK

## 概述

此结构体描述创建超帧上下文实例[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)所需的属性信息。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_vk.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkInstance [vkInstance](#vkinstance) | Vulkan实例，需在[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)的整个生命周期内有效。 |
| VkPhysicalDevice [vkPhysicalDevice](#vkphysicaldevice) | Vulkan物理设备句柄，需在[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)的整个生命周期内有效。 |
| VkDevice [vkDevice](#vkdevice) | Vulkan逻辑设备句柄，需在[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)的整个生命周期内有效。 |
| uint8\_t [framesInFlight](#framesinflight) | 设置并行渲染图像数。例如，如果下一帧图像需要等待上一帧图像送显后再进行渲染，则framesInFlight应设置为1；如果上一帧图像送显的同时，下一帧图像已经在进行渲染，则framesInFlight应设置为2。注意：framesInFlight不允许设置成0。超出取值范围返回FG\_INVALID\_PARAMETER错误码。  取值范围：[1, 2]。 |
| PFN\_vkGetInstanceProcAddr [fnVulkanLoaderFunction](#fnvulkanloaderfunction) | 指向Vulkan的vkGetInstanceProcAddr的函数指针，不允许设置为空。 |

## 结构体成员变量说明

### fnVulkanLoaderFunction

```
PFN_vkGetInstanceProcAddr FG_ContextDescription_VK::fnVulkanLoaderFunction
```

****描述****

指向Vulkan的vkGetInstanceProcAddr的函数指针，不允许设置为空。

### framesInFlight

```
uint8_t FG_ContextDescription_VK::framesInFlight
```

****描述****

设置并行渲染图像数。 例如，如果下一帧图像需要等待上一帧图像送显后再进行渲染，则framesInFlight应设置为1； 如果上一帧图像送显的同时，下一帧图像已经在进行渲染，则framesInFlight应设置为2。注意：framesInFlight不允许设置成0。超出取值范围返回FG\_INVALID\_PARAMETER错误码。

### vkDevice

```
VkDevice FG_ContextDescription_VK::vkDevice
```

****描述****

Vulkan逻辑设备句柄，需在[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)的整个生命周期内有效。

### vkInstance

```
VkInstance FG_ContextDescription_VK::vkInstance
```

****描述****

Vulkan实例, 需在[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)的整个生命周期内有效。

### vkPhysicalDevice

```
VkPhysicalDevice FG_ContextDescription_VK::vkPhysicalDevice
```

****描述****

Vulkan物理设备句柄，需在[FG\_Context\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk)的整个生命周期内有效。
