---
title: "DRM_PsshInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-psshinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-psshinfo
---

# DRM\_PsshInfo

```
typedef struct DRM_PsshInfo {...} DRM_PsshInfo
```

## 概述

DRM内容保护系统专用头（Protection System Specific Header）信息。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t uuid[DRM\_UUID\_LEN] | UUID的PSSH信息。 |
| int32\_t dataLen | PSSH数据长度。 |
| uint8\_t data[MAX\_PSSH\_DATA\_LEN] | PSSH数据。 |
