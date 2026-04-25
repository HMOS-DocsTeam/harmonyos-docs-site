---
title: "NetConn_NetConnCallback"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netconncallback
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-netconncallback
---

# NetConn\_NetConnCallback

```
typedef struct NetConn_NetConnCallback {...} NetConn_NetConnCallback
```

## 概述

网络状态监听回调集合，所有回调事件需全部注册，无需关注的回调可以设为空实现。

****起始版本：**** 12

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_NetConn\_NetworkAvailable](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#oh_netconn_networkavailable) onNetworkAvailable | 网络可用回调。 |
| [OH\_NetConn\_NetCapabilitiesChange](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#oh_netconn_netcapabilitieschange) onNetCapabilitiesChange | 网络能力集变更回调。 |
| [OH\_NetConn\_NetConnectionPropertiesChange](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#oh_netconn_netconnectionpropertieschange) onConnetionProperties | 网络连接属性变更回调。 |
| [OH\_NetConn\_NetLost](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#oh_netconn_netlost) onNetLost | 网络断开回调。 |
| [OH\_NetConn\_NetUnavailable](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#oh_netconn_netunavailable) onNetUnavailable | 网络不可用回调, 在指定的超时时间内网络未激活时触发该回调，如果未设置超时时间则不会触发该回调。 |
| [OH\_NetConn\_NetBlockStatusChange](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#oh_netconn_netblockstatuschange) onNetBlockStatusChange | 网络阻塞状态变更回调。 |
