---
title: "OH_NN_Memory"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-memory
kit: AI
last_updated: "2026-04-22"
slug: capi-neuralnetworkruntime-oh-nn-memory
---

# OH\_NN\_Memory

```
typedef struct OH_NN_Memory {...} OH_NN_Memory
```

## 概述

内存结构体。

****起始版本：**** 9

****废弃版本：**** 11

****替代接口：**** [NN\_Tensor](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensor/capi-neuralnetworkruntime-nn-tensor)

****相关模块：**** [NeuralNetworkRuntime](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime)

****所在头文件：**** [neural\_network\_runtime\_type.h](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| void \* const data | 指向共享内存的指针，该共享内存通常由底层硬件驱动申请。 |
| const size\_t length | 记录共享内存的字节长度。 |
