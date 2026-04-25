---
title: "OhosImageSourceOps"
sidebar_position: 42
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourceops
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagesourceops
---

# OhosImageSourceOps

```
struct OhosImageSourceOps {...}
```

## 概述

定义图像源选项信息。此选项给[OH\_ImageSource\_CreateFromUri](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromuri)、[OH\_ImageSource\_CreateFromFd](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromfd)、[OH\_ImageSource\_CreateFromData](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromdata)和[OH\_ImageSource\_CreateIncremental](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createincremental)接口使用。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t density | 图像源像素密度。 |
| int32\_t pixelFormat | 图像源像素格式，通常用于描述YUV缓冲区。 |
| struct [OhosImageSize](/ref/image-api/image-c/image-struct/capi-image-ohosimagesize/capi-image-ohosimagesize) size | 图像源像素宽高的大小。 |
