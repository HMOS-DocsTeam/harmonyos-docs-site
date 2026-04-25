---
title: "ScsiPeripheral_CapacityInfo"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-capacityinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-scsiperipheralddk-scsiperipheral-capacityinfo
---

# ScsiPeripheral\_CapacityInfo

```
typedef struct ScsiPeripheral_CapacityInfo {...} ScsiPeripheral_CapacityInfo
```

## 概述

SCSI read capacity 数据。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t lbAddress | 返回的逻辑单元地址。 |
| uint32\_t lbLength | 单个逻辑单元长度，单位：字节。 |
