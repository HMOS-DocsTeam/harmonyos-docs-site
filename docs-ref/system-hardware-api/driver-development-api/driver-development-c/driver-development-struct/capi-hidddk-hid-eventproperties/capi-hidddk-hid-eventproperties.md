---
title: "Hid_EventProperties"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk-hid-eventproperties
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidddk-hid-eventproperties
---

# Hid\_EventProperties

```
typedef struct Hid_EventProperties {...} Hid_EventProperties
```

## 概述

设备关注事件属性。

****起始版本：**** 11

****相关模块：**** [HidDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk)

****所在头文件：**** [hid\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| struct Hid\_EventTypeArray hidEventTypes | 事件类型属性编码数组 |
| struct Hid\_KeyCodeArray hidKeys | 键值属性编码数组 |
| struct Hid\_AbsAxesArray hidAbs | 绝对坐标属性编码数组 |
| struct Hid\_RelAxesArray hidRelBits | 相对坐标属性编码数组 |
| struct Hid\_MscEventArray hidMiscellaneous | 其它特殊事件属性编码数组 |
| int32\_t hidAbsMax[64] | 绝对坐标属性最大值 |
| int32\_t hidAbsMin[64] | 绝对坐标属性最小值 |
| int32\_t hidAbsFuzz[64] | 绝对坐标属性模糊值 |
| int32\_t hidAbsFlat[64] | 绝对坐标属性固定值 |
