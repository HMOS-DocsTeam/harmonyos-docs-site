---
title: "TimeZoneRules"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n-timezonerules
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-i18n-timezonerules
---

# TimeZoneRules

```
typedef struct TimeZoneRules {...} TimeZoneRules
```

## 概述

完整的时区规则。

****起始版本：**** 22

****相关模块：**** [i18n](/ref/localization-api/localization-c/localization-module/capi-i18n/capi-i18n)

****所在头文件：**** [timezone.h](/ref/localization-api/localization-c/localization-headerfile/capi-timezone-h/capi-timezone-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [InitialTimeZoneRule](/ref/localization-api/localization-c/localization-struct/capi-i18n-initialtimezonerule/capi-i18n-initialtimezonerule) initial | 起始时区规则。 |
| [TimeArrayTimeZoneRule\*](/ref/localization-api/localization-c/localization-struct/capi-i18n-timearraytimezonerule/capi-i18n-timearraytimezonerule) timeArrayRules | 起始时间戳数组定义的时区规则数组。 |
| [AnnualTimeZoneRule\*](/ref/localization-api/localization-c/localization-struct/capi-i18n-annualtimezonerule/capi-i18n-annualtimezonerule) annualRules | 每年生效的时区规则数组。 |
| size\_t numTimeArrayRules | 起始时间戳数组定义的时区规则数组的大小。 |
| size\_t numAnnualRules | 每年生效的时区规则数组的大小。 |
