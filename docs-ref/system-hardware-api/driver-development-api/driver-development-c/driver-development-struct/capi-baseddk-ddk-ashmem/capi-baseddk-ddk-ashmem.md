---
title: "DDK_Ashmem"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-baseddk-ddk-ashmem
kit: 系统
last_updated: "2026-04-22"
slug: capi-baseddk-ddk-ashmem
---

# DDK\_Ashmem

```
typedef struct DDK_Ashmem {...} DDK_Ashmem
```

## 概述

定义通过接口****OH\_DDK\_CreateAshmem****创建的共享内存，共享内存的缓冲区提供更好的性能。

****起始版本：**** 12

****相关模块：**** [Ddk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-baseddk/capi-baseddk)

****所在头文件：**** [ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-ddk-types-h/capi-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t ashmemFd | 共享内存的文件描述符。 |
| const uint8\_t\* address | 缓存区地址。 |
| const uint32\_t size | 缓存区大小。 |
| uint32\_t offset | 已使用缓冲区的偏移量。默认值为0，表示没有偏移，缓冲区从指定地址开始。 |
| uint32\_t bufferLength | 使用的缓冲区长度。默认情况下，该值等于size，表示使用整个缓冲区。 |
| uint32\_t transferredLength | 已传输数据的长度。 |
