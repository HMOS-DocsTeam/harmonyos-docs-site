---
title: "NativeDisplayManager_DisplaysInfo"
sidebar_position: 146
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaymanager-displaysinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativedisplaymanager-displaysinfo
---

# NativeDisplayManager\_DisplaysInfo

```
typedef struct {...} NativeDisplayManager_DisplaysInfo
```

## 概述

多显示设备的Display对象。

****起始版本：**** 14

****相关模块：**** [OH\_DisplayManager](/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager)

****所在头文件：**** [oh\_display\_info.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t displaysLength | 多显示设备Display对象的长度。 |
| [NativeDisplayManager\_DisplayInfo](/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo)\* displaysInfo | 多显示设备Display对象的属性。 |
