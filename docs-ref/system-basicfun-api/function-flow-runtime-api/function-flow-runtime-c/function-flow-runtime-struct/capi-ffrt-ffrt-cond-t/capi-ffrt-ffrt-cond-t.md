---
title: "ffrt_cond_t"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t
kit: 系统
last_updated: "2026-04-22"
slug: capi-ffrt-ffrt-cond-t
---

# ffrt\_cond\_t

```
typedef struct {...} ffrt_cond_t
```

## 概述

FFRT条件变量结构。

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

****所在头文件：**** [type\_def.h](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t storage[(ffrt\_cond\_storage\_size + sizeof(uint32\_t) - 1) / sizeof(uint32\_t)] | FFRT条件变量占用空间 |
