---
title: "VkNativeBufferUsageOHOS"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vknativebufferusageohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vknativebufferusageohos
---

# VkNativeBufferUsageOHOS

```
typedef struct VkNativeBufferUsageOHOS {...} VkNativeBufferUsageOHOS
```

## 概述

提供HarmonyOS NativeBuffer用途的说明。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK\_STRUCTURE\_TYPE\_NATIVE\_BUFFER\_USAGE\_OHOS。 |
| void\* pNext | 下一级结构体指针。 |
| uint64\_t OHOSNativeBufferUsage | NativeBuffer的用途说明。 |
