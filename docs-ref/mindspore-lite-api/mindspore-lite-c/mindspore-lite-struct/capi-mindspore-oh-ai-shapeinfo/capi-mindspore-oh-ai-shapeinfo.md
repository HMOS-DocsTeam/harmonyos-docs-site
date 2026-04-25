---
title: "OH_AI_ShapeInfo"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore-oh-ai-shapeinfo
kit: AI
last_updated: "2026-04-22"
slug: capi-mindspore-oh-ai-shapeinfo
---

# OH\_AI\_ShapeInfo

```
typedef struct OH_AI_ShapeInfo {...} OH_AI_ShapeInfo
```

## 概述

形状维度大小，预留最大维度是32，当前实际支持的最大维度是8。

****起始版本：**** 9

****相关模块：**** [MindSpore](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore)

****所在头文件：**** [model.h](/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| size\_t shape\_num | 维度数组长度。 |
| int64\_t shape[OH\_AI\_MAX\_SHAPE\_NUM] | 维度数组。 |
