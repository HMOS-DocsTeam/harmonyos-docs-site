---
title: "xeg_vulkan_spatial_upscale.h"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-spatial-upscale-8h
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-vulkan-spatial-upscale-8h
---

# xeg\_vulkan\_spatial\_upscale.h

## 概述

XEngine空域GPU超分特性Vulkan接口。使用此头文件的接口前需要通过[HMS\_XEG\_EnumerateDeviceExtensionProperties](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG\_SPATIAL\_UPSCALE\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatial_upscale_extension_name)扩展可用。

****引用文件****：&lt;xengine/xeg\_vulkan\_spatial\_upscale.h&gt;

****库：**** libxengine.so

****系统能力：**** SystemCapability.Graphic.XEngine

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

## 汇总

### 结构体

| 名称 | 描述 |
| --- | --- |
| struct [XEG\_SpatialUpscaleCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo) | 此结构体描述创建[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象。 |
| struct [XEG\_SpatialUpscaleDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription) | 此结构体描述下发空域GPU超分渲染命令时需要的图像信息。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| VK\_DEFINE\_HANDLE([XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)) | [XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)的句柄。 |
| typedef struct [XEG\_SpatialUpscaleCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo) XEG\_SpatialUpscaleCreateInfo | 此结构体描述创建[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象。 |
| typedef struct [XEG\_SpatialUpscaleDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription) XEG\_SpatialUpscaleDescription | 此结构体描述下发空域GPU超分渲染命令时需要的图像信息。 |
| typedef VkResult(VKAPI\_PTR \* [PFN\_HMS\_XEG\_CreateSpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_createspatialupscale)) (VkDevice device, const [XEG\_SpatialUpscaleCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo) \*pXegSpatialUpscaleCreateInfo, [XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale) \*pXegSpatialUpscale) | 创建[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象的函数指针定义。 |
| typedef void(VKAPI\_PTR \* [PFN\_HMS\_XEG\_CmdRenderSpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_cmdrenderspatialupscale)) (VkCommandBuffer commandBuffer, [XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale, [XEG\_SpatialUpscaleDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription) \*pXegSpatialUpscaleDescription) | 执行空域GPU超分渲染命令的函数指针定义。 |
| typedef void(VKAPI\_PTR \* [PFN\_HMS\_XEG\_DestroySpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_destroyspatialupscale)) ([XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale) | 销毁[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象的函数指针定义。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| VKAPI\_ATTR VkResult VKAPI\_CALL [HMS\_XEG\_CreateSpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createspatialupscale) (VkDevice device, const [XEG\_SpatialUpscaleCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo) \*pXegSpatialUpscaleCreateInfo, [XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale) \*pXegSpatialUpscale) | 创建[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象。 |
| VKAPI\_ATTR void VKAPI\_CALL [HMS\_XEG\_CmdRenderSpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderspatialupscale) (VkCommandBuffer commandBuffer, [XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale, [XEG\_SpatialUpscaleDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription) \*pXegSpatialUpscaleDescription) | 执行空域GPU超分渲染命令。 |
| VKAPI\_ATTR void VKAPI\_CALL [HMS\_XEG\_DestroySpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyspatialupscale) ([XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale) xegSpatialUpscale) | 销毁[XEG\_SpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale)对象。 |
