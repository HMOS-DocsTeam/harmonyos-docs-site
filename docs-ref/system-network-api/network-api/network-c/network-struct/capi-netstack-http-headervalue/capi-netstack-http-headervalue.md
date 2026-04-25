---
title: "Http_HeaderValue"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headervalue
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-headervalue
---

# Http\_HeaderValue

```
typedef struct Http_HeaderValue {...} Http_HeaderValue
```

## 概述

请求或者响应的标头映射的值类型。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*value | 标头键值对的值。 |
| struct Http\_HeaderValue \*next | 链式存储。指向下一个Http\_HeaderValue。 |
