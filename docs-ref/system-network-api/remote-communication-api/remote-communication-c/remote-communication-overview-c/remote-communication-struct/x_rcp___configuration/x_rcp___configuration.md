---
title: "Rcp_Configuration"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___configuration
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___configuration
---

# Rcp\_Configuration

## 概述

请求配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_TransferConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___transfer_configuration/x_rcp___transfer_configuration)[transferConfiguration](#transferconfiguration) | 传输配置。 |
| [Rcp\_TracingConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration)[tracingConfiguration](#tracingconfiguration) | 请求追踪配置。 |
| [Rcp\_ProxyConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___proxy_configuration/x_rcp___proxy_configuration)[proxyConfiguration](#proxyconfiguration) | 代理配置。 |
| [Rcp\_DnsConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration)[dnsConfiguration](#dnsconfiguration) | DNS配置。 |
| [Rcp\_SecurityConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration)[securityConfiguration](#securityconfiguration) | 安全配置。 |
| void \* [configurationPrivate](#configurationprivate) | 可扩展字段。 |

## 结构体成员变量说明

### configurationPrivate

```
void* Rcp_Configuration::configurationPrivate
```

****描述****

可扩展字段。

### dnsConfiguration

```
Rcp_DnsConfiguration Rcp_Configuration::dnsConfiguration
```

****描述****

DNS配置。

### proxyConfiguration

```
Rcp_ProxyConfiguration Rcp_Configuration::proxyConfiguration
```

****描述****

代理配置。

### securityConfiguration

```
Rcp_SecurityConfiguration Rcp_Configuration::securityConfiguration
```

****描述****

安全配置。

### tracingConfiguration

```
Rcp_TracingConfiguration Rcp_Configuration::tracingConfiguration
```

****描述****

请求追踪配置。

### transferConfiguration

```
Rcp_TransferConfiguration Rcp_Configuration::transferConfiguration
```

****描述****

传输配置。
