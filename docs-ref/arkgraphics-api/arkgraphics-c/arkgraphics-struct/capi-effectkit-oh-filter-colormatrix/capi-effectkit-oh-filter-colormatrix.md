---
title: "OH_Filter_ColorMatrix"
sidebar_position: 33
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-effectkit-oh-filter-colormatrix
kit: 图形
last_updated: "2026-04-22"
slug: capi-effectkit-oh-filter-colormatrix
---

# OH\_Filter\_ColorMatrix

```
struct OH_Filter_ColorMatrix {...}
```

## 概述

定义一个用来创建滤镜效果的矩阵。

****起始版本：**** 12

****相关模块：**** [effectKit](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-effectkit/capi-effectkit)

****所在头文件：**** [effect\_types.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-effect-types-h/capi-effect-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float val[20] | 自定义颜色矩阵，值是一个5\*4的数组。 |
