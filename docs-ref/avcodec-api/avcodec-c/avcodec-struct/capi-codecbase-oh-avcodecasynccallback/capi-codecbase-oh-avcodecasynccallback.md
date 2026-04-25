---
title: "OH_AVCodecAsyncCallback"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase-oh-avcodecasynccallback
kit: 媒体
last_updated: "2026-04-22"
slug: capi-codecbase-oh-avcodecasynccallback
---

# OH\_AVCodecAsyncCallback

```
typedef struct OH_AVCodecAsyncCallback {...} OH_AVCodecAsyncCallback
```

## 概述

OH\_AVCodec中所有异步回调函数指针的集合。将该结构体的实例注册到OH\_AVCodec实例中，并处理回调上报的信息，以保证OH\_AVCodec的正常运行。

****起始版本：**** 9

****废弃版本：**** 11

****替代接口：**** [OH\_AVCodecCallback](/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-oh-avcodeccallback/capi-codecbase-oh-avcodeccallback)

****相关模块：**** [CodecBase](/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase)

****所在头文件：**** [native\_avcodec\_base.h](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_AVCodecOnError](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror) onError | 监控编解码器操作错误。 |
| [OH\_AVCodecOnStreamChanged](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconstreamchanged) onStreamChanged | 监控编解码器流变化。 |
| [OH\_AVCodecOnNeedInputData](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconneedinputdata) onNeedInputData | 监控编解码器需要输入数据。 |
| [OH\_AVCodecOnNewOutputData](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconnewoutputdata) onNeedOutputData | 监控编解码器已生成输出数据。 |
