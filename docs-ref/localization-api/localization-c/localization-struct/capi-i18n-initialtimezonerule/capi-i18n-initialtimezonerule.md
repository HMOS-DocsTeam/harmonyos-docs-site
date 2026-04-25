---
title: "InitialTimeZoneRule"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n-initialtimezonerule
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-i18n-initialtimezonerule
---

# InitialTimeZoneRule

```
typedef struct InitialTimeZoneRule {...} InitialTimeZoneRule
```

## 概述

起始时区规则。

****起始版本：**** 22

****相关模块：**** [i18n](/ref/localization-api/localization-c/localization-module/capi-i18n/capi-i18n)

****所在头文件：**** [timezone.h](/ref/localization-api/localization-c/localization-headerfile/capi-timezone-h/capi-timezone-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t rawOffset | 时区的原始偏移量。 |
| int32\_t dstSavings | 夏令时的偏移量。 |
