---
title: "oh_fileio.h"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-fileio-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-oh-fileio-h
---

# oh\_fileio.h

## 概述

fileio模块接口定义，提供获取文件存储位置的native接口。

****引用文件：**** &lt;filemanagement/fileio/oh\_fileio.h&gt;

****库：**** libohfileio.so

****系统能力：**** SystemCapability.FileManagement.File.FileIO

****起始版本：**** 12

****相关模块：**** [FileIO](/ref/core-file-api/core-file-c/core-file-module/capi-fileio/capi-fileio)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [FileIO\_FileLocation](#fileio_filelocation) | FileIO\_FileLocation | 文件存储位置枚举值。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [FileManagement\_ErrCode OH\_FileIO\_GetFileLocation(char \*uri, int uriLength, FileIO\_FileLocation \*location)](#oh_fileio_getfilelocation) | 获取文件存储位置。 |

## 枚举类型说明

### FileIO\_FileLocation

```
enum FileIO_FileLocation
```

****描述****

文件存储位置枚举值。

****起始版本：**** 12

| 枚举项 | 描述 |
| --- | --- |
| LOCAL = 1 | 文件存储于本地。 |
| CLOUD = 2 | 文件存储于云侧。 |
| LOCAL\_AND\_CLOUD = 3 | 文件存储于本地及云侧。 |

## 函数说明

### OH\_FileIO\_GetFileLocation()

```
FileManagement_ErrCode OH_FileIO_GetFileLocation(char *uri, int uriLength, FileIO_FileLocation *location)
```

****描述****

获取文件存储位置。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| char \*uri | 指向入参uri的指针。 |
| int uriLength | 入参uri字符串的长度。 |
| [FileIO\_FileLocation](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-fileio-h/capi-oh-fileio-h#fileio_filelocation) \*location | 输出文件存储位置的指针。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode) | 返回FileManagement模块错误码[FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode)。 |
