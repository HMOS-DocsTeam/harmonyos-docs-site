---
title: "MediaLibrary_RequestId"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid
kit: 媒体
last_updated: "2026-04-22"
slug: capi-mediaassetmanager-medialibrary-requestid
---

# MediaLibrary\_RequestId

```
typedef struct MediaLibrary_RequestId {...} MediaLibrary_RequestId
```

## 概述

定义请求ID。

当请求媒体库资源时，会返回此类型。

请求ID可用于取消请求。

如果请求失败，值将全为零，如 "00000000-0000-0000-0000-000000000000"。

****起始版本：**** 12

****相关模块：**** [MediaAssetManager](/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager)

****所在头文件：**** [media\_asset\_base\_capi.h](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char requestId[UUID\_STR\_MAX\_LENGTH] | 请求ID。 |
