---
title: "ScsiPeripheral_TestUnitReadyRequest"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iperipheralddk-scsiperipheral-testunitreadyrequest
kit: 系统
last_updated: "2026-04-22"
slug: iperipheralddk-scsiperipheral-testunitreadyrequest
---

# ScsiPeripheral\_TestUnitReadyRequest

```
typedef struct ScsiPeripheral_TestUnitReadyRequest {...} ScsiPeripheral_TestUnitReadyRequest
```

## 概述

命令（test unit ready）的请求结构体。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t control | Control字段，用于指定一些控制信息。 |
| uint32\_t timeout | 超时时间(单位: 毫秒)。 |
