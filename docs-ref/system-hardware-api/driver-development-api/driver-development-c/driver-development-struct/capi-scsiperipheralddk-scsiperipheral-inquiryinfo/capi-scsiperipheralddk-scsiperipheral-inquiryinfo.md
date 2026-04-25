---
title: "ScsiPeripheral_InquiryInfo"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-inquiryinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-scsiperipheralddk-scsiperipheral-inquiryinfo
---

# ScsiPeripheral\_InquiryInfo

```
typedef struct ScsiPeripheral_InquiryInfo {...} ScsiPeripheral_InquiryInfo
```

## 概述

SCSI inquiry 数据。

****起始版本：**** 18

****相关模块：**** [ScsiPeripheralDDK](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk)

****所在头文件：**** [scsi\_peripheral\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t deviceType | 设备类型。 |
| char idVendor[[SCSIPERIPHERAL\_VENDOR\_ID\_LEN](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h) + 1] | 制造商 id。 |
| char idProduct[[SCSIPERIPHERAL\_PRODUCT\_ID\_LEN](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h) + 1] | 产品 id。 |
| char revProduct[[SCSIPERIPHERAL\_PRODUCT\_REV\_LEN](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h) + 1] | 产品版本。 |
| ScsiPeripheral\_DeviceMemMap\* data | 所有的查询数据。 |
