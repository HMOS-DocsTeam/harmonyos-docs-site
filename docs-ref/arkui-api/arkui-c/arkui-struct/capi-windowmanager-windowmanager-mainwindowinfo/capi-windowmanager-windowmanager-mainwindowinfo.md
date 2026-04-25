---
title: "WindowManager_MainWindowInfo"
sidebar_position: 138
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager-windowmanager-mainwindowinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-windowmanager-windowmanager-mainwindowinfo
---

# WindowManager\_MainWindowInfo

```
typedef struct {...} WindowManager_MainWindowInfo
```

## 概述

主窗口信息。

****起始版本：**** 21

****相关模块：**** [WindowManager](/ref/arkui-api/arkui-c/arkui-module/capi-windowmanager/capi-windowmanager)

****所在头文件：**** [oh\_window\_comm.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-comm-h/capi-oh-window-comm-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint64\_t displayId | 主窗口所在的屏幕ID。 |
| int32\_t windowId | 主窗口ID。 |
| bool showing | 主窗口的前后台状态。true表示主窗口在前台，false表示主窗口不在前台。 |
| const char\* label | 主窗口任务名称。 |
