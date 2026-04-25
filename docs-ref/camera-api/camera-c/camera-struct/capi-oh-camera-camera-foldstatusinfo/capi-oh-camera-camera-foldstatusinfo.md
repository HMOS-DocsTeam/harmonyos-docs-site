---
title: "Camera_FoldStatusInfo"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-foldstatusinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-foldstatusinfo
---

# Camera\_FoldStatusInfo

```
typedef struct Camera_FoldStatusInfo {...} Camera_FoldStatusInfo
```

## 概述

折叠状态信息。

****起始版本：**** 13

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera\_Device](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-device/capi-oh-camera-camera-device)\*\* supportedCameras | 相机实例列表。 |
| uint32\_t cameraSize | 相机列表数量。 |
| [Camera\_FoldStatus](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_foldstatus) foldStatus | 当前折叠状态。 |
