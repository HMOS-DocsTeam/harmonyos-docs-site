---
title: "CaptureSession_Callbacks"
sidebar_position: 28
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-capturesession-callbacks
kit: 媒体
last_updated: "2026-04-22"
slug: capi-oh-camera-capturesession-callbacks
---

# CaptureSession\_Callbacks

```
typedef struct CaptureSession_Callbacks {...} CaptureSession_Callbacks
```

## 概述

捕获会话的回调。

****起始版本：**** 11

****相关模块：**** [OH\_Camera](/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera)

****所在头文件：**** [capture\_session.h](/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_CaptureSession\_OnFocusStateChange](/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_onfocusstatechange) onFocusStateChange | 捕获会话焦点状态更改事件。 |
| [OH\_CaptureSession\_OnError](/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_onerror) onError | 捕获会话错误事件。 |
