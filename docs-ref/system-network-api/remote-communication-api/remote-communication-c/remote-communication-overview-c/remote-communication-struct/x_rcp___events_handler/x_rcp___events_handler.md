---
title: "Rcp_EventsHandler"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___events_handler
---

# Rcp\_EventsHandler

## 概述

监听不同HTTP事件的回调函数。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_OnDataReceiveCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___on_data_receive_callback/x_rcp___on_data_receive_callback)[onDataReceive](#ondatareceive) | 收到响应体时的回调函数。 |
| [Rcp\_OnProgressCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___on_progress_callback/x_rcp___on_progress_callback)[onUploadProgress](#onuploadprogress) | 上传时调用的回调函数。 |
| [Rcp\_OnProgressCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___on_progress_callback/x_rcp___on_progress_callback)[onDownloadProgress](#ondownloadprogress) | 下载时调用的回调函数。 |
| [Rcp\_OnHeaderReceiveCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___on_header_receive_callback/x_rcp___on_header_receive_callback)[onHeaderReceive](#onheaderreceive) | 收到header时的回调函数。 |
| [Rcp\_OnVoidCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___on_void_callback/x_rcp___on_void_callback)[onDataEnd](#ondataend) | 传输结束时的回调函数。 |
| [Rcp\_OnVoidCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___on_void_callback/x_rcp___on_void_callback)[onCanceled](#oncanceled) | 请求或会话被取消时的回调函数。 |

## 结构体成员变量说明

### onCanceled

```
Rcp_OnVoidCallback Rcp_EventsHandler::onCanceled
```

****描述****

请求或会话被取消时的回调函数。

### onDataEnd

```
Rcp_OnVoidCallback Rcp_EventsHandler::onDataEnd
```

****描述****

传输结束时的回调函数。

### onDataReceive

```
Rcp_OnDataReceiveCallback Rcp_EventsHandler::onDataReceive
```

****描述****

收到响应体时的回调函数。

### onDownloadProgress

```
Rcp_OnProgressCallback Rcp_EventsHandler::onDownloadProgress
```

****描述****

下载时调用的回调函数。

### onHeaderReceive

```
Rcp_OnHeaderReceiveCallback Rcp_EventsHandler::onHeaderReceive
```

****描述****

收到header时的回调函数。

### onUploadProgress

```
Rcp_OnProgressCallback Rcp_EventsHandler::onUploadProgress
```

****描述****

上传时调用的回调函数。
