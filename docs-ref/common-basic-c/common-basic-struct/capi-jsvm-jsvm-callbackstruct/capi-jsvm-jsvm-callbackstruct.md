---
title: "JSVM_CallbackStruct"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-callbackstruct
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-callbackstruct
---

# JSVM\_CallbackStruct

```
typedef struct {...} JSVM_CallbackStruct
```

## 概述

用户提供的Native回调函数的指针和数据，这些函数通过JSVM-API接口暴露给JavaScript。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void\* data | 用户提供的Native回调函数的数据。 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [JSVM\_Value(JSVM\_CDECL\* callback)(JSVM\_Env env,JSVM\_CallbackInfo info)](#callback) | 用户提供的Native回调函数的指针。 |

## 成员函数说明

### callback()

```
JSVM_Value(JSVM_CDECL* callback)(JSVM_Env env,JSVM_CallbackInfo info)
```

****描述****

用户提供的Native回调函数的指针。
