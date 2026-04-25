---
title: "UsbDdkEndpointDescriptor"
sidebar_position: 30
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkendpointdescriptor
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usbddkendpointdescriptor
---

# UsbDdkEndpointDescriptor

```
typedef struct UsbDdkEndpointDescriptor {...} UsbDdkEndpointDescriptor
```

## 概述

端点描述符。

****起始版本：**** 10

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| struct UsbEndpointDescriptor endpointDescriptor | 标准端点描述符。 |
| const uint8\_t\* extra | 未做解析的描述符，包含特定于类或供应商的描述符。 |
| uint32\_t extraLength | 未做解析的描述符长度。 |
