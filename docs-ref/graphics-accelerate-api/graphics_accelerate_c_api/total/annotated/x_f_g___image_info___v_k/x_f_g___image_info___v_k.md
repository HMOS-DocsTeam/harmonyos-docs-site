---
title: "FG_ImageInfo_VK"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_info___v_k
kit: 图形
last_updated: "2026-04-22"
slug: x_f_g___image_info___v_k
---

# FG\_ImageInfo\_VK

## 概述

此结构体描述超帧输入输出图像信息。

****起始版本：**** 5.0.0(12)

****相关模块：**** [GraphicsAccelerate](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate)

****所在头文件：**** [frame\_generation\_vk.h](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [FG\_Image\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_image_vk)\* [image](#image) | 超帧输入输出图像结构体[FG\_Image\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_image_vk)对象的指针，该图像实例需要通过[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)进行创建，通过[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)进行销毁。 |
| [FG\_ImageSync\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_sync___v_k/x_f_g___image_sync___v_k) [initialSync](#initialsync) | [HMS\_FG\_Dispatch\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk)执行前，该图像的同步状态。 |
| [FG\_ImageSync\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_sync___v_k/x_f_g___image_sync___v_k) [finalSync](#finalsync) | [HMS\_FG\_Dispatch\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk)执行后，该图像的同步状态。 |

## 结构体成员变量说明

### finalSync

```
FG_ImageSync_VK FG_ImageInfo_VK::finalSync
```

****描述****

[HMS\_FG\_Dispatch\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk)执行后，该图像的同步状态。

### image

```
FG_Image_VK* FG_ImageInfo_VK::image
```

****描述****

超帧输入输出图像结构体[FG\_Image\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_image_vk)对象的指针，该图像实例需要通过[HMS\_FG\_CreateImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_createimage_vk)进行创建，通过[HMS\_FG\_DestroyImage\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_destroyimage_vk)进行销毁。

### initialSync

```
FG_ImageSync_VK FG_ImageInfo_VK::initialSync
```

****描述****

[HMS\_FG\_Dispatch\_VK](/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_vk)执行前，该图像的同步状态。
