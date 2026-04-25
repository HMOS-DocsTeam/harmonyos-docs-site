---
title: "NetConn_TraceRouteInfo"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-tracerouteinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-tracerouteinfo
---

# NetConn\_TraceRouteInfo

```
typedef struct NetConn_TraceRouteInfo {...} NetConn_TraceRouteInfo
```

## 概述

定义跟踪路由信息。

****起始版本：**** 20

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t jumpNo | 跳数。 |
| char address[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 主机名或地址。 |
| uint32\_t rtt[[NETCONN\_MAX\_RTT\_NUM]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 往返时间（单位：毫秒)，包含最大、最小、平均、标准差。 |
