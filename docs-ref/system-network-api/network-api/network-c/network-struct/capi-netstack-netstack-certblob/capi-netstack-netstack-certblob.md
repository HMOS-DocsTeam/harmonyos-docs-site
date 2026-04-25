---
title: "NetStack_CertBlob"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-netstack-certblob
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-netstack-certblob
---

# NetStack\_CertBlob

```
struct NetStack_CertBlob {...}
```

## 概述

证书数据结构体。

****起始版本：**** 11

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_ssl\_c\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-type-h/capi-net-ssl-c-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| enum [NetStack\_CertType](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-type-h/capi-net-ssl-c-type-h#netstack_certtype) type | 证书类型。 |
| uint32\_t size | 证书内容长度。 |
| uint8\_t \*data | 证书内容。 |
