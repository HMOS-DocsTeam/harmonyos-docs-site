---
title: "NetStack_Certificates"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-netstack-certificates
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-netstack-certificates
---

# NetStack\_Certificates

```
typedef struct NetStack_Certificates {...} NetStack_Certificates
```

## 概述

定义证书信息。

****起始版本：**** 12

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_ssl\_c\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-type-h/capi-net-ssl-c-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*\*content | 证书的PEM内容。 |
| size\_t length | 证书数量。 |
