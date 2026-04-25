---
title: "Rcp_RequestContent"
sidebar_position: 32
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___request_content
---

# Rcp\_RequestContent

## 概述

请求的内容。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_ContentType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contenttype)[type](#type) | 表示union中使用的数据类型。 |
| union {  [Rcp\_Buffer](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer) [contentStr](#contentstr)  [Rcp\_Form](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form) \* [form](#form)  [Rcp\_MultipartForm](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform) \* [multipartForm](#multipartform)  [Rcp\_GetDataCallback](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_getdatacallback) [getDataCallback](#getdatacallback)  } | contentStr：文本。  form：表单。  multipartForm：多部分表单。  getDataCallback：使用回调函数获取数据。 |

## 结构体成员变量说明

### contentStr

```
Rcp_Buffer Rcp_RequestContent::contentStr
```

****描述****

字符串内容。

### form

```
Rcp_Form* Rcp_RequestContent::form
```

****描述****

表单内容。

### getDataCallback

```
Rcp_GetDataCallback Rcp_RequestContent::getDataCallback
```

****描述****

回调函数。

### multipartForm

```
Rcp_MultipartForm* Rcp_RequestContent::multipartForm
```

****描述****

多部分表单内容。

### type

```
Rcp_ContentType Rcp_RequestContent::type
```

****描述****

表示union中使用的数据类型。
