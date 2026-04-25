---
title: "OH_ImageNative"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-imagenative
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule-oh-imagenative
---

# OH\_ImageNative

```
typedef struct OH_ImageNative OH_ImageNative
```

## 概述

为图像接口定义native层图像对象的别名。

此结构体内容不可直接操作，采用函数调用方式操作具体字段，结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| Image\_Size | imageSize | 图像大小 | [OH\_ImageNative\_GetImageSize](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_getimagesize) | 获取 OH\_ImageNative 对象的 Image\_Size 信息。 |
| uint32\_t | types | 组件类型，用于描述图像颜色分量。 | [OH\_ImageNative\_GetComponentTypes](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_getcomponenttypes) | 获取 OH\_ImageNative 对象的组件列表信息。 |
| OH\_NativeBuffer | nativeBuffer | 组件缓冲区 | [OH\_ImageNative\_GetByteBuffer](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_getbytebuffer) | 获取 OH\_ImageNative 对象中某个组件类型所对应的缓冲区。 |
| size\_t | bufferSize | 缓冲区的大小 | [OH\_ImageNative\_GetBufferSize](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_getbuffersize) | 获取 OH\_ImageNative 对象中某个组件类型所对应的缓冲区的大小。 |
| int32\_t | rowStride | 像素行宽 | [OH\_ImageNative\_GetRowStride](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_getrowstride) | 获取 OH\_ImageNative 对象中某个组件类型所对应的像素行宽。 |
| int32\_t | pixelStride | 像素大小 | [OH\_ImageNative\_GetPixelStride](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_getpixelstride) | 获取 OH\_ImageNative 对象中某个组件类型所对应的像素大小。 |

释放OH\_ImageNative对象使用[OH\_ImageNative\_Release](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h#oh_imagenative_release)函数。

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [image\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h)
