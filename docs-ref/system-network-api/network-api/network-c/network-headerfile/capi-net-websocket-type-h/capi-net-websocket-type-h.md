---
title: "net_websocket_type.h"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-net-websocket-type-h
---

# net\_websocket\_type.h

## 概述

定义websocket客户端模块的C接口需要的数据结构。

****引用文件：**** &lt;network/netstack/net\_websocket\_type.h&gt;

****库：**** libnet\_websocket.so

****系统能力：**** SystemCapability.Communication.NetStack

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

## 汇总

### 结构体

| 名称 | 描述 |
| --- | --- |
| [WebSocket\_CloseResult](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-closeresult/capi-netstack-websocket-closeresult) | websocket客户端来自服务端关闭的参数。 |
| [WebSocket\_CloseOption](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-closeoption/capi-netstack-websocket-closeoption) | websocket客户端主动关闭的参数。 |
| [WebSocket\_ErrorResult](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-errorresult/capi-netstack-websocket-errorresult) | websocket客户端来自服务端连接错误的参数。 |
| [WebSocket\_OpenResult](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-openresult/capi-netstack-websocket-openresult) | websocket客户端来自服务端连接成功的参数。 |
| [WebSocket\_Header](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-header/capi-netstack-websocket-header) | websocket客户端增加header头的链表节点。 |
| [WebSocket\_RequestOptions](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-requestoptions/capi-netstack-websocket-requestoptions) | webSocket客户端和服务端建立连接的参数。 |
| [WebSocket](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket/capi-netstack-websocket) | webSocket客户端结构体。 |

### 函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*WebSocket\_OnOpenCallback)(struct WebSocket \*client, WebSocket\_OpenResult openResult)](#websocket_onopencallback) | WebSocket\_OnOpenCallback | websocket客户端接收open消息的回调函数定义。 |
| [typedef void (\*WebSocket\_OnMessageCallback)(struct WebSocket \*client, char \*data, uint32\_t length)](#websocket_onmessagecallback) | WebSocket\_OnMessageCallback | websocket客户端接收数据的回调函数定义。 |
| [typedef void (\*WebSocket\_OnErrorCallback)(struct WebSocket \*client, WebSocket\_ErrorResult errorResult)](#websocket_onerrorcallback) | WebSocket\_OnErrorCallback | websocket客户端接收error错误消息的回调函数定义。 |
| [typedef void (\*WebSocket\_OnCloseCallback)(struct WebSocket \*client, WebSocket\_CloseResult closeResult)](#websocket_onclosecallback) | WebSocket\_OnCloseCallback | webSocket客户端接收close消息的回调函数定义。 |

## 枚举类型说明

### WebSocket\_ErrCode

```
enum WebSocket_ErrCode
```

****描述****

定义websocket请求的错误码。

****起始版本：**** 11

| 枚举项 | 描述 |
| --- | --- |
| WEBSOCKET\_OK = 0 | 操作成功。 |
| E\_BASE = 1000 | 错误码基准值。 |
| WEBSOCKET\_CLIENT\_NULL = (E\_BASE + 1) | websocket客户端为空。 |
| WEBSOCKET\_CLIENT\_NOT\_CREATED = (E\_BASE + 2) | websocket客户端未创建。 |
| WEBSOCKET\_CONNECTION\_ERROR = (E\_BASE + 3) | 建立websocket连接时发生错误。 |
| WEBSOCKET\_CONNECTION\_PARSE\_URL\_ERROR = (E\_BASE + 5) | 解析websocket连接参数时出错。 |
| WEBSOCKET\_CONNECTION\_NO\_MEMORY = (E\_BASE + 6) | websocket客户端建立连接过程中内存不足。 |
| WEBSOCKET\_CONNECTION\_CLOSED\_BY\_PEER = (E\_BASE + 7) | websocket连接被对端关闭。 |
| WEBSOCKET\_DESTROYED = (E\_BASE + 8) | websocket连接断开。 |
| WEBSOCKET\_PROTOCOL\_ERROR = (E\_BASE + 9) | 协议错误。 |
| WEBSOCKET\_SEND\_NO\_MEMORY = (E\_BASE + 10) | websocket客户端发送数据时系统内存不足。 |
| WEBSOCKET\_SEND\_DATA\_NULL = (E\_BASE + 11) | 发送数据为空。 |
| WEBSOCKET\_DATA\_LENGTH\_EXCEEDED = (E\_BASE + 12) | 发送数据长度超出限制。 |
| WEBSOCKET\_QUEUE\_LENGTH\_EXCEEDED = (E\_BASE + 13) | 发送数据队列长度超出限制。 |
| WEBSOCKET\_NO\_CLIENT\_CONTEXT = (E\_BASE + 14) | websocket客户端的上下文为空。 |
| WEBSOCKET\_NO\_HEADER\_CONTEXT = (E\_BASE + 15) | webSocket客户端协议头为空。 |
| WEBSOCKET\_HEADER\_EXCEEDED = (E\_BASE + 16) | webSocket客户端协议头超出限制。 |
| WEBSOCKET\_NO\_CONNECTION = (E\_BASE + 17) | websocket客户端未连接。 |
| WEBSOCKET\_NO\_CONNECTION\_CONTEXT = (E\_BASE + 18) | 释放websocket连接上下文时无相应上下文。 |

## 函数说明

### WebSocket\_OnOpenCallback()

```
typedef void (*WebSocket_OnOpenCallback)(struct WebSocket *client, WebSocket_OpenResult openResult)
```

****描述****

websocket客户端接收open消息的回调函数定义。

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [struct WebSocket](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket/capi-netstack-websocket) \*client | websocket客户端。 |
| [WebSocket\_OpenResult](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-openresult/capi-netstack-websocket-openresult) openResult | websocket客户端接收建立连接消息的内容。 |

### WebSocket\_OnMessageCallback()

```
typedef void (*WebSocket_OnMessageCallback)(struct WebSocket *client, char *data, uint32_t length)
```

****描述****

websocket客户端接收数据的回调函数定义。

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [struct WebSocket](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket/capi-netstack-websocket) \*client | websocket客户端。 |
| char \*data | websocket客户端接收的数据。 |
| uint32\_t length | websocket客户端接收的数据长度。 |

### WebSocket\_OnErrorCallback()

```
typedef void (*WebSocket_OnErrorCallback)(struct WebSocket *client, WebSocket_ErrorResult errorResult)
```

****描述****

websocket客户端接收error错误消息的回调函数定义。

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [struct WebSocket](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket/capi-netstack-websocket) \*client | websocket客户端。 |
| [WebSocket\_ErrorResult](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-errorresult/capi-netstack-websocket-errorresult) errorResult | websocket客户端接收连接错误消息的内容。 |

### WebSocket\_OnCloseCallback()

```
typedef void (*WebSocket_OnCloseCallback)(struct WebSocket *client, WebSocket_CloseResult closeResult)
```

****描述****

webSocket客户端接收close消息的回调函数定义。

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [struct WebSocket](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket/capi-netstack-websocket) \*client | websocket客户端。 |
| [WebSocket\_CloseResult](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-closeresult/capi-netstack-websocket-closeresult) closeResult | webSocket客户端接收关闭消息的内容。 |
