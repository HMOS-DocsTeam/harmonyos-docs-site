---
title: "Crypto_DataBlob"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob
kit: 系统
last_updated: "2026-04-22"
slug: capi-cryptocommonapi-crypto-datablob
---

# Crypto\_DataBlob

```
typedef struct Crypto_DataBlob {...} Crypto_DataBlob
```

## 概述

加解密数据结构体。

****起始版本：**** 12

****相关模块：**** [CryptoCommonApi](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-module/capi-cryptocommonapi/capi-cryptocommonapi)

****所在头文件：**** [crypto\_common.h](/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t\* data | 数据Blob的内容。 |
| size\_t len | 数据Blob的长度。 |
