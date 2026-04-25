---
title: "WebSocket_Header"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-header
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-websocket-header
---

# WebSocket\_Header

```
struct WebSocket_Header {...}
```

## 概述

websocket客户端增加header的链表节点。

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_websocket\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-websocket-type-h/capi-net-websocket-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \*fieldName | header的字段名。 |
| const char \*fieldValue | header的字段内容。 |
| struct [WebSocket\_Header](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-websocket-header/capi-netstack-websocket-header) \*next | header链表的next指针。 |
