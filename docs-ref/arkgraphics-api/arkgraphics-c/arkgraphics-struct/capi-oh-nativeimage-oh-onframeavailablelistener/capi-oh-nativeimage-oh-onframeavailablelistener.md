---
title: "OH_OnFrameAvailableListener"
sidebar_position: 34
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativeimage-oh-onframeavailablelistener
kit: 图形
last_updated: "2026-04-22"
slug: capi-oh-nativeimage-oh-onframeavailablelistener
---

# OH\_OnFrameAvailableListener

```
typedef struct OH_OnFrameAvailableListener {...} OH_OnFrameAvailableListener
```

## 概述

一个OH\_NativeImage的监听者，通过[OH\_NativeImage\_SetOnFrameAvailableListener](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_setonframeavailablelistener)接口注册该监听结构体，当有buffer可获取时，将触发回调给用户。

****起始版本：**** 11

****相关模块：**** [OH\_NativeImage](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativeimage/capi-oh-nativeimage)

****所在头文件：**** [native\_image.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void\* context | 用户自定义的上下文信息，会在回调触发时返回给用户。 |
| [OH\_OnFrameAvailable](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_onframeavailable) onFrameAvailable | 有buffer可获取时触发的回调函数。 |

### 成员函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*OH\_OnFrameAvailable)(void \*context)](#oh_onframeavailable) | OH\_OnFrameAvailable() | 有buffer可获取时触发的回调函数。  ****起始版本：**** 11  ****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeImage |

## 成员函数说明

### OH\_OnFrameAvailable()

```
typedef void (*OH_OnFrameAvailable)(void *context)
```

****描述****

有buffer可获取时触发的回调函数。

****系统能力：**** SystemCapability.Graphic.Graphic2D.NativeImage

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| void \*context | 用户自定义的上下文信息，会在回调触发时返回给用户。 |
