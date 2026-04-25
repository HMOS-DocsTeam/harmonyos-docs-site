---
title: "Camera_MetadataObject"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataobject
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-metadataobject
---

# Camera\_MetadataObject

```
typedef struct Camera_MetadataObject {...} Camera_MetadataObject
```

## 概述

元数据对象基础。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera\_MetadataObjectType](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_metadataobjecttype) type | 元数据对象类型。 |
| int64\_t timestamp | 元数据对象时间戳，单位为纳秒（ns）。 |
| [Camera\_Rect](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-rect/capi-oh-camera-camera-rect)\* boundingBox | 检测到的元数据对象的轴对齐边界框。 |
