---
title: "Rcp_ContentOrPathOrCallback"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___content_or_path_or_callback
---

# Rcp\_ContentOrPathOrCallback

## 概述

[Rcp\_FormFieldFileValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value)中使用的简单表单数据字段值。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_ContentOrPathOrCallbackType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contentorpathorcallbacktype)[type](#type) | 表示union中使用的数据类型。 |
| union {  [Rcp\_Buffer](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer) [content](#content)  char [path](#path) [[RCP\_MAX\_PATH\_LEN](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_path_len)]  [Rcp\_GetDataCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_getdatacallback) [callback](#callback)  } | content: 文本数据。  path: 文件路径。  callback: 获取数据的回调函数。 |

## 结构体成员变量说明

### callback

```
Rcp_GetDataCallback Rcp_ContentOrPathOrCallback::callback
```

****描述****

获取数据的回调。

### content

```
Rcp_Buffer Rcp_ContentOrPathOrCallback::content
```

****描述****

文本数据。

### path

```
char Rcp_ContentOrPathOrCallback::path[RCP_MAX_PATH_LEN]
```

****描述****

文件路径。

### type

```
Rcp_ContentOrPathOrCallbackType Rcp_ContentOrPathOrCallback::type
```

****描述****

union中使用的数据类型。
