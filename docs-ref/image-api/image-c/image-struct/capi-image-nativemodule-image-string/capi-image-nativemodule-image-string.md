---
title: "Image_String"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-image-string
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-nativemodule-image-string
---

# Image\_String

```
struct Image_String {...}
typedef struct Image_String Image_MimeType
typedef struct Image_String Image_String
```

## 概述

字符串结构。

****起始版本：**** 12

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [image\_common.h](/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*data = nullptr | 字符类型数据。 |
| size\_t size = 0 | 数据长度。 |
