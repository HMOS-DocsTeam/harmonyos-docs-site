---
title: "DRM_MediaKeySystemDescription"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-mediakeysystemdescription
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-mediakeysystemdescription
---

# DRM\_MediaKeySystemDescription

```
typedef struct DRM_MediaKeySystemDescription {...} DRM_MediaKeySystemDescription
```

## 概述

DRM解决方案名称及其UUID的列表。

****起始版本：**** 12

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char name[MAX\_MEDIA\_KEY\_SYSTEM\_NAME\_LEN] | DRM插件的名称。 |
| uint8\_t uuid[DRM\_UUID\_LEN] | UUID。 |
