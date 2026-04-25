---
title: "Rcp_TracingConfiguration"
sidebar_position: 47
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___tracing_configuration
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___tracing_configuration
---

# Rcp\_TracingConfiguration

## 概述

请求追踪配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool [verbose](#verbose) | 请求运行时是否记录详细日志。默认值为false。如果设置了infoToCollect中的选项，则自动启用。 |
| [Rcp\_InfoToCollect](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___info_to_collect/x_rcp___info_to_collect)[infoToCollect](#infotocollect) | 指定要收集的请求处理事件。可以通过响应对象检查收集的事件。 |
| bool [collectTimeInfo](#collecttimeinfo) | 是否收集请求计时信息。默认值为false。 |
| [Rcp\_EventsHandler](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler)[httpEventsHandler](#httpeventshandler) | 监听不同HTTP事件的回调函数。 |

## 结构体成员变量说明

### collectTimeInfo

```
bool Rcp_TracingConfiguration::collectTimeInfo
```

****描述****

是否收集请求计时信息。默认值为false。

### httpEventsHandler

```
Rcp_EventsHandler Rcp_TracingConfiguration::httpEventsHandler
```

****描述****

监听不同HTTP事件的回调函数。

### infoToCollect

```
Rcp_InfoToCollect Rcp_TracingConfiguration::infoToCollect
```

****描述****

指定要收集的请求处理事件。可以通过响应对象检查收集的事件。

### verbose

```
bool Rcp_TracingConfiguration::verbose
```

****描述****

请求运行时是否记录详细日志。默认值为false。如果设置了infoToCollect中的选项，则自动启用。
