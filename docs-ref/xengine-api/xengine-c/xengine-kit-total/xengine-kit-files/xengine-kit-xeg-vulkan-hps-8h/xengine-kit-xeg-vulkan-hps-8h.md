---
title: "xeg_vulkan_hps.h"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-hps-8h
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-vulkan-hps-8h
---

# xeg\_vulkan\_hps.h

## 概述

XEngine 高性能着色器接口。使用此头文件中的接口前需要通过[HMS\_XEG\_EnumerateDeviceExtensionProperties](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展可用。

****引用文件****：&lt;xengine/xeg\_vulkan\_hps.h&gt;

****库：**** libxengine.so

****系统能力：**** SystemCapability.Graphic.XEngine

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

## 汇总

### 结构体

| 名称 | 描述 |
| --- | --- |
| struct [XEG\_HPSCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo) | 此结构体描述创建[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象的信息。 |
| struct [XEG\_HPSRadixSort](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort) | 此结构体描述HPS基数排序扩展结构信息。 |
| struct [XEG\_HPSRadixSortDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription) | 此结构体描述使用[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展进行排序时所需的信息。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| VK\_DEFINE\_HANDLE([XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)) | [XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)的句柄。 |
| typedef struct [XEG\_HPSCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo) [XEG\_HPSCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hpscreateinfo) | 此结构体描述创建[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象的信息。 |
| typedef struct [XEG\_HPSRadixSort](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort) [XEG\_HPSRadixSort](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hpsradixsort) | 此结构体描述HPS基数排序扩展结构信息。 |
| typedef struct [XEG\_HPSRadixSortDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription) [XEG\_HPSRadixSortDescription](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hpsradixsortdescription) | 此结构体描述使用[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展进行排序时所需的信息。 |
| typedef VkResult(VKAPI\_PTR \* [PFN\_HMS\_XEG\_CreateHPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_createhps)) (VkDevice device, const [XEG\_HPSCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo) \*pCreateInfo, [XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps) \*pHps) | 创建[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象的函数指针定义。 |
| typedef void(VKAPI\_PTR \* [PFN\_HMS\_XEG\_DestroyHPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_destroyhps)) ([XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps) hps) | 销毁[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象的函数指针定义。 |
| typedef VkResult(VKAPI\_PTR \* [PFN\_HMS\_XEG\_CmdRadixSortHPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_cmdradixsorthps)) (VkCommandBuffer commandBuffer, [XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps) hps, const [XEG\_HPSRadixSortDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription) \*pDescription) | 录制HPS排序命令的函数指针定义，使用此接口前需要通过[HMS\_XEG\_EnumerateDeviceExtensionProperties](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询是否支持[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| VKAPI\_ATTR VkResult VKAPI\_CALL [HMS\_XEG\_CreateHPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_createhps) (VkDevice device, const [XEG\_HPSCreateInfo](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo) \*pCreateInfo, [XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps) \*pHps) | 创建[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象。 |
| VKAPI\_ATTR void VKAPI\_CALL [HMS\_XEG\_DestroyHPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_destroyhps) ([XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps) hps) | 销毁[XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps)对象。 |
| VKAPI\_ATTR VkResult VKAPI\_CALL [HMS\_XEG\_CmdRadixSortHPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_cmdradixsorthps) (VkCommandBuffer commandBuffer, [XEG\_HPS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps) hps, const [XEG\_HPSRadixSortDescription](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription) \*pDescription) | 录制HPS排序命令，使用此接口前需要通过[HMS\_XEG\_EnumerateDeviceExtensionProperties](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询是否支持[XEG\_HPS\_RADIX\_SORT\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_hps_radix_sort_extension_name)扩展。 |
