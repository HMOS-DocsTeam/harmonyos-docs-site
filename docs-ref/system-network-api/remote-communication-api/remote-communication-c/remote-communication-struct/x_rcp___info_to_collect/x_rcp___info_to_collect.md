---
title: "Rcp_InfoToCollect"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___info_to_collect
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___info_to_collect
---

# Rcp\_InfoToCollect

## 概述

指定要收集的请求处理事件。可以通过响应对象检查收集的事件。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool [textual](#textual) | 是否收集未分类的文本事件。默认值为false。 |
| bool [incomingHeader](#incomingheader) | 是否收集传入HTTP标头事件。默认值为false。 |
| bool [outgoingHeader](#outgoingheader) | 是否收集传出HTTP标头事件。默认值为false。 |
| bool [incomingData](#incomingdata) | 是否收集有关传入HTTP数据的事件。默认值为false。 |
| bool [outgoingData](#outgoingdata) | 是否收集有关传出HTTP数据的事件。默认值为false。 |
| bool [incomingSslData](#incomingssldata) | 是否收集传入的SSL/TLS事件。默认值为false。 |
| bool [outgoingSslData](#outgoingssldata) | 是否收集传出的SSL/TLS事件。默认值为false。 |

## 结构体成员变量说明

### incomingData

```
bool Rcp_InfoToCollect::incomingData
```

****描述****

是否收集有关传入HTTP数据的事件。默认值为false。

### incomingHeader

```
bool Rcp_InfoToCollect::incomingHeader
```

****描述****

是否收集传入HTTP标头事件。默认值为false。

### incomingSslData

```
bool Rcp_InfoToCollect::incomingSslData
```

****描述****

是否收集传入的SSL/TLS事件。默认值为false。

### outgoingData

```
bool Rcp_InfoToCollect::outgoingData
```

****描述****

是否收集有关传出HTTP数据的事件。默认值为false。

### outgoingHeader

```
bool Rcp_InfoToCollect::outgoingHeader
```

****描述****

是否收集传出HTTP标头事件。默认值为false。

### outgoingSslData

```
bool Rcp_InfoToCollect::outgoingSslData
```

****描述****

是否收集传出的SSL/TLS事件。默认值为false。

### textual

```
bool Rcp_InfoToCollect::textual
```

****描述****

是否收集未分类的文本事件。默认值为false。
