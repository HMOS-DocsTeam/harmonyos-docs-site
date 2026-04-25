---
title: "NetConn_Route"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-route
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-route
---

# NetConn\_Route

```
typedef struct NetConn_Route {...} NetConn_Route
```

## 概述

路由配置信息。

****起始版本：**** 11

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char iface[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 网络接口 |
| [NetConn\_NetAddr](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netaddr/capi-netconnection-netconn-netaddr) destination | 目标地址 |
| [NetConn\_NetAddr](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netaddr/capi-netconnection-netconn-netaddr) gateway | 网关地址 |
| int32\_t hasGateway | 是否存在网关 |
| int32\_t isDefaultRoute | 是否是默认路由 |
