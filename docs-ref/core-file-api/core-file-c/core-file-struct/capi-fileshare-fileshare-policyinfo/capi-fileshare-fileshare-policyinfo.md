---
title: "FileShare_PolicyInfo"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fileshare-fileshare-policyinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-fileshare-fileshare-policyinfo
---

# FileShare\_PolicyInfo

```
typedef struct FileShare_PolicyInfo {...} FileShare_PolicyInfo
```

## 概述

需要授予或使能权限URI的策略信息。

****起始版本：**** 12

****相关模块：**** [fileShare](/ref/core-file-api/core-file-c/core-file-module/capi-fileshare/capi-fileshare)

****所在头文件：**** [oh\_file\_share.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \*uri | 需要授予或使能权限的URI。 |
| unsigned int length | URI的字节长度。 |
| unsigned int operationMode | 授予或使能权限的URI访问模式。  示例：FileShare\_OperationMode.READ\_MODE 、 FileShare\_OperationMode.WRITE\_MODE  或者 FileShare\_OperationMode.READ\_MODE|FileShare\_OperationMode.WRITE\_MODE。 |
