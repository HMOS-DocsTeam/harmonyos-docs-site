---
title: "Rcp_CookieAttributeEntry"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___cookie_attribute_entry
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___cookie_attribute_entry
---

# Rcp\_CookieAttributeEntry

## 概述

响应Cookie属性条目。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \* [key](#key) | 键。 |
| const char \* [value](#value) | 值。 |
| struct [Rcp\_CookieAttributeEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry) \* [next](#next) | 链式存储。指向下一个[Rcp\_CookieAttributeEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry)的指针。 |

## 结构体成员变量说明

### key

```
const char* Rcp_CookieAttributeEntry::key
```

****描述****

键。

### next

```
struct Rcp_CookieAttributeEntry* Rcp_CookieAttributeEntry::next
```

****描述****

链式存储。指向下一个[Rcp\_CookieAttributeEntry](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry)的指针。

### value

```
const char* Rcp_CookieAttributeEntry::value
```

****描述****

值。
