---
title: "ServiceCollaboration_CollaborationDeviceInfoSets"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets
kit: 系统
last_updated: "2026-04-22"
slug: servicecollaboration-collaborationdeviceinfosets
---

# ServiceCollaboration\_CollaborationDeviceInfoSets

## 概述

通过[HMS\_ServiceCollaboration\_GetCollaborationDeviceInfos](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos)获取的对端设备信息对象集合。

****起始版本：**** 5.0.0(12)

****相关模块：**** [ServiceCollaboration](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module)

****所在头文件：**** [service\_collaboration\_api.h](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-total/servicecollaboration-capi-header/servicecollaboration-capi-h/servicecollaboration-capi-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t [size](#size) | 对端设备信息对象集合的大小。 |
| [ServiceCollaboration\_CollaborationDeviceInfo](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-total/servicecollaboration-capi-struct/servicecollaboration-collaborationdeviceinfo/servicecollaboration-collaborationdeviceinfo) \* [deviceInfoSets](#deviceinfosets) | 对端设备信息对象集合。 |

## 结构体成员变量说明

### deviceInfoSets

```
ServiceCollaboration_CollaborationDeviceInfo* ServiceCollaboration_CollaborationDeviceInfoSets::deviceInfoSets
```

****描述****

对端设备信息对象集合。

### size

```
uint32_t ServiceCollaboration_CollaborationDeviceInfoSets::size
```

****描述****

对端设备信息对象集合的大小。
