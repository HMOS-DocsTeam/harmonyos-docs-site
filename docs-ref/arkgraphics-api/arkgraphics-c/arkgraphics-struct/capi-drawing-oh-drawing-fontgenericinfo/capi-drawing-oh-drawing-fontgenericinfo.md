---
title: "OH_Drawing_FontGenericInfo"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontgenericinfo
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-fontgenericinfo
---

# OH\_Drawing\_FontGenericInfo

```
typedef struct OH_Drawing_FontGenericInfo {...} OH_Drawing_FontGenericInfo
```

## 概述

系统所支持的通用字体集信息结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* familyName | 字体家族名。 |
| size\_t aliasInfoSize | 别名字体列表的数量。 |
| size\_t adjustInfoSize | 字重映射列表的数量。 |
| [OH\_Drawing\_FontAliasInfo](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontaliasinfo/capi-drawing-oh-drawing-fontaliasinfo)\* aliasInfoSet | 别名字体列表。 |
| [OH\_Drawing\_FontAdjustInfo](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-fontadjustinfo/capi-drawing-oh-drawing-fontadjustinfo)\* adjustInfoSet | 字重映射列表。 |
