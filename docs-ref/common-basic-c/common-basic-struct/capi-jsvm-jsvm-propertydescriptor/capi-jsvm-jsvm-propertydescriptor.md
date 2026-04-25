---
title: "JSVM_PropertyDescriptor"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-propertydescriptor
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-propertydescriptor
---

# JSVM\_PropertyDescriptor

```
typedef struct {...} JSVM_PropertyDescriptor
```

## 概述

属性描述符。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* utf8name | 描述属性键值的可选字符串，UTF-8编码。必须为属性提供utf8name或name之一。 |
| [JSVM\_Value](/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h) name | 可选的JSVM\_Value，指向用作属性键的JavaScript字符串或符号。必须为属性提供utf8name或name之一。 |
| [JSVM\_Callback](/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h) method | 设置此项使属性描述符对象的value属性成为method表示的JavaScript函数。 |
| [JSVM\_Callback](/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h) getter | 执行对属性的获取访问时调用的函数。 |
| [JSVM\_Callback](/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-callbackstruct8h/capi-jsvm-jsvm-callbackstruct8h) setter | 执行属性的设置访问时调用的函数。 |
| [JSVM\_Value](/ref/common-basic-c/common-basic-struct/capi-jsvm-jsvm-value--8h/capi-jsvm-jsvm-value--8h) value | 如果属性是数据属性，则通过属性的get访问检索到的值。 |
| [JSVM\_PropertyAttributes](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h#jsvm_propertyattributes) attributes | 与特定属性关联的属性。 |
