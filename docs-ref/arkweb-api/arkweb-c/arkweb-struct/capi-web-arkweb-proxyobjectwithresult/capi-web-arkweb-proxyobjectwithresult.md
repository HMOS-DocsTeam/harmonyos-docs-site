---
title: "ArkWeb_ProxyObjectWithResult"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-proxyobjectwithresult
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-web-arkweb-proxyobjectwithresult
---

# ArkWeb\_ProxyObjectWithResult

```
typedef struct {...} ArkWeb_ProxyObjectWithResult
```

## 概述

注入的Proxy对象通用结构体。

****起始版本：**** 18

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

****所在头文件：**** [arkweb\_type.h](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* objName | 注入的对象名。 |
| const [ArkWeb\_ProxyMethodWithResult](/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxymethodwithresult/capi-web-arkweb-proxymethodwithresult)\* methodList | 注入的对象携带的方法结构体数组。 |
| size\_t size | 方法结构体数组的长度。 |
