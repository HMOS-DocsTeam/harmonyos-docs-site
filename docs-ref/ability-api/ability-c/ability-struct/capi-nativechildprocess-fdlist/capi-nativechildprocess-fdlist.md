---
title: "NativeChildProcess_FdList"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-fdlist
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativechildprocess-fdlist
---

# NativeChildProcess\_FdList

```
typedef struct NativeChildProcess_FdList {...} NativeChildProcess_FdList
```

## 概述

传递给子进程的文件描述符信息列表，文件描述符记录个数不能超过16个。

****起始版本：**** 13

****相关模块：**** [ChildProcess](/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess)

****所在头文件：**** [native\_child\_process.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| struct [NativeChildProcess\_Fd](/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-fd/capi-nativechildprocess-fd)\* head | 子进程文件描述符记录链表中的第一个记录。 |
