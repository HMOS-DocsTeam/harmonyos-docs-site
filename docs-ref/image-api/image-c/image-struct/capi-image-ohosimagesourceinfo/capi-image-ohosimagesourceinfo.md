---
title: "OhosImageSourceInfo"
sidebar_position: 44
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourceinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagesourceinfo
---

# OhosImageSourceInfo

```
struct OhosImageSourceInfo {...}
```

## 概述

定义图像源信息，由[OH\_ImageSource\_GetImageInfo](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_getimageinfo)获取。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t pixelFormat | 图像源像素格式，由[OH\_ImageSource\_CreateFromUri](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromuri)、[OH\_ImageSource\_CreateFromFd](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromfd)和[OH\_ImageSource\_CreateFromData](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromdata)设置。 |
| int32\_t colorSpace | 图像源色彩空间。 |
| int32\_t alphaType | 图像源透明度类型。 |
| int32\_t density | 图像源密度，由[OH\_ImageSource\_CreateFromUri](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromuri)、[OH\_ImageSource\_CreateFromFd](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromfd)和[OH\_ImageSource\_CreateFromData](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromdata)设置。 |
| struct [OhosImageSize](/ref/image-api/image-c/image-struct/capi-image-ohosimagesize/capi-image-ohosimagesize) size | 图像源像素宽高的大小。 |
