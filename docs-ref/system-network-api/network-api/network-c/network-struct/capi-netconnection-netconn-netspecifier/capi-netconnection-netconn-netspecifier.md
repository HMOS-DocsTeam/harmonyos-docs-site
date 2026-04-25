---
title: "NetConn_NetSpecifier"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netspecifier
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-netspecifier
---

# NetConn\_NetSpecifier

```
typedef struct NetConn_NetSpecifier {...} NetConn_NetSpecifier
```

## 概述

网络的特征集。

****起始版本：**** 12

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetConn\_NetCapabilities](/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netcapabilities/capi-netconnection-netconn-netcapabilities) caps | 网络能力集。 |
| char \*bearerPrivateIdentifier | 网络标识符。 |
