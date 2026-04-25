---
title: "NetConn_NetCapabilities"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netcapabilities
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-netcapabilities
---

# NetConn\_NetCapabilities

```
typedef struct NetConn_NetCapabilities {...} NetConn_NetCapabilities
```

## 概述

网络能力集。

****起始版本：**** 11

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t linkUpBandwidthKbps | 上行带宽。 |
| uint32\_t linkDownBandwidthKbps | 下行带宽。 |
| [NetConn\_NetCap](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#netconn_netcap) netCaps[[NETCONN\_MAX\_CAP\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 网络能力列表。 |
| int32\_t netCapsSize | 网络能力列表的实际size。 |
| [NetConn\_NetBearerType](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h#netconn_netbearertype) bearerTypes[[NETCONN\_MAX\_BEARER\_TYPE\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 承载类型列表 |
| int32\_t bearerTypesSize | 承载类型列表的实际size |
