---
title: "media_asset_change_request_capi.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-change-request-capi-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-media-asset-change-request-capi-h
---

# media\_asset\_change\_request\_capi.h

## 概述

定义与媒体资产更改请求相关的API。提供更改资产的能力。

****库：**** libmedia\_asset\_manager.so

****引用文件：**** &lt;multimedia/media\_library/media\_asset\_change\_request\_capi.h&gt;

****系统能力：**** SystemCapability.FileManagement.PhotoAccessHelper.Core

****起始版本：**** 12

****相关模块：**** [MediaAssetManager](/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest\* OH\_MediaAssetChangeRequest\_Create(OH\_MediaAsset\* mediaAsset)](#oh_mediaassetchangerequest_create) | 创建[OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary\_ErrorCode OH\_MediaAssetChangeRequest\_AddResourceWithUri(OH\_MediaAssetChangeRequest\* changeRequest, MediaLibrary\_ResourceType resourceType, char\* fileUri)](#oh_mediaassetchangerequest_addresourcewithuri) | 通过文件uri添加资源。 |
| [MediaLibrary\_ErrorCode OH\_MediaAssetChangeRequest\_AddResourceWithBuffer(OH\_MediaAssetChangeRequest\* changeRequest, MediaLibrary\_ResourceType resourceType, uint8\_t\* buffer, uint32\_t length)](#oh_mediaassetchangerequest_addresourcewithbuffer) | 通过ArrayBuffer数据添加资源。 |
| [MediaLibrary\_ErrorCode OH\_MediaAssetChangeRequest\_GetWriteCacheHandler(OH\_MediaAssetChangeRequest\* changeRequest, int32\_t\* fd)](#oh_mediaassetchangerequest_getwritecachehandler) | 获取临时文件写句柄。 |
| [MediaLibrary\_ErrorCode OH\_MediaAssetChangeRequest\_SaveCameraPhoto(OH\_MediaAssetChangeRequest\* changeRequest, MediaLibrary\_ImageFileType imageFileType)](#oh_mediaassetchangerequest_savecameraphoto) | 保存相机拍摄的照片资源。 |
| [MediaLibrary\_ErrorCode OH\_MediaAssetChangeRequest\_DiscardCameraPhoto(OH\_MediaAssetChangeRequest\* changeRequest)](#oh_mediaassetchangerequest_discardcameraphoto) | 丢弃相机拍摄的照片资源。 |
| [MediaLibrary\_ErrorCode OH\_MediaAssetChangeRequest\_Release(OH\_MediaAssetChangeRequest\* changeRequest)](#oh_mediaassetchangerequest_release) | 释放[OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |

## 函数说明

### OH\_MediaAssetChangeRequest\_Create()

```
OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)
```

****描述****

创建[OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAsset](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset)\* mediaAsset | [OH\_MediaAsset](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset)实例。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。 |

### OH\_MediaAssetChangeRequest\_AddResourceWithUri()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ResourceType resourceType, char* fileUri)
```

****描述****

通过文件uri添加资源。

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary\_ResourceType](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_resourcetype) resourceType | 要添加的资源的[MediaLibrary\_ResourceType](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_resourcetype)。 |
| char\* fileUri | 文件uri。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_NO\_SUCH\_FILE：文件不存在。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。  MEDIA\_LIBRARY\_OPERATION\_NOT\_SUPPORTED：不支持该操作。 |

### OH\_MediaAssetChangeRequest\_AddResourceWithBuffer()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)
```

****描述****

通过ArrayBuffer数据添加资源。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary\_ResourceType](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_resourcetype) resourceType | 要添加的资源的类型。 |
| uint8\_t\* buffer | 要添加的数据缓冲区。 |
| uint32\_t length | 数据缓冲区的长度。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。  MEDIA\_LIBRARY\_OPERATION\_NOT\_SUPPORTED：不支持该操作。 |

### OH\_MediaAssetChangeRequest\_GetWriteCacheHandler()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest,int32_t* fd)
```

****描述****

获取临时文件写句柄。

****需要权限：**** ohos.permission.WRITE\_IMAGEVIDEO

****起始版本：**** 13

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| int32\_t\* fd | 临时文件写句柄。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。  MEDIA\_LIBRARY\_PERMISSION\_DENIED：没有权限。  MEDIA\_LIBRARY\_OPERATION\_NOT\_SUPPORTED：不支持该操作。 |

### OH\_MediaAssetChangeRequest\_SaveCameraPhoto()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest,MediaLibrary_ImageFileType imageFileType)
```

****描述****

保存相机拍摄的照片资源。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |
| [MediaLibrary\_ImageFileType](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_imagefiletype) imageFileType | 要保存的照片的图像文件类型。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。  MEDIA\_LIBRARY\_OPERATION\_NOT\_SUPPORTED：不支持该操作。 |

### OH\_MediaAssetChangeRequest\_DiscardCameraPhoto()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)
```

****描述****

丢弃相机拍摄的照片资源。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。  MEDIA\_LIBRARY\_INTERNAL\_SYSTEM\_ERROR：内部系统错误。  MEDIA\_LIBRARY\_OPERATION\_NOT\_SUPPORTED：不支持该操作。 |

### OH\_MediaAssetChangeRequest\_Release()

```
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)
```

****描述****

释放[OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)\* changeRequest | [OH\_MediaAssetChangeRequest](/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaassetchangerequest/capi-mediaassetmanager-oh-mediaassetchangerequest)实例。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [MediaLibrary\_ErrorCode](/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_errorcode) | MEDIA\_LIBRARY\_OK：方法调用成功。  MEDIA\_LIBRARY\_PARAMETER\_ERROR：参数错误。可能的原因：  1. 未指定强制参数。  2. 参数类型不正确。  3. 参数验证失败。 |
