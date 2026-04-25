---
title: "time_service.h"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-time-service-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-time-service-h
---

# time\_service.h

## 概述

声明获取时间时区信息的API。

****库：**** libtime\_service\_ndk.so

****引用文件：**** &lt;BasicServicesKit/time\_service.h&gt;

****系统能力：**** SystemCapability.MiscServices.Time

****起始版本：**** 12

****相关模块：**** [TimeService](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-timeservice/capi-timeservice)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [TimeService\_ErrCode](#timeservice_errcode) | TimeService\_ErrCode | 枚举错误码。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [TimeService\_ErrCode OH\_TimeService\_GetTimeZone(char \*timeZone, uint32\_t len)](#oh_timeservice_gettimezone) | 获取当前系统时区。 |

## 枚举类型说明

### TimeService\_ErrCode

```
enum TimeService_ErrCode
```

****描述****

枚举错误码。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| TIMESERVICE\_ERR\_OK = 0 | 成功。 |
| TIMESERVICE\_ERR\_INTERNAL\_ERROR = 13000001 | 获取系统参数失败。 |
| TIMESERVICE\_ERR\_INVALID\_PARAMETER = 13000002 | 无效的参数。 |

## 函数说明

### OH\_TimeService\_GetTimeZone()

```
TimeService_ErrCode OH_TimeService_GetTimeZone(char *timeZone, uint32_t len)
```

****描述****

获取当前系统时区。

****系统能力：**** SystemCapability.MiscServices.Time

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| char \*timeZone | 时区ID字符数组，成功时写入当前系统时区ID字符串，失败时写入空字符串，字符串以'\0'结尾。 |
| uint32\_t len | 时区ID字符数组分配的内存大小，当前时区字符串没有最大长度规格，建议申请足够多的内存，至少不能低于31字节。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [TimeService\_ErrCode](#timeservice_errcode) | 返回TIMESERVICE\_ERR\_OK表示成功。  返回TIMESERVICE\_ERR\_INTERNAL\_ERROR表示获取系统参数失败。  返回TIMESERVICE\_ERR\_INVALID\_PARAMETER表示timeZone为NULL指针或时区名称（不包括结束字符（'\0'））的大小大于或等于len。 |
