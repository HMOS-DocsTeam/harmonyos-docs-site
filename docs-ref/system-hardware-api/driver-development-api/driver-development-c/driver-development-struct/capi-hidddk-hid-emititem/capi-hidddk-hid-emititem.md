---
title: "Hid_EmitItem"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk-hid-emititem
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidddk-hid-emititem
---

# Hid\_EmitItem

```
typedef struct Hid_EmitItem {...} Hid_EmitItem
```

## 概述

事件信息。

****起始版本：**** 11

****相关模块：**** [HidDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk)

****所在头文件：**** [hid\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint16\_t type | 事件类型 |
| uint16\_t code | 事件编码 |
| uint32\_t value | 事件值 |
