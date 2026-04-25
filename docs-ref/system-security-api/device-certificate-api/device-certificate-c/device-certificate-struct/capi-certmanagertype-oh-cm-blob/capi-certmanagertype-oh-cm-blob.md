---
title: "OH_CM_Blob"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-certmanagertype-oh-cm-blob
kit: 系统
last_updated: "2026-04-22"
slug: capi-certmanagertype-oh-cm-blob
---

# OH\_CM\_Blob

```
typedef struct {...} OH_CM_Blob
```

## 概述

定义存放数据的结构体类型。

****起始版本：**** 22

****相关模块：**** [CertManagerType](/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-module/capi-certmanagertype/capi-certmanagertype)

****所在头文件：**** [cm\_native\_type.h](/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t size | 数据大小。 |
| uint8\_t \*data | 指向数据内存的指针。 |
