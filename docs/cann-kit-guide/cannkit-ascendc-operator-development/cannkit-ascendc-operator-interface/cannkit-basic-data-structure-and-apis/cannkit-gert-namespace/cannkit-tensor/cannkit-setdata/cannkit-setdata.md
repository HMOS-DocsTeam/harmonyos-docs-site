---
title: "SetData"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setdata
kit: ai
last_updated: "2026-04-22"
---

# SetData

## 函数功能

设置Tensor的数据。

## 函数原型

```
void SetData(TensorData &&data)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| data | 输入 | 需要设置的数据。  关于TensorData类型的定义，请参见[TensorData](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensordata/cannkit-construction-and-destructor-functions)。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
Tensor t = {{}, {}, {}, {}, nullptr};
void *a = &t;
TensorData td(a, nullptr);
t.SetData(std::move(td));
```
