---
title: "OH_AudioStreamInfo"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreaminfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohaudio-oh-audiostreaminfo
---

# OH\_AudioStreamInfo

```
typedef struct OH_AudioStreamInfo {...} OH_AudioStreamInfo
```

## 概述

定义音频流信息，用于描述基本音频格式。

****起始版本：**** 19

****相关模块：**** [OHAudio](/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio)

****所在头文件：**** [native\_audiostream\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t samplingRate | 音频流采样率。 |
| [OH\_AudioChannelLayout](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h#oh_audiochannellayout) channelLayout | 音频流声道布局。 |
| [OH\_AudioStream\_EncodingType](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_encodingtype) encodingType | 音频流编码类型。 |
| [OH\_AudioStream\_SampleFormat](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sampleformat) sampleFormat | 音频流采样格式。 |
