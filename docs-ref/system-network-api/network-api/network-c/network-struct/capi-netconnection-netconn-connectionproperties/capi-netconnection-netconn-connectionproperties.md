---
title: "NetConn_ConnectionProperties"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-connectionproperties
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-connectionproperties
---

# NetConn\_ConnectionProperties

```
typedef struct NetConn_ConnectionProperties {...} NetConn_ConnectionProperties
```

## 概述

网络连接信息。

****起始版本：**** 11

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char ifaceName[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 网络接口的名称。 |
| char domain[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 网络连接的域名信息。 |
| char tcpBufferSizes[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | TCP缓冲区大小。 |
| uint16\_t mtu | MTU。 |
| [NetConn\_NetAddr](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netaddr/capi-netconnection-netconn-netaddr) netAddrList[[NETCONN\_MAX\_ADDR\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 地址列表。 |
| int32\_t netAddrListSize | 地址列表的实际size。 |
| [NetConn\_NetAddr](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netaddr/capi-netconnection-netconn-netaddr) dnsList[[NETCONN\_MAX\_ADDR\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | DNS列表。 |
| int32\_t dnsListSize | DNS列表的实际size。 |
| [NetConn\_Route](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-route/capi-netconnection-netconn-route) routeList[[NETCONN\_MAX\_ROUTE\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 路由列表。 |
| int32\_t routeListSize | 路由列表的实际大小。 |
| [NetConn\_HttpProxy](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-httpproxy/capi-netconnection-netconn-httpproxy) httpProxy | HTTP代理信息。 |
