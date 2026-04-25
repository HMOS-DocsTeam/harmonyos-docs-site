---
title: "xeg_gles_spatial_upscale.h"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-spatial-upscale-8h
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-gles-spatial-upscale-8h
---

# xeg\_gles\_spatial\_upscale.h

## 概述

XEngine空域GPU超分特性OpenGL ES接口。使用此头文件的接口前需要通过[HMS\_XEG\_GetString](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring)接口查询[XEG\_SPATIAL\_UPSCALE\_EXTENSION\_NAME](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatial_upscale_extension_name)扩展可用。

****引用文件****：&lt;xengine/xeg\_gles\_spatial\_upscale.h&gt;

****库：**** libxengine.so

****系统能力：**** SystemCapability.Graphic.XEngine

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

## 汇总

### 宏定义

| 名称 | 描述 |
| --- | --- |
| [XEG\_SPATIAL\_UPSCALE\_SCISSOR](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatial_upscale_scissor) 0x1U | 用于设置[HMS\_XEG\_SpatialUpscaleParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_spatialupscaleparameter)接口的SCISSOR参数。 |
| [XEG\_SPATIAL\_UPSCALE\_SHARPNESS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatial_upscale_sharpness) 0x2U | 用于设置[HMS\_XEG\_SpatialUpscaleParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_spatialupscaleparameter)接口的SHARPNESS参数。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(GL\_APIENTRYP [PFN\_HMS\_XEG\_SPATIALUPSCALEPARAMETER](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_spatialupscaleparameter)) (GLenum pname, GLvoid \*param) | 设置空域GPU超分输入参数的函数指针定义。 |
| typedef void(GL\_APIENTRYP [PFN\_HMS\_XEG\_RENDERSPATIALUPSCALE](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_renderspatialupscale)) (GLuint inputTexture) | 执行空域GPU超分渲染命令的函数指针定义。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| GL\_APICALL void GL\_APIENTRY [HMS\_XEG\_SpatialUpscaleParameter](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_spatialupscaleparameter) (GLenum pname, GLvoid \*param) | 设置空域GPU超分输入参数。 |
| GL\_APICALL void GL\_APIENTRY [HMS\_XEG\_RenderSpatialUpscale](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_renderspatialupscale) (GLuint inputTexture) | 执行空域GPU超分渲染命令。 |
