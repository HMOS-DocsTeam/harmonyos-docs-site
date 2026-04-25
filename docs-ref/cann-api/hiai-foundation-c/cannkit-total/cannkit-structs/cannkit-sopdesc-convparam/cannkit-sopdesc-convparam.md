---
title: "HiAISingleOpDescriptor_ConvolutionParam"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-sopdesc-convparam
kit: AI
last_updated: "2026-04-22"
slug: cannkit-sopdesc-convparam
---

# HiAISingleOpDescriptor\_ConvolutionParam

## 概述

[HMS\_HiAISingleOpDescriptor\_CreateConvolution](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createconvolution)输入参数。

****起始版本：**** 5.0.0(12)

****相关模块：**** [CANN](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit)

****所在头文件：**** [hiai\_single\_op.h](/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [HiAI\_SingleOpConvMode](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopconvmode) [convMode](#convmode) | 卷积模式。 |
| int64\_t [strides](#strides) [2] | 卷积核在高度和宽度上的移动步幅，是一个长度为2的int数组[strideHeight, strideWidth]。 |
| int64\_t [dilations](#dilations) [2] | 卷积核在高度和宽度上的扩张率，是一个长度为2的int数组[dilationHeight, dilationWidth]。 |
| int64\_t [pads](#pads) [4] | 各个轴起始和末尾的填充长度，是一个长度为4的int数组[h\_begin, h\_end, w\_begin, w\_end]。该值仅在****padMode****为****HIAI\_SINGLEOP\_PAD\_MODE\_SPECIFIC****时生效。 |
| int64\_t [groups](#groups) | 输入通道被划分成的组数。若****convMode****为****HIAI\_SINGLEOP\_CONV\_MODE\_DEPTHWISE****，****groups****不生效。 |
| [HiAI\_SingleOpPadMode](/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoppadmode) [padMode](#padmode) | 输入的填充方式。对于****HIAI\_SINGLEOP\_CONV\_MODE\_COMMON****和****HIAI\_SINGLEOP\_CONV\_MODE\_DEPTHWISE****， 支持****0**** (SPECIFIC)，****1**** (SAME)，****2**** (SAME\_UPPER)，****3**** (SAME\_LOWER)和****4**** (VALID)。对于 ****HIAI\_SINGLEOP\_CONV\_MODE\_TRANSPOSED****, 支持****0**** (SPECIFIC)，****1**** (SAME)和****4**** (VALID)。 |

## 结构体成员变量说明

### convMode

```
HiAI_SingleOpConvMode HiAISingleOpDescriptor_ConvolutionParam::convMode
```

****描述****

卷积模式。

### dilations

```
int64_t HiAISingleOpDescriptor_ConvolutionParam::dilations[2]
```

****描述****

卷积核在高度和宽度上的扩张率，是一个长度为2的int数组[dilationHeight, dilationWidth]。

### groups

```
int64_t HiAISingleOpDescriptor_ConvolutionParam::groups
```

****描述****

输入通道被划分成的组数。若****convMode****为****HIAI\_SINGLEOP\_CONV\_MODE\_DEPTHWISE****，****groups****不生效。

### padMode

```
HiAI_SingleOpPadMode HiAISingleOpDescriptor_ConvolutionParam::padMode
```

****描述****

输入的填充方式。对于****HIAI\_SINGLEOP\_CONV\_MODE\_COMMON****和****HIAI\_SINGLEOP\_CONV\_MODE\_DEPTHWISE****， 支持****0**** (SPECIFIC)，****1**** (SAME)，****2**** (SAME\_UPPER)，****3**** (SAME\_LOWER)和****4**** (VALID)。对于 ****HIAI\_SINGLEOP\_CONV\_MODE\_TRANSPOSED****, 支持****0**** (SPECIFIC)，****1**** (SAME)和****4**** (VALID)。

### pads

```
int64_t HiAISingleOpDescriptor_ConvolutionParam::pads[4]
```

****描述****

各个轴起始和末尾的填充长度，是一个长度为4的int数组[h\_begin, h\_end, w\_begin, w\_end]。该值仅在****padMode****为****HIAI\_SINGLEOP\_PAD\_MODE\_SPECIFIC****时生效。

### strides

```
int64_t HiAISingleOpDescriptor_ConvolutionParam::strides[2]
```

****描述****

卷积核在高度和宽度上的移动步幅，是一个长度为2的int数组[strideHeight, strideWidth]。
