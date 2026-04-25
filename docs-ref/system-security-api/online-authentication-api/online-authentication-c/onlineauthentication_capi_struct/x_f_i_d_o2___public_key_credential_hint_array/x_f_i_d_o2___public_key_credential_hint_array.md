---
title: "FIDO2_PublicKeyCredentialHintArray"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_hint_array
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_credential_hint_array
---

# FIDO2\_PublicKeyCredentialHintArray

## 概述

认证方式指示数组。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [hintNum](#hintnum) | 认证方式指示数目。 |
| [FIDO2\_PublicKeyCredentialHint](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialhint-1) \* [hints](#hints) | 认证方式指示列表。 |

## 结构体成员变量说明

### hintNum

```
uint32_t FIDO2_PublicKeyCredentialHintArray::hintNum
```

****描述****

认证方式指示数目。

### hints

```
FIDO2_PublicKeyCredentialHint* FIDO2_PublicKeyCredentialHintArray::hints
```

****描述****

认证方式指示列表。
