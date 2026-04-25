---
title: "Rcp_Timeout"
sidebar_position: 46
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___timeout
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___timeout
---

# Rcp\_Timeout

## 概述

请求的超时配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [connectMs](#connectms) | 连接超时时间。默认值为60000毫秒。 |
| uint32\_t [transferMs](#transferms) | 传输超时时间。默认值为60000毫秒。 |

## 结构体成员变量说明

### connectMs

```
uint32_t Rcp_Timeout::connectMs
```

****描述****

连接超时时间。默认值为60000毫秒。

### transferMs

```
uint32_t Rcp_Timeout::transferMs
```

****描述****

传输超时时间。默认值为60000毫秒。
