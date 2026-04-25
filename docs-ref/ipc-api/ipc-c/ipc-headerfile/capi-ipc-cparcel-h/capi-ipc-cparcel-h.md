---
title: "ipc_cparcel.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-cparcel-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-ipc-cparcel-h
---

# ipc\_cparcel.h

## 概述

提供IPC序列化/反序列化C接口。

****引用文件：**** &lt;IPCKit/ipc\_cparcel.h&gt;

****库：**** libipc\_capi.so

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****相关模块：****[OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel) | OHIPCParcel | IPC序列化对象。 |
| [OHIPCRemoteProxy](/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremoteproxy/capi-ohipcparcel-ohipcremoteproxy) | OHIPCRemoteProxy | IPC远端代理对象。 |
| [OHIPCRemoteStub](/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremotestub/capi-ohipcparcel-ohipcremotestub) | OHIPCRemoteStub | IPC远端服务对象。 |

### 函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void\* (\*OH\_IPC\_MemAllocator)(int32\_t len)](#oh_ipc_memallocator) | OH\_IPC\_MemAllocator | 内存分配函数类型。 |
| [OHIPCParcel\* OH\_IPCParcel\_Create(void)](#oh_ipcparcel_create) | - | 创建OHIPCParcel对象，对象可序列化大小不能超过204800字节。 |
| [void OH\_IPCParcel\_Destroy(OHIPCParcel \*parcel)](#oh_ipcparcel_destroy) | - | 销毁OHIPCParcel对象。 |
| [int OH\_IPCParcel\_GetDataSize(const OHIPCParcel \*parcel)](#oh_ipcparcel_getdatasize) | - | 获取OHIPCParcel对象包含的数据的大小。 |
| [int OH\_IPCParcel\_GetWritableBytes(const OHIPCParcel \*parcel)](#oh_ipcparcel_getwritablebytes) | - | 获取OHIPCParcel对象可以写入的字节数。 |
| [int OH\_IPCParcel\_GetReadableBytes(const OHIPCParcel \*parcel)](#oh_ipcparcel_getreadablebytes) | - | 获取OHIPCParcel对象还可以读取的字节数。 |
| [int OH\_IPCParcel\_GetReadPosition(const OHIPCParcel \*parcel)](#oh_ipcparcel_getreadposition) | - | 获取OHIPCParcel对象当前读取位置。 |
| [int OH\_IPCParcel\_GetWritePosition(const OHIPCParcel \*parcel)](#oh_ipcparcel_getwriteposition) | - | 获取OHIPCParcel对象当前写入位置。 |
| [int OH\_IPCParcel\_RewindReadPosition(OHIPCParcel \*parcel, uint32\_t newReadPos)](#oh_ipcparcel_rewindreadposition) | - | 重置OHIPCParcel对象读取位置。 |
| [int OH\_IPCParcel\_RewindWritePosition(OHIPCParcel \*parcel, uint32\_t newWritePos)](#oh_ipcparcel_rewindwriteposition) | - | 重置OHIPCParcel对象写入位置。 |
| [int OH\_IPCParcel\_WriteInt8(OHIPCParcel \*parcel, int8\_t value)](#oh_ipcparcel_writeint8) | - | 向OHIPCParcel对象写入一个int8\_t值。 |
| [int OH\_IPCParcel\_ReadInt8(const OHIPCParcel \*parcel, int8\_t \*value)](#oh_ipcparcel_readint8) | - | 从OHIPCParcel对象中读取一个int8\_t值。 |
| [int OH\_IPCParcel\_WriteInt16(OHIPCParcel \*parcel, int16\_t value)](#oh_ipcparcel_writeint16) | - | 向OHIPCParcel对象写入一个int16\_t值。 |
| [int OH\_IPCParcel\_ReadInt16(const OHIPCParcel \*parcel, int16\_t \*value)](#oh_ipcparcel_readint16) | - | 从OHIPCParcel对象中读取一个int16\_t值。 |
| [int OH\_IPCParcel\_WriteInt32(OHIPCParcel \*parcel, int32\_t value)](#oh_ipcparcel_writeint32) | - | 向OHIPCParcel对象写入一个int32\_t值。 |
| [int OH\_IPCParcel\_ReadInt32(const OHIPCParcel \*parcel, int32\_t \*value)](#oh_ipcparcel_readint32) | - | 从OHIPCParcel对象中读取一个int32\_t值。 |
| [int OH\_IPCParcel\_WriteInt64(OHIPCParcel \*parcel, int64\_t value)](#oh_ipcparcel_writeint64) | - | 向OHIPCParcel对象写入一个int64\_t值。 |
| [int OH\_IPCParcel\_ReadInt64(const OHIPCParcel \*parcel, int64\_t \*value)](#oh_ipcparcel_readint64) | - | 从OHIPCParcel对象中读取一个int64\_t值。 |
| [int OH\_IPCParcel\_WriteFloat(OHIPCParcel \*parcel, float value)](#oh_ipcparcel_writefloat) | - | 向OHIPCParcel对象写入一个float值。 |
| [int OH\_IPCParcel\_ReadFloat(const OHIPCParcel \*parcel, float \*value)](#oh_ipcparcel_readfloat) | - | 从OHIPCParcel对象中读取一个float值。 |
| [int OH\_IPCParcel\_WriteDouble(OHIPCParcel \*parcel, double value)](#oh_ipcparcel_writedouble) | - | 向OHIPCParcel对象写入一个double值。 |
| [int OH\_IPCParcel\_ReadDouble(const OHIPCParcel \*parcel, double \*value)](#oh_ipcparcel_readdouble) | - | 从OHIPCParcel对象中读取一个double值。 |
| [int OH\_IPCParcel\_WriteString(OHIPCParcel \*parcel, const char \*str)](#oh_ipcparcel_writestring) | - | 向OHIPCParcel对象写入字符串，包含字符串结束符。 |
| [const char\* OH\_IPCParcel\_ReadString(const OHIPCParcel \*parcel)](#oh_ipcparcel_readstring) | - | 从OHIPCParcel对象读取字符串，用户可通过strlen获取字符串长度。 |
| [int OH\_IPCParcel\_Writebuffer(OHIPCParcel \*parcel, const uint8\_t \*buffer, int32\_t len)](#oh_ipcparcel_writebuffer) | - | 向OHIPCParcel对象写入指定长度的内存信息。 |
| [const uint8\_t\* OH\_IPCParcel\_ReadBuffer(const OHIPCParcel \*parcel, int32\_t len)](#oh_ipcparcel_readbuffer) | - | 从OHIPCParcel对象读取指定长度的内存信息。 |
| [int OH\_IPCParcel\_WriteRemoteStub(OHIPCParcel \*parcel, const OHIPCRemoteStub \*stub)](#oh_ipcparcel_writeremotestub) | - | 向OHIPCParcel对象写入OHIPCRemoteStub对象。 |
| [OHIPCRemoteStub\* OH\_IPCParcel\_ReadRemoteStub(const OHIPCParcel \*parcel)](#oh_ipcparcel_readremotestub) | - | 从OHIPCParcel对象读取OHIPCRemoteStub对象。 |
| [int OH\_IPCParcel\_WriteRemoteProxy(OHIPCParcel \*parcel, const OHIPCRemoteProxy \*proxy)](#oh_ipcparcel_writeremoteproxy) | - | 向OHIPCParcel对象写入OHIPCRemoteProxy对象。 |
| [OHIPCRemoteProxy\* OH\_IPCParcel\_ReadRemoteProxy(const OHIPCParcel \*parcel)](#oh_ipcparcel_readremoteproxy) | - | 从OHIPCParcel对象读取OHIPCRemoteProxy对象。 |
| [int OH\_IPCParcel\_WriteFileDescriptor(OHIPCParcel \*parcel, int32\_t fd)](#oh_ipcparcel_writefiledescriptor) | - | 向OHIPCParcel对象写入文件描述符。 |
| [int OH\_IPCParcel\_ReadFileDescriptor(const OHIPCParcel \*parcel, int32\_t \*fd)](#oh_ipcparcel_readfiledescriptor) | - | 从OHIPCParcel对象读取文件描述符。 |
| [int OH\_IPCParcel\_Append(OHIPCParcel \*parcel, const OHIPCParcel \*data)](#oh_ipcparcel_append) | - | OHIPCParcel对象数据拼接。 |
| [int OH\_IPCParcel\_WriteInterfaceToken(OHIPCParcel \*parcel, const char \*token)](#oh_ipcparcel_writeinterfacetoken) | - | 向OHIPCParcel对象写入接口描述符，用于接口身份校验。 |
| [int OH\_IPCParcel\_ReadInterfaceToken(const OHIPCParcel \*parcel, char \*\*token, int32\_t \*len, OH\_IPC\_MemAllocator allocator)](#oh_ipcparcel_readinterfacetoken) | - | 从OHIPCParcel对象读取接口描述符信息，用于接口身份校验。 |

## 函数说明

### OH\_IPC\_MemAllocator()

```
typedef void* (*OH_IPC_MemAllocator)(int32_t len)
```

****描述：****

内存分配函数类型。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| int32\_t len | len 申请内存的长度。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| void\* | 成功返回分配的内存地址；失败返回NULL。 |

### OH\_IPCParcel\_Create()

```
OHIPCParcel* OH_IPCParcel_Create(void)
```

****描述：****

创建OHIPCParcel对象，对象可序列化大小不能超过204800字节。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****返回：****

| 类型 | 说明 |
| --- | --- |
| OHIPCParcel\* | 成功返回OHIPCParcel对象指针；失败返回NULL。 |

### OH\_IPCParcel\_Destroy()

```
void OH_IPCParcel_Destroy(OHIPCParcel *parcel)
```

****描述：****

销毁OHIPCParcel对象。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel 需要销毁OHIPCParcel对象的指针。 |

### OH\_IPCParcel\_GetDataSize()

```
int OH_IPCParcel_GetDataSize(const OHIPCParcel *parcel)
```

****描述：****

获取OHIPCParcel对象包含的数据的大小。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 描述 |
| --- | --- |
| int | 返回数据大小，参数不合法时返回-1。 |

### OH\_IPCParcel\_GetWritableBytes()

```
int OH_IPCParcel_GetWritableBytes(const OHIPCParcel *parcel)
```

****描述：****

获取OHIPCParcel对象可以写入的字节数。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 返回可写字节数大小，参数不合法时返回-1。 |

### OH\_IPCParcel\_GetReadableBytes()

```
int OH_IPCParcel_GetReadableBytes(const OHIPCParcel *parcel)
```

****描述：****

获取OHIPCParcel对象还可以读取的字节数。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 返回可读字节数大小，参数不合法时返回-1。 |

### OH\_IPCParcel\_GetReadPosition()

```
int OH_IPCParcel_GetReadPosition(const OHIPCParcel *parcel)
```

****描述：****

获取OHIPCParcel对象当前读取位置。

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 返回当前读位置，参数不合法时返回-1。 |

### OH\_IPCParcel\_GetWritePosition()

```
int OH_IPCParcel_GetWritePosition(const OHIPCParcel *parcel)
```

****描述：****

获取OHIPCParcel对象当前写入位置。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 返回当前写入位置，参数不合法时返回-1。 |

### OH\_IPCParcel\_RewindReadPosition()

```
int OH_IPCParcel_RewindReadPosition(OHIPCParcel *parcel, uint32_t newReadPos)
```

****描述：****

重置OHIPCParcel对象读取位置。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| uint32\_t newReadPos | newReadPos 新的读取位置，范围：[0，当前数据大小]。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_RewindWritePosition()

```
int OH_IPCParcel_RewindWritePosition(OHIPCParcel *parcel, uint32_t newWritePos)
```

****描述：****

重置OHIPCParcel的写入位置。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| uint32\_t newWritePos | newWritePos 新的写入位置，范围：[0, 当前数据大小]。 |

****返回：****

| 类型 | 描述 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteInt8()

```
int OH_IPCParcel_WriteInt8(OHIPCParcel *parcel, int8_t value)
```

****描述：****

向OHIPCParcel写入一个int8\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int8\_t value | value 要写入的值。 |

****返回：****

| 返回 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadInt8()

```
int OH_IPCParcel_ReadInt8(const OHIPCParcel *parcel, int8_t *value)
```

****描述：****

从OHIPCParcel对象中读取int8\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int8\_t \*value | value 存储读取数据的指针，不能为空。 |

****返回：****

| 返回 | 描述 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteInt16()

```
int OH_IPCParcel_WriteInt16(OHIPCParcel *parcel, int16_t value)
```

****描述：****

向OHIPCParcel对象写入int16\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int16\_t value | value 要写入的值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadInt16()

```
int OH_IPCParcel_ReadInt16(const OHIPCParcel *parcel, int16_t *value)
```

****描述：****

从OHIPCParcel对象读取int16\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int16\_t \*value | value 存储读取数据的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteInt32()

```
int OH_IPCParcel_WriteInt32(OHIPCParcel *parcel, int32_t value)
```

****描述：****

向OHIPCParcel对象写入int32\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int32\_t value | value 要写入的值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadInt32()

```
int OH_IPCParcel_ReadInt32(const OHIPCParcel *parcel, int32_t *value)
```

****描述：****

从OHIPCParcel对象读取int32\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int32\_t \*value | value 存储读取数据的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteInt64()

```
int OH_IPCParcel_WriteInt64(OHIPCParcel *parcel, int64_t value)
```

****描述：****

向OHIPCParcel对象写入int64\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int64\_t value | value 要写入的值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadInt64()

```
int OH_IPCParcel_ReadInt64(const OHIPCParcel *parcel, int64_t *value)
```

****描述：****

从OHIPCParcel对象读取int64\_t值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int64\_t \*value | value 存储读取数据的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteFloat()

```
int OH_IPCParcel_WriteFloat(OHIPCParcel *parcel, float value)
```

****描述：****

向OHIPCParcel对象写入float值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| float value | value 要写入的值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadFloat()

```
int OH_IPCParcel_ReadFloat(const OHIPCParcel *parcel, float *value)
```

****描述：****

从OHIPCParcel对象读取float值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| float \*value | value 存储读取数据的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteDouble()

```
int OH_IPCParcel_WriteDouble(OHIPCParcel *parcel, double value)
```

****描述：****

向OHIPCParcel对象写入double值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| double value | value 要写入的值。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadDouble()

```
int OH_IPCParcel_ReadDouble(const OHIPCParcel *parcel, double *value)
```

****描述：****

从OHIPCParcel对象读取double值。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| double \*value | value 存储读取数据的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteString()

```
int OH_IPCParcel_WriteString(OHIPCParcel *parcel, const char *str)
```

****描述：****

向OHIPCParcel对象写入字符串，包括字符串结束符。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| const char \*str | str 写入字符串，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadString()

```
const char* OH_IPCParcel_ReadString(const OHIPCParcel *parcel)
```

****描述：****

从OHIPCParcel对象读取字符串，用户可通过strlen获取字符串长度。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| const char\* | 成功返回读取字符串地址；参数不合法或读取失败时返回NULL。 |

### OH\_IPCParcel\_WriteBuffer()

```
int OH_IPCParcel_WriteBuffer(OHIPCParcel *parcel, const uint8_t *buffer, int32_t len)
```

****描述：****

向OHIPCParcel对象写入指定长度的内存信息。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| const uint8\_t \*buffer | buffer 写入内存地址信息。 |
| int32\_t len | len 写入信息长度。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadBuffer()

```
const uint8_t* OH_IPCParcel_ReadBuffer(const OHIPCParcel *parcel, int32_t len)
```

****描述：****

从OHIPCParcel对象读取指定长度内存信息。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int32\_t len | len 读取内存的长度。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| const uint8\_t\* | 成功返回读取到的内存地址；参数不合法或len超过parcel可读长度时返回NULL。 |

### OH\_IPCParcel\_WriteRemoteStub()

```
int OH_IPCParcel_WriteRemoteStub(OHIPCParcel *parcel, const OHIPCRemoteStub *stub)
```

****描述：****

向OHIPCParcel对象写入OHIPCRemoteStub对象。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| const [OHIPCRemoteStub](/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremotestub/capi-ohipcparcel-ohipcremotestub) \*stub | stub 需要写入的OHIPCRemoteStub对象指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadRemoteStub()

```
OHIPCRemoteStub* OH_IPCParcel_ReadRemoteStub(const OHIPCParcel *parcel)
```

****描述：****

从OHIPCParcel对象读取OHIPCRemoteStub对象。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| OHIPCRemoteStub\* | 成功返回OHIPCRemoteStub对象指针；失败返回NULL。 |

### OH\_IPCParcel\_WriteRemoteProxy()

```
int OH_IPCParcel_WriteRemoteProxy(OHIPCParcel *parcel, const OHIPCRemoteProxy *proxy)
```

****描述：****

向OHIPCParcel对象写入OHIPCRemoteProxy对象。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| const [OHIPCRemoteProxy](/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremoteproxy/capi-ohipcparcel-ohipcremoteproxy) \*proxy | proxy 需要写入的OHIPCRemoteProxy对象指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadRemoteProxy()

```
OHIPCRemoteProxy* OH_IPCParcel_ReadRemoteProxy(const OHIPCParcel *parcel)
```

****描述：****

从OHIPCParcel对象读取OHIPCRemoteProxy对象。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| OHIPCRemoteProxy\* | 成功返回OHIPCRemoteProxy对象指针；失败返回NULL。 |

### OH\_IPCParcel\_WriteFileDescriptor()

```
int OH_IPCParcel_WriteFileDescriptor(OHIPCParcel *parcel, int32_t fd)
```

****描述：****

向OHIPCParcel对象写入文件描述符。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int32\_t fd | fd 要写入的文件描述符。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadFileDescriptor()

```
int OH_IPCParcel_ReadFileDescriptor(const OHIPCParcel *parcel, int32_t *fd)
```

****描述：****

从OHIPCParcel对象读取文件描述符。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| int32\_t \*fd | fd 存储读取文件描述符的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_Append()

```
int OH_IPCParcel_Append(OHIPCParcel *parcel, const OHIPCParcel *data)
```

****描述：****

OHIPCParcel对象数据拼接。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*data | data 源OHIPCParcel对象的指针，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  拼接失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_WriteInterfaceToken()

```
int OH_IPCParcel_WriteInterfaceToken(OHIPCParcel *parcel, const char *token)
```

****描述：****

向OHIPCParcel对象写入接口描述符，用于接口身份校验。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| const char \*token | token 需要写入的接口描述符信息，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  写入失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_WRITE\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |

### OH\_IPCParcel\_ReadInterfaceToken()

```
int OH_IPCParcel_ReadInterfaceToken(const OHIPCParcel *parcel, char **token, int32_t *len, OH_IPC_MemAllocator allocator)
```

****描述：****

从OHIPCParcel对象读取接口描述符信息，用于接口身份校验。

****系统能力：**** SystemCapability.Communication.IPC.Core

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| const [OHIPCParcel](/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel) \*parcel | parcel OHIPCParcel对象的指针，不能为空。 |
| char \*\*token | token 用于存储接口描述符信息的内存地址，该内存由用户提供的分配器进行内存分配，用户使用完后需要主动释放，不能为空。接口返回失败时，用户依然需要判断该内存是否为空，并主动释放，否则会造成内存泄漏。 |
| int32\_t \*len | len 存储读取接口描述符的长度，包括结束符，不能为空。 |
| [OH\_IPC\_MemAllocator](#oh_ipc_memallocator) allocator | allocator 用户指定的用来分配token的内存分配器，不能为空。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| int | 成功返回[OH\_IPC\_ErrorCode#OH\_IPC\_SUCCESS](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；  参数不合法时返回[OH\_IPC\_ErrorCode#OH\_IPC\_CHECK\_PARAM\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)；读取失败返回[OH\_IPC\_ErrorCode#OH\_IPC\_PARCEL\_READ\_ERROR](/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode)。 |
