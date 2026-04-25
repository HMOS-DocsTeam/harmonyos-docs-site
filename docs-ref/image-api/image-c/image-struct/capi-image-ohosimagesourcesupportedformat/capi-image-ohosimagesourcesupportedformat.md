---
title: "OhosImageSourceSupportedFormat"
sidebar_position: 47
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourcesupportedformat
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagesourcesupportedformat
---

# OhosImageSourceSupportedFormat

```
struct OhosImageSourceSupportedFormat {...}
```

## 概述

定义图像源支持的格式字符串。此选项给[OhosImageSourceSupportedFormatList](/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformatlist/capi-image-ohosimagesourcesupportedformatlist)和[OH\_ImageSource\_GetSupportedFormats](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_getsupportedformats)接口使用。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* format = nullptr | 图像源支持的格式字符串头地址。 |
| size\_t size = 0 | 图像源支持的格式字符串大小。 |
