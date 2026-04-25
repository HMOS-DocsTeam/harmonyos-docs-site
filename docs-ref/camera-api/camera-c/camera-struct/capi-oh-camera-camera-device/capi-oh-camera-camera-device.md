---
title: "Camera_Device"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-device
---

# Camera\_Device

```
typedef struct Camera_Device {...} Camera_Device
```

## 概述

相机设备对象。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* cameraId | 相机id属性。 |
| [Camera\_Position](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_position) cameraPosition | 相机位置属性。 |
| [Camera\_Type](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_type) cameraType | 相机类型属性。 |
| [Camera\_Connection](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_connection) connectionType | 相机连接类型属性。 |
