---
title: "ABR_CameraData"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data
kit: 图形
last_updated: "2026-04-22"
slug: x_a_b_r___camera_data
---

# ABR\_CameraData

## 概述

此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [abr\_base.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/abr__base_8h/abr__base_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [ABR\_Vector3](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___vector3/x_a_b_r___vector3) [rotation](#rotation) | 相机变换的世界空间旋转欧拉角。取值范围：[0, 360]，参数不在范围内会返回ABR\_INVALID\_PARAMETER错误码。 |
| [ABR\_Vector3](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_a_b_r___vector3/x_a_b_r___vector3) [position](#position) | 相机变换的世界空间位移。 |

## 结构体成员变量说明

### position

```
ABR_Vector3 ABR_CameraData::position
```

****描述****

相机变换的世界空间位移。

### rotation

```
ABR_Vector3 ABR_CameraData::rotation
```

****描述****

相机变换的世界空间旋转欧拉角。取值范围：[0, 360]，参数不在范围内会返回ABR\_INVALID\_PARAMETER错误码。
