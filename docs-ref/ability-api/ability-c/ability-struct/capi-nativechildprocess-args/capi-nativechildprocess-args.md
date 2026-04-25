---
title: "NativeChildProcess_Args"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-args
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativechildprocess-args
---

# NativeChildProcess\_Args

```
typedef struct {...} NativeChildProcess_Args
```

## 概述

传递给子进程的参数。

****起始版本：**** 13

****相关模块：**** [ChildProcess](/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess)

****所在头文件：**** [native\_child\_process.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* entryParams | 入口参数，大小不能超过150KB。 |
| struct [NativeChildProcess\_FdList](/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-fdlist/capi-nativechildprocess-fdlist) fdList | 传递给子进程的文件描述符信息列表。 |
