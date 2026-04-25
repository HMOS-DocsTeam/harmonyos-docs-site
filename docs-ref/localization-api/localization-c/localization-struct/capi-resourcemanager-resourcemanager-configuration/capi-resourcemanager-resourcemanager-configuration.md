---
title: "ResourceManager_Configuration"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-resourcemanager-resourcemanager-configuration
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-resourcemanager-resourcemanager-configuration
---

# ResourceManager\_Configuration

```
typedef struct ResourceManager_Configuration {...} ResourceManager_Configuration
```

## 概述

设备状态的枚举。

****起始版本：**** 12

****相关模块：**** [resourcemanager](/ref/localization-api/localization-c/localization-module/capi-resourcemanager/capi-resourcemanager)

****所在头文件：**** [resmgr\_common.h](/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| ResourceManager\_Direction direction | 表示屏幕方向。 |
| char\* locale | 表示语言文字国家地区，如zh-Hans-CN。 |
| ResourceManager\_DeviceType deviceType | 表示设备类型。 |
| ScreenDensity screenDensity | 表示屏幕密度。 |
| ResourceManager\_ColorMode colorMode | 表示颜色模式。 |
| uint32\_t mcc | 表示移动国家码。 |
| uint32\_t mnc | 表示移动网络码。 |
| uint32\_t reserved[20] | 保留属性。 |
