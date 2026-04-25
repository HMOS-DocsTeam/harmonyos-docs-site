---
title: "ArkUI_GridItemRect"
sidebar_position: 167
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-griditemrect
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-griditemrect
---

# ArkUI\_GridItemRect

```
typedef struct {...} ArkUI_GridItemRect
```

## 概述

定义Grid布局选项onGetRectByIndex回调返回值结构体。

****起始版本：**** 22

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_type.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h)

****相关示例：**** [native\_type\_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t rowStart | GridItem行起始位置。 |
| uint32\_t columnStart | GridItem列起始位置。 |
| uint32\_t rowSpan | GridItem占用的行数。 |
| uint32\_t columnSpan | GridItem占用的列数。 |
