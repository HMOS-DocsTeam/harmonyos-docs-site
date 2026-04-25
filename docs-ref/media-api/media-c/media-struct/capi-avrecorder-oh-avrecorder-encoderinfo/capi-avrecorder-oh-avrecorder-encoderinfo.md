---
title: "OH_AVRecorder_EncoderInfo"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-encoderinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avrecorder-oh-avrecorder-encoderinfo
---

# OH\_AVRecorder\_EncoderInfo

```
typedef struct OH_AVRecorder_EncoderInfo {...} OH_AVRecorder_EncoderInfo
```

## 概述

提供编码器信息。

****起始版本：**** 18

****相关模块：**** [AVRecorder](/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder)

****所在头文件：**** [avrecorder\_base.h](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_AVRecorder\_CodecMimeType](/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) mimeType | 编码器MIME类型名称。 |
| char\* type | 编码器类型，audio表示音频编码器，video表示视频编码器。 |
| [OH\_AVRecorder\_Range](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range) bitRate | 比特率，包含该编码器的最大和最小值。 |
| [OH\_AVRecorder\_Range](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range) frameRate | 视频帧率，包含帧率的最大和最小值，仅视频编码器拥有。 |
| [OH\_AVRecorder\_Range](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range) width | 视频帧的宽度，包含宽度的最大和最小值，仅视频编码器拥有。 |
| [OH\_AVRecorder\_Range](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range) height | 视频帧的高度，包含高度的最大和最小值，仅视频编码器拥有。 |
| [OH\_AVRecorder\_Range](/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range) channels | 音频采集声道数，包含声道数的最大和最小值，仅音频编码器拥有。 |
| int32\_t\* sampleRate | 音频采样率列表，包含所有可以使用的音频采样率值，仅音频编码器拥有。 |
| int32\_t sampleRateLen | 音频采样率列表长度。 |
