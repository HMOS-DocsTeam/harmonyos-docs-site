---
title: "ArkUI_AttributeItem"
sidebar_position: 66
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-attributeitem
---

# ArkUI\_AttributeItem

```
typedef struct {...} ArkUI_AttributeItem
```

## 概述

定义[setAttribute](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute)函数通用入参结构。各个属性设置接口可选择使用其中的成员变量来存储特定类型的参数数据。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_node.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const [ArkUI\_NumberValue](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-numbervalue/capi-arkui-nativemodule-arkui-numbervalue)\* value | 数字类型数组，用于存储数字数组类型的参数。 |
| int32\_t size | 数字类型数组大小，配合变量value使用，value数组的长度。 |
| const char\* string | 字符串类型，用于存储字符串类型的参数。 |
| void\* object | 对象类型，用于存储对象类型的参数。 |
