---
title: "Camera_ConcurrentInfo"
sidebar_position: 22
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-concurrentinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-concurrentinfo
---

# Camera\_ConcurrentInfo

```
typedef struct Camera_ConcurrentInfo {...} Camera_ConcurrentInfo
```

## 概述

相机并发能力信息。

****起始版本：**** 18

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera\_Device](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-device/capi-oh-camera-camera-device) camera | 相机实例。 |
| [Camera\_ConcurrentType](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_concurrenttype) type | 相机并发状态。 |
| [Camera\_SceneMode](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_scenemode)\* sceneModes | 相机并发支持的模式。 |
| [Camera\_OutputCapability](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-outputcapability/capi-oh-camera-camera-outputcapability)\* outputCapabilities | 相机输出能力集。 |
| uint32\_t modeAndCapabilitySize | 相机输出能力集大小。 |
