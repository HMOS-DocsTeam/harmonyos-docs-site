---
title: "UsbDdkInterface"
sidebar_position: 32
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkinterface
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usbddkinterface
---

# UsbDdkInterface

```
typedef struct UsbDdkInterface {...} UsbDdkInterface
```

## 概述

USB接口，是特定接口下备用设置的集合。

****起始版本：**** 10

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t numAltsetting | 接口的备用设置数量。 |
| struct UsbDdkInterfaceDescriptor\* altsetting | 接口的备用设置。 |
