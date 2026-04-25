---
title: "JSVM_CompileOptions"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-compileoptions
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-compileoptions
---

# JSVM\_CompileOptions

```
typedef struct {...} JSVM_CompileOptions
```

## 概述

配合[OH\_JSVM\_CompileScriptWithOptions](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-h/capi-jsvm-h#oh_jsvm_compilescriptwithoptions)接口使用，是其参数中options数组的元素类型。

****起始版本：**** 12

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [JSVM\_CompileOptionId](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h#jsvm_compileoptionid) id | 编译选项对应的ID。 |
| content | id对应的编译选项值联合体。 |
| content.ptr | 指向编译选项值的指针。 |
| content.num | 存储整数类型的编译选项值。 |
| content.boolean | 存储布尔类型的编译选项值。 |
