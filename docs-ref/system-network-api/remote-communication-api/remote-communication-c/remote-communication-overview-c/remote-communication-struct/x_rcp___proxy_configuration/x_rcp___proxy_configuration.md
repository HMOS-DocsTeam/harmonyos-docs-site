---
title: "Rcp_ProxyConfiguration"
sidebar_position: 30
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___proxy_configuration
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___proxy_configuration
---

# Rcp\_ProxyConfiguration

## 概述

代理配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_ProxyType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytype)[proxyType](#proxytype) | 区分请求使用的代理类型。 |
| [Rcp\_WebProxy](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy)[customProxy](#customproxy) | 自定义代理配置，参见[Rcp\_WebProxy](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy)。 |

## 结构体成员变量说明

### customProxy

```
Rcp_WebProxy Rcp_ProxyConfiguration::customProxy
```

****描述****

自定义代理配置，参见[Rcp\_WebProxy](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy)。

### proxyType

```
Rcp_ProxyType Rcp_ProxyConfiguration::proxyType
```

****描述****

区分请求使用的代理类型。
