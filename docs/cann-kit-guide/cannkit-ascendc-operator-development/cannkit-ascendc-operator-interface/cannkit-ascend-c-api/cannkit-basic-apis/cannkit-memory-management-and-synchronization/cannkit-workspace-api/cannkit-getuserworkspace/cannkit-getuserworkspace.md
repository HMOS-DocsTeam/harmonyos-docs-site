---
title: "GetUserWorkspace"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getuserworkspace
kit: ai
last_updated: "2026-04-22"
---

# GetUserWorkspace

## 功能说明

获取开发者使用的[workspace](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-workspace-api/cannkit-getsysworkspaceptr)指针。如果使用了[Matmul](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-matmul-usage-description)等需要系统workspace的高阶API，kernel侧需要通过[SetSysWorkSpace](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-workspace-api/cannkit-setsysworkspace)设置系统workspace，此时开发者workspace需要通过该接口获取。

## 函数原型

```
__aicore__ inline GM_ADDR GetUserWorkspace(GM_ADDR workspace)
```

## 参数说明

****表1**** 接口参数说明

| 参数名称 | 输入/输出 | 描述 |
| --- | --- | --- |
| workspace | 输入 | 传入workspace的指针，包括系统workspace和开发者使用的workspace。 |

## 支持的型号

Kirin9020系列处理器

KirinX90系列处理器

## 注意事项

无

## 返回值

开发者使用workspace指针。
