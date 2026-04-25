---
title: "INFER_FUNC_REG"
sidebar_position: 52
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-infer-func-reg
kit: ai
last_updated: "2026-04-22"
---

# INFER\_FUNC\_REG

## 函数功能

注册算子的InferShape函数。

## 函数原型

```
INFER_FUNC_REG(op_name, x)
```

该函数内部会自动调用INFER\_VERIFY\_FUNC(op\_name, x)，INFER\_VERIFY\_FUNC函数中的op\_name为算子的类型，x为指向INFER\_FUNC\_REG（op\_name,x）中“x”的指针。

## 约束说明

无

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| op\_name | 输入 | 算子类型。 |
| x | 输入 | InferShape函数名，和[IMPLEMT\_INFERFUNC](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-inferfunc)的InferShape函数名保持一致。 |

## 返回值

无
