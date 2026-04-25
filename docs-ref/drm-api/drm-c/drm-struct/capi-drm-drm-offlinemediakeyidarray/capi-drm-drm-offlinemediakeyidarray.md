---
title: "DRM_OfflineMediakeyIdArray"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-offlinemediakeyidarray
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-offlinemediakeyidarray
---

# DRM\_OfflineMediakeyIdArray

```
typedef struct DRM_OfflineMediakeyIdArray {...} DRM_OfflineMediakeyIdArray
```

## 概述

离线媒体密钥ID数组。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t idsCount | ID计数。 |
| int32\_t idsLen[MAX\_OFFLINE\_MEDIA\_KEY\_ID\_COUNT] | ID长度集合。 |
| uint8\_t ids[MAX\_OFFLINE\_MEDIA\_KEY\_ID\_COUNT][MAX\_OFFLINE\_MEDIA\_KEY\_ID\_LEN] | ID数据集合。 |
