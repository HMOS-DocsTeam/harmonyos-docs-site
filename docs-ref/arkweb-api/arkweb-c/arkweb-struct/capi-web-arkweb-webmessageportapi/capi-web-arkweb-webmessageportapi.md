---
title: "ArkWeb_WebMessagePortAPI"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageportapi
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-web-arkweb-webmessageportapi
---

# ArkWeb\_WebMessagePortAPI

```
typedef struct {...} ArkWeb_WebMessagePortAPI
```

## 概述

Post Message相关的Native API结构体。在调用接口前建议通过[ARKWEB\_MEMBER\_MISSING](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#宏定义)校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessagePort相关接口需在UI线程中调用OH\_ArkWeb\_GetNativeAPI方法获取。

****起始版本：**** 12

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

****所在头文件：**** [arkweb\_type.h](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| size\_t size | 结构体的大小。 |

### 成员函数

| 名称 | 描述 |
| --- | --- |
| [ArkWeb\_ErrorCode (\*postMessage)(const ArkWeb\_WebMessagePortPtr webMessagePort, const char\* webTag, const ArkWeb\_WebMessagePtr webMessage)](#postmessage) | 发送消息到HTML。 |
| [void (\*close)(const ArkWeb\_WebMessagePortPtr webMessagePort, const char\* webTag)](#close) | 关闭消息端口。 |
| [void (\*setMessageEventHandler)(const ArkWeb\_WebMessagePortPtr webMessagePort, const char\* webTag, ArkWeb\_OnMessageEventHandler messageEventHandler, void\* userData)](#setmessageeventhandler) | 设置接收HTML消息的回调。 |

## 成员函数说明

### postMessage()

```
ArkWeb_ErrorCode (*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage)
```

****描述：****

发送消息到HTML。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [ArkWeb\_WebMessagePortPtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h) webMessagePort | Post Message端口结构体指针。 |
| const char\* webTag | Web组件名称。 |
| const [ArkWeb\_WebMessagePtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessage8h/capi-web-arkweb-webmessage8h) webMessage | 需要发送的消息。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [ArkWeb\_ErrorCode](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode) | [ARKWEB\_SUCCESS](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode) 执行成功。  [ARKWEB\_INVALID\_PARAM](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode) 参数无效。  [ARKWEB\_INIT\_ERROR](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode) 初始化失败，没有找到与webTag绑定的Web组件。 |

### close()

```
void (*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag)
```

****描述：****

关闭消息端口。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [ArkWeb\_WebMessagePortPtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h) webMessagePort | Post Message端口结构体指针。 |
| const char\* webTag | Web组件名称。 |

### setMessageEventHandler()

```
void (*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag,
        ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)
```

****描述：****

设置接收HTML消息的回调。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [ArkWeb\_WebMessagePortPtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h) webMessagePort | Post Message端口结构体指针。 |
| const char\* webTag | Web组件名称。 |
| [ArkWeb\_OnMessageEventHandler](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#arkweb_onmessageeventhandler) messageEventHandler | 处理消息的回调。 |
| void\* userData | 用户自定义数据。 |
