---
title: "FIDO2_CredentialCreationOptions"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___credential_creation_options
kit: 系统
last_updated: "2026-04-20"
slug: x_f_i_d_o2___credential_creation_options
---

# FIDO2\_CredentialCreationOptions

## 概述

凭据请求的选项。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_CredentialMediationRequirement](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialmediationrequirement-1) [mediation](#mediation) | 该操作是否需要用户参与。 |
| [FIDO2\_PublicKeyCredentialCreationOptions](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_creation_options/x_f_i_d_o2___public_key_credential_creation_options) [publicKey](#publickey) | publicKey凭证请求的选项。 |

## 结构体成员变量说明

### mediation

```
FIDO2_CredentialMediationRequirement FIDO2_CredentialCreationOptions::mediation
```

****描述****

操作是否需要用户参与。

### publicKey

```
FIDO2_PublicKeyCredentialCreationOptions FIDO2_CredentialCreationOptions::publicKey
```

****描述****

publicKey凭证请求的选项。
