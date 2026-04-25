---
title: "Rcp_DnsConfiguration"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___dns_configuration
---

# Rcp\_DnsConfiguration

## 概述

DNS解析配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_DnsRule](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule) \* [dnsRules](#dnsrules) | DNS规则配置。 |
| [Rcp\_DnsOverHttps](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_over_https/x_rcp___dns_over_https)[dnsOverHttps](#dnsoverhttps) | DOH配置。 |

## 结构体成员变量说明

### dnsOverHttps

```
Rcp_DnsOverHttps Rcp_DnsConfiguration::dnsOverHttps
```

****描述****

DOH配置。

### dnsRules

```
Rcp_DnsRule* Rcp_DnsConfiguration::dnsRules
```

****描述****

DNS规则配置。

[Rcp\_DnsServers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers): 表示优先使用指定的dns服务器解析主机名。

[Rcp\_StaticDnsRule](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule): 表示如果主机名匹配，则优先使用指定的地址。

[Rcp\_DynamicDnsRuleFunction](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dynamicdnsrulefunction): 表示优先使用函数中返回的地址。
