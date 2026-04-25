---
title: "JSVM_CompileProfile"
sidebar_position: 30
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-compileprofile
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-compileprofile
---

# JSVM\_CompileProfile

```
typedef const struct {...} JSVM_CompileProfile
```

## 概述

与JSVM\_COMPILE\_COMPILE\_PROFILE一起传递的编译采样文件。

****起始版本：**** 12

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int \*profile | 编译采样文件的指针。 |
| size\_t length | 编译采样文件的大小。 |
