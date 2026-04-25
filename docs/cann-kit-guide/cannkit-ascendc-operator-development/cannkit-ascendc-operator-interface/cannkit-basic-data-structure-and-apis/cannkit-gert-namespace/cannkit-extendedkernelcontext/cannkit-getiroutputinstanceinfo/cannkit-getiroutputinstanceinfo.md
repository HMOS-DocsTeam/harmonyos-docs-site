---
title: "GetIrOutputInstanceInfo"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getiroutputinstanceinfo
kit: ai
last_updated: "2026-04-22"
---

# GetIrOutputInstanceInfo

## 函数功能

根据算子原型定义中的输出索引获取对应输出的实例化信息。

## 函数原型

```
const AnchorInstanceInfo *GetIrOutputInstanceInfo(const size_t ir_index) const;
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| ir\_index | 输入 | 算子IR原型定义中的输出索引，从0开始计数。 |

## 返回值

指定输出的实例化信息。

关于AnchorInstanceInfo的定义，请参见[AnchorInstanceInfo](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-anchorinstanceinfo/cannkit-anchorinstanceinfo-introduction)。

## 约束说明

无

## 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
for (size_t idx = 0; idx < extend_context->GetComputeNodeInfo()->GetOutputsNum(); ++idx) {
  auto output_td = extend_context->GetIrOutputInstanceInfo(idx);
  // ...
}
```
