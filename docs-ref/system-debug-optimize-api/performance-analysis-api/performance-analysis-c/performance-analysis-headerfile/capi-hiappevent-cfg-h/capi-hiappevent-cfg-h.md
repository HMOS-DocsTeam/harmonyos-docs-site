---
title: "hiappevent_cfg.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-cfg-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-hiappevent-cfg-h
---

# hiappevent\_cfg.h

## 概述

定义事件打点配置函数的所有配置项名称。如果开发者想要对应用事件打点功能进行配置，可以直接使用配置项常量。

****引用文件：**** &lt;hiappevent/hiappevent\_cfg.h&gt;

****库：**** libhiappevent\_ndk.z.so

****系统能力：**** SystemCapability.HiviewDFX.HiAppEvent

****起始版本：**** 8

****相关模块：**** [HiAppEvent](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hiappevent/capi-hiappevent)

## 汇总

### 宏定义

| 名称 | 描述 |
| --- | --- |
| [DISABLE](#disable) "disable" | 事件打点开关。默认值为false。true：关闭打点功能，false：不关闭打点功能。  ****起始版本：**** 8 |
| [MAX\_STORAGE](#max_storage) "max\_storage" | 事件文件目录存储配额大小。默认值为“10M”。  ****起始版本：**** 8 |

## 宏定义说明

### DISABLE

```
#define DISABLE "disable"
```

****描述****

事件打点开关。默认值为false。true：关闭打点功能，false：不关闭打点功能。

****起始版本：**** 8

### MAX\_STORAGE

```
#define MAX_STORAGE "max_storage"
```

****描述****

事件文件目录存储配额大小。默认值为“10M”。

****起始版本：**** 8
