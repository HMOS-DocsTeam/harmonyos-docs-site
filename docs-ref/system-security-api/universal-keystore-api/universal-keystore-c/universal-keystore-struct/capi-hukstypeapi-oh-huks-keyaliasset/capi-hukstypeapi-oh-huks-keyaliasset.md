---
title: "OH_Huks_KeyAliasSet"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-keyaliasset
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-keyaliasset
---

# OH\_Huks\_KeyAliasSet

```
struct OH_Huks_KeyAliasSet {...}
```

## 概述

定义密钥别名集的结构体类型。

****起始版本：**** 20

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t aliasesCnt | 密钥别名集个数。 |
| struct [OH\_Huks\_Blob](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob) \*aliases | 指向密钥别名集数据的指针。 |
