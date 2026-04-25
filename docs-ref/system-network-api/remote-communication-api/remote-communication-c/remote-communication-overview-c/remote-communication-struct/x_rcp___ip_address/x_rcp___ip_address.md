---
title: "Rcp_IpAddress"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___ip_address
---

# Rcp\_IpAddress

## 概述

指定静态DNS规则使用的IP地址组。用于[Rcp\_StaticDnsRuleItem](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item)。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char [ipAddress](#ipaddress) [[RCP\_IP\_MAX\_LEN](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ip_max_len)] | IP地址。 |
| struct [Rcp\_IpAddress](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address) \* [next](#next) | 链式存储。指向下一个[Rcp\_IpAddress](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address)。 |

## 结构体成员变量说明

### ipAddress

```
char Rcp_IpAddress::ipAddress[RCP_IP_MAX_LEN]
```

****描述****

ip地址。

### next

```
struct Rcp_IpAddress* Rcp_IpAddress::next
```

****描述****

链式存储。指向下一个[Rcp\_IpAddress](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address)。
