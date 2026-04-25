---
title: "NetConn_NetAddr"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netaddr
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-netaddr
---

# NetConn\_NetAddr

```
typedef struct NetConn_NetAddr {...} NetConn_NetAddr
```

## 概述

网络地址。

****起始版本：**** 11

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t family | 网络地址族。 |
| uint8\_t prefixlen | 前缀长度。 |
| uint8\_t port | 端口号。 |
| char address[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 地址。 |
