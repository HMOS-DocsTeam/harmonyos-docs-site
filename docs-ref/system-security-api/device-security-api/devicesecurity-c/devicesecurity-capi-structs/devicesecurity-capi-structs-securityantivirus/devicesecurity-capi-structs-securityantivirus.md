---
title: "SecurityAntivirus_Antivirus"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityantivirus
kit: 系统
last_updated: "2026-04-22"
slug: devicesecurity-capi-structs-securityantivirus
---

# SecurityAntivirus\_Antivirus

## 概述

定义防病毒应用信息。

****起始版本：**** 6.0.0(20)

****相关模块：**** [SecurityAntivirus](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus)

****所在头文件：**** [security\_antivirus.h](/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-antivirus-8h/devicesecurity-capi-security-antivirus-8h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char \*[bundleName](#bundlename) | 防病毒应用包名 |
| const char \*[metadata](#metadata) | 防病毒应用信息（当前版本号、上次更新时间、病毒防护开关状态、用户ID） |

## 结构体成员变量说明

### bundleName

```
const char *SecurityAntivirus_Antivirus::bundleName
```

****描述****

防病毒应用包名，包名字段要求请参见[链接](/development-fundamentals/application-configuration-file-stage/app-configuration-file)。

### metadata

```
const char *SecurityAntivirus_Antivirus::metadata
```

****描述****

防病毒应用信息（包含当前版本号、上次更新时间、病毒防护状态、用户ID的json字符串），其中版本号字段要求请参见[链接](/development-fundamentals/application-configuration-file-stage/app-configuration-file)，上次更新时间为10位秒级或13位毫秒级时间戳，病毒防护状态仅限on或off，user\_id为用户ID。示例格式如下：

```
{
"version": "1.0.0.0",
"last_update_time": "1751877696",
"protection_status": "on/off",
"user_id": "100"
}
```
