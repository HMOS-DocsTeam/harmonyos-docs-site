---
title: "Input_CursorInfo"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-cursorinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-input-input-cursorinfo
---

# Input\_CursorInfo

```
typedef struct Input_CursorInfo Input_CursorInfo
```

## 概述

定义鼠标光标信息，包括光标显示状态、光标样式、光标大小档位、光标颜色。

****起始版本：**** 22

****相关模块：**** [input](/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input)

****所在头文件：**** [oh\_input\_manager.h](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h)

****相关接口：****

| 名称 | 描述 |
| --- | --- |
| [OH\_Input\_CursorInfo\_Create](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_cursorinfo_create) | 创建鼠标光标信息对象。通过调用[OH\_Input\_CursorInfo\_Destroy](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_cursorinfo_destroy)销毁鼠标光标信息对象。 |
| [OH\_Input\_CursorInfo\_Destroy](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_cursorinfo_destroy) | 销毁鼠标光标信息对象。 |
