---
title: "NativeDisplayManager_CutoutInfo"
sidebar_position: 142
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaymanager-cutoutinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativedisplaymanager-cutoutinfo
---

# NativeDisplayManager\_CutoutInfo

```
typedef struct {...} NativeDisplayManager_CutoutInfo
```

## 概述

挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。

****起始版本：**** 12

****相关模块：**** [OH\_DisplayManager](/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager)

****所在头文件：**** [oh\_display\_info.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t boundingRectsLength | 挖孔屏、刘海屏不可用屏幕区域长度。 |
| [NativeDisplayManager\_Rect](/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-rect/capi-nativedisplaymanager-rect)\* boundingRects | 挖孔屏、刘海屏等区域的边界矩形。 |
| [NativeDisplayManager\_WaterfallDisplayAreaRects](/ref/arkui-api/arkui-c/arkui-struct/api-nativedisplaymanager-waterfalldisplayarearects/api-nativedisplaymanager-waterfalldisplayarearects) waterfallDisplayAreaRects | 瀑布屏曲面部分显示区域。 |
