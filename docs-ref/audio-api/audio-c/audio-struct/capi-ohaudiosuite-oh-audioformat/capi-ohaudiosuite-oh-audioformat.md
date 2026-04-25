---
title: "OH_AudioFormat"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite-oh-audioformat
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohaudiosuite-oh-audioformat
---

# OH\_AudioFormat

```
typedef struct {...} OH_AudioFormat
```

## 概述

定义音频编创的音频流信息，用于描述基本音频格式。

****起始版本：**** 22

****相关模块：**** [OHAudioSuite](/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite)

****所在头文件：**** [native\_audio\_suite\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_Audio\_SampleRate](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_samplerate) samplingRate | 音频流采样率。 |
| OH\_AudioChannelLayout channelLayout | 音频流声道布局，当前只支持CH\_LAYOUT\_MONO 和 CH\_LAYOUT\_STEREO。 |
| uint32\_t channelCount | 音频流声道个数，当前只支持1声道和2声道。 |
| [OH\_Audio\_EncodingType](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_encodingtype) encodingType | 音频流编码类型。 |
| [OH\_Audio\_SampleFormat](/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat) sampleFormat | 音频流采样格式。 |
