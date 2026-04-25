---
title: "HiDebug_StackFrame"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-stackframe
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-stackframe
---

# HiDebug\_StackFrame

```
typedef struct HiDebug_StackFrame {...} HiDebug_StackFrame
```

## 概述

栈帧内容的定义。

****起始版本：**** 20

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [HiDebug\_StackFrameType](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h#hidebug_stackframetype) type | 当前栈的类型。 |
| struct [HiDebug\_JsStackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-jsstackframe/capi-hidebug-hidebug-jsstackframe) js | 由[HiDebug\_JsStackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-jsstackframe/capi-hidebug-hidebug-jsstackframe)定义的js栈帧内容。 |
| struct [HiDebug\_NativeStackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-nativestackframe/capi-hidebug-hidebug-nativestackframe) native | 由[HiDebug\_NativeStackFrame](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hidebug-hidebug-nativestackframe/capi-hidebug-hidebug-nativestackframe)定义的native栈帧内容。 |
