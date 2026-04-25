---
title: "GetRequiredInputShape"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-infershapecontext-getrequiredinputshape
kit: ai
last_updated: "2026-04-22"
---

# GetRequiredInputShape

## 函数功能

根据算子原型定义中的输入索引获取对应的必选输入shape指针。

## 函数原型

```
const Shape *GetRequiredInputShape(const size_t ir_index) const;
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| ir\_index | 输入 | 必选输入在算子IR原型定义中的索引，从0开始计数。 |

## 返回值

返回指定输入的shape指针，若输入的ir\_index非法，返回空指针。

关于Shape类型的定义，请参见[Shape](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-shape/cannkit-shape-introduction)。

## 约束说明

无

## 调用示例

```
ge::graphStatus InferShapeForXXX(InferShapeContext *context) {
  auto in_shape = context->GetRequiredInputShape(2);
  // ...
}
```
