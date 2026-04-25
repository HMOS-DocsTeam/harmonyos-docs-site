---
title: "OH_AudioBuffer"
sidebar_position: 27
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-audiobuffer
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-audiobuffer
---

# OH\_AudioBuffer

```
typedef struct OH_AudioBuffer {...} OH_AudioBuffer
```

## 概述

定义了音频数据的大小、类型、时间戳等配置信息。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t\* buf | 音频buffer内存。 |
| int32\_t size | 音频buffer内存大小。 |
| int64\_t timestamp | 音频buffer时间戳。 |
| [OH\_AudioCaptureSourceType](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_audiocapturesourcetype) type | 音频录制源类型。 |
