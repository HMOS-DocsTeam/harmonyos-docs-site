---
title: "device_security_mode.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-device-security-mode-8h
kit: 系统
last_updated: "2026-04-22"
slug: devicesecurity-capi-device-security-mode-8h
---

# device\_security\_mode.h

## 概述

文件中定义了与设备安全模式相关的函数。

****引用文件：**** &lt;DeviceSecurityKit/device\_security\_mode.h&gt;

****库：**** libdevice\_security\_mode.z.so

****系统能力：**** SystemCapability.Security.SafetyDetect

****起始版本：**** 5.0.1(13)

****相关模块：**** [DeviceSecurityMode](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [DSM\_DeviceSecurityMode](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1) [DSM\_DeviceSecurityMode](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode) | 设备安全模式枚举类型定义。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DSM\_DeviceSecurityMode](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1) {  DSM\_NORMAL\_MODE = 0,  DSM\_SECURE\_SHIELD\_MODE = 1  } | 设备安全模式枚举值。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [DSM\_DeviceSecurityMode](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1) [HMS\_DSM\_GetDeviceSecurityMode()](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#hms_dsm_getdevicesecuritymode) | 查询当前设备安全模式。 |
