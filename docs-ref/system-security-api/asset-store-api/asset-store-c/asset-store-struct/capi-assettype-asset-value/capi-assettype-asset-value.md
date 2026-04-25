---
title: "Asset_Value"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-value
kit: 系统
last_updated: "2026-04-22"
slug: capi-assettype-asset-value
---

# Asset\_Value

```
typedef union {...} Asset_Value
```

## 概述

关键资产属性内容。

****起始版本：**** 11

****相关模块：**** [AssetType](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype)

****所在头文件：**** [asset\_type.h](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| bool boolean | 该字段用于传入bool类型的关键资产。 |
| uint32\_t u32 | 该字段用于传入uint32类型的关键资产。 |
| [Asset\_Blob](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-blob/capi-assettype-asset-blob) blob | 该字段用于传入bytes类型的关键资产。 |
