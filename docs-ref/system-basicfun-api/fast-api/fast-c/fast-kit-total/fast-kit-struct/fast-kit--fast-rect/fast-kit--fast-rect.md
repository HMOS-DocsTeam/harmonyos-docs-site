---
title: "FAST_Rect"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-rect
kit: 系统
last_updated: "2026-04-22"
slug: fast-kit--fast-rect
---

# FAST\_Rect

## 概述

定义矩形的数据结构（坐标系说明：X轴从左到右递增，Y轴从上到下递增）。

****系统能力：**** SystemCapability.FAST.Core

****起始版本：**** 6.0.2(22)

****相关模块：**** [FAST](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast)

****所在头文件：**** [fast\_solver\_rect\_partition.h](/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t [left](#left) | 横坐标左边界（）。 |
| int32\_t [top](#top) | 纵坐标上边界（）。 |
| int32\_t [right](#right) | 横坐标右边界（）。 |
| int32\_t [bottom](#bottom) | 纵坐标下边界（）。 |

## 结构体成员变量说明

### bottom

```
int32_t FAST_Rect::bottom
```

****描述****

纵坐标下边界。

### left

```
int32_t FAST_Rect::left
```

****描述****

横坐标左边界。

### right

```
int32_t FAST_Rect::right
```

****描述****

横坐标右边界。

### top

```
int32_t FAST_Rect::top
```

****描述****

纵坐标上边界。
