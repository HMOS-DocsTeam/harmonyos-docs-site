---
title: "Camera_ControlCenterStatusInfo"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-controlcenterstatusinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-controlcenterstatusinfo
---

# Camera\_ControlCenterStatusInfo

```
typedef struct Camera_ControlCenterStatusInfo {...} Camera_ControlCenterStatusInfo
```

## 概述

控制器效果激活状态信息。

****起始版本：**** 20

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera\_ControlCenterEffectType](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_controlcentereffecttype) effectType | 控制器效果类型。 |
| bool isActive | 控制器是否激活。true表示激活，false表示未激活。 |
