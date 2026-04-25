---
title: "Camera_DeviceQueryInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-devicequeryinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-devicequeryinfo
---

# Camera\_DeviceQueryInfo

```
typedef struct {...} Camera_DeviceQueryInfo
```

## 概述

相机设备的查询信息。

****起始版本：**** 23

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| Camera\_Type\* cameraType | 相机类型属性列表。 |
| uint32\_t cameraTypeSize | 相机类型属性列表的大小。 |
| [Camera\_Position](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_position) cameraPosition | 相机位置属性。 |
| [Camera\_Connection](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_connection) connectionType | 相机连接类型属性。 |
