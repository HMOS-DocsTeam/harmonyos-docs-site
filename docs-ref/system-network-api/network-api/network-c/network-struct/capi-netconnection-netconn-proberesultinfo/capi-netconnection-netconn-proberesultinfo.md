---
title: "NetConn_ProbeResultInfo"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-proberesultinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-netconnection-netconn-proberesultinfo
---

# NetConn\_ProbeResultInfo

```
typedef struct NetConn_ProbeResultInfo {...} NetConn_ProbeResultInfo
```

## 概述

定义探测结果信息。

****起始版本：**** 20

****相关模块：**** [NetConnection](/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection)

****所在头文件：**** [net\_connection\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t lossRate | 丢包率，百分制，值100表示100%丢包；50表示50%丢包。 |
| uint32\_t rtt[[NETCONN\_MAX\_RTT\_NUM]](`https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义`) | 时延结果，包含最小、最大、平均、标准差。 |
