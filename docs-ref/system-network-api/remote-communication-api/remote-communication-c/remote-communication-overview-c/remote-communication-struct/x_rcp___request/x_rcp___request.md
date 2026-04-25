---
title: "Rcp_Request"
sidebar_position: 31
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___request
---

# Rcp\_Request

## 概述

网络请求。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char [id](#id) [[RCP\_MAX\_REQUEST\_ID\_LEN](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_request_id_len)] | 每个请求的唯一ID。由系统生成。 |
| char \* [url](#url) | 请求URL。 |
| const char \* [method](#method) | 请求方法。默认值为GET。 |
| [Rcp\_Headers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers) \* [headers](#headers) | 请求标头。 |
| [Rcp\_RequestContent](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content) \* [content](#content) | 请求体。 |
| [Rcp\_Configuration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration) \* [configuration](#configuration) | 请求配置。请参见[Rcp\_Configuration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration)。 |
| [Rcp\_TransferRange](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range) \* [transferRange](#transferrange) | HTTP传输范围。该设置将转换为HTTP Range标头。 |
| [Rcp\_RequestCookies](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies) \* [cookies](#cookies) | 请求Cookie。该设置将转换为HTTP Cookie标头。 |
| void \* [requestPrivate](#requestprivate) | 可扩展字段。 |

## 结构体成员变量说明

### configuration

```
Rcp_Configuration* Rcp_Request::configuration
```

****描述****

请求配置。请参见[Rcp\_Configuration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration)。

### content

```
Rcp_RequestContent* Rcp_Request::content
```

****描述****

请求体。

### cookies

```
Rcp_RequestCookies* Rcp_Request::cookies
```

****描述****

请求Cookie。该设置将转换为HTTP Cookie标头。

### headers

```
Rcp_Headers* Rcp_Request::headers
```

****描述****

请求标头。

### id

```
char Rcp_Request::id[RCP_MAX_REQUEST_ID_LEN]
```

****描述****

每个请求的唯一ID。由系统生成。

### method

```
const char* Rcp_Request::method
```

****描述****

请求方法。默认值为GET。

### requestPrivate

```
void* Rcp_Request::requestPrivate
```

****描述****

可扩展字段。

### transferRange

```
Rcp_TransferRange* Rcp_Request::transferRange
```

****描述****

HTTP传输范围。该设置将转换为HTTP Range标头。

### url

```
char* Rcp_Request::url
```

****描述****

请求URL。
