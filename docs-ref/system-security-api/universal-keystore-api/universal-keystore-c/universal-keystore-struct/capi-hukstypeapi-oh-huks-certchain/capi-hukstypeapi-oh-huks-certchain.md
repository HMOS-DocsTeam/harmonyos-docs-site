---
title: "OH_Huks_CertChain"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-certchain
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-certchain
---

# OH\_Huks\_CertChain

```
struct OH_Huks_CertChain {...}
```

## 概述

定义证书链的结构体类型。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| struct [OH\_Huks\_Blob](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob) \*certs | 指向证书数据的指针。 |
| uint32\_t certsCount | 证书数量。 |
