---
title: "SecurityAudit_Filter"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter
kit: 系统
last_updated: "2026-04-22"
slug: devicesecurity-capi-structs-securityaudit-filter
---

# SecurityAudit\_Filter

## 概述

提供过滤条件。

****起始版本：**** 6.0.0(20)

****相关模块：**** [SecurityAudit](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit)

****所在头文件：**** [security\_audit.h](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool [isInclude](#isinclude) | TRUE: 符合条件的事件被返回给客户端。 FALSE: 符合条件的事件不被返回给客户端。 |
| [SecurityAudit\_FilterType](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_filtertype) [type](#type) | 过滤器类型。 |
| const char \*\* [value](#value) | 事件的过滤器的值。 |
| uint64\_t [valueCount](#valuecount) | 过滤器值的数量。 |

## 结构体成员变量说明

### isInclude

```
bool SecurityAudit_Filter::isInclude
```

****描述****

TRUE: 符合条件的事件被返回给客户端。 FALSE: 符合条件的事件不被返回给客户端。

### type

```
SecurityAudit_FilterType SecurityAudit_Filter::type
```

****描述****

过滤器类型。

### value

```
const char** SecurityAudit_Filter::value
```

****描述****

事件的过滤器的值。

### valueCount

```
uint64_t SecurityAudit_Filter::valueCount
```

****描述****

过滤器值的数量。
