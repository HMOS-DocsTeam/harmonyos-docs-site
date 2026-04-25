---
title: "OH_NN_UInt32Array"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-uint32array
kit: AI
last_updated: "2026-04-22"
slug: capi-neuralnetworkruntime-oh-nn-uint32array
---

# OH\_NN\_UInt32Array

```
typedef struct OH_NN_UInt32Array {...} OH_NN_UInt32Array
```

## 概述

该结构体用于存储32位无符号整型数组。

****起始版本：**** 9

****相关模块：**** [NeuralNetworkRuntime](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime)

****所在头文件：**** [neural\_network\_runtime\_type.h](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t \*data | 无符号整型数组的指针。 |
| uint32\_t size | 数组长度。 |
