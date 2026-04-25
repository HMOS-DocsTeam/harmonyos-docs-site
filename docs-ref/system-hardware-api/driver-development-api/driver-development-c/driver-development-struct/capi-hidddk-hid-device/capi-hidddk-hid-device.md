---
title: "Hid_Device"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk-hid-device
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidddk-hid-device
---

# Hid\_Device

```
typedef struct Hid_Device {...} Hid_Device
```

## 概述

设备基本信息。

****起始版本：**** 11

****相关模块：**** [HidDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk)

****所在头文件：**** [hid\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* deviceName | 设备名称 |
| uint16\_t vendorId | 厂商ID |
| uint16\_t productId | 产品ID |
| uint16\_t version | 版本号 |
| uint16\_t bustype | 总线类型 |
| Hid\_DeviceProp\* properties | 由[Hid\_DeviceProp](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h#hid_deviceprop)表示的设备特性 |
| uint16\_t propLength | 设备特性数量 |
