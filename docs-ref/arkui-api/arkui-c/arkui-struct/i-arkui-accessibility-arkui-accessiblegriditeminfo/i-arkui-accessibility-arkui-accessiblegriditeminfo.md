---
title: "ArkUI_AccessibleGridItemInfo"
sidebar_position: 44
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-arkui-accessibility-arkui-accessiblegriditeminfo
kit: 应用框架
last_updated: "2026-04-22"
slug: i-arkui-accessibility-arkui-accessiblegriditeminfo
---

# ArkUI\_AccessibleGridItemInfo

```
typedef struct {...} ArkUI_AccessibleGridItemInfo
```

## 概述

用于配置特定组件（[List](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list)、[Flex](/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex)、[Select](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select)、[Swiper](/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper)组件）的属性值。

****起始版本：**** 13

****相关模块：**** [ArkUI\_Accessibility](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility)

****所在头文件：**** [native\_interface\_accessibility.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool heading | 是否是标题。true表示是标题，false表示不是标题。 |
| bool selected | 是否被选中。true表示被选中，false表示未被选中。 |
| int32\_t columnIndex | 列下标。取值范围为大于0的整数。 |
| int32\_t rowIndex | 行下标。取值范围为大于0的整数。 |
| int32\_t columnSpan | 列跨度。取值范围为大于0的整数。 |
| int32\_t rowSpan | 行跨度。取值范围为大于0的整数。 |
