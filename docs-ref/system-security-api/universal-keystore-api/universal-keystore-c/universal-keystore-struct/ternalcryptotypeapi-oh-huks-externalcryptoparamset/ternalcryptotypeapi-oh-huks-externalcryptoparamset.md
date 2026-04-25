---
title: "OH_Huks_ExternalCryptoParamSet"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ternalcryptotypeapi-oh-huks-externalcryptoparamset
kit: 系统
last_updated: "2026-04-22"
slug: ternalcryptotypeapi-oh-huks-externalcryptoparamset
---

# OH\_Huks\_ExternalCryptoParamSet

```
typedef struct OH_Huks_ExternalCryptoParamSet {...} OH_Huks_ExternalCryptoParamSet
```

## 概述

定义外部加密参数集合的结构。

****起始版本：**** 22

****相关模块：**** [HuksExternalCryptoTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-huksexternalcryptotypeapi/capi-huksexternalcryptotypeapi)

****所在头文件：**** [native\_huks\_external\_crypto\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-type-h/capi-native-huks-external-crypto-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t paramSetSize | 参数集合所占内存大小，单位：Byte。  ****起始版本：**** 22 |
| uint32\_t paramsCnt | 参数集合中的参数数量。  ****起始版本：**** 22 |
| [OH\_Huks\_ExternalCryptoParam](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/sexternalcryptotypeapi-oh-huks-externalcryptoparam/sexternalcryptotypeapi-oh-huks-externalcryptoparam) params[] | 参数数组，大小由paramSetSize与paramsCnt决定。  ****起始版本：**** 22 |
