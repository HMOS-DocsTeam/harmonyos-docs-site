---
title: "XEG_RTReflectionCreateInfo"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-rtreflectioncreateinfo
---

# XEG\_RTReflectionCreateInfo

## 概述

此结构体描述创建[XEG\_RTReflection](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtreflection)对象的信息。当结构体中的信息变化时，需要创建新的[XEG\_RTReflection](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtreflection)对象。

****起始版本：**** 6.0.0(20)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_rt\_reflection.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-reflection-8h/xengine-kit-xeg-vulkan-rt-reflection-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| XEG\_StructureType [sType](#stype) | 识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_RT\_REFLECTION\_CREATE\_INFO。 |
| const void \* [pNext](#pnext) | 指向扩展结构的指针。 |
| VkExtent2D [renderSize](#rendersize) | 输入图像的尺寸。 |
| bool [enableFastTrace](#enablefasttrace) | 是否开启快速求交模式，相较常规求交模式，快速求交模式的性能更好。true表示开启快速求交模式，false表示使用常规求交模式。 |

## 结构体成员变量说明

### enableFastTrace

```
bool XEG_RTReflectionCreateInfo::enableFastTrace
```

****描述****

是否开启快速求交模式，相较常规求交模式，快速求交模式的性能更好。true表示开启快速求交模式，false表示使用常规求交模式。

### pNext

```
const void* XEG_RTReflectionCreateInfo::pNext
```

****描述****

指向扩展结构的指针。

### renderSize

```
VkExtent2D XEG_RTReflectionCreateInfo::renderSize
```

****描述****

输入图像的尺寸。

### sType

```
XEG_StructureType XEG_RTReflectionCreateInfo::sType
```

****描述****

识别此结构的[XEG\_StructureType](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype)值，必须是XEG\_STRUCTURE\_TYPE\_RT\_REFLECTION\_CREATE\_INFO。
