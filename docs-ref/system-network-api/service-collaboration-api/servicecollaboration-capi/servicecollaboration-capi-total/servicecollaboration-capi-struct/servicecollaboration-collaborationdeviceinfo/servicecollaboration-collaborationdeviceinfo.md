---
title: "ServiceCollaboration_CollaborationDeviceInfo"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfo
kit: 系统
last_updated: "2026-04-22"
slug: servicecollaboration-collaborationdeviceinfo
---

# ServiceCollaboration\_CollaborationDeviceInfo

## 概述

跨设备互通获取的设备信息对象，包含设备的基本信息和能力类型。

****起始版本：**** 5.0.0(12)

****相关模块：**** [ServiceCollaboration](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module)

****所在头文件：**** [service\_collaboration\_api.h](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-total/servicecollaboration-capi-header/servicecollaboration-capi-h/servicecollaboration-capi-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [deviceType](#devicetype) | 对端设备类型。只有手机或者平板。手机设备类型的值为0x14，平板设备类型的值为0x17。 |
| char [deviceNetworkId](#devicenetworkid) [[COLLABORATIONDEVICEINFO\_DEVICENETWORKID\_MAXLENGTH](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#collaborationdeviceinfo_devicenetworkid_maxlength)] | 对端设备network Id。 |
| char [deviceName](#devicename) [[COLLABORATIONDEVICEINFO\_DEVICENAME\_MAXLENGTH](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#collaborationdeviceinfo_devicename_maxlength)] | 对端设备名。 |
| uint32\_t [filterNum](#filternum) | 对端设备支持的能力类型列表的大小。 |
| [ServiceCollaborationFilterType](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#servicecollaborationfiltertype-1) \* [serviceFilterTypes](#servicefiltertypes) | 对端设备支持的能力类型列表。 |

## 结构体成员变量说明

### deviceName

```
char ServiceCollaboration_CollaborationDeviceInfo::deviceName[COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH]
```

****描述****

对端设备名。

### deviceNetworkId

```
char ServiceCollaboration_CollaborationDeviceInfo::deviceNetworkId[COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH]
```

****描述****

对端设备network Id。

### deviceType

```
uint32_t ServiceCollaboration_CollaborationDeviceInfo::deviceType
```

****描述****

对端设备类型。只有手机或者平板。手机设备类型的值为0x14，平板设备类型的值为0x17。

### filterNum

```
uint32_t ServiceCollaboration_CollaborationDeviceInfo::filterNum
```

****描述****

对端设备支持的能力类型列表的大小。

### serviceFilterTypes

```
ServiceCollaborationFilterType* ServiceCollaboration_CollaborationDeviceInfo::serviceFilterTypes
```

****描述****

对端设备支持的能力类型列表。
