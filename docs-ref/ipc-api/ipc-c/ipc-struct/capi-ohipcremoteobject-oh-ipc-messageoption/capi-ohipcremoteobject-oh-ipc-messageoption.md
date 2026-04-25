---
title: "OH_IPC_MessageOption"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohipcremoteobject-oh-ipc-messageoption
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-ohipcremoteobject-oh-ipc-messageoption
---

# OH\_IPC\_MessageOption

```
typedef struct {...} OH_IPC_MessageOption
```

## 概述

IPC消息选项定义。

****起始版本：**** 12

****相关模块：**** [OHIPCRemoteObject](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcremoteobject/capi-ohipcremoteobject)

****所在头文件：**** [ipc\_cremote\_object.h](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cremote-object-h/capi-ipc-cremote-object-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_IPC\_RequestMode](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cremote-object-h/capi-ipc-cremote-object-h#oh_ipc_requestmode) mode | 消息请求模式。 |
| uint32\_t timeout | RPC预留参数，该参数对IPC无效。 |
| void\* reserved | 保留参数，必须为空 |
