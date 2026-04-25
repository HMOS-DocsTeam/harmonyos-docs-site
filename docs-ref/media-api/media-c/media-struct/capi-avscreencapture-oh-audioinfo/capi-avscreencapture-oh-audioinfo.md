---
title: "OH_AudioInfo"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-audioinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avscreencapture-oh-audioinfo
---

# OH\_AudioInfo

```
typedef struct OH_AudioInfo {...} OH_AudioInfo
```

## 概述

音频信息。

同时采集音频麦克风和音频内录数据时，两路音频的audioSampleRate和audioChannels采样参数需要相同。

****起始版本：**** 10

****相关模块：**** [AVScreenCapture](/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture)

****所在头文件：**** [native\_avscreen\_capture\_base.h](/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_AudioCaptureInfo](/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiocaptureinfo/capi-avscreencapture-oh-audiocaptureinfo) micCapInfo | 音频麦克风采样信息。 |
| [OH\_AudioCaptureInfo](/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiocaptureinfo/capi-avscreencapture-oh-audiocaptureinfo) innerCapInfo | 音频内录采样信息。 |
| [OH\_AudioEncInfo](/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioencinfo/capi-avscreencapture-oh-audioencinfo) audioEncInfo | 音频编码信息，原始码流时不需要设置。 |
