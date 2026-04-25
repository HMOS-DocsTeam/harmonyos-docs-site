---
title: "ScsiPeripheral_ReadCapacityRequest"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/siperipheralddk-scsiperipheral-readcapacityrequest
kit: 系统
last_updated: "2026-04-22"
slug: siperipheralddk-scsiperipheral-readcapacityrequest
---

# ScsiPeripheral\_ReadCapacityRequest

```
typedef struct ScsiPeripheral_ReadCapacityRequest {...} ScsiPeripheral_ReadCapacityRequest
```

## 概述

SCSI命令（read capacity）的请求结构体。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t lbAddress | 逻辑单元地址。 |
| uint8\_t control | Control字段，用于指定一些控制信息。 |
| uint8\_t byte8 | CDB的第八个字节。 |
| uint32\_t timeout | 超时时间（单位: 毫秒）。 |
