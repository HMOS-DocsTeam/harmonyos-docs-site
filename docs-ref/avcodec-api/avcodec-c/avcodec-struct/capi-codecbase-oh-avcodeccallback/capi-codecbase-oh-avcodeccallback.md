---
title: "OH_AVCodecCallback"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase-oh-avcodeccallback
kit: 媒体
last_updated: "2026-04-22"
slug: capi-codecbase-oh-avcodeccallback
---

# OH\_AVCodecCallback

```
typedef struct OH_AVCodecCallback {...} OH_AVCodecCallback
```

## 概述

OH\_AVCodec中所有异步回调函数指针的集合。将该结构体的实例注册到OH\_AVCodec实例中，并处理回调上报的信息，以保证OH\_AVCodec的正常运行。

使用指导请参见[视频编码](/avcodec-kit/audio-video-codec/video-encoding)中的“Surface模式步骤-4或Buffer模式步骤-3”。

****起始版本：**** 11

****相关模块：**** [CodecBase](/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase)

****所在头文件：**** [native\_avcodec\_base.h](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_AVCodecOnError](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror) onError | 监控编解码器操作错误。 |
| [OH\_AVCodecOnStreamChanged](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconstreamchanged) onStreamChanged | 监控编解码器流变化。 |
| [OH\_AVCodecOnNeedInputBuffer](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer) onNeedInputBuffer | 监控编解码器需要输入数据。 |
| [OH\_AVCodecOnNewOutputBuffer](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer) onNewOutputBuffer | 监控编解码器已生成输出数据。 |
