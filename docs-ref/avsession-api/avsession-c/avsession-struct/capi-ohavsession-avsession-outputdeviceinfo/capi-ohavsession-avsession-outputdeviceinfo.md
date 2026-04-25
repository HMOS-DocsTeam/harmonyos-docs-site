---
title: "AVSession_OutputDeviceInfo"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-avsession-outputdeviceinfo
kit: 媒体
last_updated: "2026-04-22"
slug: capi-ohavsession-avsession-outputdeviceinfo
---

# AVSession\_OutputDeviceInfo

```
struct AVSession_OutputDeviceInfo {...}
```

## 概述

目标设备信息的定义。

****起始版本：**** 23

****相关模块：**** [OHAVSession](/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession)

****所在头文件：**** [native\_deviceinfo.h](/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-deviceinfo-h/capi-native-deviceinfo-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t size | 设备信息数组的大小。 |
| [AVSession\_DeviceInfo](/ref/avsession-api/avsession-c/avsession-struct/capi-ohavsession-avsession-deviceinfo/capi-ohavsession-avsession-deviceinfo) \*\*deviceInfos | 设备信息数组。 |
