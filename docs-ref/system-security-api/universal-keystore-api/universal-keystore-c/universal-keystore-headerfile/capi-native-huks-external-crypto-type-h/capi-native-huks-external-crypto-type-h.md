---
title: "native_huks_external_crypto_type.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-type-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-native-huks-external-crypto-type-h
---

# native\_huks\_external\_crypto\_type.h

## 概述

定义面向外部密钥管理扩展的结构体与枚举类型。

****引用文件：**** &lt;huks/native\_huks\_external\_crypto\_type.h&gt;

****库：**** libhuks\_external\_crypto.z.so

****系统能力：**** SystemCapability.Security.Huks.CryptoExtension

****起始版本：**** 22

****相关模块：**** [HuksExternalCryptoTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-huksexternalcryptotypeapi/capi-huksexternalcryptotypeapi)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_Huks\_ExternalCryptoParam](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/sexternalcryptotypeapi-oh-huks-externalcryptoparam/sexternalcryptotypeapi-oh-huks-externalcryptoparam) | OH\_Huks\_ExternalCryptoParam | 定义参数集合中单个参数的结构体。 |
| [OH\_Huks\_ExternalCryptoParamSet](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/ternalcryptotypeapi-oh-huks-externalcryptoparamset/ternalcryptotypeapi-oh-huks-externalcryptoparamset) | OH\_Huks\_ExternalCryptoParamSet | 定义外部加密参数集合的结构。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_Huks\_ExternalCryptoTag](#oh_huks_externalcryptotag) | OH\_Huks\_ExternalCryptoTag | 列举参数集合中使用的标签值。 |

### 宏定义

| 名称 | 描述 |
| --- | --- |
| OH\_HUKS\_EXTERNAL\_CRYPTO\_MAX\_PROVIDER\_NAME\_LEN 100 | 定义provider名称的最大字节长度。  ****起始版本：**** 22 |
| OH\_HUKS\_EXTERNAL\_CRYPTO\_MAX\_RESOURCE\_ID\_LEN 512 | 定义资源ID的最大字节长度。  ****起始版本：**** 22 |

## 枚举类型说明

### OH\_Huks\_ExternalCryptoTag

```
enum OH_Huks_ExternalCryptoTag
```

****描述****

列举参数集合中使用的标签值。

****起始版本：**** 22

| 枚举项 | 描述 |
| --- | --- |
| OH\_HUKS\_EXT\_CRYPTO\_TAG\_UKEY\_PIN = OH\_HUKS\_TAG\_TYPE\_BYTES | 200001 | PIN码。 |
| OH\_HUKS\_EXT\_CRYPTO\_TAG\_ABILITY\_NAME = OH\_HUKS\_TAG\_TYPE\_BYTES | 200002 | 能力名称。 |
| OH\_HUKS\_EXT\_CRYPTO\_TAG\_EXTRA\_DATA = OH\_HUKS\_TAG\_TYPE\_BYTES | 200003 | 附加数据。 |
| OH\_HUKS\_EXT\_CRYPTO\_TAG\_UID = OH\_HUKS\_TAG\_TYPE\_INT | 200004 | 调用方的UID。 |
| OH\_HUKS\_EXT\_CRYPTO\_TAG\_PURPOSE = OH\_HUKS\_TAG\_TYPE\_INT | 200005 | 证书链用途。 |
| OH\_HUKS\_EXT\_CRYPTO\_TAG\_TIMEOUT = OH\_HUKS\_TAG\_TYPE\_UINT | 200006 | 获取属性操作的超时时间，单位：s。 |

### OH\_Huks\_ExternalPinAuthState

```
enum OH_Huks_ExternalPinAuthState
```

****描述****

列举Ukey PIN码认证状态。

****起始版本：**** 22

| 枚举项 | 描述 |
| --- | --- |
| OH\_HUKS\_EXT\_CRYPTO\_PIN\_NO\_AUTH = 0 | PIN码未认证。 |
| OH\_HUKS\_EXT\_CRYPTO\_PIN\_AUTH\_SUCCEEDED = 1 | PIN码认证成功。 |
| OH\_HUKS\_EXT\_CRYPTO\_PIN\_LOCKED = 2 | PIN码被锁。 |
