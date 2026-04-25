---
title: "OH_NativeVSync_ExpectedRateRange"
sidebar_position: 35
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativevsync-oh-nativevsync-expectedraterange
kit: 图形
last_updated: "2026-04-22"
slug: capi-nativevsync-oh-nativevsync-expectedraterange
---

# OH\_NativeVSync\_ExpectedRateRange

```
typedef struct {...} OH_NativeVSync_ExpectedRateRange
```

## 概述

期望帧率范围结构体。

****起始版本：**** 20

****相关模块：**** [NativeVsync](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativevsync/capi-nativevsync)

****所在头文件：**** [native\_vsync.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t min | 帧率范围的最小帧率。 |
| int32\_t max | 帧率范围的最大帧率。 |
| int32\_t expected | 帧率范围的期望帧率。 |
