---
title: "ffrt_queue_attr_t"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-queue-attr-t
kit: 系统
last_updated: "2026-04-22"
slug: capi-ffrt-ffrt-queue-attr-t
---

# ffrt\_queue\_attr\_t

```
typedef struct {...} ffrt_queue_attr_t
```

## 概述

串行队列属性结构。

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

****所在头文件：**** [type\_def.h](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-headerfile/capi-type-def-h/capi-type-def-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t storage[(ffrt\_queue\_attr\_storage\_size + sizeof(uint32\_t) - 1) / sizeof(uint32\_t)] | 串行队列属性占用空间 |
