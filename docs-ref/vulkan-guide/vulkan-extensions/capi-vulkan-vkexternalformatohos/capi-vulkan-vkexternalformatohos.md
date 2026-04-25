---
title: "VkExternalFormatOHOS"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-vkexternalformatohos
kit: 标准库
last_updated: "2026-04-22"
slug: capi-vulkan-vkexternalformatohos
---

# VkExternalFormatOHOS

```
typedef struct VkExternalFormatOHOS {...} VkExternalFormatOHOS
```

## 概述

表示外部定义的格式标识符。

****起始版本：**** 10

****相关模块：**** [Vulkan](/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan)

****所在头文件：**** [vulkan\_ohos.h](/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK\_STRUCTURE\_TYPE\_EXTERNAL\_FORMAT\_OHOS。 |
| void\* pNext | pNext为空或者下一级结构体指针。 |
| uint64\_t externalFormat | 外部定义的格式标识符。 |
