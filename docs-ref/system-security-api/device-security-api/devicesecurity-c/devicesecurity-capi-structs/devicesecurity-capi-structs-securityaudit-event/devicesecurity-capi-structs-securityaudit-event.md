---
title: "SecurityAudit_Event"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-event
kit: 系统
last_updated: "2026-04-22"
slug: devicesecurity-capi-structs-securityaudit-event
---

# SecurityAudit\_Event

## 概述

定义审计事件信息。

****起始版本：**** 6.0.0(20)

****相关模块：**** [SecurityAudit](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit)

****所在头文件：**** [security\_audit.h](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int64\_t [eventId](#eventid) | 审计事件ID。 |
| const char \* [metadata](#metadata) | 集成了事件版本号、事件接收时间、设备ID和用户ID的json字符串。 |
| const char \* [content](#content) | 事件内容。 |

## 结构体成员变量说明

### content

```
const char* SecurityAudit_Event::content
```

****描述****

事件内容。

### eventId

```
int64_t SecurityAudit_Event::eventId
```

****描述****

审计事件ID。

### metadata

```
const char* SecurityAudit_Event::metadata
```

****描述****

集成了事件版本号、事件接收时间、设备ID和用户ID的json字符串。
