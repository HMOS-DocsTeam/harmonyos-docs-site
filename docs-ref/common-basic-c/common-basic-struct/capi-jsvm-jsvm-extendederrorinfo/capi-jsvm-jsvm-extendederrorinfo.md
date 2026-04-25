---
title: "JSVM_ExtendedErrorInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-extendederrorinfo
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-extendederrorinfo
---

# JSVM\_ExtendedErrorInfo

```
typedef struct {...} JSVM_ExtendedErrorInfo
```

## 概述

扩展的异常信息。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* errorMessage | UTF-8编码的字符串，包含异常信息。 |
| void\* engineReserved | 特定于VM的详细异常信息。目前尚未为任何VM实现此功能。 |
| uint32\_t engineErrorCode | 特定于VM的异常代码。目前尚未为任何VM实现此功能。 |
| JSVM\_Status errorCode | 源自最后一个异常的JSVM-API状态码。 |
