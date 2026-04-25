---
title: "NativeDisplayManager_DisplayColorSpace"
sidebar_position: 144
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaymanager-displaycolorspace
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativedisplaymanager-displaycolorspace
---

# NativeDisplayManager\_DisplayColorSpace

```
typedef struct {...} NativeDisplayManager_DisplayColorSpace
```

## 概述

显示设备支持的所有色域类型。

****起始版本：**** 14

****相关模块：**** [OH\_DisplayManager](/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager)

****所在头文件：**** [oh\_display\_info.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t colorSpaceLength | 显示设备的色域长度。 |
| uint32\_t\* colorSpaces | 显示设备的色域数据。 |
