---
title: "ffrt_function_header_t"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-function-header-t
kit: 系统
last_updated: "2026-04-22"
slug: capi-ffrt-ffrt-function-header-t
---

# ffrt\_function\_header\_t

```
typedef struct {...} ffrt_function_header_t
```

## 概述

任务执行体。

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

****所在头文件：**** [type\_def.h](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [ffrt\_function\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_function_t) exec | 任务执行函数 |
| [ffrt\_function\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h#ffrt_function_t) destroy | 任务销毁函数 |
| uint64\_t reserve[2] | 保留位需要设置为0 |
