---
title: "OH_ImagePackerNative"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-imagepackernative
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule-oh-imagepackernative
---

# OH\_ImagePackerNative

```
typedef struct OH_ImagePackerNative OH_ImagePackerNative
```

## 概述

ImagePacker结构体类型，用于执行ImagePacker相关操作。

此结构体内容不可直接操作，采用函数调用方式操作具体字段，结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| OH\_ImageSourceNative | imageSource | 图片源 | [OH\_ImagePackerNative\_PackToDataFromImageSource](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtodatafromimagesource) | 将ImageSource编码为指定格式的数据。 |
| OH\_PixelmapNative | pixelmap | native层的pixelmap | [OH\_ImagePackerNative\_PackToDataFromPixelmap](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtodatafrompixelmap) | 将Pixelmap编码为指定格式的数据。 |
| int32\_t | imagesourceFd | ImageSource关联的文件描述符 | [OH\_ImagePackerNative\_PackToFileFromImageSource](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtofilefromimagesource) | 将一个ImageSource编码到文件中。 |
| int32\_t | pixelmapFd | pixelmap关联的文件描述符 | [OH\_ImagePackerNative\_PackToFileFromPixelmap](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtofilefrompixelmap) | 将一个Pixelmap编码到文件中。 |

创建OH\_ImagePackerNative对象使用[OH\_ImagePackerNative\_Create](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_create)函数。

释放OH\_ImagePackerNative对象使用[OH\_ImagePackerNative\_Release](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_release)函数。

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [image\_packer\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h)
