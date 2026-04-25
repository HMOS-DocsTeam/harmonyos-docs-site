---
title: "ScsiPeripheral_IORequest"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-iorequest
kit: 系统
last_updated: "2026-04-22"
slug: capi-scsiperipheralddk-scsiperipheral-iorequest
---

# ScsiPeripheral\_IORequest

```
typedef struct ScsiPeripheral_IORequest {...} ScsiPeripheral_IORequest
```

## 概述

读/写操作的请求参数。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t lbAddress | 逻辑块起始地址。 |
| uint16\_t transferLength | 需要操作的连续逻辑块的数量。 |
| uint8\_t control | Control字段，用于指定一些控制信息。 |
| uint8\_t byte1 | CDB的第一个字节。 |
| uint8\_t byte6 | CDB的第六个字节。 |
| ScsiPeripheral\_DeviceMemMap\* data | 数据传输的缓冲区。 |
| uint32\_t timeout | 超时时间（单位：毫秒）。 |
