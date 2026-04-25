---
title: "oh_pasteboard_err_code.h"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pasteboard-err-code-h
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-pasteboard-err-code-h
---

# oh\_pasteboard\_err\_code.h

## 概述

声明剪贴板框架错误码信息。

****引用文件：**** &lt;database/pasteboard/oh\_pasteboard\_err\_code.h&gt;

****库：**** libpasteboard.so

****系统能力：**** SystemCapability.MiscServices.Pasteboard

****起始版本：**** 13

****相关模块：**** [Pasteboard](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-pasteboard/capi-pasteboard)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [PASTEBOARD\_ErrCode](#pasteboard_errcode) | PASTEBOARD\_ErrCode | 错误码信息。 |

## 枚举类型说明

### PASTEBOARD\_ErrCode

```
enum PASTEBOARD_ErrCode
```

****描述：****

错误码信息。

****起始版本：**** 13

| 枚举项 | 描述 |
| --- | --- |
| ERR\_OK = 0 | 执行成功。 |
| ERR\_PERMISSION\_ERROR = 201 | 权限校验失败。 |
| ERR\_INVALID\_PARAMETER = 401 | 非法参数。 |
| ERR\_DEVICE\_NOT\_SUPPORTED = 801 | 设备能力不支持。 |
| ERR\_INNER\_ERROR = 12900000 | 内部错误。 |
| ERR\_BUSY = 12900003 | 系统忙。 |
| ERR\_PASTEBOARD\_COPY\_FILE\_ERROR = 12900007 | 文件拷贝失败。  起始版本: 15 |
| ERR\_PASTEBOARD\_PROGRESS\_START\_ERROR = 12900008 | 拉起进度显示失败。  起始版本: 15 |
| ERR\_PASTEBOARD\_PROGRESS\_ABNORMAL = 12900009 | 进度显示异常。  起始版本: 15 |
| ERR\_PASTEBOARD\_GET\_DATA\_FAILED = 12900010 | 获取剪贴数据失败。  起始版本: 15 |
