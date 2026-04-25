---
title: "NativeChildProcess_Fd"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-fd
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativechildprocess-fd
---

# NativeChildProcess\_Fd

```
typedef struct {...} NativeChildProcess_Fd
```

## 概述

传递给子进程的文件描述符信息。

****起始版本：**** 13

****相关模块：**** [ChildProcess](/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess)

****所在头文件：**** [native\_child\_process.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* fdName | 文件描述符的键，最大长度为20字符。 |
| int32\_t fd | 文件描述符的值。 |
| struct [NativeChildProcess\_Fd](/ref/ability-api/ability-c/ability-struct/capi-nativechildprocess-fd/capi-nativechildprocess-fd)\* next | 下一个文件描述记录指针。 |
