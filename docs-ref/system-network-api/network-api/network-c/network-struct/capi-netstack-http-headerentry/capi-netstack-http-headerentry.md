---
title: "Http_HeaderEntry"
sidebar_position: 25
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headerentry
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-headerentry
---

# Http\_HeaderEntry

```
typedef struct Http_HeaderEntry {...} Http_HeaderEntry
```

## 概述

请求或者响应的标头的所有键值对。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*key | 请求或者响应的标头中的键。 |
| [Http\_HeaderValue](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headervalue/capi-netstack-http-headervalue) \*value | 请求或者响应的标头中的键对应的值，参考[Http\_HeaderValue](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headervalue/capi-netstack-http-headervalue)。 |
| struct Http\_HeaderEntry \*next | 链式存储。指向下一个Http\_HeaderEntry。 |
