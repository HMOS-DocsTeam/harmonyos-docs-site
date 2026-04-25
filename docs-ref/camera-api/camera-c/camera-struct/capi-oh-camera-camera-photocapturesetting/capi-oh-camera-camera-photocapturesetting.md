---
title: "Camera_PhotoCaptureSetting"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-photocapturesetting
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-camera-photocapturesetting
---

# Camera\_PhotoCaptureSetting

```
typedef struct Camera_PhotoCaptureSetting {...} Camera_PhotoCaptureSetting
```

## 概述

要设置的拍照捕获选项。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [camera.h](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera\_QualityLevel](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_qualitylevel) quality | 拍照图像质量。 |
| [Camera\_ImageRotation](/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_imagerotation) rotation | 拍照旋转角度。 |
| [Camera\_Location](/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-location/capi-oh-camera-camera-location)\* location | 拍照位置。 |
| bool mirror | 设置镜像拍照功能开关。  true为打开，false为关闭，默认为false。 |
