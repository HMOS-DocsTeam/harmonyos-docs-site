---
title: "JSVM_ScriptOrigin"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-scriptorigin
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-scriptorigin
---

# JSVM\_ScriptOrigin

```
typedef struct {...} JSVM_ScriptOrigin
```

## 概述

某段JavaScript代码的原始信息，如sourceMap路径、源文件名、源文件中的起始行/列号等。

****起始版本：**** 12

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* sourceMapUrl | Sourcemap 路径。 |
| const char\* resourceName | 源文件名。 |
| size\_t resourceLineOffset | 这段代码在源文件中的起始行号。 |
| size\_t resourceColumnOffset | 这段代码在源文件中的起始列号。 |
