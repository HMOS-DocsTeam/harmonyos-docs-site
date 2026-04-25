---
title: "OH_Drawing_FontDescriptor"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontdescriptor
kit: 图形
last_updated: "2026-04-22"
slug: capi-drawing-oh-drawing-fontdescriptor
---

# OH\_Drawing\_FontDescriptor

```
typedef struct OH_Drawing_FontDescriptor {...} OH_Drawing_FontDescriptor
```

## 概述

描述系统字体详细信息的结构体。

****起始版本：**** 12

****相关模块：**** [Drawing](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing)

****所在头文件：**** [drawing\_text\_typography.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* path | 系统字体的文件路径。 |
| char\* postScriptName | 唯一标识字体的名称。 |
| char\* fullName | 系统字体的名称。 |
| char\* fontFamily | 系统字体的字体家族。 |
| char\* fontSubfamily | 系统字体的子字体家族。 |
| int weight | 系统字体的粗细程度。 |
| int width | 系统字体的宽窄风格属性。 |
| int italic | 系统字体倾斜度。 |
| bool monoSpace | 系统字体是否紧凑。true表示字体紧凑，false表示字体非紧凑。 |
| bool symbolic | 系统字体是否支持符号字体。true表示支持符号字体，false表示不支持符号字体。 |
