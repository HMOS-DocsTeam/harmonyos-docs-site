---
title: "NativeDisplayManager_DisplayHdrFormat"
sidebar_position: 143
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaymanager-displayhdrformat
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativedisplaymanager-displayhdrformat
---

# NativeDisplayManager\_DisplayHdrFormat

```
typedef struct {...} NativeDisplayManager_DisplayHdrFormat
```

## 概述

显示设备支持的所有HDR格式。

****起始版本：**** 14

****相关模块：**** [OH\_DisplayManager](/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager)

****所在头文件：**** [oh\_display\_info.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t hdrFormatLength | 显示设备的HDR格式长度。 |
| uint32\_t\* hdrFormats | 显示设备的HDR格式数据。 |
