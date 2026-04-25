---
title: "AVSession_PlaybackPosition"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-avsession-playbackposition
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohavsession-avsession-playbackposition
---

# AVSession\_PlaybackPosition

```
typedef struct AVSession_PlaybackPosition {...} AVSession_PlaybackPosition
```

## 概述

媒体播放位置的相关属性。

****起始版本：**** 13

****相关模块：**** [OHAVSession](/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession)

****所在头文件：**** [native\_avplaybackstate.h](/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avplaybackstate-h/capi-native-avplaybackstate-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int64\_t elapsedTime | 已用时间，单位毫秒（ms）。 |
| int64\_t updateTime | 更新时间，单位毫秒（ms）。 |
