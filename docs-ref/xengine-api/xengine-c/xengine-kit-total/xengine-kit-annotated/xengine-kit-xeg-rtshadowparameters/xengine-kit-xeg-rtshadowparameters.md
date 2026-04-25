---
title: "XEG_RTShadowParameters"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowparameters
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-rtshadowparameters
---

# XEG\_RTShadowParameters

## 概述

光线追踪阴影（Shadow）算法参数。

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_rt\_visible\_mask.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float [rayTMax](#raytmax) | 阴影光线的tMax值。 |
| float [rayTMin](#raytmin) | 阴影光线的tMin值。 |
| float [sunDirection](#sundirection) [3] | 方向光的方向。 |
| float [raySourceAngleInDegree](#raysourceangleindegree) = 0.0f | 沿光源方向进行阴影采样的角度范围，值越大，半影区域越大。此参数的值将被限制在[0.0, 90.0]范围内。默认值为0.0。 |
| uint32\_t [shadowCullMask](#shadowcullmask) = 0x5FF | 配置光线查询[rayQueryInitializeEXT](https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt)函数中的rayFlags和cullMask参数，高24bit表示rayFlags，低8bit表示cullMask。 默认值为0x5FF，即 ((gl\_RayFlagsOpaqueEXT | gl\_RayFlagsTerminateOnFirstHitEXT) << 8) | 0xFF。 |
| float [shadowCullDistance](#shadowculldistance) | 阴影剔除的世界空间距离，场景中像素超过此距离时不计算阴影，必须大于0。 |
| uint32\_t [rayPerPixel](#rayperpixel) = 1 | 每像素采样数，当前仅支持1spp。默认值为1。 |

## 结构体成员变量说明

### rayPerPixel

```
uint32_t XEG_RTShadowParameters::rayPerPixel = 1
```

****描述****

每像素采样数，当前仅支持1spp。默认值为1。

### raySourceAngleInDegree

```
float XEG_RTShadowParameters::raySourceAngleInDegree = 0.0f
```

****描述****

沿光源方向进行阴影采样的角度范围，值越大，半影区域越大。此参数的值将被限制在[0.0, 90.0]范围内。默认值为0.0。

### rayTMax

```
float XEG_RTShadowParameters::rayTMax
```

****描述****

阴影光线的tMax值。

### rayTMin

```
float XEG_RTShadowParameters::rayTMin
```

****描述****

阴影光线的tMin值。

### shadowCullDistance

```
float XEG_RTShadowParameters::shadowCullDistance
```

****描述****

阴影剔除的世界空间距离，场景中像素超过此距离时不计算阴影，必须大于0。

### shadowCullMask

```
uint32_t XEG_RTShadowParameters::shadowCullMask = 0x5FF
```

****描述****

配置光线查询[rayQueryInitializeEXT](https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt)函数中的rayFlags和cullMask参数，高24bit表示rayFlags，低8bit表示cullMask。 默认值为0x5FF，即 ((gl\_RayFlagsOpaqueEXT | gl\_RayFlagsTerminateOnFirstHitEXT) << 8) | 0xFF。

### sunDirection

```
float XEG_RTShadowParameters::sunDirection[3]
```

****描述****

方向光的方向。
