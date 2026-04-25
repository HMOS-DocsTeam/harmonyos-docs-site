---
title: "GetOpsTypeList"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getopstypelist
kit: ai
last_updated: "2026-04-22"
---

# GetOpsTypeList

## 函数功能

获取系统支持的所有算子类型列表。

## 函数原型

![](../../../../../../../images/c0071f30/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
static graphStatus GetOpsTypeList(std::vector<std::string> &all_ops);
static graphStatus GetOpsTypeList(std::vector<AscendString> &all_ops);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| all\_ops | 输出 | 算子类型列表。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | - SUCCESS：执行成功。  - FAILED：执行失败。 |

## 约束说明

无
