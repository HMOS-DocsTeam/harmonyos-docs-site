---
title: "WebSocket_ErrorResult"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-errorresult
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-websocket-errorresult
---

# WebSocket\_ErrorResult

```
struct WebSocket_ErrorResult {...}
```

## 概述

websocket客户端来自服务端连接错误的参数。

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_websocket\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t errorCode | 错误码。 |
| const char \*errorMessage | 错误的消息。 |
