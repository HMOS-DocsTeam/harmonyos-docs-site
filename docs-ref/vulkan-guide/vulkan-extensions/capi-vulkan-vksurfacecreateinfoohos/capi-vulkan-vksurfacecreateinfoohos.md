---
title: "VkSurfaceCreateInfoOHOS"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vksurfacecreateinfoohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vksurfacecreateinfoohos
---

# VkSurfaceCreateInfoOHOS

```
typedef struct VkSurfaceCreateInfoOHOS {...} VkSurfaceCreateInfoOHOS
```

## 概述

包含创建Vulkan Surface时必要的参数。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK\_STRUCTURE\_TYPE\_SURFACE\_CREATE\_INFO\_OHOS。 |
| const void\* pNext | 下一级结构体指针，值必须为空。 |
| VkSurfaceCreateFlagsOHOS flags | 预留的标志类型参数，值必须为0。 |
| [OHNativeWindow](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-nativewindow/capi-vulkan-nativewindow)\* window | OHNativeWindow指针。 |
