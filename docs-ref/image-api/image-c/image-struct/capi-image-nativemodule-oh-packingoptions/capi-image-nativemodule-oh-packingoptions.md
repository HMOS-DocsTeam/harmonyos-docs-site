---
title: "OH_PackingOptions"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-packingoptions
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule-oh-packingoptions
---

# OH\_PackingOptions

```
typedef struct OH_PackingOptions OH_PackingOptions
```

## 概述

OH\_PackingOptions是native层封装的图像编码选项结构体，不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

创建PackingOptions结构体的对象使用[OH\_PackingOptions\_Create](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_create)函数。

释放OH\_PackingOptions对象使用[OH\_PackingOptions\_Release](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_release)函数。

OH\_PackingOptions结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| Image\_MimeType | mimeType | MIME类型 | [OH\_PackingOptions\_GetMimeType](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_getmimetype) | 获取MIME类型。 |
| Image\_MimeType | mimeType | MIME类型 | [OH\_PackingOptions\_SetMimeType](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_setmimetype) | 设置MIME类型。 |
| uint32\_t | quality | 编码质量 | [OH\_PackingOptions\_GetQuality](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_getquality) | 获取编码质量。 |
| uint32\_t | quality | 编码质量 | [OH\_PackingOptions\_SetQuality](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_setquality) | 设置编码质量。 |
| int32\_t | desiredDynamicRange | 图片动态范围 | [OH\_PackingOptions\_GetDesiredDynamicRange](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_getdesireddynamicrange) | 获取编码时期望的图片动态范围。 |
| int32\_t | desiredDynamicRange | 图片动态范围 | [OH\_PackingOptions\_SetDesiredDynamicRange](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptions_setdesireddynamicrange) | 设置编码时期望的图片动态范围。 |

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [image\_packer\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h)
