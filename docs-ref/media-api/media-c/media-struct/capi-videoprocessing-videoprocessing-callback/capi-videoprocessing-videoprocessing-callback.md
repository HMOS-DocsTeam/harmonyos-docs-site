---
title: "VideoProcessing_Callback"
sidebar_position: 43
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-videoprocessing-videoprocessing-callback
kit: 媒体
last_updated: "2026-04-22"
slug: capi-videoprocessing-videoprocessing-callback
---

# VideoProcessing\_Callback

```
typedef struct VideoProcessing_Callback VideoProcessing_Callback
```

## 概述

视频处理回调对象类型。

定义一个VideoProcessing\_Callback空指针，调用[OH\_VideoProcessingCallback\_Create](/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessingcallback_create)来创建一个回调对象。创建之前该指针必须为空。通过调用[OH\_VideoProcessing\_RegisterCallback](/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_registercallback)来向视频处理实例注册回调对象。

****起始版本：**** 12

****相关模块：**** [VideoProcessing](/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing)

****所在头文件：**** [video\_processing\_types.h](/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h)
