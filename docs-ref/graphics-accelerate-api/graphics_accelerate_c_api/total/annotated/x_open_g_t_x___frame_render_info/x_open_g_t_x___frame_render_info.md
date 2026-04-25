---
title: "OpenGTX_FrameRenderInfo"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info
kit: 图形
last_updated: "2026-04-22"
slug: x_open_g_t_x___frame_render_info
---

# OpenGTX\_FrameRenderInfo

## 概述

此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [opengtx\_base.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/opengtx__base_8h/opengtx__base_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OpenGTX\_Vector3](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___vector3/x_open_g_t_x___vector3) [mainCameraPosition](#maincameraposition) | 主摄像头的位置。x, y, z的取值范围[-360,360]。 |
| [OpenGTX\_Vector3](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___vector3/x_open_g_t_x___vector3) [mainCameraRotate](#maincamerarotate) | 主摄像头的转动，包括偏航、俯仰、侧滚。 x, y, z的取值范围[-360,360]。 |

## 结构体成员变量说明

### mainCameraPosition

```
OpenGTX_Vector3 OpenGTX_FrameRenderInfo::mainCameraPosition
```

****描述****

主摄像头的位置。

### mainCameraRotate

```
OpenGTX_Vector3 OpenGTX_FrameRenderInfo::mainCameraRotate
```

****描述****

主摄像头的转动，包括偏航、俯仰、侧滚。 x, y, z的取值范围[-360,360]。
