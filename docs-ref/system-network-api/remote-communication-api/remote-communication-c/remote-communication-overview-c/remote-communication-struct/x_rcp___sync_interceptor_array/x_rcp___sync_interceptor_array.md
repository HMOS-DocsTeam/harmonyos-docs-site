---
title: "Rcp_SyncInterceptorArray"
sidebar_position: 44
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor_array
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___sync_interceptor_array
---

# Rcp\_SyncInterceptorArray

## 概述

同步拦截器数组。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_SyncInterceptor](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor) \* [interceptors](#interceptors) | 同步拦截器数组。 [Rcp\_SyncInterceptor](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor)[]。 |
| int [size](#size) | 数组大小。 |

## 结构体成员变量说明

### interceptors

```
Rcp_SyncInterceptor* Rcp_SyncInterceptorArray::interceptors
```

****描述****

同步拦截器数组。 [Rcp\_SyncInterceptor](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor)[]。

### size

```
int Rcp_SyncInterceptorArray::size
```

****描述****

数组大小。
