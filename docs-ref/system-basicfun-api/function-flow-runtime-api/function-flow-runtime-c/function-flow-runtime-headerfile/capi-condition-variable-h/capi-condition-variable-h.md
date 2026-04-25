---
title: "condition_variable.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-condition-variable-h
---

# condition\_variable.h

## 概述

声明条件变量的C接口。

****引用文件：**** &lt;ffrt/condition\_variable.h&gt;

****库：**** libffrt.z.so

****系统能力：**** SystemCapability.Resourceschedule.Ffrt.Core

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [FFRT\_C\_API int ffrt\_cond\_init(ffrt\_cond\_t\* cond, const ffrt\_condattr\_t\* attr)](#ffrt_cond_init) | 初始化条件变量。 |
| [FFRT\_C\_API int ffrt\_cond\_signal(ffrt\_cond\_t\* cond)](#ffrt_cond_signal) | 唤醒阻塞在条件变量上的一个任务。 |
| [FFRT\_C\_API int ffrt\_cond\_broadcast(ffrt\_cond\_t\* cond)](#ffrt_cond_broadcast) | 唤醒阻塞在条件变量上的所有任务。 |
| [FFRT\_C\_API int ffrt\_cond\_wait(ffrt\_cond\_t\* cond, ffrt\_mutex\_t\* mutex)](#ffrt_cond_wait) | 条件变量等待函数，条件变量不满足时阻塞当前任务。 |
| [FFRT\_C\_API int ffrt\_cond\_timedwait(ffrt\_cond\_t\* cond, ffrt\_mutex\_t\* mutex, const struct timespec\* time\_point)](#ffrt_cond_timedwait) | 条件变量超时等待函数，条件变量不满足时阻塞当前任务，超时等待返回。如果达到最大等待时间点时没有调用ffrt\_cond\_signal或ffrt\_cond\_broadcast函数解除线程阻塞，则线程会被自动解除阻塞。 |
| [FFRT\_C\_API int ffrt\_cond\_destroy(ffrt\_cond\_t\* cond)](#ffrt_cond_destroy) | 销毁条件变量。 |

## 函数说明

### ffrt\_cond\_init()

```
FFRT_C_API int ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr)
```

****描述****

初始化条件变量。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_cond\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t)\* cond | 条件变量指针。 |
| [const ffrt\_condattr\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-condattr-t/capi-ffrt-ffrt-condattr-t)\* attr | 条件变量属性指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 初始化条件变量成功返回ffrt\_success，  初始化条件变量失败返回ffrt\_error\_inval。 |

### ffrt\_cond\_signal()

```
FFRT_C_API int ffrt_cond_signal(ffrt_cond_t* cond)
```

****描述****

唤醒阻塞在条件变量上的一个任务。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_cond\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t)\* cond | 条件变量指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 唤醒成功返回ffrt\_success，  唤醒失败返回ffrt\_error\_inval。 |

### ffrt\_cond\_broadcast()

```
FFRT_C_API int ffrt_cond_broadcast(ffrt_cond_t* cond)
```

****描述****

唤醒阻塞在条件变量上的所有任务。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_cond\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t)\* cond | 条件变量指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 唤醒成功返回ffrt\_success，  唤醒失败返回ffrt\_error\_inval。 |

### ffrt\_cond\_wait()

```
FFRT_C_API int ffrt_cond_wait(ffrt_cond_t* cond, ffrt_mutex_t* mutex)
```

****描述****

条件变量等待函数，条件变量不满足时阻塞当前任务。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_cond\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t)\* cond | 条件变量指针。 |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 等待后被成功唤醒返回ffrt\_success，  等待失败返回ffrt\_error\_inval。 |

### ffrt\_cond\_timedwait()

```
FFRT_C_API int ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point)
```

****描述****

条件变量超时等待函数，条件变量不满足时阻塞当前任务，超时等待返回。如果达到最大等待时间点时没有调用ffrt\_cond\_signal或ffrt\_cond\_broadcast函数解除线程阻塞，则线程会被自动解除阻塞。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_cond\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t)\* cond | 条件变量指针。 |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |
| const struct timespec\* time\_point | 最大等待到的时间点，超过这个时间点等待返回。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 等待后被成功唤醒返回ffrt\_success，  等待超时返回ffrt\_error\_timedout，  等待失败ffrt\_error\_inval。 |

### ffrt\_cond\_destroy()

```
FFRT_C_API int ffrt_cond_destroy(ffrt_cond_t* cond)
```

****描述****

销毁条件变量。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_cond\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-cond-t/capi-ffrt-ffrt-cond-t)\* cond | 条件变量指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 销毁条件变量成功返回ffrt\_success，  销毁条件变量失败返回ffrt\_error\_inval。 |
