---
title: "Rcp_Urls"
sidebar_position: 50
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___urls
---

# Rcp\_Urls

## 概述

URLs，用于确定主机是否正在使用代理。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \* [url](#url) | 匹配的URL。 |
| struct [Rcp\_Urls](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls) \* [next](#next) | 链式存储。指向下一个[Rcp\_Urls](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls)的指针。 |

## 结构体成员变量说明

### next

```
struct Rcp_Urls* Rcp_Urls::next
```

****描述****

链式存储。指向下一个[Rcp\_Urls](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls)的指针。

### url

```
const char* Rcp_Urls::url
```

****描述****

匹配的URL。
