---
title: "ARKUI_TextPickerCascadeRangeContent"
sidebar_position: 78
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-nativemodule-arkui-textpickercascaderangecontent
kit: 应用框架
last_updated: "2026-04-22"
slug: i-nativemodule-arkui-textpickercascaderangecontent
---

# ARKUI\_TextPickerCascadeRangeContent

```
typedef struct {...} ARKUI_TextPickerCascadeRangeContent
```

## 概述

定义多列联动滑动数据选择器的结构体。

****起始版本：**** 12

****相关模块：**** [ArkUI\_NativeModule](/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule)

****所在头文件：**** [native\_type.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* text | 文本信息。 |
| const [ARKUI\_TextPickerRangeContent](/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-nativemodule-arkui-textpickerrangecontent/pi-arkui-nativemodule-arkui-textpickerrangecontent)\* children | 联动数据。 |
| int32\_t size | 联动数据数组大小。 |
