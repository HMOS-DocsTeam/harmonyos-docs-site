---
title: "OhosImageSourceSupportedFormatList"
sidebar_position: 48
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourcesupportedformatlist
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagesourcesupportedformatlist
---

# OhosImageSourceSupportedFormatList

```
struct OhosImageSourceSupportedFormatList {...}
```

## 概述

定义图像源支持的格式字符串列表。由[OH\_ImageSource\_GetSupportedFormats](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_getsupportedformats)获取。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| struct [OhosImageSourceSupportedFormat](/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformat/capi-image-ohosimagesourcesupportedformat)\*\* supportedFormatList = nullptr | 图像源支持的格式字符串列表头地址。 |
| size\_t size = 0 | 图像源支持的格式字符串列表大小。 |
