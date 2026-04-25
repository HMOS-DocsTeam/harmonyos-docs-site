---
title: "PreviewOutput_Callbacks"
sidebar_position: 35
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-previewoutput-callbacks
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-previewoutput-callbacks
---

# PreviewOutput\_Callbacks

```
typedef struct PreviewOutput_Callbacks {...} PreviewOutput_Callbacks
```

## 概述

用于预览输出的回调。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [preview\_output.h](/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_PreviewOutput\_OnFrameStart](/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_onframestart) onFrameStart | 预览输出帧开始事件。 |
| [OH\_PreviewOutput\_OnFrameEnd](/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_onframeend) onFrameEnd | 预览输出帧结束事件。 |
| [OH\_PreviewOutput\_OnError](/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_onerror) onError | 预览输出错误事件。 |
