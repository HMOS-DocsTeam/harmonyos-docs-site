---
title: "Rcp_Credential"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___credential
kit: 系统
last_updated: "2026-04-22"
slug: x_rcp___credential
---

# Rcp\_Credential

## 概述

服务器身份验证中使用的身份验证凭据，包括用户名和密码。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char \* [username](#username) | 凭据的用户名。默认值为""。 |
| char \* [password](#password) | 凭据的密码。默认值为""。 |

## 结构体成员变量说明

### password

```
char* Rcp_Credential::password
```

****描述****

凭据的密码。默认值为""。

### username

```
char* Rcp_Credential::username
```

****描述****

凭据的用户名。默认值为""。
