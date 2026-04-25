---
title: "Rcp_ConnectionConfiguration"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___connection_configuration
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___connection_configuration
---

# Rcp\_ConnectionConfiguration

## 概述

连接配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| long [maxConnectionsPerHost](#maxconnectionsperhost) | 每台主机的最大连接数。  取值范围：1~2147483647。  默认值：6。 |
| long [maxTotalConnections](#maxtotalconnections) | 最大总连接数。  取值范围：1~2147483647。  默认值为 64。 |
| long [maxCacheConnections](#maxcacheconnections) | 最大缓存连接数。  取值范围：1~2147483647。  默认值为 64。 |

## 结构体成员变量说明

### maxCacheConnections

```
long Rcp_ConnectionConfiguration::maxCacheConnections
```

****描述****

最大缓存连接数。

### maxConnectionsPerHost

```
long Rcp_ConnectionConfiguration::maxConnectionsPerHost
```

****描述****

每台主机的最大连接数。

### maxTotalConnections

```
long Rcp_ConnectionConfiguration::maxTotalConnections
```

****描述****

最大总连接数。范围由long决定。
