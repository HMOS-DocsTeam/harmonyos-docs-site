---
title: "Rcp_IpAndPort"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_and_port
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___ip_and_port
---

# Rcp\_IpAndPort

## 概述

该接口用在[Rcp\_DnsServers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers)中，表示一个DNS服务器的地址和端口。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char [ip](#ip) [[RCP\_IP\_MAX\_LEN](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ip_max_len)] | IPv4或IPv6地址。 |
| uint16\_t [port](#port) | 表示端口。取值范围：[0, 65535]。 |

## 结构体成员变量说明

### ip

```
char Rcp_IpAndPort::ip[RCP_IP_MAX_LEN]
```

****描述****

IPv4或IPv6地址。

### port

```
uint16_t Rcp_IpAndPort::port
```

****描述****

表示端口。取值范围：[0, 65535]。
