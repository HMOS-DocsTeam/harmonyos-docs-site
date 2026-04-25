---
title: "ffrt_fiber_t"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-fiber-t
kit: 系统
last_updated: "2026-04-22"
slug: capi-ffrt-ffrt-fiber-t
---

# ffrt\_fiber\_t

```
typedef struct {...} ffrt_fiber_t
```

## 概述

纤程结构。

****起始版本：**** 20

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

****所在头文件：**** [type\_def.h](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uintptr\_t storage[ffrt\_fiber\_storage\_size] | 纤程上下文占用空间。 |
