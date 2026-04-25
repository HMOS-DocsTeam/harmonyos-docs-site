---
title: "FIDO2_PublicKeyCredentialDescriptor"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_credential_descriptor
---

# FIDO2\_PublicKeyCredentialDescriptor

## 概述

用于注册或认证凭据的参数。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_PublicKeyCredentialType](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialtype-1) [type](#type) | 凭证类型。 |
| [Uint8Buff](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff) [id](#id) | 凭据标识符。 |
| [FIDO2\_AuthenticatorTransportArray](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_transport_array/x_f_i_d_o2___authenticator_transport_array) [transports](#transports) | 定义身份认证器访问类型（USB、NFC、蓝牙）。 |

## 结构体成员变量说明

### id

```
Uint8Buff FIDO2_PublicKeyCredentialDescriptor::id
```

****描述****

凭据标识符。

### transports

```
FIDO2_AuthenticatorTransportArray FIDO2_PublicKeyCredentialDescriptor::transports
```

****描述****

定义身份认证器访问类型（USB、NFC、蓝牙）。

### type

```
FIDO2_PublicKeyCredentialType FIDO2_PublicKeyCredentialDescriptor::type
```

****描述****

凭证类型。
