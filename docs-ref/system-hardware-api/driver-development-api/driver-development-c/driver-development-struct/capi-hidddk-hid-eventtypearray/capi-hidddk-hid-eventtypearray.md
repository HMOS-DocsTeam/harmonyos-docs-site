---
title: "Hid_EventTypeArray"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk-hid-eventtypearray
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidddk-hid-eventtypearray
---

# Hid\_EventTypeArray

```
typedef struct Hid_EventTypeArray {...} Hid_EventTypeArray
```

## 概述

事件类型编码数组。

****起始版本：**** 11

****相关模块：**** [HidDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk)

****所在头文件：**** [hid\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| Hid\_EventType\* hidEventType | 事件类型编码 |
| uint16\_t length | 数组的有效长度 |
