---
title: "HiDebug_ThreadCpuUsage"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-threadcpuusage
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-threadcpuusage
---

# HiDebug\_ThreadCpuUsage

```
typedef struct HiDebug_ThreadCpuUsage {...} HiDebug_ThreadCpuUsage
```

## 概述

应用程序所有线程的CPU使用率结构体定义。

****起始版本：**** 12

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t threadId | 线程ID。 |
| double cpuUsage | 线程CPU使用率百分比。 |
| struct [HiDebug\_ThreadCpuUsage](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-threadcpuusage/capi-hidebug-hidebug-threadcpuusage) \*next | 下一个线程的使用率信息。 |
