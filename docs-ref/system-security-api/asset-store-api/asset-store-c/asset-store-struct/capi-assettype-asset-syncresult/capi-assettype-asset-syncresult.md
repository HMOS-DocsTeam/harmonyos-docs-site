---
title: "Asset_SyncResult"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-syncresult
kit: 系统
last_updated: "2026-04-22"
slug: capi-assettype-asset-syncresult
---

# Asset\_SyncResult

```
typedef struct {...} Asset_SyncResult
```

## 概述

关键资产同步结果。

****起始版本：**** 20

****相关模块：**** [AssetType](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype)

****所在头文件：**** [asset\_type.h](/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t resultCode | 关键资产同步的结果码。 |
| uint32\_t totalCount | 触发同步的关键资产总数。 |
| uint32\_t failedCount | 关键资产同步失败的数量。 |
