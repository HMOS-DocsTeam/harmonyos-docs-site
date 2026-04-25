---
title: "OH_Huks_PubKeyInfo"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-pubkeyinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-pubkeyinfo
---

# OH\_Huks\_PubKeyInfo

```
struct OH_Huks_PubKeyInfo {...}
```

## 概述

定义公钥信息的结构体类型。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| enum [OH\_Huks\_KeyAlg](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keyalg) keyAlg | 公钥的算法类型。 |
| uint32\_t keySize | 公钥的长度。 |
| uint32\_t nOrXSize | n或X值的长度。 |
| uint32\_t eOrYSize | e或Y值的长度。 |
| uint32\_t placeHolder | 占位符大小。 |
