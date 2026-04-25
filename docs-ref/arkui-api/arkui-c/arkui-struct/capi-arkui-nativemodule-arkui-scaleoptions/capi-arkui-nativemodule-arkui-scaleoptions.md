---
title: "ArkUI_ScaleOptions"
sidebar_position: 85
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-scaleoptions
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkui-nativemodule-arkui-scaleoptions
---

# ArkUI\_ScaleOptions

```
typedef struct {...} ArkUI_ScaleOptions
```

## 概述

定义组件转场时的缩放效果对象。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_type.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float x | x轴的缩放倍数。x&gt;1时以x轴方向放大，0&lt;x&lt;1时以x轴方向缩小，x=0时表示在x轴方向缩小成0，x=1时表示在x轴方向缩放倍数是1，x&lt;0时沿x轴反向并缩放。 |
| float y | y轴的缩放倍数。y&gt;1时以y轴方向放大，0&lt;y&lt;1时以y轴方向缩小，y=0时表示在y轴方向缩小成0，y=1时表示在y轴方向缩放倍数是1，y&lt;0时沿y轴反向并缩放。 |
| float z | 当前为二维显示，该参数无效。 |
| float centerX | 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标，单位为vp。 |
| float centerY | 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标，单位为vp。 |
