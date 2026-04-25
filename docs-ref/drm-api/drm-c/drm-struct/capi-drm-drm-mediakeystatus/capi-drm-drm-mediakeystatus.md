---
title: "DRM_MediaKeyStatus"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-mediakeystatus
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-mediakeystatus
---

# DRM\_MediaKeyStatus

```
typedef struct DRM_MediaKeyStatus {...} DRM_MediaKeyStatus
```

## 概述

媒体密钥状态。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t statusCount | 状态计数。 |
| char statusName[MAX\_MEDIA\_KEY\_STATUS\_COUNT][MAX\_MEDIA\_KEY\_STATUS\_NAME\_LEN] | 状态名数组。 |
| char statusValue[MAX\_MEDIA\_KEY\_STATUS\_COUNT][MAX\_MEDIA\_KEY\_STATUS\_VALUE\_LEN] | 状态值数组。 |
