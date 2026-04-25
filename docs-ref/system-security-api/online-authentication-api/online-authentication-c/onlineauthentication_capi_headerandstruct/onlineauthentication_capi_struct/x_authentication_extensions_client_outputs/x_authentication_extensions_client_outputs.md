---
title: "AuthenticationExtensionsClientOutputs"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_authentication_extensions_client_outputs
kit: 系统
last_updated: "2026-04-20"
slug: x_authentication_extensions_client_outputs
---

# AuthenticationExtensionsClientOutputs

## 概述

身份认证扩展输出。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \* [placeholder](#placeholder) | 占位符，表示返回的JSON消息中包含key clientExtensionResults。默认返回NULL。 |

## 结构体成员变量说明

### placeholder

```
char* AuthenticationExtensionsClientOutputs::placeholder
```

****描述****

占位符，表示返回的JSON消息中包含"clientExtensionResults"这个key值。该值始终返回NULL。
