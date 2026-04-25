---
title: "Http_Request"
sidebar_position: 32
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-request
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-request
---

# Http\_Request

```
typedef struct Http_Request {...} Http_Request
```

## 概述

HTTP请求结构体。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t requestId | HTTP请求的ID。 |
| char \*url | HTTP请求的URL。 |
| [Http\_RequestOptions](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-requestoptions/capi-netstack-http-requestoptions) \*options | HTTP请求配置，指向Http\_RequestOptions的指针，参考[Http\_RequestOptions](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-requestoptions/capi-netstack-http-requestoptions)。 |
