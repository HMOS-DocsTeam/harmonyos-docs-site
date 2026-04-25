---
title: "XEG_AdaptiveVRSDescription"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-adaptivevrsdescription
---

# XEG\_AdaptiveVRSDescription

## 概述

此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_adaptive\_vrs.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-adaptive-vrs-8h/xengine-kit-xeg-vulkan-adaptive-vrs-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float \* [reprojectionMatrix](#reprojectionmatrix) | 参数可选，参数非空时画质更优。此参数为重投影矩阵的指针，计算公式为：（上一帧投影矩阵\*上一帧的观察矩阵）\*（（当前帧的投影矩阵\*当前帧的观察矩阵）的逆矩阵），矩阵必须是4\*4列主序的矩阵。 |
| VkImageView [inputColorImage](#inputcolorimage) | 上一帧渲染管线最终渲染结果颜色附件的VkImageView。 |
| VkImageView [inputDepthImage](#inputdepthimage) | 当前帧渲染管线深度附件的VkImageView。 |
| VkImageView [outputShadingRateImage](#outputshadingrateimage) | 准备生成着色率图信息的VkImageView，此VkImageView需要用户创建并输入。 |

![](../../../../../images/1532e753/note_3.0-zh-cn.png) 

对创建VkImageView的VkImage对象有以下约束：

imageType = VK\_IMAGE\_TYPE\_2D, extent.depth = 1, mipLevels = 1, arrayLayers = 1。

## 结构体成员变量说明

### inputColorImage

```
VkImageView XEG_AdaptiveVRSDescription::inputColorImage
```

****描述****

上一帧渲染管线最终渲染结果颜色附件的VkImageView。

### inputDepthImage

```
VkImageView XEG_AdaptiveVRSDescription::inputDepthImage
```

****描述****

当前帧渲染管线深度附件的VkImageView。

### outputShadingRateImage

```
VkImageView XEG_AdaptiveVRSDescription::outputShadingRateImage
```

****描述****

准备生成着色率图信息的VkImageView，此VkImageView需要用户创建并输入。

### reprojectionMatrix

```
float* XEG_AdaptiveVRSDescription::reprojectionMatrix
```

****描述****

参数可选，参数非空时画质更优。此参数为重投影矩阵的指针，计算公式为：（上一帧投影矩阵\*上一帧的观察矩阵）\*（（当前帧的投影矩阵\*当前帧的观察矩阵）的逆矩阵），矩阵必须是4\*4列主序的矩阵。
