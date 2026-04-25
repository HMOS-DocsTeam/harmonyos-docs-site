---
title: "OH_Huks_KeyMaterialEcc"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-keymaterialecc
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-keymaterialecc
---

# OH\_Huks\_KeyMaterialEcc

```
struct OH_Huks_KeyMaterialEcc {...}
```

## 概述

定义Ecc密钥的结构体类型。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| enum [OH\_Huks\_KeyAlg](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keyalg) keyAlg | 密钥的算法类型。 |
| uint32\_t keySize | 密钥的长度。 |
| uint32\_t xSize | x值的长度。 |
| uint32\_t ySize | y值的长度。 |
| uint32\_t zSize | z值的长度。 |
