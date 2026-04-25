---
title: "media_access_helper_capi.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-access-helper-capi-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-media-access-helper-capi-h
---

# media\_access\_helper\_capi.h

## 概述

定义与相册管理模块相关的API。

提供创建相册的功能，以及访问和修改相册中的媒体数据信息的功能。

****库：**** libmedia\_asset\_manager.so

****引用文件：**** &lt;multimedia/media\_library/media\_access\_helper\_capi.h&gt;

****系统能力：**** SystemCapability.FileManagement.PhotoAccessHelper.Core

****起始版本：**** 12

****相关模块：**** [MediaAssetManager](/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [MediaLibrary\_ErrorCode OH\_MediaAccessHelper\_ApplyChanges(OH\_MediaAssetChangeRequest\* changeRequest)](#oh_mediaaccesshelper_applychanges) | 发起应用资产或相册的更改请求。 |

## 函数说明

### OH\_MediaAccessHelper\_ApplyChanges()

```
MediaLibrary_ErrorCode OH_MediaAccessHelper_ApplyChanges(OH_MediaAssetChangeRequest* changeRequest)
```

****描述****

发起应用资产或相册的更改请求。

****需要权限：**** ohos.permission.WRITE\_IMAGEVIDEO

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | 变更请求实例。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_PERMISSION\_DENIED：没有权限。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。 |
