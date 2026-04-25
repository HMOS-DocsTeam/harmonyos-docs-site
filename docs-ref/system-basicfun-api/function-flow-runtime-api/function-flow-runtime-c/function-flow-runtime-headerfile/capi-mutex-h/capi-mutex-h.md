---
title: "mutex.h"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-mutex-h
---

# mutex.h

## 概述

声明mutex的C接口。

****引用文件：**** &lt;ffrt/mutex.h&gt;

****库：**** libffrt.z.so

****系统能力：**** SystemCapability.Resourceschedule.Ffrt.Core

****起始版本：**** 10

****相关模块：**** [FFRT](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [FFRT\_C\_API int ffrt\_mutexattr\_init(ffrt\_mutexattr\_t\* attr)](#ffrt_mutexattr_init) | 初始化mutex属性。 |
| [FFRT\_C\_API int ffrt\_mutexattr\_settype(ffrt\_mutexattr\_t\* attr, int type)](#ffrt_mutexattr_settype) | 设置mutex属性类型。 |
| [FFRT\_C\_API int ffrt\_mutexattr\_gettype(ffrt\_mutexattr\_t\* attr, int\* type)](#ffrt_mutexattr_gettype) | 获取mutex类型。 |
| [FFRT\_C\_API int ffrt\_mutexattr\_destroy(ffrt\_mutexattr\_t\* attr)](#ffrt_mutexattr_destroy) | 销毁mutex属性，用户需要调用此接口。 |
| [FFRT\_C\_API int ffrt\_mutex\_init(ffrt\_mutex\_t\* mutex, const ffrt\_mutexattr\_t\* attr)](#ffrt_mutex_init) | 初始化mutex。 |
| [FFRT\_C\_API int ffrt\_mutex\_lock(ffrt\_mutex\_t\* mutex)](#ffrt_mutex_lock) | 获取mutex。 |
| [FFRT\_C\_API int ffrt\_mutex\_unlock(ffrt\_mutex\_t\* mutex)](#ffrt_mutex_unlock) | 释放mutex。 |
| [FFRT\_C\_API int ffrt\_mutex\_trylock(ffrt\_mutex\_t\* mutex)](#ffrt_mutex_trylock) | 尝试获取mutex。 |
| [FFRT\_C\_API int ffrt\_mutex\_destroy(ffrt\_mutex\_t\* mutex)](#ffrt_mutex_destroy) | 销毁mutex。 |

## 函数说明

### ffrt\_mutexattr\_init()

```
FFRT_C_API int ffrt_mutexattr_init(ffrt_mutexattr_t* attr)
```

****描述****

初始化mutex属性。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutexattr\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutexattr-t/capi-ffrt-ffrt-mutexattr-t)\* attr | mutex属性指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | mutex属性初始化成功返回ffrt\_success，  mutex属性初始化失败返回ffrt\_error\_inval。 |

### ffrt\_mutexattr\_settype()

```
FFRT_C_API int ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type)
```

****描述****

设置mutex属性类型。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutexattr\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutexattr-t/capi-ffrt-ffrt-mutexattr-t)\* attr | mutex属性指针。 |
| int type | mutex类型。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | mutex属性类型设置成功返回ffrt\_success，  mutex属性指针是空或者  mutex类型不是ffrt\_mutex\_normal或ffrt\_mutex\_recursive返回ffrt\_error\_inval。 |

### ffrt\_mutexattr\_gettype()

```
FFRT_C_API int ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type)
```

****描述****

获取mutex类型。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutexattr\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutexattr-t/capi-ffrt-ffrt-mutexattr-t)\* attr | mutex属性指针。 |
| int\* type | mutex类型指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | mutex类型获取成功返回ffrt\_success，  mutex属性指针或mutex类型指针是空返回ffrt\_error\_inval。 |

### ffrt\_mutexattr\_destroy()

```
FFRT_C_API int ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr)
```

****描述****

销毁mutex属性，用户需要调用此接口。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutexattr\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutexattr-t/capi-ffrt-ffrt-mutexattr-t)\* attr | mutex属性指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | mutex属性销毁成功返回ffrt\_success，  mutex属性销毁失败返回ffrt\_error\_inval。 |

### ffrt\_mutex\_init()

```
FFRT_C_API int ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr)
```

****描述****

初始化mutex。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |
| [const ffrt\_mutexattr\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutexattr-t/capi-ffrt-ffrt-mutexattr-t)\* attr | mutex属性指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 初始化mutex成功返回ffrt\_success，  初始化mutex失败返回ffrt\_error\_inval。 |

### ffrt\_mutex\_lock()

```
FFRT_C_API int ffrt_mutex_lock(ffrt_mutex_t* mutex)
```

****描述****

获取mutex。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 获取mutex成功返回ffrt\_success，  获取mutex失败返回ffrt\_error\_inval或者阻塞当前任务。 |

### ffrt\_mutex\_unlock()

```
FFRT_C_API int ffrt_mutex_unlock(ffrt_mutex_t* mutex)
```

****描述****

释放mutex。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 释放mutex成功返回ffrt\_success，  释放mutex失败返回ffrt\_error\_inval。 |

### ffrt\_mutex\_trylock()

```
FFRT_C_API int ffrt_mutex_trylock(ffrt_mutex_t* mutex)
```

****描述****

尝试获取mutex。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 获取mutex成功返回ffrt\_success，  获取mutex失败返回ffrt\_error\_inval或ffrt\_error\_busy。 |

### ffrt\_mutex\_destroy()

```
FFRT_C_API int ffrt_mutex_destroy(ffrt_mutex_t* mutex)
```

****描述****

销毁mutex。

****起始版本：**** 10

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ffrt\_mutex\_t](/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-struct/capi-ffrt-ffrt-mutex-t/capi-ffrt-ffrt-mutex-t)\* mutex | mutex指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| FFRT\_C\_API int | 销毁mutex成功返回ffrt\_success，  销毁mutex失败返回ffrt\_error\_inval。 |
