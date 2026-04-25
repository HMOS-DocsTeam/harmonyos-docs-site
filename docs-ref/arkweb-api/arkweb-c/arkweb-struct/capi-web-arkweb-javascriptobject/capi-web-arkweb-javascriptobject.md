---
title: "ArkWeb_JavaScriptObject"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-javascriptobject
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-web-arkweb-javascriptobject
---

# ArkWeb\_JavaScriptObject

```
typedef struct {...} ArkWeb_JavaScriptObject
```

## 概述

注入的JavaScript结构体。

****起始版本：**** 12

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

****所在头文件：**** [arkweb\_type.h](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const uint8\_t\* buffer | 注入的JavaScript代码。 |
| size\_t size | JavaScript代码长度。 |
| [ArkWeb\_OnJavaScriptCallback](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#arkweb_onjavascriptcallback) callback | JavaScript执行完成的回调。 |
| void\* userData | 需要在回调中携带的自定义数据。 |
