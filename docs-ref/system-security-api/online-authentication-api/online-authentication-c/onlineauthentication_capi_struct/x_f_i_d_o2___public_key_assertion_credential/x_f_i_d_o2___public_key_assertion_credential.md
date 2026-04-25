---
title: "FIDO2_PublicKeyAssertionCredential"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_assertion_credential
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_assertion_credential
---

# FIDO2\_PublicKeyAssertionCredential

## 概述

定义获取认证结果结构体。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff) [rawId](#rawid) | 原始凭据标识符。 |
| const char \* [id](#id) | 凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。 |
| const char \* [type](#type) | 该属性以JSON字符串形式返回接口对象中用于指定凭据类型的插槽值。该插槽用于指定此对象所表示的凭据类型。 |
| [FIDO2\_AuthenticatorResponse](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response) [response](#response) | 认证器断言响应。 |
| [FIDO2\_AuthenticatorAttachment](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorattachment-1) [authenticatorAttachment](#authenticatorattachment) | 认证器信息（平台、漫游）。默认值为FIDO2\_PLATFORM。可选。 |
| [AuthenticationExtensionsClientOutputs](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_authentication_extensions_client_outputs/x_authentication_extensions_client_outputs) [clientExtensionResults](#clientextensionresults) | 客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。 |

## 结构体成员变量说明

### authenticatorAttachment

```
FIDO2_AuthenticatorAttachment FIDO2_PublicKeyAssertionCredential::authenticatorAttachment
```

****描述****

认证器信息（平台、漫游）。可选。

### clientExtensionResults

```
AuthenticationExtensionsClientOutputs FIDO2_PublicKeyAssertionCredential::clientExtensionResults
```

****描述****

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为\{\}。

### id

```
const char* FIDO2_PublicKeyAssertionCredential::id
```

****描述****

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

### rawId

```
Uint8Buff FIDO2_PublicKeyAssertionCredential::rawId
```

****描述****

原始凭据标识符。

### response

```
FIDO2_AuthenticatorResponse FIDO2_PublicKeyAssertionCredential::response
```

****描述****

认证器断言响应。

### type

```
const char* FIDO2_PublicKeyAssertionCredential::type
```

****描述****

该属性以JSON字符串形式返回接口对象中用于指定凭据类型的插槽值，该插槽用于指定此对象所表示的凭据类型。
