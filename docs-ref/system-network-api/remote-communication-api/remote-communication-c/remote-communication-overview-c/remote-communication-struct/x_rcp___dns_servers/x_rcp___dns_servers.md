---
title: "Rcp_DnsServers"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___dns_servers
---

# Rcp\_DnsServers

## 概述

DNS服务器。[Rcp\_DnsConfiguration.dnsRules](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration#dnsrules)中的类型之一。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_IpAndPort](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___ip_and_port/x_rcp___ip_and_port)[ipAndPort](#ipandport) | IP和端口。 |
| struct [Rcp\_DnsServers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers) \* [next](#next) | 链式存储。指向下一个[Rcp\_DnsServers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers)的指针。 |

## 结构体成员变量说明

### ipAndPort

```
Rcp_IpAndPort Rcp_DnsServers::ipAndPort
```

****描述****

IP和端口。

### next

```
struct Rcp_DnsServers* Rcp_DnsServers::next
```

****描述****

链式存储。指向下一个[Rcp\_DnsServers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers)的指针。
