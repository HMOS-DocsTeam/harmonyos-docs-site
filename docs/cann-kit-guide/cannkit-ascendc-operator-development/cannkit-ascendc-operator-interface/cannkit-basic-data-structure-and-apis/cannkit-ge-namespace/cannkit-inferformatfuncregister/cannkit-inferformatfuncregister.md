---
title: "InferFormatFuncRegister"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-inferformatfuncregister
kit: ai
last_updated: "2026-04-22"
---

# InferFormatFuncRegister

## 函数功能

InferFormatFuncRegister构造函数和析构函数。

## 函数原型

![](../../../../../../images/ad4cb1de/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
InferFormatFuncRegister(const std::string &operator_type, const InferFormatFunc &infer_format_func);
InferFormatFuncRegister(const char_t *const operator_type, const InferFormatFunc &infer_format_func);
~InferFormatFuncRegister() = default;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| operator\_type | 输入 | 算子类型。 |
| infer\_format\_func | 输入 | 算子InferFormat函数。 |

## 返回值

InferFormatFuncRegister构造函数返回InferFormatFuncRegister类型的对象。

## 约束说明

算子InferFormat函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。
