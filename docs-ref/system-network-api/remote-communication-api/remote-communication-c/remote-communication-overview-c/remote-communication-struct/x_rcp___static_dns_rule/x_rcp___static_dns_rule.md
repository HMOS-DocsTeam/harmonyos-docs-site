---
title: "Rcp_StaticDnsRule"
sidebar_position: 41
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___static_dns_rule
---

# Rcp\_StaticDnsRule

## 概述

静态DNS规则。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_StaticDnsRuleItem](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item)[staticDnsRule](#staticdnsrule) | 单个静态DNS规则。 |
| struct [Rcp\_StaticDnsRule](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule) \* [next](#next) | 链式存储。指向下一个[Rcp\_StaticDnsRule](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule)的指针。 |

## 结构体成员变量说明

### next

```
struct Rcp_StaticDnsRule* Rcp_StaticDnsRule::next
```

****描述****

链式存储。指向下一个[Rcp\_StaticDnsRule](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule)的指针。

### staticDnsRule

```
Rcp_StaticDnsRuleItem Rcp_StaticDnsRule::staticDnsRule
```

****描述****

单个静态DNS规则。
