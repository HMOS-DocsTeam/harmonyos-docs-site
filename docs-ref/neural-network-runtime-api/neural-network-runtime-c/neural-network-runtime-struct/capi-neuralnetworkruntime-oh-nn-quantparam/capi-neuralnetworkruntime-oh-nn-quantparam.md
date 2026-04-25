---
title: "OH_NN_QuantParam"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-quantparam
kit: AI
last_updated: "2026-04-22"
slug: capi-neuralnetworkruntime-oh-nn-quantparam
---

# OH\_NN\_QuantParam

```
typedef struct OH_NN_QuantParam {...} OH_NN_QuantParam
```

## 概述

量化信息。

在量化的场景中，32位浮点型数据根据以下公式量化为定点数据：

![](../../../../images/cc2fb288/zh-cn_image_0000002552801262.png)

其中s和z是量化参数，在OH\_NN\_QuantParam中通过scale和zeroPoint保存，r是浮点数，q是量化后的结果，q\_min是量化后下界，q\_max是量化后的上界，计算方式如下：

![](../../../../images/3cc87e8d/zh-cn_image_0000002583440957.png)

![](../../../../images/36d221b4/zh-cn_image_0000002552960912.png)

clamp函数定义如下：

![](../../../../images/46309b7a/zh-cn_image_0000002583480913.png)

****起始版本：**** 9

****废弃版本：**** 11

****替代接口：**** [NN\_QuantParam](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam)

****相关模块：**** [NeuralNetworkRuntime](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime)

****所在头文件：**** [neural\_network\_runtime\_type.h](/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t quantCount | 指定numBits、scale和zeroPoint数组的长度。在per-layer量化的场景下，quantCount通常指定为1，即一个张量所有通道共享一套量化参数；在per-channel量化场景下，quantCount通常和张量通道数一致，每个通道使用自己的量化参数。 |
| const uint32\_t \*numBits | 量化位数。 |
| const double \*scale | 指向量化公式中scale数据的指针。 |
| const int32\_t \*zeroPoint | 指向量化公式中zero point数据的指针。 |
