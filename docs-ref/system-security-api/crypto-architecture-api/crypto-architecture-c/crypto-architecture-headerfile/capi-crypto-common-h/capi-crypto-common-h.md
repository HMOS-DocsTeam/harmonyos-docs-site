---
title: "crypto_common.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-crypto-common-h
---

# crypto\_common.h

## 概述

定义通用API接口。

****引用文件：**** &lt;CryptoArchitectureKit/crypto\_common.h&gt;

****库：**** libohcrypto.so

****系统能力：**** SystemCapability.Security.CryptoFramework

****起始版本：**** 12

****相关模块：**** [CryptoCommonApi](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-module/capi-cryptocommonapi/capi-cryptocommonapi)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Crypto\_DataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob) | Crypto\_DataBlob | 加解密数据结构体。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_Crypto\_ErrCode](#oh_crypto_errcode) | OH\_Crypto\_ErrCode | 加解密错误返回码枚举。 |
| [Crypto\_CipherMode](#crypto_ciphermode) | Crypto\_CipherMode | 定义加解密操作类型。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [void OH\_Crypto\_FreeDataBlob(Crypto\_DataBlob \*dataBlob)](#oh_crypto_freedatablob) | 释放dataBlob数据。 |

## 枚举类型说明

### OH\_Crypto\_ErrCode

```
enum OH_Crypto_ErrCode
```

****描述****

加解密错误返回码枚举。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO\_SUCCESS = 0 | 表示操作成功。 |
| CRYPTO\_INVALID\_PARAMS = 401 | 输入参数不合法。 |
| CRYPTO\_NOT\_SUPPORTED = 801 | 不支持的函数或算法。 |
| CRYPTO\_MEMORY\_ERROR = 17620001 | 内存错误。 |
| CRYPTO\_PARAMETER\_CHECK\_FAILED = 17620003 | 参数检查失败。  ****起始版本：**** 20 |
| CRYPTO\_OPERTION\_ERROR = 17630001 | 表示加解密操作错误。 |

### Crypto\_CipherMode

```
enum Crypto_CipherMode
```

****描述****

定义加解密操作类型。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO\_ENCRYPT\_MODE = 0 | 加密操作。 |
| CRYPTO\_DECRYPT\_MODE = 1 | 解密操作。 |

## 函数说明

### OH\_Crypto\_FreeDataBlob()

```
void OH_Crypto_FreeDataBlob(Crypto_DataBlob *dataBlob)
```

****描述****

释放dataBlob数据。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [Crypto\_DataBlob](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob) \*dataBlob | 需要释放的dataBlob数据。 |
