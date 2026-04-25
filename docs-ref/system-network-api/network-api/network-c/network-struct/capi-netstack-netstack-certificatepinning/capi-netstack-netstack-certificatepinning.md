---
title: "NetStack_CertificatePinning"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-netstack-certificatepinning
kit: 系统
last_updated: "2026-04-22"
slug: capi-netstack-netstack-certificatepinning
---

# NetStack\_CertificatePinning

```
typedef struct NetStack_CertificatePinning {...} NetStack_CertificatePinning
```

## 概述

定义证书锁定信息。

****起始版本：**** 12

****相关模块：**** [netstack](/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack)

****所在头文件：**** [net\_ssl\_c\_type.h](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-type-h/capi-net-ssl-c-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NetStack\_CertificatePinningKind](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-type-h/capi-net-ssl-c-type-h#netstack_certificatepinningkind) kind | 证书锁定类型。 |
| [NetStack\_HashAlgorithm](/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-type-h/capi-net-ssl-c-type-h#netstack_hashalgorithm) hashAlgorithm | 哈希算法。 |
| char \*publicKeyHash | 哈希值。 |
