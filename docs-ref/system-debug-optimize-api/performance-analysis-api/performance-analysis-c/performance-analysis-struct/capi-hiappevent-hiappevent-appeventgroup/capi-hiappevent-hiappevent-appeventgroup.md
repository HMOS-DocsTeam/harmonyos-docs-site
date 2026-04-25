---
title: "HiAppEvent_AppEventGroup"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-hiappevent-appeventgroup
kit: 系统
last_updated: "2026-04-22"
slug: capi-hiappevent-hiappevent-appeventgroup
---

# HiAppEvent\_AppEventGroup

```
typedef struct HiAppEvent_AppEventGroup {...} HiAppEvent_AppEventGroup
```

## 概述

一组事件信息，包含事件组的名称，按名称分组的单个事件信息数组，事件数组的长度。

****起始版本：**** 12

****相关模块：**** [HiAppEvent](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hiappevent/capi-hiappevent)

****所在头文件：**** [hiappevent.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* name | 事件数组中相同的事件名称。 |
| const struct HiAppEvent\_AppEventInfo\* appEventInfos | 具有相同事件名称的事件数组。 |
| uint32\_t infoLen | 具有相同事件名称的事件数组的长度。 |
