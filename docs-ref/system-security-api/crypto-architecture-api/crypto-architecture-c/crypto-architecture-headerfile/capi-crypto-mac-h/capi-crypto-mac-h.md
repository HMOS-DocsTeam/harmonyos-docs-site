---
title: "crypto_mac.h"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-mac-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-crypto-mac-h
---

# crypto\_mac.h

## 概述

定义MAC接口。

****引用文件：**** &lt;CryptoArchitectureKit/crypto\_mac.h&gt;

****库：**** libohcrypto.so

****系统能力：**** SystemCapability.Security.CryptoFramework

****起始版本：**** 20

****相关模块：**** [CryptoMacApi](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-module/capi-cryptomacapi/capi-cryptomacapi)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) | OH\_CryptoMac | 定义MAC结构。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [CryptoMac\_ParamType](#cryptomac_paramtype) | CryptoMac\_ParamType | 定义MAC算法参数类型。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [OH\_Crypto\_ErrCode OH\_CryptoMac\_Create(const char \*algoName, OH\_CryptoMac \*\*ctx)](#oh_cryptomac_create) | 根据给定的算法名称创建MAC实例。  注意：创建的资源必须通过[OH\_CryptoMac\_Destroy](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_destroy)销毁。 |
| [OH\_Crypto\_ErrCode OH\_CryptoMac\_SetParam(OH\_CryptoMac \*ctx, CryptoMac\_ParamType type, const Crypto\_DataBlob \*value)](#oh_cryptomac_setparam) | 设置MAC参数。 |
| [OH\_Crypto\_ErrCode OH\_CryptoMac\_Init(OH\_CryptoMac \*ctx, const OH\_CryptoSymKey \*key)](#oh_cryptomac_init) | 使用对称密钥初始化MAC实例。 |
| [OH\_Crypto\_ErrCode OH\_CryptoMac\_Update(OH\_CryptoMac \*ctx, const Crypto\_DataBlob \*in)](#oh_cryptomac_update) | 更新MAC实例。 |
| [OH\_Crypto\_ErrCode OH\_CryptoMac\_Final(OH\_CryptoMac \*ctx, Crypto\_DataBlob \*out)](#oh_cryptomac_final) | 完成MAC操作。  注意：使用完成后必须通过[OH\_Crypto\_FreeDataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。 |
| [OH\_Crypto\_ErrCode OH\_CryptoMac\_GetLength(OH\_CryptoMac \*ctx, uint32\_t \*length)](#oh_cryptomac_getlength) | 获取MAC长度。 |
| [void OH\_CryptoMac\_Destroy(OH\_CryptoMac \*ctx)](#oh_cryptomac_destroy) | 销毁MAC实例。 |

## 枚举类型说明

### CryptoMac\_ParamType

```
enum CryptoMac_ParamType
```

****描述****

定义MAC算法参数类型。

****起始版本：**** 20

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO\_MAC\_DIGEST\_NAME\_STR = 0 | HMAC消息认证码使用的摘要函数的算法名称，例如SHA256。 |
| CRYPTO\_MAC\_CIPHER\_NAME\_STR = 1 | CMAC消息认证码使用的对称加密算法名称，例如AES256。 |

## 函数说明

### OH\_CryptoMac\_Create()

```
OH_Crypto_ErrCode OH_CryptoMac_Create(const char *algoName, OH_CryptoMac **ctx)
```

****描述****

根据给定的算法名称创建MAC实例。

注意：创建的资源必须通过[OH\_CryptoMac\_Destroy](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_destroy)销毁。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char \*algoName | 用于生成MAC实例的算法名称。  例如"HMAC"、"CMAC"。 |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*\*ctx | MAC实例。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Crypto\_ErrCode](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode) | CRYPTO\_SUCCESS：操作成功。  CRYPTO\_NOT\_SUPPORTED：操作不支持。  CRYPTO\_MEMORY\_ERROR：内存错误。  CRYPTO\_PARAMETER\_CHECK\_FAILED：参数检查失败。  CRYPTO\_OPERATION\_ERROR：调用三方算法库API出错。 |

### OH\_CryptoMac\_SetParam()

```
OH_Crypto_ErrCode OH_CryptoMac_SetParam(OH_CryptoMac *ctx, CryptoMac_ParamType type, const Crypto_DataBlob *value)
```

****描述****

设置MAC参数。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*ctx | MAC实例。 |
| [CryptoMac\_ParamType](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#cryptomac_paramtype) type | MAC参数类型。 |
| [const Crypto\_DataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob) \*value | MAC参数。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Crypto\_ErrCode](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode) | CRYPTO\_SUCCESS：操作成功。  CRYPTO\_NOT\_SUPPORTED：操作不支持。  CRYPTO\_MEMORY\_ERROR：内存错误。  CRYPTO\_PARAMETER\_CHECK\_FAILED：参数检查失败。  CRYPTO\_OPERATION\_ERROR：调用三方算法库API出错。 |

### OH\_CryptoMac\_Init()

```
OH_Crypto_ErrCode OH_CryptoMac_Init(OH_CryptoMac *ctx, const OH_CryptoSymKey *key)
```

****描述****

使用对称密钥初始化MAC实例。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*ctx | MAC实例。 |
| [const OH\_CryptoSymKey](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptosymkeyapi-oh-cryptosymkey/capi-cryptosymkeyapi-oh-cryptosymkey) \*key | 对称密钥。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Crypto\_ErrCode](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode) | CRYPTO\_SUCCESS：操作成功。  CRYPTO\_NOT\_SUPPORTED：操作不支持。  CRYPTO\_MEMORY\_ERROR：内存错误。  CRYPTO\_PARAMETER\_CHECK\_FAILED：参数检查失败。  CRYPTO\_OPERATION\_ERROR：调用三方算法库API出错。 |

****参考：****

[OH\_CryptoMac\_Update](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_update)

[OH\_CryptoMac\_Final](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_final)

### OH\_CryptoMac\_Update()

```
OH_Crypto_ErrCode OH_CryptoMac_Update(OH_CryptoMac *ctx, const Crypto_DataBlob *in)
```

****描述****

更新MAC实例。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*ctx | MAC实例。 |
| [const Crypto\_DataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob) \*in | 需要更新的数据。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Crypto\_ErrCode](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode) | CRYPTO\_SUCCESS：操作成功。  CRYPTO\_NOT\_SUPPORTED：操作不支持。  CRYPTO\_MEMORY\_ERROR：内存错误。  CRYPTO\_PARAMETER\_CHECK\_FAILED：参数检查失败。  CRYPTO\_OPERATION\_ERROR：调用三方算法库API出错。 |

****参考：****

[OH\_CryptoMac\_Init](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_init)

[OH\_CryptoMac\_Final](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_final)

### OH\_CryptoMac\_Final()

```
OH_Crypto_ErrCode OH_CryptoMac_Final(OH_CryptoMac *ctx, Crypto_DataBlob *out)
```

****描述****

完成MAC操作。

注意：使用完成后必须通过[OH\_Crypto\_FreeDataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*ctx | MAC实例。 |
| [Crypto\_DataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob) \*out | MAC值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Crypto\_ErrCode](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode) | CRYPTO\_SUCCESS：操作成功。  CRYPTO\_NOT\_SUPPORTED：操作不支持。  CRYPTO\_MEMORY\_ERROR：内存错误。  CRYPTO\_PARAMETER\_CHECK\_FAILED：参数检查失败。  CRYPTO\_OPERATION\_ERROR：调用三方算法库API出错。 |

****参考：****

[OH\_CryptoMac\_Init](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_init)

[OH\_CryptoMac\_Update](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_update)

### OH\_CryptoMac\_GetLength()

```
OH_Crypto_ErrCode OH_CryptoMac_GetLength(OH_CryptoMac *ctx, uint32_t *length)
```

****描述****

获取MAC长度。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*ctx | MAC实例。 |
| uint32\_t \*length | MAC长度。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [OH\_Crypto\_ErrCode](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_errcode) | CRYPTO\_SUCCESS：操作成功。  CRYPTO\_NOT\_SUPPORTED：操作不支持。  CRYPTO\_MEMORY\_ERROR：内存错误。  CRYPTO\_PARAMETER\_CHECK\_FAILED：参数检查失败。  CRYPTO\_OPERATION\_ERROR：调用三方算法库API出错。 |

### OH\_CryptoMac\_Destroy()

```
void OH_CryptoMac_Destroy(OH_CryptoMac *ctx)
```

****描述****

销毁MAC实例。

****起始版本：**** 20

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OH\_CryptoMac](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptomacapi-oh-cryptomac/capi-cryptomacapi-oh-cryptomac) \*ctx | MAC实例。 |
