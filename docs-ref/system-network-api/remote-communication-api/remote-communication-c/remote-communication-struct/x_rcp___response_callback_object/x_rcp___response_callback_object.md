---
title: "Rcp_ResponseCallbackObject"
sidebar_position: 35
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_callback_object
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___response_callback_object
---

# Rcp\_ResponseCallbackObject

## 概述

响应回调结构体。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_ResponseCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_responsecallback)[callback](#callback) | 响应回调函数。 |
| void \* [usrCtx](#usrctx) | 用户上下文。 |

## 结构体成员变量说明

### callback

```
Rcp_ResponseCallback Rcp_ResponseCallbackObject::callback
```

****描述****

响应回调函数。

### usrCtx

```
void* Rcp_ResponseCallbackObject::usrCtx
```

****描述****

用户上下文。
