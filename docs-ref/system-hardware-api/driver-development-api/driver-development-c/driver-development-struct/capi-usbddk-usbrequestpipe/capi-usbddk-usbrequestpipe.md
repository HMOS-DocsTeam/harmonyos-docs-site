---
title: "UsbRequestPipe"
sidebar_position: 34
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbrequestpipe
kit: 系统
last_updated: "2026-04-22"
slug: capi-usbddk-usbrequestpipe
---

# UsbRequestPipe

```
typedef struct UsbRequestPipe {...} __attribute__((aligned(8))) UsbRequestPipe
```

## 概述

请求管道。

****起始版本：**** 10

****相关模块：**** [UsbDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk)

****所在头文件：**** [usb\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t interfaceHandle | 接口操作句柄。 |
| uint8\_t endpoint | 要通信的端点的地址。 |
| uint32\_t timeout | 超时时间，单位是毫秒。 |
