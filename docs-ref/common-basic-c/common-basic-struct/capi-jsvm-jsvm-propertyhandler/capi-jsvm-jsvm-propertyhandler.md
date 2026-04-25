---
title: "JSVM_PropertyHandler"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-propertyhandler
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-propertyhandler
---

# JSVM\_PropertyHandler

```
typedef struct {...} JSVM_PropertyHandler
```

## 概述

包含将class作为函数进行调用时所触发的回调函数的函数指针，以及访问实例对象属性时触发的回调函数的函数指针集。

****起始版本：**** 18

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [JSVM\_PropertyHandlerCfg](/ref/common-basic-c/common-basic-struct/api-jsvm-jsvm-propertyhandlerconfigurationstruct8h/api-jsvm-jsvm-propertyhandlerconfigurationstruct8h) propertyHandlerCfg | 访问实例对象属性触发相应的回调函数。 |
| [JSVM\_Callback](/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h) callAsFunctionCallback | 实例对象作为函数调用将触发此回调。 |
