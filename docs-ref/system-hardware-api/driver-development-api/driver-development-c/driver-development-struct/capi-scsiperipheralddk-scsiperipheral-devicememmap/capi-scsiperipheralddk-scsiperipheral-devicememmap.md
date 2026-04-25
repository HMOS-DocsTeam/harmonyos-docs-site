---
title: "ScsiPeripheral_DeviceMemMap"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap
kit: 系统
last_updated: "2026-04-22"
slug: capi-scsiperipheralddk-scsiperipheral-devicememmap
---

# ScsiPeripheral\_DeviceMemMap

```
typedef struct ScsiPeripheral_DeviceMemMap {...} ScsiPeripheral_DeviceMemMap
```

## 概述

通过调用OH\_ScsiPeripheral\_CreateDeviceMemMap创建的设备内存映射。使用该设备内存映射的缓冲区可以提供更好的性能。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t\* const address | 缓冲区地址。 |
| const size\_t size | 缓冲区大小。 |
| uint32\_t offset | 已使用缓冲区的偏移量。默认值为0，表示没有偏移，缓冲区从指定地址开始。 |
| uint32\_t bufferLength | 已使用缓冲区的长度。默认情况下，该值等于缓冲区的大小，表示整个缓冲区都被使用。 |
| uint32\_t transferredLength | 已传输数据的长度。 |
