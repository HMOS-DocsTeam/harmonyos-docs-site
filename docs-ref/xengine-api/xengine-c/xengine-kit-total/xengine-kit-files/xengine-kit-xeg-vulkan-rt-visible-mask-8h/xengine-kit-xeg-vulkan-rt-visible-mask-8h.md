---
title: "xeg_vulkan_rt_visible_mask.h"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-visible-mask-8h
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-vulkan-rt-visible-mask-8h
---

# xeg\_vulkan\_rt\_visible\_mask.h

## 概述

XEngine RT VisibleMask特性接口。使用此头文件中的接口前需要通过[HMS\_XEG\_EnumerateDeviceExtensionProperties](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG\_RT\_SHADOW\_AO\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rt_shadow_ao_extension_name)扩展可用。

****引用文件****：&lt;xengine/xeg\_vulkan\_rt\_visible\_mask.h&gt;

****库：**** libxengine.so

****系统能力：**** SystemCapability.Graphic.XEngine

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

## 汇总

### 结构体

| 名称 | 描述 |
| --- | --- |
| struct [XEG\_RTShadowAOCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo) | 此结构体描述创建支持光线追踪阴影和环境光遮蔽效果[XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)实例的初始化信息。当结构体中的信息变化时，需要创建新的[XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)对象。 |
| struct [XEG\_RTShadowParameters](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters) | 光线追踪阴影（Shadow）算法参数。 |
| struct [XEG\_RTAOParameters](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtaoparameters/xengine-kit-xeg-rtaoparameters) | 光线追踪环境光遮蔽（AO）算法参数。 |
| struct [XEG\_RTShadowAODenoiserParameters](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters) | 光线追踪阴影和环境光遮蔽算法去噪参数。 |
| struct [XEG\_RTShadowAODescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription) | 此结构体描述光线追踪阴影和环境光遮蔽算法渲染命令的输入信息。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| VK\_DEFINE\_HANDLE([XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)) | [XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。 |
| typedef enum [XEG\_DenoiseQualityMode](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_denoisequalitymode) XEG\_DenoiseQualityMode | 去噪质量模式枚举。 |
| typedef enum [XEG\_TraversalMode](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_traversalmode) XEG\_TraversalMode | 遍历模式枚举。 |
| typedef VkResult(VKAPI\_PTR \* [PFN\_HMS\_XEG\_CreateRTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_creatertvisiblemask)) (VkDevice device, const void \*pCreateInfo, [XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask) \*pRTVisibleMask) | 创建[XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)对象的函数指针定义。 |
| typedef VkResult(VKAPI\_PTR \* [PFN\_HMS\_XEG\_CmdRenderRTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_cmdrenderrtvisiblemask)) (VkCommandBuffer commandBuffer, [XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask, const void \*pDescription) | 录制光线追踪VisibleMask渲染命令的函数指针定义。 |
| typedef void(VKAPI\_PTR \* [PFN\_HMS\_XEG\_DestroyRTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_destroyrtvisiblemask)) ([XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask) | 销毁[XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)对象的函数指针定义。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [XEG\_DenoiseQualityMode](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_denoisequalitymode) { XEG\_DENOISE\_QUALITY\_MODE\_NONE = 0, XEG\_DENOISE\_QUALITY\_MODE\_QUALITY = 1, XEG\_DENOISE\_QUALITY\_MODE\_BALANCED = 2, XEG\_DENOISE\_QUALITY\_MODE\_PERFORMANCES = 3 } | 去噪质量模式枚举。 |
| [XEG\_TraversalMode](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_traversalmode) { XEG\_TRAVERSAL\_MODE\_DEFAULT = 0, XEG\_TRAVERSAL\_MODE\_PERFORMANCES = 1 } | 遍历模式枚举。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| VKAPI\_ATTR VkResult VKAPI\_CALL [HMS\_XEG\_CreateRTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_creatertvisiblemask) (VkDevice device, const void \*pCreateInfo, [XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask) \*pRTVisibleMask) | 创建[XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)对象。 |
| VKAPI\_ATTR VkResult VKAPI\_CALL [HMS\_XEG\_CmdRenderRTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdrenderrtvisiblemask) (VkCommandBuffer commandBuffer, [XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask, const void \*pDescription) | 录制光线追踪VisibleMask渲染命令。 |
| VKAPI\_ATTR void VKAPI\_CALL [HMS\_XEG\_DestroyRTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyrtvisiblemask) ([XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask) rtVisibleMask) | 销毁[XEG\_RTVisibleMask](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask)对象。 |
