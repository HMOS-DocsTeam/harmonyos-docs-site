---
title: "FIDO2_TokenBinding"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___token_binding
kit: 系统
last_updated: "2026-04-20"
slug: x_f_i_d_o2___token_binding
---

# FIDO2\_TokenBinding

## 概述

Token binding协议，用于客户端与依赖方通信。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2\_TokenBindingStatus](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_tokenbindingstatus-1) [status](#status) | 客户端的绑定状态。 |
| char \* [id](#id) | 令牌绑定标识符。 |

## 结构体成员变量说明

### id

```
char* FIDO2_TokenBinding::id
```

****描述****

令牌绑定标识符。

### status

```
FIDO2_TokenBindingStatus FIDO2_TokenBinding::status
```

****描述****

客户端的绑定状态。
