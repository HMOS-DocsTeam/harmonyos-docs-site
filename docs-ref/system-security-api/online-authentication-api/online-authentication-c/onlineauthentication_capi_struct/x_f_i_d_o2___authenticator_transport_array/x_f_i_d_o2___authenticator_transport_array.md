---
title: "FIDO2_AuthenticatorTransportArray"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_transport_array
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___authenticator_transport_array
---

# FIDO2\_AuthenticatorTransportArray

## 概述

认证器传输方式数组。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [transportNum](#transportnum) | 传输方式数量。 |
| [FIDO2\_AuthenticatorTransport](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatortransport-1) \* [transports](#transports) | 定义身份认证器访问类型（USB、NFC、蓝牙）。 |

## 结构体成员变量说明

### transportNum

```
uint32_t FIDO2_AuthenticatorTransportArray::transportNum
```

****描述****

传输方式数量。

### transports

```
FIDO2_AuthenticatorTransport* FIDO2_AuthenticatorTransportArray::transports
```

****描述****

定义身份认证器访问类型（USB、NFC、蓝牙）。
