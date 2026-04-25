---
title: "OH_NN_Tensor"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-tensor
kit: AI
last_updated: "2026-04-22"
slug: capi-neuralnetworkruntime-oh-nn-tensor
---

# OH\_NN\_Tensor

```
typedef struct OH_NN_Tensor {...} OH_NN_Tensor
```

## 概述

张量结构体。

通常用于构造模型图中的数据节点和算子参数，在构造张量时需要明确数据类型、维数、维度信息和量化信息。

****起始版本：**** 9

****废弃版本：**** 11

****替代接口：**** [NN\_TensorDesc](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensordesc/capi-neuralnetworkruntime-nn-tensordesc)

****相关模块：**** [NeuralNetworkRuntime](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime)

****所在头文件：**** [neural\_network\_runtime\_type.h](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_NN\_DataType](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_datatype) dataType | 指定张量的数据类型，要求从[OH\_NN\_DataType](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_datatype)枚举类型中取值。 |
| uint32\_t dimensionCount | 指定张量的维数。 |
| const int32\_t \*dimensions | 指定张量的维度信息（形状）。 |
| const [OH\_NN\_QuantParam](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam) \*quantParam | 指定张量的量化信息，数据类型要求为[OH\_NN\_QuantParam](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam)。 |
| [OH\_NN\_TensorType](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype) type | 指定张量的类型。type的取值和张量的用途相关，当张量用作模型的输入或输出，则要求将type设置为[OH\_NN\_TENSOR](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype)；当张量用作算子参数，则要求从[OH\_NN\_TensorType](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype)中选择除[OH\_NN\_TENSOR](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype)以外的枚举值。 |
