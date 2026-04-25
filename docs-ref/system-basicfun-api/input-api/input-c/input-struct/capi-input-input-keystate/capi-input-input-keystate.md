---
title: "Input_KeyState"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-keystate
kit: 系统
last_updated: "2026-04-22"
slug: capi-input-input-keystate
---

# Input\_KeyState

```
typedef struct Input_KeyState Input_KeyState
```

## 概述

定义按键信息，用于标识按键行为。例如，“Ctrl”按键信息包含键值和键类型。

****起始版本：**** 12

****相关模块：**** [input](/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input)

****所在头文件：**** [oh\_input\_manager.h](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h)

****相关接口：****

| 名称 | 描述 |
| --- | --- |
| [OH\_Input\_CreateKeyState](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_createkeystate) | 创建按键状态的枚举对象。通过调用[OH\_Input\_DestroyKeyState](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_destroykeystate)销毁按键状态的枚举对象。 |
| [OH\_Input\_DestroyKeyState](/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_destroykeystate) | 销毁按键状态的枚举对象。 |
