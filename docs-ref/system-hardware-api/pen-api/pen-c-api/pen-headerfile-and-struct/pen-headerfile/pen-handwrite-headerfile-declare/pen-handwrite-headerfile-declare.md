---
title: "native_handwrite_api.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-headerfile-declare
kit: 系统
last_updated: "2026-04-22"
slug: pen-handwrite-headerfile-declare
---

# native\_handwrite\_api.h

## 概述

声明用于对外提供手写能力。

****库：**** libhandwrite\_ndk.z.so

****引用文件：**** &lt;handwrite/native\_handwrite\_api.h&gt;

****系统能力：**** SystemCapability.Stylus.Handwrite

****起始版本：**** 6.0.0(20)

****相关模块：**** [HandWrite](/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-handwrite-c/pen-handwrite-c)

## 汇总

### 结构体

| 名称 | 描述 |
| --- | --- |
| struct [HandWrite\_HistoricalPoint](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint) | 定义历史触摸点信息的结构体。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| enum [HandWrite\_ErrCode](/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-handwrite-c/pen-handwrite-c#handwrite_errcode) {  E\_NO\_ERROR = 0,  E\_PARAMS = 401,  E\_INNER\_ERROR = 1010400001  } | 定义手写错误码。 |

### 函数

| 名称 | 函数 |
| --- | --- |
| int32\_t [HMS\_HandWrite\_GetPredictPoint](/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-handwrite-c/pen-handwrite-c#hms_handwrite_getpredictpoint)(const [HandWrite\_HistoricalPoint](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint) \*event, int32\_t size, float \*predictPointX, float \*predictPointY) | 此接口用于获取预测点。 |
