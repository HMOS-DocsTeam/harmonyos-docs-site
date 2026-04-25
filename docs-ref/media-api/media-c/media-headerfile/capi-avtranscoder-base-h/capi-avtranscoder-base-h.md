---
title: "avtranscoder_base.h"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avtranscoder-base-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-avtranscoder-base-h
---

# avtranscoder\_base.h

## 概述

定义了媒体AVTranscoder的结构体和枚举。

****引用文件：**** &lt;multimedia/player\_framework/avtranscoder\_base.h&gt;

****库：**** libavtranscoder.so

****系统能力：**** SystemCapability.Multimedia.Media.AVTranscoder

****起始版本：**** 20

****相关模块：**** [AVTranscoder](/ref/media-api/media-c/media-module/capi-avtranscoder/capi-avtranscoder)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_AVTranscoder](/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder) | OH\_AVTranscoder | 初始化AVTranscoder。 |
| [OH\_AVTranscoder\_Config](/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config) | OH\_AVTranscoder\_Config | 初始化AVTranscoder\_Config。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_AVTranscoder\_State](#oh_avtranscoder_state) | OH\_AVTranscoder\_State | 转码状态。 |

### 函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*OH\_AVTranscoder\_OnStateChange)(OH\_AVTranscoder \*transcoder, OH\_AVTranscoder\_State state, void \*userData)](#oh_avtranscoder_onstatechange) | OH\_AVTranscoder\_OnStateChange | 转码过程的状态回调函数。 |
| [typedef void (\*OH\_AVTranscoder\_OnError)(OH\_AVTranscoder \*transcoder, int32\_t errorCode, const char \*errorMsg, void \*userData)](#oh_avtranscoder_onerror) | OH\_AVTranscoder\_OnError | 转码过程中错误事件的回调函数。 |
| [typedef void (\*OH\_AVTranscoder\_OnProgressUpdate)(OH\_AVTranscoder \*transcoder, int32\_t progress, void \*userData)](#oh_avtranscoder_onprogressupdate) | OH\_AVTranscoder\_OnProgressUpdate | 回调转码进度更新时调用。 |

## 枚举类型说明

### OH\_AVTranscoder\_State

```
enum OH_AVTranscoder_State
```

****描述****

转码状态。

****系统能力：**** SystemCapability.Multimedia.Media.AVTranscoder

****起始版本：**** 20

| 枚举项 | 描述 |
| --- | --- |
| AVTRANSCODER\_PREPARED = 1 | 准备 |
| AVTRANSCODER\_STARTED = 2 | 开始 |
| AVTRANSCODER\_PAUSED = 3 | 暂停 |
| AVTRANSCODER\_CANCELLED = 4 | 取消 |
| AVTRANSCODER\_COMPLETED = 5 | 完成 |

## 函数说明

### OH\_AVTranscoder\_OnStateChange()

```
typedef void (*OH_AVTranscoder_OnStateChange)(OH_AVTranscoder *transcoder, OH_AVTranscoder_State state, void *userData)
```

****描述****

转码过程的状态回调函数。

****系统能力：**** SystemCapability.Multimedia.Media.AVTranscoder

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AVTranscoder](/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder) \*transcoder | OH\_AVTranscoder实例的指针。 |
| [OH\_AVTranscoder\_State](#oh_avtranscoder_state) state | 转码状态，详细说明请参见[OH\_AVTranscoder\_State](#oh_avtranscoder_state)。 |
| void \*userData | 用户特定数据的指针。 |

### OH\_AVTranscoder\_OnError()

```
typedef void (*OH_AVTranscoder_OnError)(OH_AVTranscoder *transcoder, int32_t errorCode, const char *errorMsg,void *userData)
```

****描述****

转码过程中错误事件的回调函数。

****系统能力：**** SystemCapability.Multimedia.Media.AVTranscoder

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AVTranscoder](/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder) \*transcoder | OH\_AVTranscoder实例的指针。 |
| int32\_t errorCode | 错误码。  AV\_ERR\_NO\_MEMORY：无内存，取值为1。  AV\_ERR\_OPERATE\_NOT\_PERMIT：操作不允许，取值为2。  AV\_ERR\_INVALID\_VAL：参数检查失败，取值为3。  AV\_ERR\_IO：IO错误，取值为4。  AV\_ERR\_INVALID\_STATE：当前状态不支持此操作，取值为8。  AV\_ERR\_UNSUPPORT：不支持的接口，取值为9。 |
| const char \*errorMsg | 错误消息。 |
| void \*userData | 用户特定数据的指针。 |

### OH\_AVTranscoder\_OnProgressUpdate()

```
typedef void (*OH_AVTranscoder_OnProgressUpdate)(OH_AVTranscoder *transcoder, int32_t progress, void *userData)
```

****描述****

回调转码进度更新时调用。

****系统能力：**** SystemCapability.Multimedia.Media.AVTranscoder

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_AVTranscoder](/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder) \*transcoder | OH\_AVTranscoder实例的指针。 |
| int32\_t progress | 转码进度。 |
| void \*userData | 用户特定数据的指针。 |
