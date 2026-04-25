---
title: "FIDO2_AttestationFormatsArray"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___attestation_formats_array
kit: 系统
last_updated: "2026-04-22"
slug: x_f_i_d_o2___attestation_formats_array
---

# FIDO2\_AttestationFormatsArray

## 概述

依赖方的数组可以使用此成员指定一个关于认证方使用的证明语句格式的首选项。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [attestationFormatsNum](#attestationformatsnum) | PubKeyCredParam个数。 |
| char \*\* [attestationFormats](#attestationformats) | 认证凭据的附加参数列表。 |

## 结构体成员变量说明

### attestationFormats

```
char** FIDO2_AttestationFormatsArray::attestationFormats
```

****描述****

认证凭据的附加参数列表。

### attestationFormatsNum

```
uint32_t FIDO2_AttestationFormatsArray::attestationFormatsNum
```

****描述****

认证凭据的附加参数列表长度。
