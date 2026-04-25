---
title: "AnnualTimeZoneRule"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n-annualtimezonerule
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-i18n-annualtimezonerule
---

# AnnualTimeZoneRule

```
typedef struct AnnualTimeZoneRule {...} AnnualTimeZoneRule
```

## 概述

每年生效的时区规则。

****起始版本：**** 22

****相关模块：**** [i18n](/ref/localization-api/localization-c/localization-module/capi-i18n/capi-i18n)

****所在头文件：**** [timezone.h](/ref/localization-api/localization-c/localization-headerfile/capi-timezone-h/capi-timezone-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* name | 时区规则的名称。 |
| int32\_t startYear | 时区规则生效的起始年份。 |
| int32\_t endYear | 时区规则生效的终止年份。 |
| int32\_t rawOffset | 时区的原始偏移量。 |
| int32\_t dstSavings | 夏令时的偏移量。 |
| [DateTimeRule](/ref/localization-api/localization-c/localization-struct/capi-i18n-datetimerule/capi-i18n-datetimerule) dateTimeRule | 时间日期规则。 |
