---
title: "sleep.h"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-sleep-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-sleep-h
---

# sleep.h

## 概述

声明sleep和yield的C接口。

****引用文件：**** &lt;ffrt/sleep.h&gt;

****库：**** libffrt.z.so

****系统能力：**** SystemCapability.Resourceschedule.Ffrt.Core

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [FFRT\_C\_API int ffrt\_usleep(uint64\_t usec)](#ffrt_usleep) | 睡眠调用线程固定的时间。 |
| [FFRT\_C\_API void ffrt\_yield(void)](#ffrt_yield) | 当前任务主动放权，让其他任务有机会调度执行。 |

## 函数说明

### ffrt\_usleep()

```
FFRT_C_API int ffrt_usleep(uint64_t usec)
```

****描述****

睡眠调用线程固定的时间。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| uint64\_t usec | 睡眠时间，单位是微秒。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 执行成功时返回ffrt\_success，  执行失败时返回ffrt\_error。 |

### ffrt\_yield()

```
FFRT_C_API void ffrt_yield(void)
```

****描述****

当前任务主动放权，让其他任务有机会调度执行。

****起始版本：**** 10
