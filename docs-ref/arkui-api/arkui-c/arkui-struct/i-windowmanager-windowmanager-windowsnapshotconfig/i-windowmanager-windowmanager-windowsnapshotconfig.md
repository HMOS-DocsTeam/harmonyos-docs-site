---
title: "WindowManager_WindowSnapshotConfig"
sidebar_position: 139
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-windowmanager-windowmanager-windowsnapshotconfig
kit: 应用框架
last_updated: "2026-04-22"
slug: i-windowmanager-windowmanager-windowsnapshotconfig
---

# WindowManager\_WindowSnapshotConfig

```
typedef struct {...} WindowManager_WindowSnapshotConfig
```

## 概述

主窗口截图的配置项。

****起始版本：**** 21

****相关模块：**** [WindowManager](/ref/arkui-api/arkui-c/arkui-module/capi-windowmanager/capi-windowmanager)

****所在头文件：**** [oh\_window\_comm.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-comm-h/capi-oh-window-comm-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool useCache | 是否使用主窗口的已有截图。默认值为true。 true表示使用主窗口的已有截图，若主窗口无保存的截图，则使用主窗口的最新截图。false表示使用主窗口的最新截图。 |
