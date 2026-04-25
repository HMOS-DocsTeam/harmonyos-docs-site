---
title: "Image_NativeModule"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule
---

# Image\_NativeModule

## 概述

提供图片处理的相关能力，包括图片编解码、从Native层获取图片数据等。

使用该模块的接口，无需通过JS接口导入，可直接使用NDK完成功能开发。

开发者可根据实际的开发需求，参考对应的开发指南及样例：

- [使用Image\_NativeModule完成图片解码](/image-kit/image-native/image-decoding-c/image-source-c)
- [使用Image\_NativeModule完成多图对象解码](/image-kit/image-native/image-decoding-c/image-source-picture-c)
- [使用Image\_NativeModule完成图片接收](/image-kit/image-native/image-receiving-c/image-receiver-c)
- [使用Image\_NativeModule完成位图操作](/image-kit/image-native/image-editing-c/pixelmap-c)
- [使用Image\_NativeModule完成图片编码](/image-kit/image-native/image-encoding-c/image-packer-c)
- [使用Image\_NativeModule完成多图对象编码](/image-kit/image-native/image-encoding-c/image-packer-picture-c)

****起始版本：**** 12

## 文件汇总

| 名称 | 描述 |
| --- | --- |
| [image\_common.h](/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h) | 声明图像接口使用的公共枚举和结构体。 |
| [image\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h) | 声明图像的剪裁矩形、大小和组件数据的接口函数。 |
| [image\_packer\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h) | 图片编码API。 |
| [image\_receiver\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-receiver-native-h/capi-image-receiver-native-h) | 声明从native层获取图片数据的方法。 |
| [image\_source\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h) | 图片解码API。 |
| [picture\_native.h](/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h) | 提供获取picture数据和信息的API。 |
| [pixelmap\_native.h](/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h) | 访问Pixelmap的API。 |
