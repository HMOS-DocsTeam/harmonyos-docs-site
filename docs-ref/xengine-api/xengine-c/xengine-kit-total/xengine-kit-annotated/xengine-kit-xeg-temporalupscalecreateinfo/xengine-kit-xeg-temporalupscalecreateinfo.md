---
title: "XEG_TemporalUpscaleCreateInfo"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-temporalupscalecreateinfo
---

# XEG\_TemporalUpscaleCreateInfo

## 概述

此结构体描述创建[XEG\_TemporalUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG\_TemporalUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_temporalupscale)对象。

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_temporal\_upscale.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkExtent2D [inputSize](#inputsize) | 输入图像的尺寸。支持的最大尺寸为2048 \* 1024。 |
| VkExtent2D [outputSize](#outputsize) | 输出图像的尺寸。 |
| VkRect2D [outputRegion](#outputregion) | 超分输出图像区域。 |
| VkFormat [outputFormat](#outputformat) | 输出图像的格式。 |
| int [jitterNum](#jitternum) | 相机抖动的周期数，取值范围为[4, 16]，推荐8。 |
| bool [isDepthReversed](#isdepthreversed) | 是否存在深度反转，如果使用0.0表示最远深度则需要设置此参数值为true，否则设置为false。 |

## 结构体成员变量说明

### inputSize

```
VkExtent2D XEG_TemporalUpscaleCreateInfo::inputSize
```

****描述****

输入图像的尺寸。支持的最大尺寸为2048 \* 1024。

### isDepthReversed

```
bool XEG_TemporalUpscaleCreateInfo::isDepthReversed
```

****描述****

是否存在深度反转，如果使用0.0表示最远深度则需要设置此参数值为true，否则设置为false。

### jitterNum

```
int XEG_TemporalUpscaleCreateInfo::jitterNum
```

****描述****

相机抖动的周期数，取值范围为[4, 16]，推荐8。

### outputFormat

```
VkFormat XEG_TemporalUpscaleCreateInfo::outputFormat
```

****描述****

输出图像的格式。

### outputRegion

```
VkRect2D XEG_TemporalUpscaleCreateInfo::outputRegion
```

****描述****

超分输出图像区域。

### outputSize

```
VkExtent2D XEG_TemporalUpscaleCreateInfo::outputSize
```

****描述****

输出图像的尺寸。
