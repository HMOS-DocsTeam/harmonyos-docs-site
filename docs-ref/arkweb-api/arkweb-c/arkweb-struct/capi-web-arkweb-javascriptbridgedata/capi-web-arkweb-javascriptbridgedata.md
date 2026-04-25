---
title: "ArkWeb_JavaScriptBridgeData"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-javascriptbridgedata
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-web-arkweb-javascriptbridgedata
---

# ArkWeb\_JavaScriptBridgeData

```
typedef struct {...} ArkWeb_JavaScriptBridgeData
```

## 概述

定义JavaScript Bridge数据的基础结构。

****起始版本：**** 12

****相关模块：**** [Web](/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web)

****所在头文件：**** [arkweb\_type.h](/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const uint8\_t\* buffer | 指向传输数据的指针。仅支持前端传入String和ArrayBuffer类型，其余类型会被json序列化后，以String类型传递。 |
| size\_t size | 传输数据的长度。 |
