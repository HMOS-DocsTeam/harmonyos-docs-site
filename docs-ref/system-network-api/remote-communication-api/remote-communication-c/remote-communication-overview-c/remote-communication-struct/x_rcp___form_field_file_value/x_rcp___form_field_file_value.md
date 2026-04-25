---
title: "Rcp_FormFieldFileValue"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___form_field_file_value
---

# Rcp\_FormFieldFileValue

## 概述

表单字段文件值。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char [contentType](#contenttype) [[RCP\_MAX\_CONTENT\_TYPE\_LEN](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_content_type_len)] | 多部分表单数据内容类型。 |
| char [remoteFileName](#remotefilename) [[RCP\_MAX\_FILENAME\_LEN](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_filename_len)] | 多部分表单数据远程文件名。 |
| [Rcp\_ContentOrPathOrCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback)[contentOrPathOrCb](#contentorpathorcb) | 多部分表单数据内容。 |

## 结构体成员变量说明

### contentOrPathOrCb

```
Rcp_ContentOrPathOrCallback Rcp_FormFieldFileValue::contentOrPathOrCb
```

****描述****

多部分表单数据内容。

### contentType

```
char Rcp_FormFieldFileValue::contentType[RCP_MAX_CONTENT_TYPE_LEN]
```

****描述****

多部分表单数据内容类型。

### remoteFileName

```
char Rcp_FormFieldFileValue::remoteFileName[RCP_MAX_FILENAME_LEN]
```

****描述****

多部分表单数据远程文件名。
