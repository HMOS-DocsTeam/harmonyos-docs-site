---
title: "photo_native.h"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-photo-native-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-photo-native-h
---

# photo\_native.h

## 概述

声明相机照片的概念。

****引用文件：**** &lt;ohcamera/photo\_native.h&gt;

****库：**** libohcamera.so

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****起始版本：**** 12

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_PhotoNative](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-oh-photonative/capi-oh-camera-oh-photonative) | OH\_PhotoNative | 相机照片对象。  全质量图对象。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [Camera\_ErrorCode OH\_PhotoNative\_GetMainImage(OH\_PhotoNative\* photo, OH\_ImageNative\*\* mainImage)](#oh_photonative_getmainimage) | 获取全质量图。 |
| [Camera\_ErrorCode OH\_PhotoNative\_GetUncompressedImage(OH\_PhotoNative\* photo, OH\_PictureNative\*\* picture)](#oh_photonative_getuncompressedimage) | 获取非压缩图片。 |
| [Camera\_ErrorCode OH\_PhotoNative\_Release(OH\_PhotoNative\* photo)](#oh_photonative_release) | 释放全质量图实例。 |

## 函数说明

### OH\_PhotoNative\_GetMainImage()

```
Camera_ErrorCode OH_PhotoNative_GetMainImage(OH_PhotoNative* photo, OH_ImageNative** mainImage)
```

****描述****

获取全质量图。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_PhotoNative](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-oh-photonative/capi-oh-camera-oh-photonative)\* photo | OH\_PhotoNative实例。 |
| [OH\_ImageNative](/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagenative/capi-image-nativemodule-oh-imagenative)\*\* mainImage | 用于获取全质量图的OH\_ImageNative。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Camera\_ErrorCode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode) | CAMERA\_OK：方法调用成功。  CAMERA\_INVALID\_ARGUMENT：参数丢失或参数类型不正确。 |

### OH\_PhotoNative\_GetUncompressedImage()

```
Camera_ErrorCode OH_PhotoNative_GetUncompressedImage(OH_PhotoNative* photo, OH_PictureNative** picture)
```

****描述****

获取非压缩图片。

****起始版本：**** 23

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_PhotoNative](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-oh-photonative/capi-oh-camera-oh-photonative)\* photo | OH\_PhotoNative实例。 |
| [OH\_PictureNative](/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative)\*\* picture | 用于获取非压缩图片的OH\_PictureNative。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Camera\_ErrorCode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode) | CAMERA\_OK：方法调用成功。  CAMERA\_INVALID\_ARGUMENT：参数丢失或参数类型不正确。 |

### OH\_PhotoNative\_Release()

```
Camera_ErrorCode OH_PhotoNative_Release(OH_PhotoNative* photo)
```

****描述****

释放全质量图实例。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_PhotoNative](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-oh-photonative/capi-oh-camera-oh-photonative)\* photo | 要被释放的OH\_PhotoNative实例。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Camera\_ErrorCode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode) | CAMERA\_OK：方法调用成功。  CAMERA\_INVALID\_ARGUMENT：参数丢失或参数类型不正确。 |
