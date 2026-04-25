---
title: "Asset_Attr"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-attr
kit: 系统
last_updated: "2026-04-22"
slug: capi-assettype-asset-attr
---

# Asset\_Attr

```
typedef struct {...} Asset_Attr
```

## 概述

关键资产属性。

****起始版本：**** 11

****相关模块：**** [AssetType](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype)

****所在头文件：**** [asset\_type.h](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t tag | 关键资产属性名称。 |
| [Asset\_Value](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-value/capi-assettype-asset-value) value | 关键资产属性内容。 |
