---
title: "Rcp_WebProxy"
sidebar_position: 51
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___web_proxy
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___web_proxy
---

# Rcp\_WebProxy

## 概述

自定义代理配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \* [url](#url) | 代理服务器的URL。如果您没有明确设置端口，则端口将为1080。 |
| [Rcp\_ProxyTunnelMode](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytunnelmode)[createTunnel](#createtunnel) | 用于控制何时创建代理隧道。 |
| [Rcp\_Exclusions](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions)[exclusions](#exclusions) | 如果[Rcp\_Request.url](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#url)匹配[Rcp\_Exclusions](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions)规则，则[Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request)将不使用代理。 |
| [Rcp\_SecurityConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration)[securityConfiguration](#securityconfiguration) | 代理中的[Rcp\_SecurityConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration)。 |

## 结构体成员变量说明

### createTunnel

```
Rcp_ProxyTunnelMode Rcp_WebProxy::createTunnel
```

****描述****

用于控制何时创建代理隧道。

### exclusions

```
Rcp_Exclusions Rcp_WebProxy::exclusions
```

****描述****

如果[Rcp\_Request.url](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#url)匹配[Rcp\_Exclusions](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions)规则，则[Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request)将不使用代理。

### securityConfiguration

```
Rcp_SecurityConfiguration Rcp_WebProxy::securityConfiguration
```

****描述****

代理中的[Rcp\_SecurityConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration)。

### url

```
const char* Rcp_WebProxy::url
```

****描述****

代理服务器的URL。如果您没有明确设置端口，则端口将为1080。
