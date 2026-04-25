---
title: "Rcp_Exclusions"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___exclusions
---

# Rcp\_Exclusions

## 概述

代理配置中用于过滤不使用代理的urls。

如果[Rcp\_Request.url](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#url)匹配[Rcp\_Exclusions](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions)规则，则[Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request)不会使用代理。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_ExclusionsValueType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusionsvaluetype)[type](#type) | 表示union中使用的数据类型。 |
| union {  [Rcp\_Urls](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___urls/x_rcp___urls) \* [urls](#urls)  [Rcp\_ExclusionFunction](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusionfunction) [exclusionFunction](#exclusionfunction)  } | Urls。链式存储url。  回调函数。通过回调函数过滤url。 |

## 结构体成员变量说明

### exclusionFunction

```
Rcp_ExclusionFunction Rcp_Exclusions::exclusionFunction
```

****描述****

通过回调过滤。

### type

```
Rcp_ExclusionsValueType Rcp_Exclusions::type
```

****描述****

表示union中使用的数据类型。

### urls

```
Rcp_Urls* Rcp_Exclusions::urls
```

****描述****

Urls。
