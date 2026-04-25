---
title: "TransientTask_DelaySuspendInfo"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-delaysuspendinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-transienttask-transienttask-delaysuspendinfo
---

# TransientTask\_DelaySuspendInfo

```
typedef struct TransientTask_DelaySuspendInfo {...} TransientTask_DelaySuspendInfo
```

## 概述

定义短时任务返回信息结构体。用于返回当前短时任务的任务ID和剩余时间。

****起始版本：**** 13

****相关模块：**** [TransientTask](/ref/background-tasks-api/background-tasks-c/background-tasks-module/capi-transienttask/capi-transienttask)

****所在头文件：**** [transient\_task\_type.h](/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-type-h/capi-transient-task-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t requestId | 短时任务请求ID。 |
| int32\_t actualDelayTime | 剩余时间（单位：毫秒）。 |
