---
title: "UsbDdkConfigDescriptor"
sidebar_position: 33
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkconfigdescriptor
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usbddkconfigdescriptor
---

# UsbDdkConfigDescriptor

```
typedef struct UsbDdkConfigDescriptor {...} UsbDdkConfigDescriptor
```

## 概述

配置描述符。

****起始版本：**** 10

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| struct UsbConfigDescriptor configDescriptor | 标准配置描述符。 |
| struct UsbDdkInterface\* interface | 该配置所包含的接口。 |
| const uint8\_t\* extra | 未做解析的描述符，包含特定于类或供应商的描述符。 |
| uint32\_t extraLength | 未做解析的描述符长度。 |
