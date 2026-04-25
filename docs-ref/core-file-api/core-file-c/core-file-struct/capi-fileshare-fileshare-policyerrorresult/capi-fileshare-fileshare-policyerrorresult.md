---
title: "FileShare_PolicyErrorResult"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fileshare-fileshare-policyerrorresult
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-fileshare-fileshare-policyerrorresult
---

# FileShare\_PolicyErrorResult

```
typedef struct FileShare_PolicyErrorResult {...} FileShare_PolicyErrorResult
```

## 概述

授予或使能权限失败的URI策略结果。

****起始版本：**** 12

****相关模块：**** [fileShare](/ref/core-file-api/core-file-c/core-file-module/capi-fileshare/capi-fileshare)

****所在头文件：**** [oh\_file\_share.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*uri | 授予或使能策略失败的URI。 |
| [FileShare\_PolicyErrorCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h#fileshare_policyerrorcode) code | 授予或使能策略失败的URI对应的错误码。 |
| char \*message | 授予或使能策略失败的URI对应的原因。 |
