---
title: "arkweb_type.h"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkweb-type-h
---

# arkweb\_type.h

## 概述

提供ArkWeb在Native侧的公共类型定义。

****引用文件：**** &lt;web/arkweb\_type.h&gt;

****库：**** libohweb.so

****系统能力：**** SystemCapability.Web.Webview.Core

****起始版本：**** 12

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkWeb\_JavaScriptBridgeData](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata) | ArkWeb\_JavaScriptBridgeData | 定义JavaScript Bridge数据的基础结构。 |
| [ArkWeb\_WebMessage\*](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessage8h/capi-web-arkweb-webmessage8h) | ArkWeb\_WebMessagePtr | Post Message数据结构体指针。 |
| [ArkWeb\_JavaScriptValue\*](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptvalue8h/capi-web-arkweb-javascriptvalue8h) | ArkWeb\_JavaScriptValuePtr | JavaScript数据结构体指针。 |
| [ArkWeb\_WebMessagePort\*](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h) | ArkWeb\_WebMessagePortPtr | Post Message端口结构体指针。 |
| [ArkWeb\_JavaScriptObject](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptobject/capi-web-arkweb-javascriptobject) | ArkWeb\_JavaScriptObject | 注入的JavaScript结构体。 |
| [ArkWeb\_ProxyMethod](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxymethod/capi-web-arkweb-proxymethod) | ArkWeb\_ProxyMethod | 注入的Proxy方法通用结构体。 |
| [ArkWeb\_ProxyMethodWithResult](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxymethodwithresult/capi-web-arkweb-proxymethodwithresult) | ArkWeb\_ProxyMethodWithResult | 注入的Proxy方法通用结构体。 |
| [ArkWeb\_ProxyObject](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxyobject/capi-web-arkweb-proxyobject) | ArkWeb\_ProxyObject | 注入的Proxy对象通用结构体。 |
| [ArkWeb\_ProxyObjectWithResult](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxyobjectwithresult/capi-web-arkweb-proxyobjectwithresult) | ArkWeb\_ProxyObjectWithResult | 注入的Proxy对象通用结构体。 |
| [ArkWeb\_ControllerAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi) | ArkWeb\_ControllerAPI | Controller相关的Native API结构体。在调用接口前建议通过ARKWEB\_MEMBER\_MISSING校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。Controller相关接口需在UI线程中调用OH\_ArkWeb\_GetNativeAPI方法获取。 |
| [ArkWeb\_ComponentAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi) | ArkWeb\_ComponentAPI | Component相关的Native API结构体。 |
| [ArkWeb\_WebMessagePortAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi) | ArkWeb\_WebMessagePortAPI | Post Message相关的Native API结构体。在调用接口前建议通过ARKWEB\_MEMBER\_MISSING校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessagePort相关接口需在UI线程中调用OH\_ArkWeb\_GetNativeAPI方法获取。 |
| [ArkWeb\_WebMessageAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageapi/capi-web-arkweb-webmessageapi) | ArkWeb\_WebMessageAPI | Post Message数据相关的Native API结构体。在调用接口前建议通过ARKWEB\_MEMBER\_MISSING校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessage相关接口需在UI线程中调用OH\_ArkWeb\_GetNativeAPI方法获取。 |
| [ArkWeb\_CookieManagerAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-cookiemanagerapi/capi-web-arkweb-cookiemanagerapi) | ArkWeb\_CookieManagerAPI | 定义了ArkWeb的CookieManager接口。在调用接口之前，建议使用ARKWEB\_MEMBER\_MISSING检查函数结构体是否有对应的函数指针，避免SDK与设备ROM不匹配导致崩溃。CookieManager相关接口需在UI线程中调用OH\_ArkWeb\_GetNativeAPI方法获取。 |
| [ArkWeb\_JavaScriptValueAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptvalueapi/capi-web-arkweb-javascriptvalueapi) | ArkWeb\_JavaScriptValueAPI | 定义了ArkWeb的JavaScriptValue接口。在调用接口之前，建议使用ARKWEB\_MEMBER\_MISSING检查函数结构体是否有对应的函数指针，避免SDK与设备ROM不匹配导致崩溃。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkWeb\_WebMessageType](#arkweb_webmessagetype) | ArkWeb\_WebMessageType | Post Message数据类型。 |
| [ArkWeb\_JavaScriptValueType](#arkweb_javascriptvaluetype) | ArkWeb\_JavaScriptValueType | JavaScript数据类型。 |

### 函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (\*ArkWeb\_OnJavaScriptCallback)(const char\* webTag, const ArkWeb\_JavaScriptBridgeData\* data, void\* userData)](#arkweb_onjavascriptcallback) | ArkWeb\_OnJavaScriptCallback | 注入的JavaScript执行完成的回调。 |
| [typedef void (\*ArkWeb\_OnJavaScriptProxyCallback)(const char\* webTag, const ArkWeb\_JavaScriptBridgeData\* dataArray, size\_t arraySize, void\* userData)](#arkweb_onjavascriptproxycallback) | ArkWeb\_OnJavaScriptProxyCallback | Proxy方法被执行的回调。 |
| [typedef ArkWeb\_JavaScriptValuePtr (\*ArkWeb\_OnJavaScriptProxyCallbackWithResult)(const char\* webTag, const ArkWeb\_JavaScriptBridgeData\* dataArray, size\_t arraySize, void\* userData)](#arkweb_onjavascriptproxycallbackwithresult) | ArkWeb\_OnJavaScriptProxyCallbackWithResult | Proxy方法被执行的回调。 |
| [typedef void (\*ArkWeb\_OnComponentCallback)(const char\* webTag, void\* userData)](#arkweb_oncomponentcallback) | ArkWeb\_OnComponentCallback | 组件事件通知相关的通用回调。 |
| [typedef void (\*ArkWeb\_OnScrollCallback)(const char\* webTag, void\* userData, double x, double y)](#arkweb_onscrollcallback) | ArkWeb\_OnScrollCallback | 定义Web组件滚动时的回调函数的类型。 |
| [typedef void (\*ArkWeb\_OnMessageEventHandler)(const char\* webTag, const ArkWeb\_WebMessagePortPtr port, const ArkWeb\_WebMessagePtr message, void\* userData)](#arkweb_onmessageeventhandler) | ArkWeb\_OnMessageEventHandler | 处理HTML发送过来的Post Message数据。 |

### 宏定义

| 名称 | 描述 |
| --- | --- |
| ARKWEB\_MEMBER\_EXISTS(s, f) ((intptr\_t) & ((s)-&gt;f) - (intptr\_t)(s) + sizeof((s)-&gt;f) &lt;= \*reinterpret\_cast&lt;size\_t\*&gt;(s)) | 检查结构体中是否存在该成员变量。  ****起始版本：**** 12 |
| ARKWEB\_MEMBER\_MISSING(s, f) (!ARKWEB\_MEMBER\_EXISTS(s, f) || !((s)->f)) | 当前结构体存在该成员变量则返回false，否则返回true  ****起始版本：**** 12 |

## 枚举类型说明

### ArkWeb\_WebMessageType

```
enum ArkWeb_WebMessageType
```

****描述****

Post Message数据类型。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| ARKWEB\_NONE = 0 | 错误数据。 |
| ARKWEB\_STRING | 字符串数据类型。 |
| ARKWEB\_BUFFER | 字节流数据类型。 |

### ArkWeb\_JavaScriptValueType

```
enum ArkWeb_JavaScriptValueType
```

****描述****

JavaScript数据类型。

****起始版本：**** 18

| 枚举项 | 描述 |
| --- | --- |
| ARKWEB\_JAVASCRIPT\_NONE = 0 | 错误数据。 |
| ARKWEB\_JAVASCRIPT\_STRING | 字符串数据类型。 |
| ARKWEB\_JAVASCRIPT\_BOOL | bool数据类型。 |

## 函数说明

### ArkWeb\_OnJavaScriptCallback()

```
typedef void (*ArkWeb_OnJavaScriptCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* data, void* userData)
```

****描述****

注入的JavaScript执行完成的回调。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件名称。 |
| const [ArkWeb\_JavaScriptBridgeData](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata)\* data | JavaScriptBridge数据。 |
| void\* userData | 用户自定义的数据。 |

### ArkWeb\_OnJavaScriptProxyCallback()

```
typedef void (*ArkWeb_OnJavaScriptProxyCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)
```

****描述****

Proxy方法被执行的回调。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件名称。 |
| const [ArkWeb\_JavaScriptBridgeData](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata)\* dataArray | 数组数据。 |
| size\_t arraySize | 数组大小。 |
| void\* userData | 用户自定义的数据。 |

### ArkWeb\_OnJavaScriptProxyCallbackWithResult()

```
typedef ArkWeb_JavaScriptValuePtr (*ArkWeb_OnJavaScriptProxyCallbackWithResult)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)
```

****描述****

Proxy方法被执行的回调。

****起始版本：**** 18

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件名称。 |
| const [ArkWeb\_JavaScriptBridgeData](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata)\* dataArray | 数组数据。 |
| size\_t arraySize | 数组大小。 |
| void\* userData | 用户自定义的数据。 |

### ArkWeb\_OnComponentCallback()

```
typedef void (*ArkWeb_OnComponentCallback)(const char* webTag, void* userData)
```

****描述****

组件事件通知相关的通用回调。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件名称。 |
| void\* userData | 用户自定义的数据。 |

### ArkWeb\_OnScrollCallback()

```
typedef void (*ArkWeb_OnScrollCallback)(const char* webTag, void* userData, double x, double y)
```

****描述****

定义Web组件滚动时的回调函数的类型。

****起始版本：**** 18

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件名称。 |
| void\* userData | 用户自定义的数据。 |
| double x | X轴滚动偏移。 |
| double y | Y轴滚动偏移。 |

### ArkWeb\_OnMessageEventHandler()

```
typedef void (*ArkWeb_OnMessageEventHandler)(const char* webTag, const ArkWeb_WebMessagePortPtr port, const ArkWeb_WebMessagePtr message, void* userData)
```

****描述****

处理HTML发送过来的Post Message数据。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件名称。 |
| const [ArkWeb\_WebMessagePortPtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h) port | Post Message端口。 |
| const [ArkWeb\_WebMessagePtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessage8h/capi-web-arkweb-webmessage8h) message | Post Message数据。 |
| void\* userData | 用户自定义数据。 |
