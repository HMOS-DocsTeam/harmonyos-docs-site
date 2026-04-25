---
title: "GetName"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getname
kit: ai
last_updated: "2026-04-22"
---

# GetName

## 函数功能

获取算子名称。

## 函数原型

![](../../../../../../../images/4ebe2c26/note_3.0-zh-cn.png) 

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
std::string GetName() const;
graphStatus GetName(AscendString &name) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| name | 输出 | 算子名称。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | GRAPH\_FAILED：失败。  GRAPH\_SUCCESS：成功。 |

## 异常处理

无

## 约束说明

无
