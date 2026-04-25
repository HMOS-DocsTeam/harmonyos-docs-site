---
title: "Asset_Blob"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-blob
kit: 系统
last_updated: "2026-04-22"
slug: capi-assettype-asset-blob
---

# Asset\_Blob

```
typedef struct {...} Asset_Blob
```

## 概述

二进制数组类型，即不定长的字节数组。

****起始版本：**** 11

****相关模块：**** [AssetType](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype)

****所在头文件：**** [asset\_type.h](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t size | 表示字节数组的大小。 |
| uint8\_t \*data | 指向字节数组的指针。 |
