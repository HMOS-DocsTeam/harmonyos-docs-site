---
title: "HandWrite"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-c
kit: 系统
last_updated: "2026-04-22"
slug: pen-handwrite-c
---

# HandWrite

## 概述

该模块对外提供手写能力。

****系统能力：**** SystemCapability.Stylus.Handwrite

****起始版本：**** 6.0.0(20)

## 汇总

### 文件

| 名称 | 描述 |
| --- | --- |
| [native\_handwrite\_api.h](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-handwrite-headerfile-declare/pen-handwrite-headerfile-declare) | 声明用于对外提供手写能力。 |

### 结构体

| 名称 | 描述 |
| --- | --- |
| struct [HandWrite\_HistoricalPoint](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint) | 定义历史触摸点信息的结构体。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| enum [HandWrite\_ErrCode](#handwrite_errcode) {  E\_NO\_ERROR = 0,  E\_PARAMS = 401,  E\_INNER\_ERROR = 1010400001  } | 定义手写错误码。 |

### 函数

| 名称 | 函数 |
| --- | --- |
| int32\_t [HMS\_HandWrite\_GetPredictPoint](#hms_handwrite_getpredictpoint)(const [HandWrite\_HistoricalPoint](/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint)\* event,  int32\_t size, float \*predictPointX, float \*predictPointY) | 此接口用于获取预测点。 |

## 枚举类型说明

### HandWrite\_ErrCode

```
enum HandWrite_ErrCode
```

****描述****

定义手写错误码。

****起始版本：**** 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| E\_NO\_ERROR | 执行成功。 |
| E\_PARAMS | 输入参数无效。 |
| E\_INNER\_ERROR | 系统内部错误，相关资源加载失败。 |

## 函数说明

### HMS\_HandWrite\_GetPredictPoint()

```
int32_t HMS_HandWrite_GetPredictPoint(const HandWrite_HistoricalPoint* event,
    int32_t size, float *predictPointX, float *predictPointY)
```

****描述****

此接口用于获取预测点。

****起始版本：**** 6.0.0(20)

****参数：****

| 名称 | 描述 |
| --- | --- |
| event | 指示输入的历史点。 |
| size | 历史点的个数。 |
| predictPointX | 接收预测点X坐标的指针。 |
| predictPointY | 接收预测点Y坐标的指针。 |

****返回：**** 手写错误码HandWrite\_ErrCode：

E\_NO\_ERROR 0 - 执行成功。

E\_PARAMS 401 - 输入参数无效。

E\_INNER\_ERROR 1010400001 - 系统内部错误，相关资源加载失败。
