---
title: "FIDO2_CapabilityArray"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___capability_array
kit: 系统
last_updated: "2026-04-20"
slug: x_f_i_d_o2___capability_array
---

# FIDO2\_CapabilityArray

## 概述

描述能力数组。

****起始版本：**** 6.0.0(20)

****相关模块：**** [FIDO2](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [number](#number) | 能力的数量。 |
| [FIDO2\_Capability](/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___capability/x_f_i_d_o2___capability) \* [capability](#capability) | 能力的数组。 |

## 结构体成员变量说明

### capability

```
FIDO2_Capability* FIDO2_CapabilityArray::capability
```

****描述****

能力数组。

### number

```
uint32_t FIDO2_CapabilityArray::number
```

****描述****

能力数组长度。
