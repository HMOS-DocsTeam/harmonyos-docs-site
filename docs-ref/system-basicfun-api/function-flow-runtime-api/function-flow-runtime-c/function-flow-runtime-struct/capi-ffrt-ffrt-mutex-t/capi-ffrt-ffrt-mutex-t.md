---
title: "ffrt_mutex_t"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t
kit: 系统
last_updated: "2026-04-22"
slug: capi-ffrt-ffrt-mutex-t
---

# ffrt\_mutex\_t

```
typedef struct {...} ffrt_mutex_t
```

## 概述

FFRT互斥锁结构。

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

****所在头文件：**** [type\_def.h](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t storage[(ffrt\_mutex\_storage\_size + sizeof(uint32\_t) - 1) / sizeof(uint32\_t)] | FFRT互斥锁占用空间 |
