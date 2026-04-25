---
title: "Rcp_FormFieldValue"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___form_field_value
---

# Rcp\_FormFieldValue

## 概述

简单表单数据字段值，参见[Rcp\_Form](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form)和[Rcp\_MultipartFormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value)。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_FormValueType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_formvaluetype)[type](#type) | 表示union中使用的数据类型。 |
| union {  uint8\_t [varBool](#varbool)  int32\_t [varInt32](#varint32)  int64\_t [varInt64](#varint64)  double [varDouble](#vardouble)  [Rcp\_Buffer](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer) [varStr](#varstr)  } | bool类型。  int32类型。  int64类型。  double类型。  string类型。 |
| struct [Rcp\_FormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value) \* [next](#next) | 指向下一个[Rcp\_FormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value)。链式存储。 |

## 结构体成员变量说明

### next

```
struct Rcp_FormFieldValue* Rcp_FormFieldValue::next
```

****描述****

指向下一个[Rcp\_FormFieldValue](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value)。链式存储。

### type

```
Rcp_FormValueType Rcp_FormFieldValue::type
```

****描述****

表示union中使用的数据类型。

### varBool

```
uint8_t Rcp_FormFieldValue::varBool
```

****描述****

bool类型。

### varDouble

```
double Rcp_FormFieldValue::varDouble
```

****描述****

double类型。

### varInt32

```
int32_t Rcp_FormFieldValue::varInt32
```

****描述****

int32类型。

### varInt64

```
int64_t Rcp_FormFieldValue::varInt64
```

****描述****

int64类型。

### varStr

```
Rcp_Buffer Rcp_FormFieldValue::varStr
```

****描述****

string类型。
