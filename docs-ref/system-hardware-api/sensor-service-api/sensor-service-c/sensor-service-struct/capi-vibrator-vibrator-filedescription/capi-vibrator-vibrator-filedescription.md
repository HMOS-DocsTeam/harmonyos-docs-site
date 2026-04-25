---
title: "Vibrator_FileDescription"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-filedescription
kit: 系统
last_updated: "2026-04-22"
slug: capi-vibrator-vibrator-filedescription
---

# Vibrator\_FileDescription

```
typedef struct Vibrator_FileDescription { ... } Vibrator_FileDescription
```

## 概述

振动文件描述。

****起始版本：**** 11

****相关模块：**** [Vibrator](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-vibrator/capi-vibrator)

****所在头文件：**** [vibrator\_type.h](/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-vibrator-type-h/capi-vibrator-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t fd | 自定义振动序列的文件句柄。 |
| int64\_t offset | 自定义振动序列的偏移地址。 |
| int64\_t length | 自定义振动序列的总长度。 |
