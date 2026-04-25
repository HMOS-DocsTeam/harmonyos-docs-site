---
title: "NetConn_HttpProxy"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-httpproxy
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-httpproxy
---

# NetConn\_HttpProxy

```
typedef struct NetConn_HttpProxy {...} NetConn_HttpProxy
```

## 概述

代理配置信息。

****起始版本：**** 11

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char host[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 主机名。 |
| char exclusionList[[NETCONN\_MAX\_EXCLUSION\_SIZE]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`)[[NETCONN\_MAX\_STR\_LEN]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 代理服务器的排除列表。 |
| int32\_t exclusionListSize | 排除列表的实际大小。 |
| uint16\_t port | 端口号。 |
