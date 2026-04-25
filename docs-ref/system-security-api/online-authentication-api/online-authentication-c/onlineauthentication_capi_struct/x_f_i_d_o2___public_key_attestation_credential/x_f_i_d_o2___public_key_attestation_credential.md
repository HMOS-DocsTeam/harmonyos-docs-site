---
title: "FIDO2_PublicKeyAttestationCredential"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_attestation_credential
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_attestation_credential
---

# FIDO2\_PublicKeyAttestationCredential

## 概述

定义获取注册结果结构体。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff) [rawId](#rawid) | 原始凭据标识符。 |
| [FIDO2\_AuthenticatorAttestationResponse](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response) [response](#response) | 认证器证明响应。 |
| [FIDO2\_AuthenticatorAttachment](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorattachment-1) [authenticatorAttachment](#authenticatorattachment) | 认证器信息（平台、漫游）。默认值为FIDO2\_PLATFORM。可选。 |
| const char \* [id](#id) | 凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。 |
| const char \* [type](#type) | 此属性返回接口对象中指定凭据类型的槽值，它指定此对象所代表的凭据类型。 |
| [AuthenticationExtensionsClientOutputs](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_authentication_extensions_client_outputs/x_authentication_extensions_client_outputs) [clientExtensionResults](#clientextensionresults) | 客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。 |

## 结构体成员变量说明

### authenticatorAttachment

```
FIDO2_AuthenticatorAttachment FIDO2_PublicKeyAttestationCredential::authenticatorAttachment
```

****描述****

认证器信息（平台、漫游）。可选。

### clientExtensionResults

```
AuthenticationExtensionsClientOutputs FIDO2_PublicKeyAttestationCredential::clientExtensionResults
```

****描述****

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为\{\}。

### id

```
const char* FIDO2_PublicKeyAttestationCredential::id
```

****描述****

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

### rawId

```
Uint8Buff FIDO2_PublicKeyAttestationCredential::rawId
```

****描述****

原始凭据标识符。

### response

```
FIDO2_AuthenticatorAttestationResponse FIDO2_PublicKeyAttestationCredential::response
```

****描述****

认证器证明响应。

### type

```
const char* FIDO2_PublicKeyAttestationCredential::type
```

****描述****

此属性返回接口对象中指定凭据类型的槽值，它指定此对象所代表的凭据类型。
