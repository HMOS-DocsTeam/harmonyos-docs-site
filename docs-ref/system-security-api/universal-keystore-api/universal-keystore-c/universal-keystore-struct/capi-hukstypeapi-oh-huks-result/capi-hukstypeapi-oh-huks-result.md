---
title: "OH_Huks_Result"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-result
kit: 系统
last_updated: "2026-04-22"
slug: capi-hukstypeapi-oh-huks-result
---

# OH\_Huks\_Result

```
struct OH_Huks_Result {...}
```

## 概述

表示状态返回数据，包括返回码和消息。

****起始版本：**** 9

****相关模块：**** [HuksTypeApi](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-module/capi-hukstypeapi/capi-hukstypeapi)

****所在头文件：**** [native\_huks\_type.h](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t errorCode | 状态返回码，参考[OH\_Huks\_ErrCode](/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_errcode)。 |
| const char \*errorMsg | 对状态返回码的说明信息。 |
| uint8\_t \*data | 其他返回数据。 |
