---
title: "arkweb_interface.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-interface-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-arkweb-interface-h
---

# arkweb\_interface.h

## 概述

提供ArkWeb在Native侧获取API的接口，及基础Native API类型。

****引用文件：**** &lt;web/arkweb\_interface.h&gt;

****库：**** libohweb.so

****系统能力：**** SystemCapability.Web.Webview.Core

****起始版本：**** 12

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkWeb\_AnyNativeAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-anynativeapi/capi-web-arkweb-anynativeapi) | ArkWeb\_AnyNativeAPI | 定义基础Native API类型。 |

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkWeb\_NativeAPIVariantKind](#arkweb_nativeapivariantkind) | ArkWeb\_NativeAPIVariantKind | 定义Native API的类型枚举。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [ArkWeb\_AnyNativeAPI\* OH\_ArkWeb\_GetNativeAPI(ArkWeb\_NativeAPIVariantKind type)](#oh_arkweb_getnativeapi) | 根据传入的API类型，获取对应的Native API结构体。 |
| [bool OH\_ArkWeb\_RegisterScrollCallback(const char\* webTag, ArkWeb\_OnScrollCallback callback, void\* userData)](#oh_arkweb_registerscrollcallback) | 注册滚动事件回调。 |

## 枚举类型说明

### ArkWeb\_NativeAPIVariantKind

```
enum ArkWeb_NativeAPIVariantKind
```

****描述：****

定义Native API的类型枚举。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| ARKWEB\_NATIVE\_COMPONENT | component相关API类型。 |
| ARKWEB\_NATIVE\_CONTROLLER | controller相关API类型。 |
| ARKWEB\_NATIVE\_WEB\_MESSAGE\_PORT | webMessagePort相关API类型。 |
| ARKWEB\_NATIVE\_WEB\_MESSAGE | webMessage相关API类型。 |
| ARKWEB\_NATIVE\_COOKIE\_MANAGER | cookieManager相关API类型。 |
| ARKWEB\_NATIVE\_JAVASCRIPT\_VALUE | JavaScriptValue相关API类型。  ****起始版本：**** 18 |

## 函数说明

### OH\_ArkWeb\_GetNativeAPI()

```
ArkWeb_AnyNativeAPI* OH_ArkWeb_GetNativeAPI(ArkWeb_NativeAPIVariantKind type)
```

****描述：****

根据传入的API类型，获取对应的Native API结构体。

****系统能力：**** SystemCapability.Web.Webview.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkWeb\_NativeAPIVariantKind](#arkweb_nativeapivariantkind) type | ArkWeb支持的Native API类型。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [ArkWeb\_AnyNativeAPI](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-anynativeapi/capi-web-arkweb-anynativeapi)\* | 根据传入的API类型，返回对应的Native API结构体指针，结构体第一个成员为当前结构体的大小。 |

### OH\_ArkWeb\_RegisterScrollCallback()

```
bool OH_ArkWeb_RegisterScrollCallback(const char* webTag, ArkWeb_OnScrollCallback callback, void* userData)
```

****描述：****

注册组件滚动时的回调函数。

****系统能力：**** SystemCapability.Web.Webview.Core

****起始版本：**** 18

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const char\* webTag | Web组件的名称。 |
| [ArkWeb\_OnScrollCallback](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#arkweb_onscrollcallback) callback | 页面滚动时的回调函数。 |
| void\* userData | 用户自定义的数据。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| bool | 如果回调设置成功，则返回true，否则返回false。 |
