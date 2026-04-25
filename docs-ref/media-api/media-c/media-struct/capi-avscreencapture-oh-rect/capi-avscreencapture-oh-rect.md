---
title: "OH_Rect"
sidebar_position: 26
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-rect
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-rect
---

# OH\_Rect

```
typedef struct OH_Rect {...} OH_Rect
```

## 概述

定义录屏界面的宽高以及画面信息。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t x | 录屏界面的X坐标。 |
| int32\_t y | 录屏界面的Y坐标。 |
| int32\_t width | 录屏界面的宽度，单位px。 |
| int32\_t height | 录屏界面的高度，单位px。 |
