---
title: "HiAppEvent_AppEventInfo"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-hiappevent-appeventinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-hiappevent-hiappevent-appeventinfo
---

# HiAppEvent\_AppEventInfo

```
typedef struct HiAppEvent_AppEventInfo {...} HiAppEvent_AppEventInfo
```

## 概述

单个事件信息，包含事件领域、事件名称、事件类型和事件携带的用json格式字符串表示的自定义参数列表。

****起始版本：**** 12

****相关模块：**** [HiAppEvent](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hiappevent/capi-hiappevent)

****所在头文件：**** [hiappevent.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* domain | 事件领域。 |
| const char\* name | 事件名称。 |
| enum [EventType](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#eventtype) type | 事件类型。 |
| const char\* params | json格式字符串类型的事件参数列表。 |
