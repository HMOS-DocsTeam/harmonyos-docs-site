---
title: "DRM_MediaKeyRequest"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-mediakeyrequest
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-mediakeyrequest
---

# DRM\_MediaKeyRequest

```
typedef struct DRM_MediaKeyRequest {...} DRM_MediaKeyRequest
```

## 概述

媒体密钥请求。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [DRM\_MediaKeyRequestType](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_mediakeyrequesttype) type | 媒体密钥请求类型。 |
| int32\_t dataLen | 媒体密钥请求数据长度。 |
| uint8\_t data[MAX\_MEDIA\_KEY\_REQUEST\_DATA\_LEN] | 发送到媒体密钥服务器的媒体密钥请求数据。 |
| char defaultUrl[MAX\_DEFAULT\_URL\_LEN] | 媒体密钥服务器URL。 |
