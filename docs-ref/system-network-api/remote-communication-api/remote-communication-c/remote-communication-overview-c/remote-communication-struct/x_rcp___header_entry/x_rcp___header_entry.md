---
title: "Rcp_HeaderEntry"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___header_entry
---

# Rcp\_HeaderEntry

## 概述

请求或响应的标头的所有键值对。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \* [key](#key) | 键。如果用户希望使用自定义的content-type覆盖系统原有的content-type，键必须使用小写的“content-type”。 |
| [Rcp\_HeaderValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value) \* [value](#value) | 值。 |
| struct [Rcp\_HeaderEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry) \* [next](#next) | 链式存储。指向下一个键值对[Rcp\_HeaderEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry)。 |

## 结构体成员变量说明

### key

```
char* Rcp_HeaderEntry::key
```

****描述****

键。如果用户希望使用自定义的content-type覆盖系统原有的content-type，键必须使用小写的“content-type”。

### next

```
struct Rcp_HeaderEntry* Rcp_HeaderEntry::next
```

****描述****

链式存储。指向下一个键值对[Rcp\_HeaderEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry)。

### value

```
Rcp_HeaderValue* Rcp_HeaderEntry::value
```

****描述****

标头键值对的值。
