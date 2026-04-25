---
title: "VideoOutput_Callbacks"
sidebar_position: 37
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-videooutput-callbacks
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-videooutput-callbacks
---

# VideoOutput\_Callbacks

```
typedef struct VideoOutput_Callbacks {...} VideoOutput_Callbacks
```

## 概述

用于录像输出的回调。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [video\_output.h](/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_VideoOutput\_OnFrameStart](/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h#oh_videooutput_onframestart) onFrameStart | 录像输出帧启动事件。 |
| [OH\_VideoOutput\_OnFrameEnd](/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h#oh_videooutput_onframeend) onFrameEnd | 录像输出帧结束事件。 |
| [OH\_VideoOutput\_OnError](/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h#oh_videooutput_onerror) onError | 录像输出错误事件。 |
