---
title: "SetOriginFormat"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensor-setoriginformat
kit: ai
last_updated: "2026-04-22"
---

# SetOriginFormat

## 函数功能

设置Tensor的原始format。

## 函数原型

```
void SetOriginFormat(const ge::Format origin_format)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| origin\_format | 输入 | 原始format。  关于ge::Format类型的定义，请参见[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
Tensor t = {{}, {}, {}, {}, nullptr};
t.SetOriginFormat(ge::FORMAT_NHWC);
t.SetStorageFormat(ge::FORMAT_NC1HWC0);
auto fmt = t.GetOriginFormat(); // ge::FORMAT_NHWC
```
