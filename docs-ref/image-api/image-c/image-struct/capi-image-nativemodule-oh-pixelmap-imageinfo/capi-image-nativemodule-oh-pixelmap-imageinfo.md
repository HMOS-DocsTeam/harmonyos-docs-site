---
title: "OH_Pixelmap_ImageInfo"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-imageinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule-oh-pixelmap-imageinfo
---

# OH\_Pixelmap\_ImageInfo

```
struct OH_Pixelmap_ImageInfo
```

## 概述

OH\_Pixelmap\_ImageInfo是native层封装的图像像素信息结构体，保存图像像素的宽高、行跨距、像素格式、是否是HDR。

创建OH\_Pixelmap\_ImageInfo对象使用[OH\_PixelmapImageInfo\_Create](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_create)函数。

释放OH\_Pixelmap\_ImageInfo对象使用[OH\_PixelmapImageInfo\_Release](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_release)函数。

OH\_Pixelmap\_ImageInfo结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| uint32\_t | width | 图片宽 | [OH\_PixelmapImageInfo\_GetWidth](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getwidth) | 获取图片宽。 |
| uint32\_t | height | 图片高 | [OH\_PixelmapImageInfo\_GetHeight](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getheight) | 获取图片高。 |
| uint32\_t | rowStride | 行跨距 | [OH\_PixelmapImageInfo\_GetRowStride](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getrowstride) | 获取行跨距。 |
| int32\_t | pixelFormat | 像素格式 | [OH\_PixelmapImageInfo\_GetPixelFormat](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getpixelformat) | 获取像素格式。 |
| int32\_t | alphaType | 透明度类型 | [OH\_PixelmapImageInfo\_GetAlphaType](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getalphatype) | 获取透明度类型。 |
| bool | isHdr | 是否为高动态范围（HDR）的信息 | [OH\_PixelmapImageInfo\_GetDynamicRange](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapimageinfo_getdynamicrange) | 获取Pixelmap是否为高动态范围的信息。 |

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [pixelmap\_native.h](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h)
