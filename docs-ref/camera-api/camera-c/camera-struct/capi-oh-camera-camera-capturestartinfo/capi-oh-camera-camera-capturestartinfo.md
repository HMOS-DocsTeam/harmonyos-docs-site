---
title: "Camera_CaptureStartInfo"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-capturestartinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-capturestartinfo
---

# Camera\_CaptureStartInfo

```
typedef struct Camera_CaptureStartInfo {...} Camera_CaptureStartInfo
```

## 概述

拍照开始信息。

****起始版本：**** 12

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t captureId | 拍照id。 |
| int64\_t time | 预估的单次拍照底层出sensor采集帧时间，如果上报-1，代表没有预估时间。 |
