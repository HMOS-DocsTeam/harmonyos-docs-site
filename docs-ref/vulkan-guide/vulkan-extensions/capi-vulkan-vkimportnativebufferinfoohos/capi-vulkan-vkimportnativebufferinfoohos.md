---
title: "VkImportNativeBufferInfoOHOS"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vkimportnativebufferinfoohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vkimportnativebufferinfoohos
---

# VkImportNativeBufferInfoOHOS

```
typedef struct VkImportNativeBufferInfoOHOS {...} VkImportNativeBufferInfoOHOS
```

## 概述

包含了OH\_NativeBuffer结构体的指针。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| const void\* pNext | 下一级结构体指针。 |
| struct [OH\_NativeBuffer](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-oh-nativebuffer/capi-vulkan-oh-nativebuffer)\* buffer | OH\_NativeBuffer结构体的指针。 |
