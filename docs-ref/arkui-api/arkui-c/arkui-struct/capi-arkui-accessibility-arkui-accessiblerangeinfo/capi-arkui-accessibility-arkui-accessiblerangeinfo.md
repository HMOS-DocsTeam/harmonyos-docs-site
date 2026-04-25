---
title: "ArkUI_AccessibleRangeInfo"
sidebar_position: 42
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-accessibility-arkui-accessiblerangeinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-accessibility-arkui-accessiblerangeinfo
---

# ArkUI\_AccessibleRangeInfo

```
typedef struct {...} ArkUI_AccessibleRangeInfo
```

## 概述

用于为特定组件（如[Slider](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider)、[Rating](/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating)、[Progress](/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress)组件）设置和获取其当前值、最大值和最小值。

****起始版本：**** 13

****相关模块：**** [ArkUI\_Accessibility](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility)

****所在头文件：**** [native\_interface\_accessibility.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| double min | 组件的最小值。 |
| double max | 组件的最大值。 |
| double current | 组件的当前值。 |
