---
title: "Rcp_OnDataReceiveCallback"
sidebar_position: 26
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_data_receive_callback
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___on_data_receive_callback
---

# Rcp\_OnDataReceiveCallback

## 概述

接收到数据时回调。[Rcp\_EventsHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler)中的配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_OnDataReceiveCallbackFunc](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ondatareceivecallbackfunc)[callback](#callback) | 接收数据回调函数。 |
| void \* [usrObject](#usrobject) | 用户定义的对象，在回调函数中使用。 |

## 结构体成员变量说明

### callback

```
Rcp_OnDataReceiveCallbackFunc Rcp_OnDataReceiveCallback::callback
```

****描述****

接收数据回调函数。

### usrObject

```
void* Rcp_OnDataReceiveCallback::usrObject
```

****描述****

用户定义的对象，在回调函数中使用。
