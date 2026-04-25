---
title: "OH_QoS_GewuSubmitRequestResult"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-oh-qos-gewusubmitrequestresult
kit: 系统
last_updated: "2026-04-22"
slug: capi-qos-oh-qos-gewusubmitrequestresult
---

# OH\_QoS\_GewuSubmitRequestResult

```
typedef struct { ... } OH_QoS_GewuSubmitRequestResult
```

## 概述

OH\_QoS\_GewuSubmitRequest()接口的返回结果，成功时返回请求的 request，失败时 error 会置为对应的错误码 。

****起始版本：**** 20

****相关模块：**** [QoS](/ref/system-basicfun-api/kernel-api/kernel-c/kernel-module/capi-qos/capi-qos)

****所在头文件：**** [qos.h](/ref/system-basicfun-api/kernel-api/kernel-c/kernel-headerfile/capi-qos-h/capi-qos-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| OH\_QoS\_GewuRequest request | 创建出来的请求句柄 |
| [OH\_QoS\_GewuErrorCode](/ref/system-basicfun-api/kernel-api/kernel-c/kernel-headerfile/capi-qos-h/capi-qos-h#oh_qos_gewuerrorcode) error | 错误码。- 请求提交成功返回OH\_QOS\_GEWU\_OK。- 由于没有足够的内存而创建会话失败返回OH\_QOS\_GEWU\_NOMEM。 |
