---
title: "TransientTask_TransientTaskInfo"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-transienttaskinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-transienttask-transienttask-transienttaskinfo
---

# TransientTask\_TransientTaskInfo

```
typedef struct TransientTask_TransientTaskInfo {...} TransientTask_TransientTaskInfo
```

## 概述

定义所有短时任务信息结构体。用于返回当日剩余总配额和已申请的所有短时任务信息。

****起始版本：**** 20

****相关模块：**** [TransientTask](/ref/background-tasks-api/background-tasks-c/background-tasks-module/capi-transienttask/capi-transienttask)

****所在头文件：**** [transient\_task\_type.h](/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-type-h/capi-transient-task-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t remainingQuota | 当日剩余总配额。单位：毫秒。 |
| [TransientTask\_DelaySuspendInfo](/ref/background-tasks-api/background-tasks-c/background-tasks-struct/capi-transienttask-transienttask-delaysuspendinfo/capi-transienttask-transienttask-delaysuspendinfo) transientTasks[[TRANSIENT\_TASK\_MAX\_NUM](/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-type-h/capi-transient-task-type-h#宏定义)] | 已申请的所有短时任务信息。包括短时任务请求ID、剩余时间（单位：毫秒）。 |
