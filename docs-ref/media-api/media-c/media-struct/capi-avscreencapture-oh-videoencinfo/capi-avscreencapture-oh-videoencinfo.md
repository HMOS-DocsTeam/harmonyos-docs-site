---
title: "OH_VideoEncInfo"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-videoencinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-videoencinfo
---

# OH\_VideoEncInfo

```
typedef struct OH_VideoEncInfo {...} OH_VideoEncInfo
```

## 概述

视频编码参数。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_VideoCodecFormat](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_videocodecformat) videoCodec | 视频采集编码格式。 |
| int32\_t videoBitrate | 视频采集比特率。 |
| int32\_t videoFrameRate | 视频采集帧率。 |
