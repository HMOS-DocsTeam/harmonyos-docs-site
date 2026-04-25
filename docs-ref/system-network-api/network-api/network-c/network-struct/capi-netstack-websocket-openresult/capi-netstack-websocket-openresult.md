---
title: "WebSocket_OpenResult"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-openresult
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-websocket-openresult
---

# WebSocket\_OpenResult

```
struct WebSocket_OpenResult {...}
```

## 概述

websocket客户端来自服务端连接成功的参数。

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_websocket\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t code | websocket客户端连接成功码。 |
| const char \*reason | websocket客户端连接成功原因。 |
