---
title: "OH_Huks_Param"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-param
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-param
---

# OH\_Huks\_Param

```
struct OH_Huks_Param {...}
```

## 概述

定义参数集中的参数结构体类型。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t tag | 标签值。 |
| union {  bool boolParam;  int32\_t int32Param;  uint32\_t uint32Param;  uint64\_t uint64Param;  [struct OH\_Huks\_Blob](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob) blob;  } | boolParam：bool型参数。  int32Param：int32\_t型参数。  uint32Param：uint32\_t型参数。  uint64Param：uint64\_t型参数。  blob：OH\_Huks\_Blob型参数。 |
