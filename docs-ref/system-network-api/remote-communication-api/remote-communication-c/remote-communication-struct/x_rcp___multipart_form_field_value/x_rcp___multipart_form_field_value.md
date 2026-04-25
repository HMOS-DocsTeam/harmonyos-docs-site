---
title: "Rcp_MultipartFormFieldValue"
sidebar_position: 25
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___multipart_form_field_value
---

# Rcp\_MultipartFormFieldValue

## 概述

多部分表单域值，在[Rcp\_MultipartForm](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform)中使用。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_MultipartValueType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartvaluetype) [type](#type) | 表示union中使用的数据类型。 |
| union {  [Rcp\_FormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value) [formValue](#formvalue)  [Rcp\_FormFieldFileValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value) [formFileValue](#formfilevalue)  } | formValue：简单表单数据字段值。  formFileValue：简单表单数据字段文件值。 |
| struct [Rcp\_MultipartFormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value) \* [next](#next) | 指向下一个[Rcp\_MultipartFormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value)。链式存储。 |

## 结构体成员变量说明

### formFileValue

```
Rcp_FormFieldFileValue Rcp_MultipartFormFieldValue::formFileValue
```

****描述****

简单表单数据字段文件值。

### formValue

```
Rcp_FormFieldValue Rcp_MultipartFormFieldValue::formValue
```

****描述****

简单表单数据字段值。

### next

```
struct Rcp_MultipartFormFieldValue* Rcp_MultipartFormFieldValue::next
```

****描述****

指向下一个[Rcp\_MultipartFormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value)。链式存储。

### type

```
Rcp_MultipartValueType Rcp_MultipartFormFieldValue::type
```

****描述****

表示union中使用的数据类型。
