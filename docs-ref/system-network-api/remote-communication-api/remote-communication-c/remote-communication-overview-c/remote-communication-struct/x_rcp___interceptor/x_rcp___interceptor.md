---
title: "Rcp_Interceptor"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___interceptor
---

# Rcp\_Interceptor

## 概述

异步拦截器。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t(\* [intercept](#intercept) )([Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request) \*request, const [Rcp\_RequestHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requesthandler) \*next, const [Rcp\_ResponseCallbackObject](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object) \*responseCallback) | 指向异步拦截器函数的指针。用户若需要使用拦截器，需实现该函数。 |

## 结构体成员变量说明

### intercept

```
uint32_t(* Rcp_Interceptor::intercept) (Rcp_Request *request, const Rcp_RequestHandler *next, const Rcp_ResponseCallbackObject *responseCallback)
```

****描述****

指向异步拦截器函数的指针。用户若需要使用拦截器，需实现该函数。

****起始版本：**** 5.0.0(12)

****参数:****

| 名称 | 描述 |
| --- | --- |
| request | 指向[Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request)的指针。 |
| next | 指向下一个异步处理器的指针[Rcp\_RequestHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requesthandler)。 |
| responseCallback | 指向[Rcp\_ResponseCallbackObject](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object)的指针。 |

****返回：****

uint32\_t 返回表示拦截器的返回值。
