---
title: "ArkUI_ColorStop"
sidebar_position: 79
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorstop
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-colorstop
---

# ArkUI\_ColorStop

```
typedef struct {...} ArkUI_ColorStop
```

## 概述

定义渐变色结构。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_type.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const uint32\_t\* colors | 颜色数组。 |
| float\* stops | 位置数组。 |
| int size | 数组长度。 |
