---
title: "Http_EventsHandler"
sidebar_position: 33
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-eventshandler
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-eventshandler
---

# Http\_EventsHandler

```
typedef struct Http_EventsHandler {...} Http_EventsHandler
```

## 概述

监听不同HTTP事件的回调函数。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Http\_OnDataReceiveCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_ondatareceivecallback) onDataReceive | 收到响应体时的回调函数，参考[Http\_OnDataReceiveCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_ondatareceivecallback)。 |
| [Http\_OnProgressCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback) onUploadProgress | 上传时调用的回调函数，参考[Http\_OnProgressCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback)。 |
| [Http\_OnProgressCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback) onDownloadProgress | 下载时调用的回调函数，参考[Http\_OnProgressCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback)。 |
| [Http\_OnHeaderReceiveCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onheaderreceivecallback) onHeadersReceive | 收到header时的回调函数，参考[Http\_OnHeaderReceiveCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onheaderreceivecallback)。 |
| [Http\_OnVoidCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback) onDataEnd | 传输结束时的回调函数，参考[Http\_OnVoidCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback)。 |
| [Http\_OnVoidCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback) onCanceled | 请求被取消时的回调函数，参考[Http\_OnVoidCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback)。 |
