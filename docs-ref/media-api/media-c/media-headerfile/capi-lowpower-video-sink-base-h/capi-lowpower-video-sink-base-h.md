---
title: "lowpower_video_sink_base.h"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-video-sink-base-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-lowpower-video-sink-base-h
---

# lowpower\_video\_sink\_base.h

## 概述

定义LowPowerVideoSink的结构体和枚举。

****引用文件：**** &lt;multimedia/player\_framework/lowpower\_video\_sink\_base.h&gt;

****库：**** liblowpower\_avsink.so

****系统能力：**** SystemCapability.Multimedia.Media.LowPowerAVSink

****起始版本：**** 20

****相关模块：**** [LowPowerVideoSink](/ref/media-api/media-c/media-module/capi-lowpowervideosink/capi-lowpowervideosink)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink) | OH\_LowPowerVideoSink | LowPowerVideoSink声明。 |
| [OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback) | OH\_LowPowerVideoSinkCallback | 包含了LowPowerVideoSink回调函数指针的集合。  应用需注册此实例结构体到[OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)实例中，并对回调上报的信息进行处理，保证LowPowerVideoSink的正常运行。 |

### 函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*OH\_LowPowerVideoSink\_OnDataNeeded)(OH\_LowPowerVideoSink\* sink, OH\_AVSamplesBuffer\* buffer, void \*userData)](#oh_lowpowervideosink_ondataneeded) | OH\_LowPowerVideoSink\_OnDataNeeded | LowPowerVideoSink需要数据时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。 |
| [typedef void (\*OH\_LowPowerVideoSink\_OnError)(OH\_LowPowerVideoSink\* sink, OH\_AVErrCode errCode, const char\* errMsg, void\* userData)](#oh_lowpowervideosink_onerror) | OH\_LowPowerVideoSink\_OnError | LowPowerVideoSink发生错误时调用该方法。 |
| [typedef void (\*OH\_LowPowerVideoSink\_OnTargetArrived)(OH\_LowPowerVideoSink\* sink, const int64\_t targetPts, const bool isTimeout, void\* userData)](#oh_lowpowervideosink_ontargetarrived) | OH\_LowPowerVideoSink\_OnTargetArrived | LowPowerVideoSink到达目标点时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。 |
| [typedef void (\*OH\_LowPowerVideoSink\_OnRenderStarted)(OH\_LowPowerVideoSink\* sink, void\* userData)](#oh_lowpowervideosink_onrenderstarted) | OH\_LowPowerVideoSink\_OnRenderStarted | LowPowerVideoSink开始渲染时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。 |
| [typedef void (\*OH\_LowPowerVideoSink\_OnStreamChanged)(OH\_LowPowerVideoSink\* sink, OH\_AVFormat\* format, void\* userData)](#oh_lowpowervideosink_onstreamchanged) | OH\_LowPowerVideoSink\_OnStreamChanged | LowPowerVideoSink流切换调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。 |
| [typedef void (\*OH\_LowPowerVideoSink\_OnFirstFrameDecoded)(OH\_LowPowerVideoSink\* sink, void\* userData)](#oh_lowpowervideosink_onfirstframedecoded) | OH\_LowPowerVideoSink\_OnFirstFrameDecoded | LowPowerVideoSink第一帧解码成功时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。 |
| [typedef void (\*OH\_LowPowerVideoSink\_OnEos)(OH\_LowPowerVideoSink\* sink, void\* userData)](#oh_lowpowervideosink_oneos) | OH\_LowPowerVideoSink\_OnEos | LowPowerVideoSink播放完成时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。 |

## 函数说明

### OH\_LowPowerVideoSink\_OnDataNeeded()

```
typedef void (*OH_LowPowerVideoSink_OnDataNeeded)(OH_LowPowerVideoSink* sink,OH_AVSamplesBuffer* buffer,void *userData)
```

****描述****

LowPowerVideoSink需要数据时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| [OH\_AVSamplesBuffer](/ref/media-api/media-c/media-struct/capi-avsinkbase-oh-avsamplesbuffer/capi-avsinkbase-oh-avsamplesbuffer)\* buffer | 指向OH\_AVSamplesBuffer实例的指针。 |
| void \*userData | 用户执行回调所依赖的数据。 |

### OH\_LowPowerVideoSink\_OnError()

```
typedef void (*OH_LowPowerVideoSink_OnError)(OH_LowPowerVideoSink* sink,OH_AVErrCode errCode,const char* errMsg,void* userData)
```

****描述****

LowPowerVideoSink发生错误时调用该方法。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| [OH\_AVErrCode](/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode) errCode | 业务操作过程中发生错误时返回的错误码。 |
| const char\* errMsg | 业务操作过程中发生错误时返回的错误描述信息。 |
| void\* userData | 用户执行回调所依赖的数据。 |

### OH\_LowPowerVideoSink\_OnTargetArrived()

```
typedef void (*OH_LowPowerVideoSink_OnTargetArrived)(OH_LowPowerVideoSink* sink,const int64_t targetPts,const bool isTimeout,void* userData)
```

****描述****

LowPowerVideoSink到达目标点时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| const int64\_t targetPts | 目标点的pts。 |
| const bool isTimeout | 表示等待目标点是否超时。若为true，表示等待目标点超时；若为false，则表示未超时。 |
| void\* userData | 用户执行回调所依赖的数据。 |

### OH\_LowPowerVideoSink\_OnRenderStarted()

```
typedef void (*OH_LowPowerVideoSink_OnRenderStarted)(OH_LowPowerVideoSink* sink, void* userData)
```

****描述****

LowPowerVideoSink开始渲染时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| void\* userData | 用户执行回调所依赖的数据。 |

### OH\_LowPowerVideoSink\_OnStreamChanged()

```
typedef void (*OH_LowPowerVideoSink_OnStreamChanged)(OH_LowPowerVideoSink* sink, OH_AVFormat* format, void* userData)
```

****描述****

LowPowerVideoSink流切换调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| [OH\_AVFormat](/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat)\* format | 包含变化的参数和对应的值。 |
| void\* userData | 用户执行回调所依赖的数据。 |

### OH\_LowPowerVideoSink\_OnFirstFrameDecoded()

```
typedef void (*OH_LowPowerVideoSink_OnFirstFrameDecoded)(OH_LowPowerVideoSink* sink, void* userData)
```

****描述****

LowPowerVideoSink第一帧解码成功时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| void\* userData | 用户执行回调所依赖的数据。 |

### OH\_LowPowerVideoSink\_OnEos()

```
typedef void (*OH_LowPowerVideoSink_OnEos)(OH_LowPowerVideoSink* sink, void* userData)
```

****描述****

LowPowerVideoSink播放完成时调用该方法，包含在[OH\_LowPowerVideoSinkCallback](/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback)中。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_LowPowerVideoSink](/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink)\* sink | 指向OH\_LowPowerVideoSink实例的指针。 |
| void\* userData | 用户执行回调所依赖的数据。 |
