---
title: "ServiceCollaboration_SelectInfoV2"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2
kit: 系统
last_updated: "2026-04-22"
slug: servicecollaboration-selectinfov2
---

# ServiceCollaboration\_SelectInfoV2

## 概述

使用[HMS\_ServiceCollaboration\_StartCollaborationV2](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2)触发跨设备互通时，被选择的设备信息，支持选择具有图片和视频回传能力的设备。

****起始版本：**** 6.1.0(23)

****相关模块：**** [ServiceCollaboration](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module)

****所在头文件：**** [service\_collaboration\_api.h](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-total/servicecollaboration-capi-header/servicecollaboration-capi-h/servicecollaboration-capi-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [ServiceCollaborationFilterType](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#servicecollaborationfiltertype) [serviceFilterType](#servicefiltertype) | 开发者期望的设备能力类型。 |
| char [deviceNetworkId](#devicenetworkid) [[COLLABORATIONDEVICEINFO\_DEVICENETWORKID\_MAXLENGTH](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#collaborationdeviceinfo_devicenetworkid_maxlength)] | 被选择的设备network Id。 |
| uint32\_t [maxSize](#maxsize) | 能被选中的最大图片数量。 |
| char uri[[SERVICE\_COLLABORATION\_URI\_MAXLENGTH](/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#service_collaboration_uri_maxlength)] | 应用沙箱目录uri路径。 |

## 结构体成员变量说明

### deviceNetworkId

```
char ServiceCollaboration_SelectInfo::deviceNetworkId[COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH]
```

****描述****

被选择的设备network Id。

### maxSize

```
uint32_t ServiceCollaboration_SelectInfo::maxSize
```

****描述****

能被选中的最大图片数量，默认50，取值范围为1到50。

### serviceFilterType

```
ServiceCollaborationFilterType ServiceCollaboration_SelectInfo::serviceFilterType
```

****描述****

开发者期望的设备能力类型。

### uri

```
uint32_t ServiceCollaboration_SelectInfo::uri[SERVICE_COLLABORATION_URI_MAXLENGTH]
```

****描述****

应用沙箱目录uri路径。
