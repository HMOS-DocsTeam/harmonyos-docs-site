---
title: "vibrator_type.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-type-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-vibrator-type-h
---

# vibrator\_type.h

## 概述

为您提供标准的开放API，用于控制马达振动的启停

****引用文件：**** &lt;sensors/vibrator\_type.h&gt;

****库：**** libohvibrator.z.so

****系统能力：**** SystemCapability.Sensors.MiscDevice

****起始版本：**** 11

****相关模块：**** [Vibrator](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-vibrator/capi-vibrator)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Vibrator\_Attribute](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-vibrator-vibrator-attribute/capi-vibrator-vibrator-attribute) | Vibrator\_Attribute | 马达属性。 |
| [Vibrator\_FileDescription](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-vibrator-vibrator-filedescription/capi-vibrator-vibrator-filedescription) | Vibrator\_FileDescription | 振动文件描述。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Vibrator\_ErrorCode](#vibrator_errorcode) | Vibrator\_ErrorCode | 为用户定义错误码。 |
| [Vibrator\_Usage](#vibrator_usage) | Vibrator\_Usage | 振动优先级。 |

## 枚举类型说明

### Vibrator\_ErrorCode

```
enum Vibrator_ErrorCode
```

****描述****

为用户定义错误码。

****起始版本：**** 11

| 枚举项 | 描述 |
| --- | --- |
| PERMISSION\_DENIED = 201 | 权限校验失败。 |
| PARAMETER\_ERROR = 401 | 参数检查失败，包括必选参数没有传入，参数类型错误等。 |
| UNSUPPORTED = 801 | 该设备不支持此 API，通常用于在设备已支持该 SysCap 时，针对其少量的 API 的支持处理。 |
| DEVICE\_OPERATION\_FAILED = 14600101 | 设备操作失败。 |

### Vibrator\_Usage

```
enum Vibrator_Usage
```

****描述****

振动优先级。

****起始版本：**** 11

| 枚举项 | 描述 |
| --- | --- |
| VIBRATOR\_USAGE\_UNKNOWN = 0 | 未知场景 |
| VIBRATOR\_USAGE\_ALARM = 1 | 报警 |
| VIBRATOR\_USAGE\_RING = 2 | 铃声 |
| VIBRATOR\_USAGE\_NOTIFICATION = 3 | 通知 |
| VIBRATOR\_USAGE\_COMMUNICATION = 4 | 通信 |
| VIBRATOR\_USAGE\_TOUCH = 5 | 触摸 |
| VIBRATOR\_USAGE\_MEDIA = 6 | 媒体 |
| VIBRATOR\_USAGE\_PHYSICAL\_FEEDBACK = 7 | 物理反馈 |
| VIBRATOR\_USAGE\_SIMULATED\_REALITY = 8 | 模拟现实 |
