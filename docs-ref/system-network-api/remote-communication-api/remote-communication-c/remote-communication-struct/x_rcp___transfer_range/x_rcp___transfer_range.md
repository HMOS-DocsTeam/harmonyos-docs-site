---
title: "Rcp_TransferRange"
sidebar_position: 49
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___transfer_range
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___transfer_range
---

# Rcp\_TransferRange

## 概述

HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int64\_t [from](#from) | 传输起始位置。 |
| bool [hasZeroFrom](#haszerofrom) | 是否从零开始。 |
| int64\_t [to](#to) | 传输结束位置。 |
| bool [hasZeroTo](#haszeroto) | 是否以零结束。 |
| struct [Rcp\_TransferRange](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range) \* [next](#next) | 链式存储。指向下一个[Rcp\_TransferRange](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range)。 |

## 结构体成员变量说明

### from

```
int64_t Rcp_TransferRange::from
```

****描述****

传输起始位置。

### hasZeroFrom

```
bool Rcp_TransferRange::hasZeroFrom
```

****描述****

请求范围是否从零开始。

### hasZeroTo

```
bool Rcp_TransferRange::hasZeroTo
```

****描述****

是否以零结束。

### next

```
struct Rcp_TransferRange* Rcp_TransferRange::next
```

****描述****

链式存储。指向下一个[Rcp\_TransferRange](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range)。

### to

```
int64_t Rcp_TransferRange::to
```

****描述****

传输结束位置。
