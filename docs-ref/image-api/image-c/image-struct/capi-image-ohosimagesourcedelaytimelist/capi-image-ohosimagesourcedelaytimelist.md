---
title: "OhosImageSourceDelayTimeList"
sidebar_position: 46
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourcedelaytimelist
kit: 媒体
last_updated: "2026-04-22"
slug: capi-image-ohosimagesourcedelaytimelist
---

# OhosImageSourceDelayTimeList

```
struct OhosImageSourceDelayTimeList {...}
```

## 概述

定义图像源延迟时间列表。由[OH\_ImageSource\_GetDelayTime](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_getdelaytime)获取。

****起始版本：**** 10

****相关模块：**** [Image](/ref/image-api/image-c/image-module/capi-image/capi-image)

****所在头文件：**** [image\_source\_mdk.h](/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t\* delayTimeList | 图像源延迟时间列表头地址。 |
| size\_t size = 0 | 图像源延迟时间列表大小。 |
