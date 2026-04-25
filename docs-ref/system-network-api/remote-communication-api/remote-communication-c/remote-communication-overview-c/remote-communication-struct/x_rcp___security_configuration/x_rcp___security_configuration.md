---
title: "Rcp_SecurityConfiguration"
sidebar_position: 37
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration
kit: 系统
last_updated: "2026-04-20"
slug: x_rcp___security_configuration
---

# Rcp\_SecurityConfiguration

## 概述

请求的安全配置。

****起始版本：**** 5.0.0(12)

****相关模块：**** [RemoteCommunication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview)

****所在头文件：**** [rcp.h](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp\_RemoteValidationType](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_remotevalidationtype)[remoteValidationType](#remotevalidationtype) | 远端认证方法类型。 |
| [Rcp\_CertificateAuthority](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___certificate_authority/x_rcp___certificate_authority)[certificateAuthority](#certificateauthority) | 用于验证远程服务器标识的证书颁发机构（CA）。默认值为“system”，如果未设置此字段，将使用system CA验证远程服务器的标识。 |
| [Rcp\_ClientCertificate](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___client_certificate/x_rcp___client_certificate)[certificate](#certificate) | 发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。 |
| [Rcp\_ServerAuthentication](/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication)[serverAuthentication](#serverauthentication) | 服务器身份验证设置。默认情况下不进行身份验证。 |

## 结构体成员变量说明

### certificate

```
Rcp_ClientCertificate Rcp_SecurityConfiguration::certificate
```

****描述****

发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。

### certificateAuthority

```
Rcp_CertificateAuthority Rcp_SecurityConfiguration::certificateAuthority
```

****描述****

用于验证远程服务器标识的证书颁发机构（CA）。默认值为“system”，如果未设置此字段，将使用system CA验证远程服务器的标识。

### remoteValidationType

```
Rcp_RemoteValidationType Rcp_SecurityConfiguration::remoteValidationType
```

****描述****

远端认证方法类型。

### serverAuthentication

```
Rcp_ServerAuthentication Rcp_SecurityConfiguration::serverAuthentication
```

****描述****

服务器身份验证设置。默认情况下不进行身份验证。
