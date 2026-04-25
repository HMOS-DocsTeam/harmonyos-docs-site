---
title: "errorcode.h"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-errorcode-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-errorcode-h
---

# errorcode.h

## 概述

提供国际化接口返回的错误码。

****引用文件：**** &lt;i18n/errorcode.h&gt;

****库：**** libohi18n.so

****系统能力：**** SystemCapability.Global.I18n

****起始版本：**** 22

****相关模块：**** [i18n](/ref/localization-api/localization-c/localization-module/capi-i18n/capi-i18n)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [I18n\_ErrorCode](#i18n_errorcode) | I18n\_ErrorCode | 国际化错误码。 |

## 枚举类型说明

### I18n\_ErrorCode

```
enum I18n_ErrorCode
```

****描述****

国际化错误码。

****系统能力：**** SystemCapability.Global.I18n

****起始版本：**** 22

| 枚举项 | 描述 |
| --- | --- |
| SUCCESS = 0 | 成功。 |
| ERROR\_INVALID\_PARAMETER = 8900001 | 传入参数无效。 |
| UNEXPECTED\_ERROR = 8900050 | 预期之外的错误，例如内存错误。 |
