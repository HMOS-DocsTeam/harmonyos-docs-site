---
title: "JSVM_TypeTag"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-typetag
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-typetag
---

# JSVM\_TypeTag

```
typedef struct {...} JSVM_TypeTag
```

## 概述

类型标记，存储为两个无符号64位整数的128位值。作为一个UUID，通过它，JavaScript对象可以是"tagged"，以确保它们的类型保持不变。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t lower | 低64位 |
| uint64\_t upper | 高64位 |
