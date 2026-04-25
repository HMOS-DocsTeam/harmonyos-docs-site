---
title: "Asset_Result"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-result
kit: 系统
last_updated: "2026-04-22"
slug: capi-assettype-asset-result
---

# Asset\_Result

```
typedef struct {...} Asset_Result
```

## 概述

关键资产查询结果，用于定义一条关键资产。

****起始版本：**** 11

****相关模块：**** [AssetType](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype)

****所在头文件：**** [asset\_type.h](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t count | 关键资产属性的个数。 |
| [Asset\_Attr](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr) \*attrs | 指向关键资产属性数组的指针。 |
