---
title: "Rcp_DebugInfo"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___debug_info
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___debug_info
---

# Rcp\_DebugInfo

## 概述

描述存储在[Rcp\_Response](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response)中的调试信息的结构。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_DebugEvent](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_debugevent)[type](#type) | 调试事件类型。 |
| [Rcp\_Buffer](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer)[data](#data) | 调试信息。 |
| struct [Rcp\_DebugInfo](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info) \* [next](#next) | 链式存储。指向下一个[Rcp\_DebugInfo](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info)。 |

## 结构体成员变量说明

### data

```
Rcp_Buffer Rcp_DebugInfo::data
```

****描述****

调试信息。

### next

```
struct Rcp_DebugInfo* Rcp_DebugInfo::next
```

****描述****

链式存储。指向下一个[Rcp\_DebugInfo](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info)。

### type

```
Rcp_DebugEvent Rcp_DebugInfo::type
```

****描述****

调试事件类型。
