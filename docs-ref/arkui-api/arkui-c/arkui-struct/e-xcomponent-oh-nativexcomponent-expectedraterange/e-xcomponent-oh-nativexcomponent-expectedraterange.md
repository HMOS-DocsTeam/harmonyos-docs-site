---
title: "OH_NativeXComponent_ExpectedRateRange"
sidebar_position: 58
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/e-xcomponent-oh-nativexcomponent-expectedraterange
kit: 应用框架
last_updated: "2026-04-22"
slug: e-xcomponent-oh-nativexcomponent-expectedraterange
---

# OH\_NativeXComponent\_ExpectedRateRange

```
typedef struct {...} OH_NativeXComponent_ExpectedRateRange
```

## 概述

定义期望帧率范围。

****起始版本：**** 11

****相关模块：**** [OH\_NativeXComponent Native XComponent](/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent)

****所在头文件：**** [native\_interface\_xcomponent.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t min | 期望帧率范围最小值。单位为帧/秒。 |
| int32\_t max | 期望帧率范围最大值。单位为帧/秒。 |
| int32\_t expected | 期望帧率。单位为帧/秒。 |
