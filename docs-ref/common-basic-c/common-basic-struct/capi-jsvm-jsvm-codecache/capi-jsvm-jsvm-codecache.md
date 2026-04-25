---
title: "JSVM_CodeCache"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-codecache
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-codecache
---

# JSVM\_CodeCache

```
typedef struct {...} JSVM_CodeCache
```

## 概述

表示当id为JSVM\_COMPILE\_CODE\_CACHE时，content的类型。

****起始版本：**** 12

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t\* cache | 缓存地址。 |
| size\_t length | 缓存大小。 |
