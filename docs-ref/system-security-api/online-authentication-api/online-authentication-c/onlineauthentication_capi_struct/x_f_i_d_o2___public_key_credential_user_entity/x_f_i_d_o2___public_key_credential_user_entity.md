---
title: "FIDO2_PublicKeyCredentialUserEntity"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_user_entity
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___public_key_credential_user_entity
---

# FIDO2\_PublicKeyCredentialUserEntity

## 概述

创建新凭据时用户的属性。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff) [id](#id) | 凭据的标识符。 |
| char \* [displayName](#displayname) | 前台显示的用户名。 |
| char \* [name](#name) | 用户名。 |

## 结构体成员变量说明

### displayName

```
char* FIDO2_PublicKeyCredentialUserEntity::displayName
```

****描述****

前台显示的用户名。

### id

```
Uint8Buff FIDO2_PublicKeyCredentialUserEntity::id
```

****描述****

凭据的标识符。

### name

```
char* FIDO2_PublicKeyCredentialUserEntity::name
```

****描述****

用户名。
