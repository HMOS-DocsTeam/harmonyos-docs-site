---
title: "ArkWeb_ProxyMethodWithResult"
sidebar_position: 15
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-proxymethodwithresult
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-web-arkweb-proxymethodwithresult
---

# ArkWeb\_ProxyMethodWithResult

```
typedef struct {...} ArkWeb_ProxyMethodWithResult
```

## 概述

注入的Proxy方法通用结构体。

****起始版本：**** 18

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

****所在头文件：**** [arkweb\_type.h](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* methodName | 注入的方法名。 |
| [ArkWeb\_OnJavaScriptProxyCallbackWithResult](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#arkweb_onjavascriptproxycallbackwithresult) callback | Proxy方法执行的回调。 |
| void\* userData | 需要在回调中携带的自定义数据。 |
