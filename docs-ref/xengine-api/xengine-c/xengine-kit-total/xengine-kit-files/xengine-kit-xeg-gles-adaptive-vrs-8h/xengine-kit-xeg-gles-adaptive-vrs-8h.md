---
title: "xeg_gles_adaptive_vrs.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-adaptive-vrs-8h
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-gles-adaptive-vrs-8h
---

# xeg\_gles\_adaptive\_vrs.h

## 概述

XEngine VRS特性接口。使用此头文件的接口前需要通过[HMS\_XEG\_GetString](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring)接口查询[XEG\_ADAPTIVE\_VRS\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_extension_name)扩展可用。

****引用文件****：&lt;xengine/xeg\_gles\_adaptive\_vrs.h&gt;

****库：**** libxengine.so

****系统能力：**** SystemCapability.Graphic.XEngine

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

## 汇总

### 宏定义

| 名称 | 描述 |
| --- | --- |
| [XEG\_ADAPTIVE\_VRS\_INPUT\_SIZE](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_input_size) 0x1U | 用于设置[HMS\_XEG\_AdaptiveVRSParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter)接口的INPUT\_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。 |
| [XEG\_ADAPTIVE\_VRS\_INPUT\_REGION](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_input_region) 0x2U | 用于设置[HMS\_XEG\_AdaptiveVRSParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter)接口的INPUT\_REGION参数，表示上一帧渲染管线最终渲染的图像区域。 |
| [XEG\_ADAPTIVE\_VRS\_TEXEL\_SIZE](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_texel_size) 0x3U | 用于设置[HMS\_XEG\_AdaptiveVRSParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter)接口的TEXEL\_SIZE参数。 |
| [XEG\_ADAPTIVE\_VRS\_ERROR\_SENSITIVITY](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_error_sensitivity) 0x4U | 用于设置[HMS\_XEG\_AdaptiveVRSParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter)接口的ERROR\_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0, 1]。 |
| [XEG\_ADAPTIVE\_VRS\_FLIP](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_adaptive_vrs_flip) 0x5U | 用于设置[HMS\_XEG\_AdaptiveVRSParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter)接口的FLIP参数，该参数用于控制是否执行图像上下翻转。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(GL\_APIENTRYP [PFN\_HMS\_XEG\_ADAPTIVEVRSPARAMETER](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_adaptivevrsparameter)) (GLenum pname, GLvoid \*param) | 设置自适应VRS输入参数的函数指针定义。 |
| typedef void(GL\_APIENTRYP [PFN\_HMS\_XEG\_DISPATCHADAPTIVEVRS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_dispatchadaptivevrs)) (GLfloat \*reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage) | 计算着色率图像的函数指针定义。 |
| typedef void(GL\_APIENTRYP [PFN\_HMS\_XEG\_APPLYADAPTIVEVRS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_applyadaptivevrs)) (GLuint shadingRateImage) | 将着色率图像应用到渲染目标中的函数指针定义。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| GL\_APICALL void GL\_APIENTRY [HMS\_XEG\_AdaptiveVRSParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_adaptivevrsparameter) (GLenum pname, GLvoid \*param) | 设置自适应VRS的参数。 |
| GL\_APICALL void GL\_APIENTRY [HMS\_XEG\_DispatchAdaptiveVRS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_dispatchadaptivevrs) (GLfloat \*reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage) | 计算着色率图像。 |
| GL\_APICALL void GL\_APIENTRY [HMS\_XEG\_ApplyAdaptiveVRS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_applyadaptivevrs) (GLuint shadingRateImage) | 将着色率图像应用到渲染目标中。 |
