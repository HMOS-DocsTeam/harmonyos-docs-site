---
title: "Camera_OcclusionDetectionResult"
sidebar_position: 39
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-occlusiondetectionresult
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-occlusiondetectionresult
---

# Camera\_OcclusionDetectionResult

```
typedef struct {...} Camera_OcclusionDetectionResult
```

## 概述

相机镜头遮挡、脏污检测结果。

****起始版本：**** 23

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool isCameraOccluded | 检查相机镜头是否被遮挡。true表示被遮挡，false表示未被遮挡。 |
| bool isCameraLensDirty | 检查相机镜头是否有脏污。true表示有脏污，false表示没有脏污。 |
