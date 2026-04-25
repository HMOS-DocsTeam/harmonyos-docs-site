---
title: "OH_Pixelmap_InitializationOptions"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/age-nativemodule-oh-pixelmap-initializationoptions
kit: 媒体
last_updated: "2026-04-22"
slug: age-nativemodule-oh-pixelmap-initializationoptions
---

# OH\_Pixelmap\_InitializationOptions

```
struct OH_Pixelmap_InitializationOptions
```

## 概述

OH\_Pixelmap\_InitializationOptions是native层封装的初始化参数结构体，用于设置Pixelmap的初始化参数。

创建OH\_Pixelmap\_InitializationOptions对象使用[OH\_PixelmapInitializationOptions\_Create](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_create)函数。

释放OH\_Pixelmap\_InitializationOptions对象使用[OH\_PixelmapInitializationOptions\_Release](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_release)函数。

OH\_Pixelmap\_InitializationOptions结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| uint32\_t | width | 图片宽 | [OH\_PixelmapInitializationOptions\_GetWidth](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getwidth) | 获取图片宽。 |
| uint32\_t | width | 图片宽 | [OH\_PixelmapInitializationOptions\_SetWidth](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setwidth) | 设置图片宽。 |
| uint32\_t | height | 图片高 | [OH\_PixelmapInitializationOptions\_GetHeight](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getheight) | 获取图片高。 |
| uint32\_t | height | 图片高 | [OH\_PixelmapInitializationOptions\_SetHeight](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setheight) | 设置图片高。 |
| int32\_t | pixelFormat | 像素格式 | [OH\_PixelmapInitializationOptions\_GetPixelFormat](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getpixelformat) | 获取像素格式。 |
| int32\_t | pixelFormat | 像素格式 | [OH\_PixelmapInitializationOptions\_SetPixelFormat](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setpixelformat) | 设置像素格式。 |
| int32\_t | alphaType | 透明度类型 | [OH\_PixelmapInitializationOptions\_GetAlphaType](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getalphatype) | 获取透明度类型。 |
| int32\_t | alphaType | 透明度类型 | [OH\_PixelmapInitializationOptions\_SetAlphaType](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setalphatype) | 设置透明度类型。 |

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [pixelmap\_native.h](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h)
