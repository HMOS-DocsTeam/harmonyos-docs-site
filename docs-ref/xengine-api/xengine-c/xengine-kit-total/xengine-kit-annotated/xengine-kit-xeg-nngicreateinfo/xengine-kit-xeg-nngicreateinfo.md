---
title: "XEG_NNGICreateInfo"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngicreateinfo
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-nngicreateinfo
---

# XEG\_NNGICreateInfo

## 概述

此结构体描述创建具有NNGI特性的[XEG\_RTGI](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG\_RTGI](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtgi)对象。

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_rtgi.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rtgi-8h/xengine-kit-xeg-vulkan-rtgi-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| XEG\_StructureType [sType](#stype) | 识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_NNGI\_CREATE\_INFO。 |
| const void \* [pNext](#pnext) | 指向扩展结构的指针。 |
| XEG\_RTGIQualityMode [qualityMode](#qualitymode) | 输出图像的质量模式，必须为[XEG\_RTGIQualityMode](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtgiqualitymode)中的枚举值。 |
| VkExtent2D [inferenceInputSize](#inferenceinputsize) | 推理输入图像的分辨率，必须与[XEG\_NNGIDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription)中的推理输入图像的分辨率保持一致。 |
| VkExtent2D [inferenceOutputSize](#inferenceoutputsize) | 推理输出图像的分辨率，必须与[XEG\_NNGIDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription)中的推理输出图像的分辨率保持一致，推荐使用（640，368）。 |
| VkExtent2D [trainingSize](#trainingsize) | 训练图像的分辨率，必须与[XEG\_NNGIDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription)中的训练输入和输出图像的分辨率保持一致，推荐使用（64，32）。 |

## 结构体成员变量说明

### inferenceInputSize

```
VkExtent2D XEG_NNGICreateInfo::inferenceInputSize
```

****描述****

推理输入图像的分辨率，必须与[XEG\_NNGIDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription)中的推理输入图像的分辨率保持一致。

### inferenceOutputSize

```
VkExtent2D XEG_NNGICreateInfo::inferenceOutputSize
```

****描述****

推理输出图像的分辨率，必须与[XEG\_NNGIDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription)中的推理输出图像的分辨率保持一致，推荐使用（640，368）。

### pNext

```
const void* XEG_NNGICreateInfo::pNext
```

****描述****

指向扩展结构的指针。

### qualityMode

```
XEG_RTGIQualityMode XEG_NNGICreateInfo::qualityMode
```

****描述****

输出图像的质量模式，必须为[XEG\_RTGIQualityMode](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtgiqualitymode)中的枚举值。

### sType

```
XEG_StructureType XEG_NNGICreateInfo::sType
```

****描述****

识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_NNGI\_CREATE\_INFO。

### trainingSize

```
VkExtent2D XEG_NNGICreateInfo::trainingSize
```

****描述****

训练图像的分辨率，必须与[XEG\_NNGIDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription)中的训练输入和输出图像的分辨率保持一致，推荐使用（64，32）。
