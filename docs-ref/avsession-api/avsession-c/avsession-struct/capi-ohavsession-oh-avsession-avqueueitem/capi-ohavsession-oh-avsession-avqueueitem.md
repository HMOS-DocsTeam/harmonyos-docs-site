---
title: "OH_AVSession_AVQueueItem"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avqueueitem
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohavsession-oh-avsession-avqueueitem
---

# OH\_AVSession\_AVQueueItem

```
typedef struct {...} OH_AVSession_AVQueueItem
```

## 概述

音视频队列元素的定义。

****起始版本：**** 23

****相关模块：**** [OHAVSession](/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession)

****所在头文件：**** [native\_avqueueitem.h](/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avqueueitem-h/capi-native-avqueueitem-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t itemId | 资源ID。 |
| [OH\_AVSession\_AVMediaDescription](/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-oh-avsession-avmediadescription/capi-ohavsession-oh-avsession-avmediadescription) \*description | 媒体项信息。 |
