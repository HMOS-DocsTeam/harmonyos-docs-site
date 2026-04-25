---
title: "OH_AI_CallBackParam"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore-oh-ai-callbackparam
kit: AI
last_updated: "2026-04-22"
slug: capi-mindspore-oh-ai-callbackparam
---

# OH\_AI\_CallBackParam

```
typedef struct OH_AI_CallBackParam {...} OH_AI_CallBackParam
```

## 概述

回调函数中传入的算子信息。

****起始版本：**** 9

****相关模块：**** [MindSpore](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore)

****所在头文件：**** [model.h](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* node\_name | 算子名称。 |
| char\* node\_type | 算子类型。 |
