---
title: "GetOmOptype"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getomoptype
kit: ai
last_updated: "2026-04-22"
---

# GetOmOptype

## 函数功能

获取模型的算子类型。

## 函数原型

![](../../../../../../../images/5ae24e7d/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
std::string GetOmOptype () const;
Status GetOmOptype(ge::AscendString &om_op_type) const;
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| om\_op\_type | 输出 | 模型的算子类型。 |

## 约束说明

无
