---
title: "Asset_ResultSet"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-resultset
kit: 系统
last_updated: "2026-04-22"
slug: capi-assettype-asset-resultset
---

# Asset\_ResultSet

```
typedef struct {...} Asset_ResultSet
```

## 概述

关键资产查询结果集合，用于定义多条关键资产。

****起始版本：**** 11

****相关模块：**** [AssetType](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype)

****所在头文件：**** [asset\_type.h](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t count | 关键资产的条数。 |
| [Asset\_Result](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-result/capi-assettype-asset-result) \*results | 指向关键资产数组的指针。 |
