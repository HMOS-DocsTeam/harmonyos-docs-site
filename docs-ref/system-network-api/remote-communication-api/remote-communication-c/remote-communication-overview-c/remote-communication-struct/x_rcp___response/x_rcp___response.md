---
title: "Rcp_Response"
sidebar_position: 34
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___response
---

# Rcp\_Response

## 概述

网络请求的响应。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const [Rcp\_Request](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request) \* [request](#request) | 表示生成响应的请求。 |
| char \* [effectiveUrl](#effectiveurl) | 上次使用的有效URL。 |
| [Rcp\_StatusCode](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_statuscode)[statusCode](#statuscode) | 响应状态码。 |
| [Rcp\_Headers](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers) \* [headers](#headers) | 响应标头。 |
| [Rcp\_Buffer](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer)[body](#body) | 响应消息体。 |
| [Rcp\_DebugInfo](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info) \* [debugInfo](#debuginfo) | 请求/响应处理调试信息。 |
| [Rcp\_TimeInfo](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info) \* [timeInfo](#timeinfo) | 响应时间信息。 |
| [Rcp\_ResponseCookies](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies) \* [cookies](#cookies) | 响应Cookies。 |
| const [Rcp\_ResponseCallbackObject](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object) \* [responseCallback](#responsecallback) | 使用的响应回调。 |
| void(\* [destroyResponse](#destroyresponse) )(struct [Rcp\_Response](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response) \*response) | 用于销毁响应的方法。 |
| void \* [responsePrivate](#responseprivate) | 可扩展字段。 |

## 结构体成员变量说明

### body

```
Rcp_Buffer Rcp_Response::body
```

****描述****

响应消息体。

### cookies

```
Rcp_ResponseCookies* Rcp_Response::cookies
```

****描述****

响应Cookies。

### debugInfo

```
Rcp_DebugInfo* Rcp_Response::debugInfo
```

****描述****

请求/响应处理调试信息。

收集的事件取决于[Rcp\_TracingConfiguration](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration)配置信息。

### destroyResponse

```
void(* Rcp_Response::destroyResponse) (struct Rcp_Response *response)
```

****描述****

用于销毁响应的方法。

****起始版本：**** 5.0.0(12)

****参数:****

| 名称 | 描述 |
| --- | --- |
| response | 指示要销毁的响应。它是一个指向[Rcp\_Response](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response)的指针。 |

### effectiveUrl

```
char* Rcp_Response::effectiveUrl
```

****描述****

上次使用的有效URL。

如果重定向，或设置了[Rcp\_SessionConfiguration.baseUrl](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration#baseurl)，则有效URL可能不等于[Rcp\_Request.url](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#url)。

### headers

```
Rcp_Headers* Rcp_Response::headers
```

****描述****

响应标头。

### request

```
const Rcp_Request* Rcp_Response::request
```

****描述****

表示生成响应的请求。

### responseCallback

```
const Rcp_ResponseCallbackObject* Rcp_Response::responseCallback
```

****描述****

使用的响应回调。

### responsePrivate

```
void* Rcp_Response::responsePrivate
```

****描述****

可扩展字段。

### statusCode

```
Rcp_StatusCode Rcp_Response::statusCode
```

****描述****

响应状态码。

### timeInfo

```
Rcp_TimeInfo* Rcp_Response::timeInfo
```

****描述****

响应时间信息。

是否收集该信息取决于[Rcp\_TracingConfiguration.collectTimeInfo](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration#collecttimeinfo)文件中的配置信息。
