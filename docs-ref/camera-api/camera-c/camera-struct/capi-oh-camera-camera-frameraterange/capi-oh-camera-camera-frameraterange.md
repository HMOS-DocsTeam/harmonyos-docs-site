---
title: "Camera_FrameRateRange"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-frameraterange
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-frameraterange
---

# Camera\_FrameRateRange

```
typedef struct Camera_FrameRateRange {...} Camera_FrameRateRange
```

## 概述

帧速率范围。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t min | 最小帧速率，单位帧每秒。 |
| uint32\_t max | 最大帧速率，单位帧每秒。 |
