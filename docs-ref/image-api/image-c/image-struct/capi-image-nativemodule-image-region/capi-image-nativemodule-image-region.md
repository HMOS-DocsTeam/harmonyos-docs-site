---
title: "Image_Region"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-image-region
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule-image-region
---

# Image\_Region

```
struct Image_Region {...}
```

## 概述

待解码的图像源区域结构体。

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [image\_common.h](/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t x | 区域横坐标，不能大于原图的宽度。 |
| uint32\_t y | 区域纵坐标，不能大于原图的高度。 |
| uint32\_t width | 输出图片的宽，单位：像素。 |
| uint32\_t height | 输出图片的高，单位：像素。 |
