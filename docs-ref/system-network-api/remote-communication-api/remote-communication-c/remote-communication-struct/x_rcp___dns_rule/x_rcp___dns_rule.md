---
title: "Rcp_DnsRule"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___dns_rule
---

# Rcp\_DnsRule

## 概述

DNS规则配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_DnsRuleType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsruletype)[type](#type) | 表示union中使用的数据类型。 |
| union {  [Rcp\_DnsServers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers) \* [dnsServers](#dnsservers)  [Rcp\_StaticDnsRule](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule) \* [staticDnsRule](#staticdnsrule)  [Rcp\_DynamicDnsRuleFunction](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dynamicdnsrulefunction) [dynamicDnsRule](#dynamicdnsrule)  } | dnsServers：DNS服务器。  staticDnsRule：静态DNS规则。  dynamicDnsRule：动态DNS规则。 |

## 结构体成员变量说明

### dnsServers

```
Rcp_DnsServers* Rcp_DnsRule::dnsServers
```

****描述****

DNS服务器。

### dynamicDnsRule

```
Rcp_DynamicDnsRuleFunction Rcp_DnsRule::dynamicDnsRule
```

****描述****

动态DNS规则。

### staticDnsRule

```
Rcp_StaticDnsRule* Rcp_DnsRule::staticDnsRule
```

****描述****

静态DNS规则。

### type

```
Rcp_DnsRuleType Rcp_DnsRule::type
```

****描述****

表示union中使用的数据类型。
