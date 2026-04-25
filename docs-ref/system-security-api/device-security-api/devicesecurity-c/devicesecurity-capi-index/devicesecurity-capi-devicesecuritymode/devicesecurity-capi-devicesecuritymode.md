---
title: "DeviceSecurityMode"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode
kit: 系统
last_updated: "2026-04-22"
slug: devicesecurity-capi-devicesecuritymode
---

# DeviceSecurityMode

## 概述

DeviceSecurityMode模块用于管理设备安全模式。

****系统能力：**** SystemCapability.Security.SafetyDetect

****起始版本：**** 5.0.1(13)

## 汇总

### 文件

| 名称 | 描述 |
| --- | --- |
| [device\_security\_mode.h](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h) | 定义与设备安全模式相关的函数。 |

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [DSM\_DeviceSecurityMode](#dsm_devicesecuritymode-1) [DSM\_DeviceSecurityMode](#dsm_devicesecuritymode) | 设备安全模式枚举类型定义。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DSM\_DeviceSecurityMode](#dsm_devicesecuritymode-1) {  DSM\_NORMAL\_MODE = 0,  DSM\_SECURE\_SHIELD\_MODE = 1  } | 设备安全模式枚举值。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [DSM\_DeviceSecurityMode](#dsm_devicesecuritymode-1) [HMS\_DSM\_GetDeviceSecurityMode()](#hms_dsm_getdevicesecuritymode) | 查询当前设备安全模式。 |

## 类型定义说明

### DSM\_DeviceSecurityMode

```
typedef enum DSM_DeviceSecurityMode DSM_DeviceSecurityMode
```

****描述****

设备安全模式枚举类型定义。

****起始版本：**** 5.0.1(13)

## 枚举说明

### DSM\_DeviceSecurityMode

```
enum DSM_DeviceSecurityMode
```

****描述****

枚举设备安全模式。

****起始版本：**** 5.0.1(13)

| 枚举值 | 描述 |
| --- | --- |
| DSM\_NORMAL\_MODE | 一般模式，为设备默认的安全模式。 |
| DSM\_SECURE\_SHIELD\_MODE | 坚盾守护模式，坚盾守护模式用于保护设备不被复杂网络攻击，此模式下部分网页的浏览功能和网络技术会受到限制。 |

## 函数说明

### HMS\_DSM\_GetDeviceSecurityMode()

```
DSM_DeviceSecurityMode HMS_DSM_GetDeviceSecurityMode(void)
```

****描述****

查询当前设备的安全模式。

****起始版本：**** 5.0.1(13)

****返回：****

返回结果参见枚举类型[DSM\_DeviceSecurityMode](#dsm_devicesecuritymode-1)。
