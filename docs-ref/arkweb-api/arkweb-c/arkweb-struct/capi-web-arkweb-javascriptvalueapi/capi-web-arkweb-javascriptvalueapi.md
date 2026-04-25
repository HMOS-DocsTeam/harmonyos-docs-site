---
title: "ArkWeb_JavaScriptValueAPI"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-javascriptvalueapi
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-web-arkweb-javascriptvalueapi
---

# ArkWeb\_JavaScriptValueAPI

```
typedef struct {...} ArkWeb_JavaScriptValueAPI
```

## 概述

定义了ArkWeb的JavaScriptValue接口。在调用接口之前，建议使用[ARKWEB\_MEMBER\_MISSING](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#宏定义)检查函数结构体是否有对应的函数指针，避免SDK与设备ROM不匹配导致崩溃。

****起始版本：**** 18

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
| [ArkWeb\_JavaScriptValuePtr (\*createJavaScriptValue)(ArkWeb\_JavaScriptValueType type, void\* data, size\_t dataLength)](#createjavascriptvalue) | 创建一个JavaScript值，用于返回给HTML。 |

## 成员函数说明

### createJavaScriptValue()

```
ArkWeb_JavaScriptValuePtr (*createJavaScriptValue)(ArkWeb_JavaScriptValueType type, void* data, size_t dataLength)
```

****描述：****

创建一个JavaScript值，用于返回给HTML。

****起始版本：**** 18

****参数：****

| 参数项 | 描述 |
| --- | --- |
| ArkWeb\_JavaScriptValueType type | JavaScript值的类型。 |
| void\* data | JavaScript值的数据缓冲区。 |
| size\_t dataLength | JavaScript值的缓冲区大小。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [ArkWeb\_JavaScriptValuePtr](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptvalue8h/capi-web-arkweb-javascriptvalue8h) | 创建出来的JavaScript值。 |
