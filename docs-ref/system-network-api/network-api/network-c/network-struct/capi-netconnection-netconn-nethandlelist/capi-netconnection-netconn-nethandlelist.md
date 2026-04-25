---
title: "NetConn_NetHandleList"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-nethandlelist
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-nethandlelist
---

# NetConn\_NetHandleList

```
typedef struct NetConn_NetHandleList {...} NetConn_NetHandleList
```

## 概述

网络列表。

****起始版本：**** 11

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetConn\_NetHandle](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle) netHandles[[NETCONN\_MAX\_NET\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | netHandle列表。 |
| int32\_t netHandleListSize | netHandleList的实际大小。 |
