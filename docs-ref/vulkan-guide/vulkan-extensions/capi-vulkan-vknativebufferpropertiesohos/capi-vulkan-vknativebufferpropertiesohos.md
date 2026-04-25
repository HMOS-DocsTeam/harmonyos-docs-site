---
title: "VkNativeBufferPropertiesOHOS"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vknativebufferpropertiesohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vknativebufferpropertiesohos
---

# VkNativeBufferPropertiesOHOS

```
typedef struct VkNativeBufferPropertiesOHOS {...} VkNativeBufferPropertiesOHOS
```

## 概述

包含了NativeBuffer的属性。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| void\* pNext | 下一级结构体指针。 |
| VkDeviceSize allocationSize | 占用的内存大小。 |
| uint32\_t memoryTypeBits | 内存类型。 |
