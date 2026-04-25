---
title: "XEG_SpatialUpscaleCreateInfo"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-spatialupscalecreateinfo
---

# XEG\_SpatialUpscaleCreateInfo

## 概述

此结构体描述创建[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象。

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_spatial\_upscale.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-spatial-upscale-8h/xengine-kit-xeg-vulkan-spatial-upscale-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkExtent2D [inputSize](#inputsize) | 超分输入图像的尺寸，必须与超分输入图像的VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。 |
| VkRect2D [inputRegion](#inputregion) | 超分输入图像的采样区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。 |
| VkExtent2D [outputSize](#outputsize) | 超分输出图像的尺寸，必须与超分结果VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。 |
| VkRect2D [outputRegion](#outputregion) | 超分输出图像的绘制区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。 |
| VkFormat [format](#format) | 超分输入图像的格式。 |
| float [sharpness](#sharpness) | 超分的锐化参数，建议取值范围为[0, 1]，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。 |

## 结构体成员变量说明

### format

```
VkFormat XEG_SpatialUpscaleCreateInfo::format
```

****描述****

超分输入图像的格式。

### inputRegion

```
VkRect2D XEG_SpatialUpscaleCreateInfo::inputRegion
```

****描述****

超分输入图像的采样区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。

### inputSize

```
VkExtent2D XEG_SpatialUpscaleCreateInfo::inputSize
```

****描述****

超分输入图像的尺寸，必须与超分输入图像的VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。

### outputRegion

```
VkRect2D XEG_SpatialUpscaleCreateInfo::outputRegion
```

****描述****

超分输出图像的绘制区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。

### outputSize

```
VkExtent2D XEG_SpatialUpscaleCreateInfo::outputSize
```

****描述****

超分输出图像的尺寸，必须与超分结果VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。

### sharpness

```
float XEG_SpatialUpscaleCreateInfo::sharpness
```

****描述****

超分的锐化参数，建议取值范围为[0, 1]，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。
