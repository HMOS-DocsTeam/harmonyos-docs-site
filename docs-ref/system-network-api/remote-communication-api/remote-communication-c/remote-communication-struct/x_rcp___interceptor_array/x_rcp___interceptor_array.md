---
title: "Rcp_InterceptorArray"
sidebar_position: 22
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor_array
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___interceptor_array
---

# Rcp\_InterceptorArray

## 概述

异步拦截器数组。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_Interceptor](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor) \* [interceptors](#interceptors) | 异步拦截器数组。 [Rcp\_Interceptor](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor)[]。 |
| int [size](#size) | 数组大小。 |

## 结构体成员变量说明

### interceptors

```
Rcp_Interceptor* Rcp_InterceptorArray::interceptors
```

****描述****

异步拦截器数组。 [Rcp\_Interceptor](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor)[]。

### size

```
int Rcp_InterceptorArray::size
```

****描述****

数组大小。
