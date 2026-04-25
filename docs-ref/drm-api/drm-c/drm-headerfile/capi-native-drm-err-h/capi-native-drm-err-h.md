---
title: "native_drm_err.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-err-h
kit: 媒体
last_updated: "2026-04-22"
slug: capi-native-drm-err-h
---

# native\_drm\_err.h

## 概述

定义DRM错误码。

****引用文件：**** &lt;multimedia/drm\_framework/native\_drm\_err.h&gt;

****库：**** libnative\_drm.so

****系统能力：**** SystemCapability.Multimedia.Drm.Core

****起始版本：**** 11

****相关模块：**** [Drm](/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Drm\_ErrCode](#drm_errcode) | Drm\_ErrCode | DRM错误码。 |

## 枚举类型说明

### Drm\_ErrCode

```
enum Drm_ErrCode
```

****描述****

DRM错误码。

****系统能力：**** SystemCapability.Multimedia.Drm.Core

****起始版本：**** 11

| 枚举项 | 描述 |
| --- | --- |
| DRM\_ERR\_OK = 0 | 操作成功完成。 |
| DRM\_CAPI\_ERR\_BASE = 24700500 | 基础错误。 |
| DRM\_ERR\_NO\_MEMORY = DRM\_CAPI\_ERR\_BASE + 1 | 内存不足。 |
| DRM\_ERR\_OPERATION\_NOT\_PERMITTED = DRM\_CAPI\_ERR\_BASE + 2 | 不支持的操作。 |
| DRM\_ERR\_INVALID\_VAL = DRM\_CAPI\_ERR\_BASE + 3 | 无效参数。 |
| DRM\_ERR\_IO = DRM\_CAPI\_ERR\_BASE + 4 | IO错误。 |
| DRM\_ERR\_TIMEOUT = DRM\_CAPI\_ERR\_BASE + 5 | 网络超时。 |
| DRM\_ERR\_UNKNOWN = DRM\_CAPI\_ERR\_BASE + 6 | 未知错误。 |
| DRM\_ERR\_SERVICE\_DIED = DRM\_CAPI\_ERR\_BASE + 7 | DRM服务死亡。 |
| DRM\_ERR\_INVALID\_STATE = DRM\_CAPI\_ERR\_BASE + 8 | 无效的操作状态。 |
| DRM\_ERR\_UNSUPPORTED = DRM\_CAPI\_ERR\_BASE + 9 | 不支持的操作。 |
| DRM\_ERR\_MAX\_SYSTEM\_NUM\_REACHED = DRM\_CAPI\_ERR\_BASE + 10 | MediaKeySystem最大实例数。 |
| DRM\_ERR\_MAX\_SESSION\_NUM\_REACHED = DRM\_CAPI\_ERR\_BASE + 11 | MediaKeySession最大实例数。 |
| DRM\_ERR\_EXTEND\_START = DRM\_CAPI\_ERR\_BASE + 100 | 扩展错误。 |
