---
title: "OH_Drawing_String"
sidebar_position: 32
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-string
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-string
---

# OH\_Drawing\_String

```
typedef struct {...} OH_Drawing_String
```

## 概述

采用UTF-16编码的字符串信息结构体。

****起始版本：**** 14

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_types.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-types-h/capi-drawing-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint8\_t\* strData | 指向包含UTF-16编码的字节数组的指针。 |
| uint32\_t strLen | strData指向的字符串的实际长度，单位为字节。 |
