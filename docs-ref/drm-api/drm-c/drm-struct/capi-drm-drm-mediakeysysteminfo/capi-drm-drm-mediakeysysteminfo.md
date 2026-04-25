---
title: "DRM_MediaKeySystemInfo"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-mediakeysysteminfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-mediakeysysteminfo
---

# DRM\_MediaKeySystemInfo

```
typedef struct DRM_MediaKeySystemInfo {...} DRM_MediaKeySystemInfo
```

## 概述

加密媒体内容的DRM信息。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t psshCount | PSSH计数。 |
| [DRM\_PsshInfo](/ref/drm-api/drm-c/drm-struct/capi-drm-drm-psshinfo/capi-drm-drm-psshinfo) psshInfo[MAX\_PSSH\_INFO\_COUNT] | PSSH信息。 |
