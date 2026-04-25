---
title: "OH_MediaKeySession_Callback"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-oh-mediakeysession-callback
kit: 媒体
last_updated: "2026-04-22"
slug: capi-drm-oh-mediakeysession-callback
---

# OH\_MediaKeySession\_Callback

```
typedef struct OH_MediaKeySession_Callback {...} OH_MediaKeySession_Callback
```

## 概述

OH\_MediaKeySession\_Callback结构体，用于监听密钥过期、密钥更改等事件，返回媒体密钥会话实例，适用于多个媒体密钥会话的解密场景。

****起始版本：**** 12

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

****所在头文件：**** [native\_mediakeysession.h](/ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysession-h/capi-native-mediakeysession-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_MediaKeySession\_EventCallback](/ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysession-h/capi-native-mediakeysession-h#oh_mediakeysession_eventcallback) eventCallback | 正常事件回调，如密钥过期等。 |
| [OH\_MediaKeySession\_KeyChangeCallback](/ref/drm-api/drm-c/drm-headerfile/capi-native-mediakeysession-h/capi-native-mediakeysession-h#oh_mediakeysession_keychangecallback) keyChangeCallback | 密钥更改事件的密钥更改回调。 |
