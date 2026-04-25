---
title: "UsbSerial_Params"
sidebar_position: 37
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-serialddk-usbserial-params
kit: 系统
last_updated: "2026-04-22"
slug: capi-serialddk-usbserial-params
---

# UsbSerial\_Params

```
typedef struct UsbSerial_Params {...} __attribute__((aligned(8))) UsbSerial_Params
```

## 概述

定义USB Serial DDK使用的USB串口参数.

****起始版本：**** 18

****相关模块：**** [USBSerialDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-serialddk/capi-serialddk)

****所在头文件：**** [usb\_serial\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t baudRate | 波特率，单位为波特。 |
| uint8\_t nDataBits | 数据位比特数。 |
| uint8\_t nStopBits | 停止位比特数。 |
| uint8\_t parity | 校验参数设置（0：无校验；1：奇校验；2：偶校验；3：1校验；4：0校验；）。 |
