---
title: "ArkUI_ExpectedFrameRateRange"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-nativemodule-arkui-expectedframeraterange
kit: 应用框架
last_updated: "2026-04-22"
slug: pi-arkui-nativemodule-arkui-expectedframeraterange
---

# ArkUI\_ExpectedFrameRateRange

```
typedef struct {...} ArkUI_ExpectedFrameRateRange
```

## 概述

设置动画的期望帧率。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_animate.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-animate-h/capi-native-animate-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t min | 期望的最小帧率，单位为帧/秒（fps）。 |
| uint32\_t max | 期望的最大帧率，单位为帧/秒（fps）。 |
| uint32\_t expected | 期望的最优帧率，单位为帧/秒（fps）。 |
