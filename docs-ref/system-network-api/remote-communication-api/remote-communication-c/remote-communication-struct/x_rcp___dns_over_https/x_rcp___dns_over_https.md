---
title: "Rcp_DnsOverHttps"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_over_https
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___dns_over_https
---

# Rcp\_DnsOverHttps

## 概述

HTTPS上的DNS配置如果设置，则首选由DOH dns服务器解析的地址。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \* [url](#url) | DOH服务器的URL。 |
| bool [skipCertificatesValidation](#skipcertificatesvalidation) | 判断是否跳过证书验证。默认值为false。 |

## 结构体成员变量说明

### skipCertificatesValidation

```
bool Rcp_DnsOverHttps::skipCertificatesValidation
```

****描述****

判断是否跳过证书验证。默认值为false。

### url

```
const char* Rcp_DnsOverHttps::url
```

****描述****

DOH服务器的URL。
