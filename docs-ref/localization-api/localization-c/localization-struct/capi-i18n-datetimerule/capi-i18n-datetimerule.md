---
title: "DateTimeRule"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n-datetimerule
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-i18n-datetimerule
---

# DateTimeRule

```
typedef struct DateTimeRule {...} DateTimeRule
```

## 概述

时间日期规则。

****起始版本：**** 22

****相关模块：**** [i18n](/ref/localization-api/localization-c/localization-module/capi-i18n/capi-i18n)

****所在头文件：**** [timezone.h](/ref/localization-api/localization-c/localization-headerfile/capi-timezone-h/capi-timezone-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t month | 月份。 |
| int32\_t dayOfMonth | 当月的第几天。 |
| int32\_t dayOfWeek | 当周的第几天。 |
| int32\_t weekInMonth | 当月的第几周。 |
| int32\_t millisInDay | 从当天凌晨0点开始到当前时间的毫秒值。 |
| [DateRuleType](/ref/localization-api/localization-c/localization-headerfile/capi-timezone-h/capi-timezone-h#dateruletype) dateRuleType | 日期规则类型。 |
| [TimeRuleType](/ref/localization-api/localization-c/localization-headerfile/capi-timezone-h/capi-timezone-h#timeruletype) timeRuleType | 时间规则类型。 |
