---
title: "Camera_AutoDeviceSwitchStatusInfo"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-autodeviceswitchstatusinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-autodeviceswitchstatusinfo
---

# Camera\_AutoDeviceSwitchStatusInfo

```
typedef struct Camera_AutoDeviceSwitchStatusInfo {...} Camera_AutoDeviceSwitchStatusInfo
```

## 概述

自动设备切换状态信息。

****起始版本：**** 13

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool isDeviceSwitched | 设备是否已切换，true表示已切换，false表示未切换。 |
| bool isDeviceCapabilityChanged | 设备功能是否改变，true表示已改变，false表示未改变。 |
