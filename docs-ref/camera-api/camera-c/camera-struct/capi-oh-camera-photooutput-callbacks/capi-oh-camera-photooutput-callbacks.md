---
title: "PhotoOutput_Callbacks"
sidebar_position: 33
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-photooutput-callbacks
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-photooutput-callbacks
---

# PhotoOutput\_Callbacks

```
typedef struct PhotoOutput_Callbacks {...} PhotoOutput_Callbacks
```

## 概述

拍照输出的回调。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [photo\_output.h](/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_PhotoOutput\_OnFrameStart](/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onframestart) onFrameStart | 拍照输出帧启动事件。 |
| [OH\_PhotoOutput\_OnFrameShutter](/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onframeshutter) onFrameShutter | 拍照输出帧快门事件。 |
| [OH\_PhotoOutput\_OnFrameEnd](/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onframeend) onFrameEnd | 拍照输出帧结束事件。 |
| [OH\_PhotoOutput\_OnError](/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onerror) onError | 拍照输出错误事件。 |
