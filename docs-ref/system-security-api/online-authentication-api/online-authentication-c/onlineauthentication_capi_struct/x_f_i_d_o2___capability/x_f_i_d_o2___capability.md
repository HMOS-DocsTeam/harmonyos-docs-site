---
title: "FIDO2_Capability"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___capability
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___capability
---

# FIDO2\_Capability

## 概述

通行密钥能力的结构体。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_ClientCapability](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_clientcapability-1) [capability](#capability) | 通行密钥的能力。 |
| bool [isSupported](#issupported) | 是否支持。如果为true表示支持，false表示不支持。 |

## 结构体成员变量说明

### capability

```
FIDO2_ClientCapability FIDO2_Capability::capability
```

****描述****

通行密钥的能力。

### isSupported

```
bool FIDO2_Capability::isSupported
```

****描述****

是否支持。如果为true表示支持，false表示不支持。
