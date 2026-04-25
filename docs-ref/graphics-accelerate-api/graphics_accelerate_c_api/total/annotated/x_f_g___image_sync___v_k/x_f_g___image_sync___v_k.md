---
title: "FG_ImageSync_VK"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_sync___v_k
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___image_sync___v_k
---

# FG\_ImageSync\_VK

## 概述

此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_vk.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkAccessFlagBits [accessMask](#accessmask) | 内存访问类型的位掩码。 |
| VkImageLayout [layout](#layout) | 图像和图像子资源的内存布局。 |
| VkPipelineStageFlagBits [stages](#stages) | 管线阶段的位掩码。 |

## 结构体成员变量说明

### accessMask

```
VkAccessFlagBits FG_ImageSync_VK::accessMask
```

****描述****

内存访问类型的位掩码。

### layout

```
VkImageLayout FG_ImageSync_VK::layout
```

****描述****

图像和图像子资源的内存布局。

### stages

```
VkPipelineStageFlagBits FG_ImageSync_VK::stages
```

****描述****

管线阶段的位掩码。
