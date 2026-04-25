---
title: "XEG_ExtensionProperties"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties
kit: 图形
last_updated: "2026-04-22"
slug: xengine-kit-xeg-extensionproperties
---

# XEG\_ExtensionProperties

## 概述

此结构体描述通过[HMS\_XEG\_EnumerateDeviceExtensionProperties](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。

****起始版本：**** 5.0.0(12)

****相关模块：**** [XEngine](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine)

****所在头文件：**** [xeg\_vulkan\_extension.h](/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-extension-8h/xengine-kit-xeg-vulkan-extension-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char [extensionName](#extensionname) [[XEG\_MAX\_EXTENSION\_NAME\_SIZE](/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_max_extension_name_size)] | XEngine支持的扩展特性名称。 |
| uint32\_t [version](#version) | XEngine支持的扩展特性版本号。 |

## 结构体成员变量说明

### extensionName

```
char XEG_ExtensionProperties::extensionName[XEG_MAX_EXTENSION_NAME_SIZE]
```

****描述****

XEngine支持的扩展特性名称。

### version

```
uint32_t XEG_ExtensionProperties::version
```

****描述****

XEngine支持的扩展特性版本号。
