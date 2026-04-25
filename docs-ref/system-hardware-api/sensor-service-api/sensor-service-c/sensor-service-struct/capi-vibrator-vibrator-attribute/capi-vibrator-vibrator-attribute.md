---
title: "Vibrator_Attribute"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-attribute
kit: 系统
last_updated: "2026-04-22"
slug: capi-vibrator-vibrator-attribute
---

# Vibrator\_Attribute

```
typedef struct Vibrator_Attribute { ... } Vibrator_Attribute
```

## 概述

马达属性。

****起始版本：**** 11

****相关模块：**** [Vibrator](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-vibrator/capi-vibrator)

****所在头文件：**** [vibrator\_type.h](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-vibrator-type-h/capi-vibrator-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t vibratorId | 马达ID |
| [Vibrator\_Usage](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-vibrator-type-h/capi-vibrator-type-h#vibrator_usage) usage | 振动场景 |
