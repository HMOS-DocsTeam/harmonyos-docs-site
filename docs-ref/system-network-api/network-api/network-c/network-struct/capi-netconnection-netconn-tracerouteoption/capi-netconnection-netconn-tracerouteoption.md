---
title: "NetConn_TraceRouteOption"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-tracerouteoption
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-tracerouteoption
---

# NetConn\_TraceRouteOption

```
typedef struct NetConn_TraceRouteOption {...} NetConn_TraceRouteOption
```

## 概述

定义网络跟踪路由选项。

****起始版本：**** 20

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t maxJumpNumber | 探测结果最大跳数，需要和TraceRouteInfo设置一致，最大可设置30跳，默认为30跳。 |
| NetConn\_PacketsType packetsType | 探测包协议类型，默认为NETCONN\_PACKETS\_ICMP。 |
