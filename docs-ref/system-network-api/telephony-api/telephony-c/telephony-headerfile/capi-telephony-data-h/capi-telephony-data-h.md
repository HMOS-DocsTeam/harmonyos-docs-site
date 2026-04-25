---
title: "telephony_data.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-data-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-telephony-data-h
---

# telephony\_data.h

## 概述

为电话蜂窝数据定义C接口。

****引用文件：**** &lt;telephony/cellular\_data/telephony\_data.h&gt;

****库：**** libtelephony\_data.so

****系统能力：**** SystemCapability.Telephony.CellularData

****起始版本：**** 13

****相关模块：**** [Telephony](/ref/system-network-api/telephony-api/telephony-c/telephony-module/capi-telephony/capi-telephony)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [int32\_t OH\_Telephony\_GetDefaultCellularDataSlotId(void)](#oh_telephony_getdefaultcellulardataslotid) | 获取默认移动数据的SIM卡接口。 |

## 函数说明

### OH\_Telephony\_GetDefaultCellularDataSlotId()

```
int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)
```

****描述****

获取默认移动数据的SIM卡接口。

****系统能力：**** SystemCapability.Telephony.CellularData

****起始版本：**** 13

****返回：****

| 类型 | 说明 |
| --- | --- |
| int32\_t | 默认移动数据的SIM卡接口 (0 表示卡槽1, 1 表示卡槽2)。 |
