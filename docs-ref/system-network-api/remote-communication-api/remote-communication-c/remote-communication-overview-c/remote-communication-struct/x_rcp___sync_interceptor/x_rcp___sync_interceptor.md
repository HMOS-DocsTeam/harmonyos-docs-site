---
title: "Rcp_SyncInterceptor"
sidebar_position: 43
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___sync_interceptor
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___sync_interceptor
---

# Rcp\_SyncInterceptor

## 概述

同步拦截器。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_Response](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response) \*(\* [intercept](#intercept) )([Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request) \*request, const [Rcp\_SyncRequestHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncrequesthandler) \*next, uint32\_t \*errCode) | 指向同步拦截器函数的指针。用户若需要使用拦截器，需实现该函数。 |

## 结构体成员变量说明

### intercept

```
Rcp_Response*(* Rcp_SyncInterceptor::intercept) (Rcp_Request *request, const Rcp_SyncRequestHandler *next, uint32_t *errCode)
```

****描述****

指向同步拦截器函数的指针。用户若需要使用拦截器，需实现该函数。

****起始版本：**** 5.0.0(12)

****参数:****

| 名称 | 描述 |
| --- | --- |
| request | 指向[Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request)的指针。 |
| next | 指向下一个同步处理器的指针[Rcp\_SyncRequestHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncrequesthandler)。 |
| errCode | 表示拦截器的返回值。 |

****返回：****

Rcp\_Response\* 返回的响应。
