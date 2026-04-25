---
title: "WebSocket_CloseResult"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-closeresult
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-websocket-closeresult
---

# WebSocket\_CloseResult

```
struct WebSocket_CloseResult {...}
```

## 概述

websocket客户端接收到服务端关闭的参数。

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_websocket\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t code | 错误值。 |
| const char \*reason | 错误原因。 |
