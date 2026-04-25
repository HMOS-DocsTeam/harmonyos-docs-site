---
title: "AREngine_ClipPlaneDistance"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-clipplanedistance
kit: 图形
last_updated: "2026-04-22"
slug: arengine-struct-clipplanedistance
---

# AREngine\_ClipPlaneDistance

## 概述

裁剪平面距离数据。

作为[HMS\_AREngine\_ARCamera\_GetProjectionMatrix](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getprojectionmatrix)接口输入。

****起始版本：**** 5.0.0(12)

****相关模块：**** [AR Engine](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine)

****所在头文件：**** [ar\_engine\_core.h](/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float [near](#near) | OpenGL近裁剪平面距离，以m为单位。 |
| float [far](#far) | OpenGL远裁剪平面距离，以m为单位。 |

## 结构体成员变量说明

### far

```
float AREngine_ClipPlaneDistance::far
```

****描述****

OpenGL远裁剪平面距离，以m为单位。

### near

```
float AREngine_ClipPlaneDistance::near
```

****描述****

OpenGL近裁剪平面距离，以m为单位。
