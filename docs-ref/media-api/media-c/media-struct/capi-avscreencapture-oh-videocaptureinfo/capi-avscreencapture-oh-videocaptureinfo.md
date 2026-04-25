---
title: "OH_VideoCaptureInfo"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-videocaptureinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-videocaptureinfo
---

# OH\_VideoCaptureInfo

```
typedef struct OH_VideoCaptureInfo {...} OH_VideoCaptureInfo
```

## 概述

视频录制信息。当videoFrameWidth和videoFrameHeight同时为0时，忽略视频相关参数不录制屏幕数据。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t displayId | 录制物理屏id，使用该参数需要在capturemode为CAPTURE\_SPECIFIED\_SCREEN模式下使用。 |
| int32\_t\* missionIDs | 指定窗口id列表，使用该参数需要在capturemode为CAPTURE\_SPECIFIED\_WINDOW模式下使用。 |
| int32\_t missionIDsLen | 指定窗口ID长度，使用该参数需要在capturemode为CAPTURE\_SPECIFIED\_WINDOW模式下使用。 |
| int32\_t videoFrameWidth | 采集视频的宽度设置，单位px。 |
| int32\_t videoFrameHeight | 采集视频的高度设置，单位px。 |
| [OH\_VideoSourceType](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_videosourcetype) videoSource | 视频采集格式设置，目前仅支持RGBA格式。 |
