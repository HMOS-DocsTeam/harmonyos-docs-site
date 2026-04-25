---
title: "OH_AudioCapturer_Callbacks_Struct"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiocapturer-callbacks-struct
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohaudio-oh-audiocapturer-callbacks-struct
---

# OH\_AudioCapturer\_Callbacks\_Struct

```
typedef struct OH_AudioCapturer_Callbacks_Struct {...} OH_AudioCapturer_Callbacks
```

## 概述

声明输入音频流的回调函数指针。

为了避免不可预期的行为，在设置音频回调函数时，请确保该结构体的每一个成员变量都被自定义的回调方法或空指针初始化。可参考[推荐使用OHAudio开发音频录制功能(C/C++)](/audio-kit/audio-recording/using-ohaudio-for-recording)。

****起始版本：**** 10

****废弃版本：**** 20

****替代接口：****

请分别使用以下回调类型替代：

[OH\_AudioCapturer\_OnReadDataCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onreaddatacallback)、 [OH\_AudioCapturer\_OnDeviceChangeCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_ondevicechangecallback)、 [OH\_AudioCapturer\_OnInterruptCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_oninterruptcallback) 以及 [OH\_AudioCapturer\_OnErrorCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onerrorcallback)。

****相关模块：**** [OHAudio](/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio)

****所在头文件：**** [native\_audiostream\_base.h](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h)

## 汇总

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [int32\_t (\*OH\_AudioCapturer\_OnReadData)(OH\_AudioCapturer\* capturer,void\* userData,void\* buffer,int32\_t length)](#oh_audiocapturer_onreaddata) | 该函数指针将指向用于读取音频数据的回调函数。 |
| [int32\_t (\*OH\_AudioCapturer\_OnStreamEvent)(OH\_AudioCapturer\* capturer,void\* userData,OH\_AudioStream\_Event event)](#oh_audiocapturer_onstreamevent) | 该函数指针将指向用于处理音频录制流事件的回调函数。 |
| [int32\_t (\*OH\_AudioCapturer\_OnInterruptEvent)(OH\_AudioCapturer\* capturer,void\* userData,OH\_AudioInterrupt\_ForceType type,OH\_AudioInterrupt\_Hint hint)](#oh_audiocapturer_oninterruptevent) | 该函数指针将指向用于处理音频录制中断事件的回调函数。 |
| [int32\_t (\*OH\_AudioCapturer\_OnError)(OH\_AudioCapturer\* capturer, void\* userData, OH\_AudioStream\_Result error)](#oh_audiocapturer_onerror) | 该函数指针将指向用于处理音频录制错误结果的回调函数。 |

## 成员函数说明

![](../../../../images/2eb7252e/note_3.0-zh-cn.png) 

以下回调接口的返回值没有枚举定义，当前版本实现并不按返回值区分处理，但为保证后续版本可扩展，默认使用0。

### OH\_AudioCapturer\_OnReadData()

```
int32_t (*OH_AudioCapturer_OnReadData)(OH_AudioCapturer* capturer,void* userData,void* buffer,int32_t length)
```

****描述****

该函数指针将指向用于读取音频数据的回调函数。

回调函数仅用来读取音频数据，请勿在回调函数中调用AudioCapturer相关接口。

****起始版本：**** 10

****废弃版本：**** 20

****替代接口：**** [OH\_AudioCapturer\_OnReadDataCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onreaddatacallback)

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AudioCapturer](/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturerstruct/capi-ohaudio-oh-audiocapturerstruct)\* capturer | 指向[OH\_AudioStreamBuilder\_GenerateCapturer](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generatecapturer)创建的音频流实例。 |
| void\* userData | 指向应用自定义的数据存储区域。 |
| void\* buffer | 指向录制数据存储区域，用于应用读取录制数据。 |
| int32\_t length | buffer的长度。 |

### OH\_AudioCapturer\_OnStreamEvent()

```
int32_t (*OH_AudioCapturer_OnStreamEvent)(OH_AudioCapturer* capturer,void* userData,OH_AudioStream_Event event)
```

****描述****

该函数指针将指向用于处理音频录制流事件的回调函数。

****起始版本：**** 10

****废弃版本：**** 20

****替代接口：**** [OH\_AudioCapturer\_OnDeviceChangeCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_ondevicechangecallback)

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AudioCapturer](/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturerstruct/capi-ohaudio-oh-audiocapturerstruct)\* capturer | 指向[OH\_AudioStreamBuilder\_GenerateCapturer](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generatecapturer)创建的音频流实例。 |
| void\* userData | 指向应用自定义的数据存储区域。 |
| [OH\_AudioStream\_Event](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_event) event | 音频事件。 |

### OH\_AudioCapturer\_OnInterruptEvent()

```
int32_t (*OH_AudioCapturer_OnInterruptEvent)(OH_AudioCapturer* capturer,void* userData,OH_AudioInterrupt_ForceType type,OH_AudioInterrupt_Hint hint)
```

****描述****

该函数指针将指向用于处理音频录制中断事件的回调函数。

****起始版本：**** 10

****废弃版本：**** 20

****替代接口：**** [OH\_AudioCapturer\_OnInterruptCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_oninterruptcallback)

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AudioCapturer](/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturerstruct/capi-ohaudio-oh-audiocapturerstruct)\* capturer | 指向[OH\_AudioStreamBuilder\_GenerateCapturer](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generatecapturer)创建的音频流实例。 |
| void\* userData | 指向应用自定义的数据存储区域。 |
| [OH\_AudioInterrupt\_ForceType](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_forcetype) type | 音频中断类型。 |
| [OH\_AudioInterrupt\_Hint](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_hint) hint | 音频中断提示类型。 |

### OH\_AudioCapturer\_OnError()

```
int32_t (*OH_AudioCapturer_OnError)(OH_AudioCapturer* capturer, void* userData, OH_AudioStream_Result error)
```

****描述****

该函数指针将指向用于处理音频录制错误结果的回调函数。

****起始版本：**** 10

****废弃版本：**** 20

****替代接口：**** [OH\_AudioCapturer\_OnErrorCallback](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onerrorcallback)

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AudioCapturer](/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturerstruct/capi-ohaudio-oh-audiocapturerstruct)\* capturer | 指向[OH\_AudioStreamBuilder\_GenerateCapturer](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generatecapturer)创建的音频流实例。 |
| void\* userData | 指向应用自定义的数据存储区域。 |
| [OH\_AudioStream\_Result](/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_result) error | 音频录制错误结果，可能为AUDIOSTREAM\_ERROR\_INVALID\_PARAM、AUDIOSTREAM\_ERROR\_ILLEGAL\_STATE或者 AUDIOSTREAM\_ERROR\_SYSTEM。 |
