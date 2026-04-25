---
title: "OH_CM_CredentialDetailList"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-certmanagertype-oh-cm-credentialdetaillist
kit: 系统
last_updated: "2026-04-22"
slug: capi-certmanagertype-oh-cm-credentialdetaillist
---

# OH\_CM\_CredentialDetailList

```
typedef struct {...} OH_CM_CredentialDetailList
```

## 概述

定义证书凭据详情列表的结构体类型。

****起始版本：**** 22

****相关模块：**** [CertManagerType](/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-module/capi-certmanagertype/capi-certmanagertype)

****所在头文件：**** [cm\_native\_type.h](/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-headerfile/capi-cm-native-type-h/capi-cm-native-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t credentialCount | 表示证书凭据详情的个数。 |
| [OH\_CM\_Credential](/ref/system-security-api/device-certificate-api/device-certificate-c/device-certificate-struct/capi-certmanagertype-oh-cm-credential/capi-certmanagertype-oh-cm-credential) \*credential | 表示证书凭据详情列表。 |
