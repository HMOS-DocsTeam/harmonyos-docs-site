---
title: "aip_error_code.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-error-code
kit: 应用框架
last_updated: "2026-04-22"
slug: dataaugmentation-aip-error-code
---

# aip\_error\_code.h

## 概述

提供与错误代码相关的接口。

****引用文件：**** #include "dataaugmentation/aip\_error\_code.h"

****库：**** libretrieval\_ndk.so

****系统能力：**** SystemCapability.DataAugmentation.Retrieval

****起始版本：**** 6.0.0(20)

****相关模块：**** [AIP](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip)

## 汇总

### 类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [OH\_Aip\_ErrCode](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1) [OH\_Aip\_ErrCode](/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1) | 错误码信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| OH\_Aip\_ErrCode {  AIP\_OK = 0,  AIP\_E\_EXEC\_ERR = 1021200005,  AIP\_E\_OUT\_OF\_RANGE = 1021200006,  AIP\_E\_NO\_SUCH\_FIELD = 1021200007,  AIP\_E\_OVER\_LIMIT = 1021200008,  AIP\_E\_CONDITION\_OVER\_LIMIT = 1021200009,  AIP\_E\_INVALID\_ARGS = 1021200010,  AIP\_E\_EMBEDDING\_ERR = 1021200012  } | 错误码信息。 |
