---
title: "DRM_KeysInfo"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-keysinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-keysinfo
---

# DRM\_KeysInfo

```
typedef struct DRM_KeysInfo {...} DRM_KeysInfo
```

## 概述

媒体密钥信息。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t keysInfoCount | 密钥计数。 |
| uint8\_t keyId[MAX\_KEY\_INFO\_COUNT][MAX\_KEY\_ID\_LEN] | 密钥ID集合。 |
| char statusValue[MAX\_KEY\_INFO\_COUNT][MAX\_KEY\_STATUS\_VALUE\_LEN] | 密钥状态值。 |
