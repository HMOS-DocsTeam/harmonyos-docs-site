---
title: "HiCollie_SetTimerParam"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-hicollie-settimerparam
kit: 系统
last_updated: "2026-04-22"
slug: capi-hicollie-hicollie-settimerparam
---

# HiCollie\_SetTimerParam

```
typedef struct HiCollie_SetTimerParam {...} HiCollie_SetTimerParam
```

## 概述

定义OH\_HiCollie\_SetTimer函数的输入参数。

****起始版本：**** 18

****相关模块：**** [HiCollie](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hicollie/capi-hicollie)

****所在头文件：**** [hicollie.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hicollie-h/capi-hicollie-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \*name | timer任务名称。 |
| unsigned int timeout | 任务超时时间阈值，单位：s。 |
| [OH\_HiCollie\_Callback](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hicollie-h/capi-hicollie-h#oh_hicollie_callback) func | 超时发生时执行的回调函数。 |
| void \*arg | 回调函数的参数。 |
| [HiCollie\_Flag](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hicollie-h/capi-hicollie-h#hicollie_flag) flag | 超时发生时执行的动作，参考[HiCollie\_Flag](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hicollie-h/capi-hicollie-h#hicollie_flag)。 |
