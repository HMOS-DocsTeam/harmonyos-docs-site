---
title: "USBSerialDDK"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-serialddk
kit: 系统
last_updated: "2026-04-22"
slug: capi-serialddk
---

# USBSerialDDK

## 概述

提供USB Serial DDK接口，包括枚举类型和USB Serial DDK API使用的数据结构。工业用途及一些老旧设备会使用到串口通信，如：发卡机、身份证读卡器等。通过构建USB Serial DDK，支持外设扩展驱动基于USB Serial DDK开发非标外设扩展驱动。

****系统能力：**** SystemCapability.Driver.UsbSerial.Extension

****起始版本：**** 18

## 文件汇总

| 名称 | 描述 |
| --- | --- |
| [usb\_serial\_api.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h) | 声明用于主机侧访问串口设备的USB Serial DDK接口。 |
| [usb\_serial\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h) | 提供USB Serial DDK中的枚举变量、结构体定义与宏定义。 |
