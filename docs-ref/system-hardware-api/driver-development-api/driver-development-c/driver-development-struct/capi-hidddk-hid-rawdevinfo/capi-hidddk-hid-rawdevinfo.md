---
title: "Hid_RawDevInfo"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk-hid-rawdevinfo
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidddk-hid-rawdevinfo
---

# Hid\_RawDevInfo

```
typedef struct Hid_RawDevInfo {...} Hid_RawDevInfo
```

## 概述

原始设备信息定义。

****起始版本：**** 18

****相关模块：**** [HidDdk](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk)

****所在头文件：**** [hid\_ddk\_types.h](/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t busType | 总线类型 |
| uint16\_t vendor | 供应商ID |
| uint16\_t product | 产品ID |
