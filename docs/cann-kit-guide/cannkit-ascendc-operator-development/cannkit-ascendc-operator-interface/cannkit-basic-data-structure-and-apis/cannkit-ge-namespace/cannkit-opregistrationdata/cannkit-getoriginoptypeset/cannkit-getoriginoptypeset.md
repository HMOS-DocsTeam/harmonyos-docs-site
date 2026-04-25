---
title: "GetOriginOpTypeSet"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getoriginoptypeset
kit: ai
last_updated: "2026-04-22"
---

# GetOriginOpTypeSet

## 函数功能

获取原始模型的算子类型集合。

## 函数原型

![](../../../../../../../images/a86fe656/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
std::set<std::string> GetOriginOpTypeSet () const;
Status GetOriginOpTypeSet(std::set<ge::AscendString> &ori_op_type) const;
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| ori\_op\_type | 输出 | 原始模型的算子类型集合。 |

## 约束说明

无
