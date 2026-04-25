---
title: "DisplaySoloist_ExpectedRateRange"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ivedisplaysoloist-displaysoloist-expectedraterange
kit: 图形
last_updated: "2026-04-22"
slug: ivedisplaysoloist-displaysoloist-expectedraterange
---

# DisplaySoloist\_ExpectedRateRange

```
typedef struct {...} DisplaySoloist_ExpectedRateRange
```

## 概述

提供期望帧率范围结构体。

****起始版本：**** 12

****相关模块：**** [NativeDisplaySoloist](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativedisplaysoloist/capi-nativedisplaysoloist)

****所在头文件：**** [native\_display\_soloist.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-display-soloist-h/capi-native-display-soloist-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t min | 期望帧率范围最小值，取值范围为[0,120]。 |
| int32\_t max | 期望帧率范围最大值，取值范围为[0,120]。 |
| int32\_t expected | 期望帧率，取值范围为[0,120]。 |
