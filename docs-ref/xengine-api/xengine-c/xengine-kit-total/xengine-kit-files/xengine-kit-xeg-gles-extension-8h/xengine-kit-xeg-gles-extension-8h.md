---
title: "xeg_gles_extension.h"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-extension-8h
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-gles-extension-8h
---

# xeg\_gles\_extension.h

## 概述

XEngine扩展特性查询接口（OpenGL ES）。

****引用文件****：&lt;xengine/xeg\_gles\_extension.h&gt;

****库：**** libxengine.so

****系统能力：**** SystemCapability.Graphic.XEngine

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

## 汇总

### 宏定义

| 名称 | 描述 |
| --- | --- |
| [XEG\_EXTENSIONS](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_extensions) 0x01U | 作为[HMS\_XEG\_GetString](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring)接口的入参，以获取XEngine支持的OpenGL ES扩展特性。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef const GLubyte \*(GL\_APIENTRYP [PFN\_HMS\_XEG\_GETSTRING](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#pfn_hms_xeg_getstring)) (GLenum name) | XEngine OpenGL ES扩展特性查询接口函数指针定义。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| const GLubyte \* [HMS\_XEG\_GetString](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring) (GLenum name) | XEngine OpenGL ES扩展特性查询接口。 |
