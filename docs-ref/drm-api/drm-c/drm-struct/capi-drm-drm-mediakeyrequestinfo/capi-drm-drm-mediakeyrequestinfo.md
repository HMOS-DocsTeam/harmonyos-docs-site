---
title: "DRM_MediaKeyRequestInfo"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-mediakeyrequestinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-drm-mediakeyrequestinfo
---

# DRM\_MediaKeyRequestInfo

```
typedef struct DRM_MediaKeyRequestInfo {...} DRM_MediaKeyRequestInfo
```

## 概述

媒体密钥请求信息。

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_drm\_common.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [DRM\_MediaKeyType](/ref/drm-api/drm-c/drm-headerfile/capi-native-drm-common-h/capi-native-drm-common-h#drm_mediakeytype) type | 密钥类型。 |
| int32\_t initDataLen | 初始数据长度。 |
| uint8\_t initData[MAX\_INIT\_DATA\_LEN] | base64解码后格式为PSSH的初始数据。 |
| char mimeType[MAX\_MIMETYPE\_LEN] | 媒体上下文的MIME类型。 |
| uint32\_t optionsCount | 选项数据计数。 |
| char optionName[MAX\_MEDIA\_KEY\_REQUEST\_OPTION\_COUNT][MAX\_MEDIA\_KEY\_REQUEST\_OPTION\_NAME\_LEN] | 选项名称集合。 |
| char optionData[MAX\_MEDIA\_KEY\_REQUEST\_OPTION\_COUNT][MAX\_MEDIA\_KEY\_REQUEST\_OPTION\_DATA\_LEN] | 选项数据集合。 |
