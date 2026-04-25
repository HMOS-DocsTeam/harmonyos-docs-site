---
title: "ipc_error_code.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-error-code-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-ipc-error-code-h
---

# ipc\_error\_code.h

## 概述

提供IPC错误码定义。

****引用文件：**** &lt;IPCKit/ipc\_error\_code.h&gt;

****库：**** libipc\_capi.so

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****相关模块：**** [OHIPCErrorCode](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcerrorcode/capi-ohipcerrorcode)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH\_IPC\_ErrorCode](#oh_ipc_errorcode) | OH\_IPC\_ErrorCode | IPC消息选项定义。 |

## 枚举类型说明

### OH\_IPC\_ErrorCode

```
enum OH_IPC_ErrorCode
```

****描述：****

IPC错误码定义。

****起始版本：**** 12

| 枚举值 | 描述 |
| --- | --- |
| OH\_IPC\_SUCCESS = 0 | 执行成功。 |
| OH\_IPC\_ERROR\_CODE\_BASE = 1901000 | 错误码区间起始值。 |
| OH\_IPC\_CHECK\_PARAM\_ERROR = OH\_IPC\_ERROR\_CODE\_BASE | 参数错误。 |
| OH\_IPC\_PARCEL\_WRITE\_ERROR = OH\_IPC\_ERROR\_CODE\_BASE + 1 | 序列化对象写入数据失败。 |
| OH\_IPC\_PARCEL\_READ\_ERROR = OH\_IPC\_ERROR\_CODE\_BASE + 2 | 序列化对象读取数据失败。 |
| OH\_IPC\_MEM\_ALLOCATOR\_ERROR = OH\_IPC\_ERROR\_CODE\_BASE + 3 | 内存分配失败。 |
| OH\_IPC\_CODE\_OUT\_OF\_RANGE = OH\_IPC\_ERROR\_CODE\_BASE + 4 | 命令字超出定义范围[0x01,0x00ffffff]。 |
| OH\_IPC\_DEAD\_REMOTE\_OBJECT = OH\_IPC\_ERROR\_CODE\_BASE + 5 | 远端对象死亡。 |
| OH\_IPC\_INVALID\_USER\_ERROR\_CODE = OH\_IPC\_ERROR\_CODE\_BASE + 6 | 用户自定义错误码超出范围[1900001, 1999999]。 |
| OH\_IPC\_INNER\_ERROR = OH\_IPC\_ERROR\_CODE\_BASE + 7 | IPC内部错误。 |
| OH\_IPC\_ERROR\_CODE\_MAX = OH\_IPC\_ERROR\_CODE\_BASE + 1000 | 错误码区间最大值。 |
| OH\_IPC\_USER\_ERROR\_CODE\_MIN = 1909000 | 用户自定义错误码最小值。 |
| OH\_IPC\_USER\_ERROR\_CODE\_MAX = 1909999 | 用户自定义错误码最大值。 |
