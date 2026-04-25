---
title: "OH_AI_TensorHandleArray"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore-oh-ai-tensorhandlearray
kit: AI
last_updated: "2026-04-22"
slug: capi-mindspore-oh-ai-tensorhandlearray
---

# OH\_AI\_TensorHandleArray

```
typedef struct OH_AI_TensorHandleArray {...} OH_AI_TensorHandleArray
```

## 概述

张量数组结构体，用于存储张量数组指针和张量数组长度。

****起始版本：**** 9

****相关模块：**** [MindSpore](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore)

****所在头文件：**** [model.h](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| size\_t handle\_num | 张量数组长度。 |
| [OH\_AI\_TensorHandle](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandle/capi-mindspore-oh-ai-tensorhandle)\* handle\_list | 指向张量数组的指针。 |
