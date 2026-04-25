---
title: "FIDO2_PublicKeyCredentialDescriptorArray"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor_array
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_credential_descriptor_array
---

# FIDO2\_PublicKeyCredentialDescriptorArray

## 概述

PublicKey凭证描述符数组。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [allowCredentiallNum](#allowcredentiallnum) | 允许凭证数目。 |
| [FIDO2\_PublicKeyCredentialDescriptor](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor/x_f_i_d_o2___public_key_credential_descriptor) \* [allowCredentials](#allowcredentials) | 认证凭据的附加参数列表。默认值为[]。 |

## 结构体成员变量说明

### allowCredentiallNum

```
uint32_t FIDO2_PublicKeyCredentialDescriptorArray::allowCredentiallNum
```

****描述****

允许凭证数目。

### allowCredentials

```
FIDO2_PublicKeyCredentialDescriptor* FIDO2_PublicKeyCredentialDescriptorArray::allowCredentials
```

****描述****

认证凭据的附加参数列表。默认值为[]。
