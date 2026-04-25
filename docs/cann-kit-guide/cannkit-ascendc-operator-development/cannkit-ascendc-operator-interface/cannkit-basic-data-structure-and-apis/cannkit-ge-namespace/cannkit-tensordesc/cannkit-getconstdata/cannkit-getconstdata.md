---
title: "GetConstData"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getconstdata
kit: ai
last_updated: "2026-04-22"
---

# GetConstData

## 函数功能

如果TensorDesc是常量节点的描述，获取TensorDesc中的权重值。

## 函数原型

```
bool GetConstData(uint8_t **const_data_buffer, size_t &const_data_len) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| const\_data\_buffer | 输出 | 权重地址。 |
| const\_data\_len | 输出 | 权重长度。 |

## 返回值

获取成功，返回true。

获取失败，返回false。

## 异常处理

无

## 约束说明

无
