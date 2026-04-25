---
title: "Http_Response"
sidebar_position: 31
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-response
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-response
---

# Http\_Response

```
typedef struct Http_Response {...} Http_Response
```

## 概述

定义HTTP响应的结构体。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Http\_Buffer](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-buffer/capi-netstack-http-buffer) body | HTTP请求响应的数据，参考[Http\_Buffer](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-buffer/capi-netstack-http-buffer)。 |
| [Http\_ResponseCode](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_responsecode) responseCode | HTTP请求响应码，参考[Http\_ResponseCode](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_responsecode)。 |
| [Http\_Headers](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers) \*headers | HTTP响应的头，指向Http\_Headers的指针，参考[Http\_Headers](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers)。 |
| char \*cookies | HTTP响应Cookies。 |
| [Http\_PerformanceTiming](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-performancetiming/capi-netstack-http-performancetiming) \*performanceTiming | HTTP响应时间信息，指向Http\_PerformanceTiming的指针，参考[Http\_PerformanceTiming](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-performancetiming/capi-netstack-http-performancetiming)。 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [void (\*destroyResponse)(struct Http\_Response \*\*response)](#destroyresponse) | 销毁HTTP响应的回调函数 |

## 成员函数说明

### destroyResponse()

```
void (*destroyResponse)(struct Http_Response **response)
```

****描述****

销毁HTTP响应的回调函数

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| struct [Http\_Response](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response) \*\*response | 要销毁的HTTP响应，指向Http\_Response的指针，参考[Http\_Response](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response)。 |
