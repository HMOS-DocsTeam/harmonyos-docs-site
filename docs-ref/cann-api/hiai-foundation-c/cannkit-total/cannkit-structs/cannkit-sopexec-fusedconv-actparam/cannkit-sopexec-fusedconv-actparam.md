---
title: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-sopexec-fusedconv-actparam
kit: AI
last_updated: "2026-04-22"
slug: cannkit-sopexec-fusedconv-actparam
---

# HiAI\_SingleOpExecutorFusedConvolutionActivationParam

## 概述

[HMS\_HiAISingleOpExecutor\_CreateFusedConvolutionActivation](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation)输入参数。

****起始版本：**** 5.0.0(12)

****相关模块：**** [CANN](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit)

****所在头文件：**** [hiai\_single\_op.h](/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [HiAI\_SingleOpOptions](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions) \* [options](#options) | 指向[HiAI\_SingleOpOptions](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI\_SingleOpDescriptor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor) \* [convOpDesc](#convopdesc) | 指向卷积算子对应的[HiAI\_SingleOpDescriptor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI\_SingleOpDescriptor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor) \* [actOpDesc](#actopdesc) | 指向激活算子对应的[HiAI\_SingleOpDescriptor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI\_SingleOpTensorDesc](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc) \* [input](#input) | 指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI\_SingleOpTensorDesc](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc) \* [output](#output) | 指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI\_SingleOpTensor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor) \* [filter](#filter) | 指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI\_SingleOpTensor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor) \* [bias](#bias) | 指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。 |

## 结构体成员变量说明

### actOpDesc

```
HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::actOpDesc
```

****描述****

指向激活算子对应的[HiAI\_SingleOpDescriptor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。

### bias

```
HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::bias
```

****描述****

指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。

### convOpDesc

```
HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::convOpDesc
```

****描述****

指向卷积算子对应的[HiAI\_SingleOpDescriptor](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。

### filter

```
HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::filter
```

****描述****

指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。

### input

```
HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::input
```

****描述****

指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。

### options

```
HiAI_SingleOpOptions* HiAI_SingleOpExecutorFusedConvolutionActivationParam::options
```

****描述****

指向[HiAI\_SingleOpOptions](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions)对象的指针。该值不能为空指针，否则接口调用失败。

### output

```
HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::output
```

****描述****

指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。
