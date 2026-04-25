---
title: "Rcp_HeaderValue"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___header_value
---

# Rcp\_HeaderValue

## 概述

请求或响应的标头映射的值类型。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \* [value](#value) | 标头键值对的值。 |
| struct [Rcp\_HeaderValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value) \* [next](#next) | 链式存储。指向下一个[Rcp\_HeaderValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value)。 |

## 结构体成员变量说明

### next

```
struct Rcp_HeaderValue* Rcp_HeaderValue::next
```

****描述****

链式存储。指向下一个[Rcp\_HeaderValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value)。

### value

```
char* Rcp_HeaderValue::value
```

****描述****

标头键值对的值。
