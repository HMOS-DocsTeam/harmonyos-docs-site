---
title: "ScsiPeripheral_BasicSenseInfo"
sidebar_position: 22
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo
kit: 系统
last_updated: "2026-04-22"
slug: pi-scsiperipheralddk-scsiperipheral-basicsenseinfo
---

# ScsiPeripheral\_BasicSenseInfo

```
typedef struct ScsiPeripheral_BasicSenseInfo {...} ScsiPeripheral_BasicSenseInfo
```

## 概述

sense data的基本信息。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t responseCode | 响应码。 |
| bool valid | 信息有效标志位。 |
| uint64\_t information | Information字段。 |
| uint64\_t commandSpecific | Command-specific information字段。 |
| bool sksv | Sense key specific字段的标志位。 |
| uint32\_t senseKeySpecific | Sense key specific字段。 |
