---
title: "VkNativeBufferOHOS"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vknativebufferohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vknativebufferohos
---

# VkNativeBufferOHOS

```
typedef struct VkNativeBufferOHOS {...} VkNativeBufferOHOS
```

## 概述

包含本地显存的参数。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| const void\* pNext | 下一级结构体指针，pNext为空或者下一级结构体指针。 |
| struct [OHBufferHandle\*](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohbufferhandle/capi-vulkan-ohbufferhandle) handle | 显存句柄。 |
