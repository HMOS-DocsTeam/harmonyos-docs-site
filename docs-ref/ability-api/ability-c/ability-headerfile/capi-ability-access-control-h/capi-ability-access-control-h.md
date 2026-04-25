---
title: "ability_access_control.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-access-control-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-ability-access-control-h
---

# ability\_access\_control.h

## 概述

声明管理进程访问控制的接口。

****库：**** ability\_access\_control.so

****引用文件：**** &lt;accesstoken/ability\_access\_control.h&gt;

****系统能力：**** SystemCapability.Security.AccessToken

****起始版本：**** 12

****相关模块：**** [AbilityAccessControl](/ref/ability-api/ability-c/ability-module/capi-abilityaccesscontrol/capi-abilityaccesscontrol)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [bool OH\_AT\_CheckSelfPermission(const char \*permission)](#oh_at_checkselfpermission) | 校验应用是否被授予指定的权限。 |

## 函数说明

### OH\_AT\_CheckSelfPermission()

```
bool OH_AT_CheckSelfPermission(const char *permission)
```

****描述****

校验应用是否被授予指定的权限。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char \*permission | 需要校验的权限名称，合法的权限名取值可在应用权限列表中查询。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| bool | true：应用已经被授予该权限。  false：应用未被授予该权限。 |
