---
title: "Rcp_OnVoidCallback"
sidebar_position: 29
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_void_callback
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___on_void_callback
---

# Rcp\_OnVoidCallback

## 概述

在[Rcp\_EventsHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler)中配置的数据结束或已取消事件的回调配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_OnVoidCallbackFunc](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onvoidcallbackfunc)[callback](#callback) | DataEnd或Canceled事件回调函数。 |
| void \* [usrObject](#usrobject) | 用户定义的对象，在回调函数中使用。 |

## 结构体成员变量说明

### callback

```
Rcp_OnVoidCallbackFunc Rcp_OnVoidCallback::callback
```

****描述****

DataEnd或Canceled事件回调函数。

### usrObject

```
void* Rcp_OnVoidCallback::usrObject
```

****描述****

用户定义的对象，在回调函数中使用。
