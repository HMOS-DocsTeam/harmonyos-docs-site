---
title: "VkSwapchainImageCreateInfoOHOS"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vkswapchainimagecreateinfoohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vkswapchainimagecreateinfoohos
---

# VkSwapchainImageCreateInfoOHOS

```
typedef struct VkSwapchainImageCreateInfoOHOS {...} VkSwapchainImageCreateInfoOHOS
```

## 概述

包含创建Image时必要的参数。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| const void\* pNext | 下一级结构体指针，pNext为空或者下一级结构体指针。 |
| VkSwapchainImageUsageFlagsOHOS usage | 交换链图像的使用标志。 |
