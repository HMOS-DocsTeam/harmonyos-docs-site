---
title: "Http_Proxy"
sidebar_position: 28
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-proxy
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-http-proxy
---

# Http\_Proxy

```
typedef struct Http_Proxy {...} Http_Proxy
```

## 概述

代理配置结构体。

****起始版本：**** 20

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_http\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Http\_ProxyType](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_proxytype) proxyType | 代理配置类型，参考[Http\_ProxyType](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_proxytype)。 |
| [Http\_CustomProxy](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-customproxy/capi-netstack-http-customproxy) customProxy | 自定义代理配置信息，参考[Http\_CustomProxy](/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-customproxy/capi-netstack-http-customproxy)。 |
