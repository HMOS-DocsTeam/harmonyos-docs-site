---
title: "FG_ResolutionInfo"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___resolution_info
---

# FG\_ResolutionInfo

## 概述

此结构体描述超帧输入输出图像的分辨率。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_base.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__base_8h/frame__generation__base_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FG\_Dimension2D](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d) [inputColorResolution](#inputcolorresolution) | 真实渲染帧颜色缓冲区分辨率。 |
| [FG\_Dimension2D](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d) [inputDepthStencilResolution](#inputdepthstencilresolution) | 真实渲染帧深度模板缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为真实帧深度模板缓冲区分辨率。 |
| [FG\_Dimension2D](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d) [outputColorResolution](#outputcolorresolution) | 预测帧缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为预测帧缓冲区分辨率。 |

## 结构体成员变量说明

### inputColorResolution

```
FG_Dimension2D FG_ResolutionInfo::inputColorResolution
```

****描述****

真实渲染帧颜色缓冲区分辨率。

### inputDepthStencilResolution

```
FG_Dimension2D FG_ResolutionInfo::inputDepthStencilResolution
```

****描述****

真实渲染帧深度模板缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为真实帧深度模板缓冲区分辨率。

### outputColorResolution

```
FG_Dimension2D FG_ResolutionInfo::outputColorResolution
```

****描述****

预测帧缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为预测帧缓冲区分辨率。
