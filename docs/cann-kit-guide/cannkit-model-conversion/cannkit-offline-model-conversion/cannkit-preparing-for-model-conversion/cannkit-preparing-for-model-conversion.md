---
title: "模型转换前准备"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-preparing-for-model-conversion
kit: ai
last_updated: "2026-04-22"
---

# 模型转换前准备

CANN Kit当前仅支持Caffe、TensorFlow、ONNX和MindSpore模型转换为离线模型，其他格式的模型需要开发者自行转换为CANN Kit支持的模型格式。

1. 准备训练好的Caffe、TensorFlow、ONNX等模型。例如：[Caffe SqueezeNet V1.0](https://github.com/forresti/SqueezeNet)模型。
2. 下载[Tools](/cann-kit-guide/cannkit-preparations#tools下载)，解压使用Tools下的OMG工具，将TensorFlow或Caffe模型转换为IR模型，使用方式请参见[模型转换示例](/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example)。

![](../../../../images/e531e440/note_3.0-zh-cn.png) 

若TensorFlow或Caffe模型过大，可以在OMG转换之前使用[Tools下载](/cann-kit-guide/cannkit-preparations#tools下载)的轻量化工具，使用方式请参见[模型轻量化](/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview)。
