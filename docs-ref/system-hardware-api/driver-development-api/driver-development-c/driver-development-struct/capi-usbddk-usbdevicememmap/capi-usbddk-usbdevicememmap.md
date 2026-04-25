---
title: "UsbDeviceMemMap"
sidebar_position: 35
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbdevicememmap
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usbdevicememmap
---

# UsbDeviceMemMap

```
typedef struct UsbDeviceMemMap {...} UsbDeviceMemMap
```

## 概述

设备内存映射，通过OH\_Usb\_CreateDeviceMemMap创建设备内存映射，使用内存映射后的缓冲区，可提升数据传输性能。

****起始版本：**** 10

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t\* const address | 映射后的缓冲区地址。 |
| const size\_t size | 缓冲区大小。 |
| uint32\_t offset | 所使用的缓冲区的偏移量，默认为0，表示没有偏移，从映射后的缓冲区地址address开始。 |
| uint32\_t bufferLength | 所使用的缓冲区的长度，默认等于缓冲区大小 size，表示使用全部的缓冲区。 |
| uint32\_t transferedLength | 实际传输的数据的长度。 |
