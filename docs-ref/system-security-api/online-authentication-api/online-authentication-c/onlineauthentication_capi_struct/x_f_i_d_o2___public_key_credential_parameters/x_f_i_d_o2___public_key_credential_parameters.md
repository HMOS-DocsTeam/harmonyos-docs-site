---
title: "FIDO2_PublicKeyCredentialParameters"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_parameters
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_credential_parameters
---

# FIDO2\_PublicKeyCredentialParameters

## 概述

认证凭据的附加参数。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_PublicKeyCredentialType](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialtype-1) [type](#type) | PublicKey凭证类型。 |
| [FIDO2\_Algorithm](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_algorithm-1) [alg](#alg) | 算法。 |

## 结构体成员变量说明

### alg

```
FIDO2_Algorithm FIDO2_PublicKeyCredentialParameters::alg
```

****描述****

算法。

### type

```
FIDO2_PublicKeyCredentialType FIDO2_PublicKeyCredentialParameters::type
```

****描述****

PublicKey凭证类型。
