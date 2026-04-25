---
title: "DRM_Statistics"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-statistics
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-statistics
---

# DRM\_Statistics

```
typedef struct DRM_Statistics {...} DRM_Statistics
```

## 概述

MediaKeySystem的度量信息。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t statisticsCount | 度量计数。 |
| char statisticsName[MAX\_STATISTICS\_COUNT][MAX\_STATISTICS\_NAME\_LEN] | 度量信息名称集合。 |
| char statisticsDescription[MAX\_STATISTICS\_COUNT][MAX\_STATISTICS\_BUFFER\_LEN] | 度量信息描述集合。 |
