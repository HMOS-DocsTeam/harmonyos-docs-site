---
title: "OH_Huks_Blob"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-blob
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-blob
---

# OH\_Huks\_Blob

```
struct OH_Huks_Blob {...}
```

## 概述

定义存放数据的结构体类型。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t size | 数据大小。 |
| uint8\_t \*data | 指向数据内存的指针。 |
