---
title: "os_account_common.h"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-os-account-common-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-os-account-common-h
---

# os\_account\_common.h

## 概述

提供OsAccount接口的公共类型定义。

****库：**** libos\_account\_ndk.so

****引用文件：**** &lt;BasicServicesKit/os\_account\_common.h&gt;

****系统能力：**** SystemCapability.Account.OsAccount

****起始版本：**** 12

****相关模块：**** [OsAccount](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-osaccount/capi-osaccount)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OsAccount\_ErrCode](#osaccount_errcode) | OsAccount\_ErrCode | 枚举错误码。 |

## 枚举类型说明

### OsAccount\_ErrCode

```
enum OsAccount_ErrCode
```

****描述****

枚举错误码。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| OS\_ACCOUNT\_ERR\_OK = 0 | 成功。 |
| OS\_ACCOUNT\_ERR\_INTERNAL\_ERROR = 12300001 | 内部错误。 |
| OS\_ACCOUNT\_ERR\_INVALID\_PARAMETER = 12300002 | 无效的参数。 |
