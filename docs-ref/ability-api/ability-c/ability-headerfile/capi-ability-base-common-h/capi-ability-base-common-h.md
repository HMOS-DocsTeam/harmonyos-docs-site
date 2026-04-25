---
title: "ability_base_common.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-base-common-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-ability-base-common-h
---

# ability\_base\_common.h

## 概述

声明AbilityBase定义的相关错误码。

****引用文件****：&lt;AbilityKit/ability\_base/ability\_base\_common.h&gt;

****库：**** libability\_base\_want.so

****系统能力：**** SystemCapability.Ability.AbilityBase

****起始版本：**** 15

****相关模块：**** [AbilityBase](/ref/ability-api/ability-c/ability-module/capi-abilitybase/capi-abilitybase)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [AbilityBase\_ErrorCode](#abilitybase_errorcode) | AbilityBase\_ErrorCode | AbilityBase相关错误码枚举。 |

## 枚举类型说明

### AbilityBase\_ErrorCode

```
enum AbilityBase_ErrorCode
```

****描述****

AbilityBase相关错误码枚举。

****起始版本：**** 15

| 枚举项 | 描述 |
| --- | --- |
| ABILITY\_BASE\_ERROR\_CODE\_NO\_ERROR = 0 | 操作成功。 |
| ABILITY\_BASE\_ERROR\_CODE\_PARAM\_INVALID = 401 | 非法入参。 |
