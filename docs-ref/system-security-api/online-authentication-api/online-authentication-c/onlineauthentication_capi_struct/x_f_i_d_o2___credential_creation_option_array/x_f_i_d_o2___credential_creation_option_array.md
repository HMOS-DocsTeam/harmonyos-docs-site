---
title: "FIDO2_CredentialCreationOptionArray"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___credential_creation_option_array
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___credential_creation_option_array
---

# FIDO2\_CredentialCreationOptionArray

## 概述

认证凭据的附加参数数组。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [pubKeyCredParamNum](#pubkeycredparamnum) | PubKeyCredParam参数数目。 |
| [FIDO2\_PublicKeyCredentialParameters](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_parameters/x_f_i_d_o2___public_key_credential_parameters) \* [pubKeyCredParams](#pubkeycredparams) | 认证凭据的附加参数。 |

## 结构体成员变量说明

### pubKeyCredParamNum

```
uint32_t FIDO2_CredentialCreationOptionArray::pubKeyCredParamNum
```

****描述****

PubKeyCredParam参数数目。

### pubKeyCredParams

```
FIDO2_PublicKeyCredentialParameters* FIDO2_CredentialCreationOptionArray::pubKeyCredParams
```

****描述****

认证凭据的附加参数。
