---
title: "ArkUI_AccessibleGridInfo"
sidebar_position: 43
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-accessibility-arkui-accessiblegridinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-accessibility-arkui-accessiblegridinfo
---

# ArkUI\_AccessibleGridInfo

```
typedef struct {...} ArkUI_AccessibleGridInfo
```

## 概述

用于配置特定组件（如[List](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list)、[Flex](/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex)、[Select](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select)、[Swiper](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper)组件）的网格布局属性。

****起始版本：**** 13

****相关模块：**** [ArkUI\_Accessibility](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility)

****所在头文件：**** [native\_interface\_accessibility.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t rowCount | 组件的行数。取值范围为大于0的整数。 |
| int32\_t columnCount | 组件的列数。取值范围为大于0的整数。 |
| int32\_t selectionMode | 值为0时表示仅选中网格的一行，非0值时表示选中网格的多行。 |
