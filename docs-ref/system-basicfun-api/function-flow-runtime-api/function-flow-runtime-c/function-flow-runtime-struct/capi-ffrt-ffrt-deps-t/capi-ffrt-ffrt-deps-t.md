---
title: "ffrt_deps_t"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-deps-t
kit: 系统
last_updated: "2026-04-22"
slug: capi-ffrt-ffrt-deps-t
---

# ffrt\_deps\_t

```
typedef struct {...} ffrt_deps_t
```

## 概述

依赖结构定义。

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

****所在头文件：**** [type\_def.h](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t len | 依赖数量 |
| const [ffrt\_dependence\_t\*](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-dependence-t/capi-ffrt-ffrt-dependence-t) items | 依赖数据 |
