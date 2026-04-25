---
title: "UsbInterfaceDescriptor"
sidebar_position: 28
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbinterfacedescriptor
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usbinterfacedescriptor
---

# UsbInterfaceDescriptor

```
typedef struct UsbInterfaceDescriptor {...} __attribute__((packed)) UsbInterfaceDescriptor
```

## 概述

标准接口描述符，对应USB协议中Standard Interface Descriptor。

****起始版本：**** 10

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t bLength | 该描述符的大小，单位为字节。 |
| uint8\_t bDescriptorType | 描述符类型。 |
| uint8\_t bInterfaceNumber | 接口编号。 |
| uint8\_t bAlternateSetting | 用来选择该接口的备用配置的值。 |
| uint8\_t bNumEndpoints | 该接口所使用的端点数量（不包括端点零）。 |
| uint8\_t bInterfaceClass | 由USB标准化组织（USB-IF）分配的设备类代码。 |
| uint8\_t bInterfaceSubClass | 由USB标准化组织（USB-IF）分配的子类代码，其值由bInterfaceClass的值限定。 |
| uint8\_t bInterfaceProtocol | 由USB标准化组织（USB-IF）分配的协议代码，其值由bInterfaceClass和bInterfaceSubClass的值限定。 |
| uint8\_t iInterface | 描述该接口的字符串描述符的索引。 |
