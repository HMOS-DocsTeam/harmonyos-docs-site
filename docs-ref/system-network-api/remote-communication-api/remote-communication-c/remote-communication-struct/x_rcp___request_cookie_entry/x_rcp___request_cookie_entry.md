---
title: "Rcp_RequestCookieEntry"
sidebar_position: 33
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___request_cookie_entry
---

# Rcp\_RequestCookieEntry

## 概述

描述请求的所有Cookie键值对。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \* [key](#key) | 请求Cookie键值对的键。 |
| char \* [value](#value) | 请求Cookie键值对的值。 |
| struct [Rcp\_RequestCookieEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry) \* [next](#next) | 链式存储。指向下一个[Rcp\_RequestCookieEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry)的指针。 |

## 结构体成员变量说明

### key

```
char* Rcp_RequestCookieEntry::key
```

****描述****

请求Cookie键值对的键。

### next

```
struct Rcp_RequestCookieEntry* Rcp_RequestCookieEntry::next
```

****描述****

链式存储。指向下一个[Rcp\_RequestCookieEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry)的指针。

### value

```
char* Rcp_RequestCookieEntry::value
```

****描述****

请求Cookie键值对的值。
