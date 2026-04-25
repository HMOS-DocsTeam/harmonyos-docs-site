---
title: "OhosImageDecodingOps"
sidebar_position: 43
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagedecodingops
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagedecodingops
---

# OhosImageDecodingOps

```
struct OhosImageDecodingOps {...}
```

## 概述

定义图像源解码选项。此选项给[OH\_ImageSource\_CreatePixelMap](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createpixelmap)和[OH\_ImageSource\_CreatePixelMapList](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createpixelmaplist)接口使用。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int8\_t editable | 定义输出的像素位图是否可编辑。 |
| int32\_t pixelFormat | 定义输出的像素格式。 |
| int32\_t fitDensity | 定义解码目标的像素密度。 |
| uint32\_t index | 定义ImageSource解码索引。 |
| uint32\_t sampleSize | 定义解码样本大小选项。 |
| uint32\_t rotate | 定义解码旋转选项。 |
| struct [OhosImageSize](/ref/image-api/image-c/image-struct/capi-image-ohosimagesize/capi-image-ohosimagesize) size | 定义解码目标像素宽高的大小。 |
| struct [OhosImageRegion](/ref/image-api/image-c/image-struct/capi-image-ohosimageregion/capi-image-ohosimageregion) region | 定义ImageSource解码的像素范围。 |
