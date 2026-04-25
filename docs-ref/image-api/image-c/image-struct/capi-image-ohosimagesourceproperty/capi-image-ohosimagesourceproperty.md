---
title: "OhosImageSourceProperty"
sidebar_position: 49
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourceproperty
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagesourceproperty
---

# OhosImageSourceProperty

```
struct OhosImageSourceProperty {...}
```

## 概述

定义图像源属性键值字符串。此选项给[OH\_ImageSource\_GetImageProperty](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_getimageproperty)和[OH\_ImageSource\_ModifyImageProperty](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_modifyimageproperty)接口使用。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* value = nullptr | 定义图像源属性键值字符串头地址。 |
| size\_t size = 0 | 定义图像源属性键值字符串大小。 |
