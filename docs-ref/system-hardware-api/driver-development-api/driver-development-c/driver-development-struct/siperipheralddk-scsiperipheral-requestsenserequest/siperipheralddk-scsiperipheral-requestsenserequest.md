---
title: "ScsiPeripheral_RequestSenseRequest"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/siperipheralddk-scsiperipheral-requestsenserequest
kit: 系统
last_updated: "2026-04-22"
slug: siperipheralddk-scsiperipheral-requestsenserequest
---

# ScsiPeripheral\_RequestSenseRequest

```
typedef struct ScsiPeripheral_RequestSenseRequest {...} ScsiPeripheral_RequestSenseRequest
```

## 概述

SCSI命令（Request Sense）的请求结构体。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t allocationLength | Allocation length字段，指定了请求方向发起者（通常是主机）为响应数据准备的缓冲区大小。 |
| uint8\_t control | Control字段，用于指定一些控制信息。 |
| uint8\_t byte1 | CDB的第一个字节。 |
| uint32\_t timeout | 超时时间(单位: 毫秒)。 |
