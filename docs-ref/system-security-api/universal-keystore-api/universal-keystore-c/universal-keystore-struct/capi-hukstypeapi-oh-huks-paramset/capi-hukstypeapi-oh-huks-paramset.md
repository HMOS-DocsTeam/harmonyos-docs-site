---
title: "OH_Huks_ParamSet"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-paramset
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-paramset
---

# OH\_Huks\_ParamSet

```
struct OH_Huks_ParamSet {...}
```

## 概述

定义参数集的结构体类型。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t paramSetSize | 参数集的内存大小。 |
| uint32\_t paramsCnt | 参数的个数。 |
| struct [OH\_Huks\_Param](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-param/capi-hukstypeapi-oh-huks-param) params[] | 参数数组。 |
