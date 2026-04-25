---
title: "NativeChildProcess_Options"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-options
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-nativechildprocess-options
---

# NativeChildProcess\_Options

```
typedef struct {...} NativeChildProcess_Options
```

## 概述

启动子进程的配置选项。

****起始版本：**** 13

****相关模块：**** [ChildProcess](/ref/ability-api/ability-c/ability-module/capi-childprocess/capi-childprocess)

****所在头文件：**** [native\_child\_process.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [NativeChildProcess\_IsolationMode](/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#nativechildprocess_isolationmode) isolationMode | 子进程所采用的隔离模式。 |
| int64\_t reserved | 预留字段，供未来扩展使用。 |
