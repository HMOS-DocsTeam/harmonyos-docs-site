---
title: "HiTraceId"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace-hitraceid
kit: 系统
last_updated: "2026-04-22"
slug: capi-hitrace-hitraceid
---

# HiTraceId

```
typedef struct HiTraceId {...} HiTraceId
```

## 概述

HiTraceId定义。

****起始版本：**** 12

****相关模块：**** [HiTrace](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hitrace/capi-hitrace)

****所在头文件：**** [trace.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h)

## 汇总

### 成员变量

如果字节序为小端模式，结构体顺序如下表所示：

| 字段 | 字段bit数 | 描述 |
| --- | --- | --- |
| uint64\_t valid | 1 | HiTraceId是否有效。 |
| uint64\_t ver | 3 | HiTraceId的版本号。 |
| uint64\_t chainId | 60 | HiTraceId的跟踪链标识。 |
| uint64\_t flags | 12 | HiTraceId的跟踪标志位。 |
| uint64\_t spanId | 26 | HiTraceId的分支标识。 |
| uint64\_t parentSpanId | 26 | HiTraceId的父分支标识。 |

如果字节序为大端模式，结构体顺序如下表所示：

| 字段 | 字段bit数 | 描述 |
| --- | --- | --- |
| uint64\_t chainId | 60 | HiTraceId的跟踪链标识。 |
| uint64\_t ver | 3 | HiTraceId的版本号。 |
| uint64\_t valid | 1 | HiTraceId是否有效。 |
| uint64\_t parentSpanId | 26 | HiTraceId的父分支标识。 |
| uint64\_t spanId | 26 | HiTraceId的分支标识。 |
| uint64\_t flags | 12 | HiTraceId的跟踪标志位。 |
