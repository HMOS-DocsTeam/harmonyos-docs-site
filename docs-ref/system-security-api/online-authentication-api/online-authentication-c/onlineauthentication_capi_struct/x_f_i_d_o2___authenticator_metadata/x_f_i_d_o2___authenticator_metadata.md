---
title: "FIDO2_AuthenticatorMetadata"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_metadata
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___authenticator_metadata
---

# FIDO2\_AuthenticatorMetadata

## 概述

认证器元数据。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff) [aaguid](#aaguid) | 认证器的aaguid。 |
| [FIDO2\_Uvm](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_uvm-1) [uvm](#uvm) | 支持的认证器类型。 |
| bool [isAvailable](#isavailable) | 认证器是否可用。 |

## 结构体成员变量说明

### aaguid

```
Uint8Buff FIDO2_AuthenticatorMetadata::aaguid
```

****描述****

认证器的aaguid。

### isAvailable

```
bool FIDO2_AuthenticatorMetadata::isAvailable
```

****描述****

认证器是否可用。如果返回true，则表示认证器可用；返回false，表示认证器不可用。

### uvm

```
FIDO2_Uvm FIDO2_AuthenticatorMetadata::uvm
```

****描述****

支持的认证器类型。
