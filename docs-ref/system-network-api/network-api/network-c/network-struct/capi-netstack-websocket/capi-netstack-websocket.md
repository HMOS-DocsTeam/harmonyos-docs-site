---
title: "WebSocket"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-websocket
---

# WebSocket

```
struct WebSocket {...}
```

## 概述

WebSocket客户端结构体。

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_websocket\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [WebSocket\_OnOpenCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h#websocket_onopencallback) onOpen | 客户端接收连接消息的回调指针。 |
| [WebSocket\_OnMessageCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h#websocket_onmessagecallback) onMessage | 客户端接收消息的回调指针。 |
| [WebSocket\_OnErrorCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h#websocket_onerrorcallback) onError | 客户端接收错误消息的回调指针。 |
| [WebSocket\_OnCloseCallback](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h#websocket_onclosecallback) onClose | 客户端接收关闭消息的回调指针。 |
| [WebSocket\_RequestOptions](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-requestoptions/capi-netstack-websocket-requestoptions) requestOptions | 客户端建立连接请求内容。 |
