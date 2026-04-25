---
title: "OH_VideoProcessing"
sidebar_position: 40
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-videoprocessing-oh-videoprocessing
kit: 媒体
last_updated: "2026-04-22"
slug: capi-videoprocessing-oh-videoprocessing
---

# OH\_VideoProcessing

```
typedef struct OH_VideoProcessing OH_VideoProcessing
```

## 概述

定义视频处理对象。

定义一个OH\_VideoProcessing空指针，调用[OH\_VideoProcessing\_Create](/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_create)创建视频处理实例，该指针在创建实例之前必须为空。用户可以对不同的处理类型创建不同的视频处理实例。

****起始版本：**** 12

****相关模块：**** [VideoProcessing](/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing)

****所在头文件：**** [video\_processing\_types.h](/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h)
