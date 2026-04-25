---
title: "OH_AVScreenCaptureConfig"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-avscreencaptureconfig
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-avscreencaptureconfig
---

# OH\_AVScreenCaptureConfig

```
typedef struct OH_AVScreenCaptureConfig {...} OH_AVScreenCaptureConfig
```

## 概述

屏幕录制配置参数。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_CaptureMode](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_capturemode) captureMode | 屏幕录制的模式。 |
| [OH\_DataType](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_datatype) dataType | 屏幕录制流的数据格式。 |
| [OH\_AudioInfo](/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioinfo/capi-avscreencapture-oh-audioinfo) audioInfo | 音频录制参数。 |
| [OH\_VideoInfo](/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videoinfo/capi-avscreencapture-oh-videoinfo) videoInfo | 视频录制参数。 |
| [OH\_RecorderInfo](/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-recorderinfo/capi-avscreencapture-oh-recorderinfo) recorderInfo | 录制文件参数，当数据格式为OH\_CAPTURE\_FILE时必须设置。 |
