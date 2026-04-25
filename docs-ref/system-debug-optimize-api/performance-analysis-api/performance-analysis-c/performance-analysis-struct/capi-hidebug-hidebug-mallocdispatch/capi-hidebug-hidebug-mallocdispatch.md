---
title: "HiDebug_MallocDispatch"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-mallocdispatch
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-mallocdispatch
---

# HiDebug\_MallocDispatch

```
typedef struct HiDebug_MallocDispatch {...} HiDebug_MallocDispatch
```

## 概述

应用程序进程可替换/恢复的HiDebug\_MallocDispatch表结构类型定义。

****起始版本：**** 20

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [void\* (\*malloc)(size\_t)](#malloc) | 开发者自定义malloc函数指针。 |
| [void\* (\*calloc)(size\_t, size\_t)](#calloc) | 开发者自定义calloc函数指针。 |
| [void\* (\*realloc)(void\*, size\_t)](#realloc) | 开发者自定义realloc函数指针。 |
| [void (\*free)(void\*)](#free) | 开发者自定义free函数指针。 |
| [void\* (\*mmap)(void\*, size\_t, int, int, int, off\_t)](#mmap) | 开发者自定义mmap函数指针。 |
| [int (\*munmap)(void\*, size\_t)](#munmap) | 开发者自定义munmap函数指针。 |

## 成员函数说明

### malloc()

```
void* (*malloc)(size_t)
```

****描述****

开发者自定义malloc函数指针。

### calloc()

```
void* (*calloc)(size_t, size_t)
```

****描述****

开发者自定义calloc函数指针。

### realloc()

```
void* (*realloc)(void*, size_t)
```

****描述****

开发者自定义realloc函数指针。

### free()

```
void (*free)(void*)
```

****描述****

开发者自定义free函数指针。

### mmap()

```
void* (*mmap)(void*, size_t, int, int, int, off_t)
```

****描述****

开发者自定义mmap函数指针。

### munmap()

```
int (*munmap)(void*, size_t)
```

****描述****

开发者自定义munmap函数指针。
