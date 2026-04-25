---
title: "OhosImageRegion"
sidebar_position: 40
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimageregion
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimageregion
---

# OhosImageRegion

```
struct OhosImageRegion {...}
```

## 概述

定义图像源解码的范围选项。是[OhosImageDecodingOps](/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops)的成员变量。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t x | 起始x坐标，用pixels表示。 |
| int32\_t y | 起始y坐标，用pixels表示。 |
| int32\_t width | 宽度范围，用pixels表示。 |
| int32\_t height | 高度范围，用pixels表示。 |
