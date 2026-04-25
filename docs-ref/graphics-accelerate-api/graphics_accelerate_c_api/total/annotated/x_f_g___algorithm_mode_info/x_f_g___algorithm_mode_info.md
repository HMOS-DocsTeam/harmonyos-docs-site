---
title: "FG_AlgorithmModeInfo"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___algorithm_mode_info
---

# FG\_AlgorithmModeInfo

## 概述

此结构体描述超帧算法模式信息。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_base.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__base_8h/frame__generation__base_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FG\_PredictionMode](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode-1) [predictionMode](#predictionmode) | 超帧预测算法模式，支持内插模式和外插模式。 |
| [FG\_MeMode](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_memode-1) [meMode](#memode) | 超帧运动估计算法模式，支持基础模式和增强模式。 |

## 结构体成员变量说明

### meMode

```
FG_MeMode FG_AlgorithmModeInfo::meMode
```

****描述****

超帧运动估计算法模式，支持基础模式和增强模式。

### predictionMode

```
FG_PredictionMode FG_AlgorithmModeInfo::predictionMode
```

****描述****

超帧预测算法模式，支持内插模式和外插模式。
