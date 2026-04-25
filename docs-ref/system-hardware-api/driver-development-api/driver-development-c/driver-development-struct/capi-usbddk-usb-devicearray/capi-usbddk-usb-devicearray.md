---
title: "Usb_DeviceArray"
sidebar_position: 36
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usb-devicearray
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usb-devicearray
---

# Usb\_DeviceArray

```
typedef struct Usb_DeviceArray {...} Usb_DeviceArray
```

## 概述

设备ID清单，用于存放OH\_Usb\_GetDevices接口获取到的设备ID列表和设备数量。

****起始版本：**** 18

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t\* deviceIds | 开发者申请好的设备ID数组首地址，申请的数组大小建议一般不超过128，以避免过度占用内存。 |
| uint32\_t num | 实际返回的设备数量，根据数量遍历deviceIds获得设备ID。当该值为0时，表示不存在USB设备。 |
