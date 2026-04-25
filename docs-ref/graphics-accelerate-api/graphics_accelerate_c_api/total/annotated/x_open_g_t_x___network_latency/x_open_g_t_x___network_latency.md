---
title: "OpenGTX_NetworkLatency"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_latency
kit: 图形
last_updated: "2026-04-22"
slug: x_open_g_t_x___network_latency
---

# OpenGTX\_NetworkLatency

## 概述

此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [opengtx\_base.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t [total](#total) | 游戏的总延迟，以ms为单位，取值范围[0,200]。 |
| int32\_t [up](#up) | 游戏上行时延，以ms为单位，取值范围[0,200]。 |
| int32\_t [down](#down) | 游戏下行时延，以ms为单位，取值范围[0,200]。 |

## 结构体成员变量说明

### down

```
int32_t OpenGTX_NetworkLatency::down
```

****描述****

游戏下行时延，以ms为单位，取值范围[0,200]。

### total

```
int32_t OpenGTX_NetworkLatency::total
```

****描述****

游戏的总延迟，以ms为单位，取值范围[0,200]。

### up

```
int32_t OpenGTX_NetworkLatency::up
```

****描述****

游戏上行时延，以ms为单位，取值范围[0,200]。
