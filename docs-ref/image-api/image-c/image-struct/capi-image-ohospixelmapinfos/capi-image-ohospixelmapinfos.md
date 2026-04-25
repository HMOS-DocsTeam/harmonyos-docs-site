---
title: "OhosPixelMapInfos"
sidebar_position: 34
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohospixelmapinfos
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohospixelmapinfos
---

# OhosPixelMapInfos

```
typedef struct OhosPixelMapInfos {...} OhosPixelMapInfos
```

## 概述

用于定义PixelMap的相关信息。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_pixel\_map\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h/capi-image-pixel-map-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t width | 图片的宽，用pixels表示。 |
| uint32\_t height | 图片的高，用pixels表示。 |
| uint32\_t rowSize | 图片在内存中，每行所占的字节数。  DMA内存为图片的宽 \* 每个像素字节数 + 每行末尾填充字节数；其他内存为图片的宽 \* 每个像素字节数。 |
| int32\_t pixelFormat | Pixel的格式。 |
