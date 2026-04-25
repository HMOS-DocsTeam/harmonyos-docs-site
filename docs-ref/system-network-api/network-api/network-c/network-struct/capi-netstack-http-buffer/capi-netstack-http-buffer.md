---
title: "Http_Buffer"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-buffer
---

# Http\_Buffer

```
typedef struct Http_Buffer {...} Http_Buffer
```

## 概述

HTTP缓存结构体。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \*buffer | 缓存区数据。 |
| uint32\_t length | 缓存区长度。 |
