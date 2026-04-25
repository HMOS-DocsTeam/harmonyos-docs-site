---
title: "FIDO2_PublicKeyCredentialCreationOptions"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_creation_options
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_credential_creation_options
---

# FIDO2\_PublicKeyCredentialCreationOptions

## 概述

创建新的认证凭据的选项。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_PublicKeyCredentialRpEntity](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_rp_entity/x_f_i_d_o2___public_key_credential_rp_entity) [rp](#rp) | 创建新凭据时的依赖方属性。 |
| [FIDO2\_PublicKeyCredentialUserEntity](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_user_entity/x_f_i_d_o2___public_key_credential_user_entity) [user](#user) | 创建新凭据时用户的属性。 |
| [Uint8Buff](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff) [challenge](#challenge) | 挑战值。 |
| [FIDO2\_CredentialCreationOptionArray](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_option_array/x_f_i_d_o2___credential_creation_option_array) [pubKeyCredParams](#pubkeycredparams) | 认证凭据的附加参数数组。 |
| uint32\_t [timeout](#timeout) | 注册操作最长时间，单位为毫秒。默认为300000（5分钟）。可选。 |
| [FIDO2\_PublicKeyCredentialDescriptorArray](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array) [excludeCredentials](#excludecredentials) | FIDO服务器已注册的凭据列表。默认值为[]。可选。 |
| [FIDO2\_AuthenticatorSelectionCriteria](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_selection_criteria/x_f_i_d_o2___authenticator_selection_criteria) [authenticatorSelection](#authenticatorselection) | 身份认证器相关配置项。 |
| [FIDO2\_PublicKeyCredentialHintArray](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_hint_array/x_f_i_d_o2___public_key_credential_hint_array) [hints](#hints) | 认证方式指示。默认值为[]。可选。 |
| [FIDO2\_AttestationConveyancePreference](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_attestationconveyancepreference-1) [attestation](#attestation) | 凭据传递首选项。默认值为none，可选。 |
| [FIDO2\_AttestationFormatsArray](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___attestation_formats_array/x_f_i_d_o2___attestation_formats_array) [attestationFormats](#attestationformats) | 依赖方可以使用此选项指定有关认证方使用的证明声明格式的偏好。默认值为[]。 |
| char \* [extensions](#extensions) | 扩展名必须是表示Map&lt;string, Object&gt;对象的JSON字符串。默认空。可选。 |

## 结构体成员变量说明

### attestation

```
FIDO2_AttestationConveyancePreference FIDO2_PublicKeyCredentialCreationOptions::attestation
```

****描述****

凭据传递首选项。默认值为none，可选。

### attestationFormats

```
FIDO2_AttestationFormatsArray FIDO2_PublicKeyCredentialCreationOptions::attestationFormats
```

****描述****

依赖方可以使用此选项指定有关认证方使用的证明声明格式的偏好。默认值为[]。

### authenticatorSelection

```
FIDO2_AuthenticatorSelectionCriteria FIDO2_PublicKeyCredentialCreationOptions::authenticatorSelection
```

****描述****

身份认证器相关配置项。

### challenge

```
Uint8Buff FIDO2_PublicKeyCredentialCreationOptions::challenge
```

****描述****

挑战。

### excludeCredentials

```
FIDO2_PublicKeyCredentialDescriptorArray FIDO2_PublicKeyCredentialCreationOptions::excludeCredentials
```

****描述****

FIDO服务器已注册的凭据列表。默认值为[]。可选。

### extensions

```
char* FIDO2_PublicKeyCredentialCreationOptions::extensions
```

****描述****

扩展名必须是表示Map&lt;string, Object&gt;对象的JSON字符串。可选。

### hints

```
FIDO2_PublicKeyCredentialHintArray FIDO2_PublicKeyCredentialCreationOptions::hints
```

****描述****

认证方式指示。默认值为[]。可选。

### pubKeyCredParams

```
FIDO2_CredentialCreationOptionArray FIDO2_PublicKeyCredentialCreationOptions::pubKeyCredParams
```

****描述****

认证凭据的附加参数数组。

### rp

```
FIDO2_PublicKeyCredentialRpEntity FIDO2_PublicKeyCredentialCreationOptions::rp
```

****描述****

创建新凭据时的依赖方属性。

### timeout

```
uint32_t FIDO2_PublicKeyCredentialCreationOptions::timeout
```

****描述****

注册操作最长时间，单位为毫秒。可选。

### user

```
FIDO2_PublicKeyCredentialUserEntity FIDO2_PublicKeyCredentialCreationOptions::user
```

****描述****

创建新凭据时用户的属性。
