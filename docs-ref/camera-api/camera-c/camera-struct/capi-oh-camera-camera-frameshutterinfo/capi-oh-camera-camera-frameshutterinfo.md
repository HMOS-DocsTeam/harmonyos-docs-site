---
title: "Camera_FrameShutterInfo"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-frameshutterinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-frameshutterinfo
---

# Camera\_FrameShutterInfo

```
typedef struct Camera_FrameShutterInfo {...} Camera_FrameShutterInfo
```

## 概述

帧快门回调信息。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t captureId | 捕获id。 |
| uint64\_t timestamp | 帧的时间戳，单位毫秒。 |
