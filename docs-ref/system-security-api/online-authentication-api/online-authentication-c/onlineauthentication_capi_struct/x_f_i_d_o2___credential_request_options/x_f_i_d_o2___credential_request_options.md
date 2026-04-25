---
title: "FIDO2_CredentialRequestOptions"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___credential_request_options
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___credential_request_options
---

# FIDO2\_CredentialRequestOptions

## 概述

认证信息字典对象。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_CredentialMediationRequirement](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialmediationrequirement-1) [mediation](#mediation) | 操作是否需要用户参与。 |
| [FIDO2\_PublicKeyCredentialRequestOptions](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_request_options/x_f_i_d_o2___public_key_credential_request_options) [publicKey](#publickey) | publicKey凭证请求的选项。 |

## 结构体成员变量说明

### mediation

```
FIDO2_CredentialMediationRequirement FIDO2_CredentialRequestOptions::mediation
```

****描述****

用户介入要求。

### publicKey

```
FIDO2_PublicKeyCredentialRequestOptions FIDO2_CredentialRequestOptions::publicKey
```

****描述****

publicKey凭证请求的选项。
