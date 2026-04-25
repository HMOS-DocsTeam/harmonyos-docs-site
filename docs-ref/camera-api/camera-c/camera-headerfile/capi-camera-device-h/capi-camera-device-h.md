---
title: "camera_device.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-device-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-camera-device-h
---

# camera\_device.h

## 概述

定义相机的基本接口和功能。

****引用文件：**** &lt;ohcamera/camera\_device.h&gt;

****库：**** libohcamera.so

****系统能力：**** SystemCapability.Multimedia.Camera.Core

****起始版本：**** 12

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [Camera\_ErrorCode OH\_CameraDevice\_GetCameraOrientation(Camera\_Device\* camera, uint32\_t\* orientation)](#oh_cameradevice_getcameraorientation) | 获取相机设备的传感器方向属性。 |
| [Camera\_ErrorCode OH\_CameraDevice\_GetHostDeviceName(Camera\_Device\* camera, char\*\* hostDeviceName)](#oh_cameradevice_gethostdevicename) | 获取远程设备名称。 |
| [Camera\_ErrorCode OH\_CameraDevice\_GetHostDeviceType(Camera\_Device\* camera, Camera\_HostDeviceType\* hostDeviceType)](#oh_cameradevice_gethostdevicetype) | 获取远程设备类型。 |

## 函数说明

### OH\_CameraDevice\_GetCameraOrientation()

```
Camera_ErrorCode OH_CameraDevice_GetCameraOrientation(Camera_Device* camera, uint32_t* orientation)
```

****描述****

获取相机设备的传感器方向属性。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [Camera\_Device](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-device/capi-oh-camera-camera-device)\* camera | 用于获取属性的Camera\_Device。 |
| uint32\_t\* orientation | 返回相机sensor角度属性。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Camera\_ErrorCode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode) | CAMERA\_OK：方法调用成功，返回传感器方向属性。  CAMERA\_CAMERA\_INVALID\_ARGUMENT：参数丢失或者参数不正确。  CAMERA\_SERVICE\_FATAL\_ERROR：相机服务异常。 |

### OH\_CameraDevice\_GetHostDeviceName()

```
Camera_ErrorCode OH_CameraDevice_GetHostDeviceName(Camera_Device* camera, char** hostDeviceName)
```

****描述****

获取远程设备名称。

****起始版本：**** 15

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [Camera\_Device](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-device/capi-oh-camera-camera-device)\* camera | 用于获取属性的Camera\_Device。 |
| char\*\* hostDeviceName | 返回远程设备名称属性。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Camera\_ErrorCode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode) | CAMERA\_OK：方法调用成功，将返回远程设备名称属性。  CAMERA\_CAMERA\_INVALID\_ARGUMENT：参数丢失或者参数不正确。  CAMERA\_SERVICE\_FATAL\_ERROR：相机服务异常。 |

### OH\_CameraDevice\_GetHostDeviceType()

```
Camera_ErrorCode OH_CameraDevice_GetHostDeviceType(Camera_Device* camera, Camera_HostDeviceType* hostDeviceType)
```

****描述****

获取远程设备类型。

****起始版本：**** 15

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [Camera\_Device](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-device/capi-oh-camera-camera-device)\* camera | 用于获取属性的Camera\_Device。 |
| [Camera\_HostDeviceType](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_hostdevicetype)\* hostDeviceType | 远程设备类型属性。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [Camera\_ErrorCode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode) | CAMERA\_OK：方法调用成功，将返回远程设备名称属性。  CAMERA\_CAMERA\_INVALID\_ARGUMENT：参数丢失或者参数不正确。  CAMERA\_SERVICE\_FATAL\_ERROR：相机服务异常。 |
