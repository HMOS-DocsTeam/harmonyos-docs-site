---
title: "oh_environment.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-environment-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-oh-environment-h
---

# oh\_environment.h

## 概述

environment模块接口定义，使用environment提供的native接口，获取公共文件根目录的沙箱路径。

****引用文件：**** &lt;filemanagement/environment/oh\_environment.h&gt;

****库：**** libohenvironment.so

****系统能力：**** SystemCapability.FileManagement.File.Environment.FolderObtain

****起始版本：**** 12

****相关模块：**** [Environment](/ref/core-file-api/core-file-c/core-file-module/capi-environment/capi-environment)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [FileManagement\_ErrCode OH\_Environment\_GetUserDownloadDir(char \*\*result)](#oh_environment_getuserdownloaddir) | 获取Download根目录沙箱路径。 |
| [FileManagement\_ErrCode OH\_Environment\_GetUserDesktopDir(char \*\*result)](#oh_environment_getuserdesktopdir) | 获取Desktop根目录沙箱路径。 |
| [FileManagement\_ErrCode OH\_Environment\_GetUserDocumentDir(char \*\*result)](#oh_environment_getuserdocumentdir) | 获取Document根目录沙箱路径。 |

## 函数说明

### OH\_Environment\_GetUserDownloadDir()

```
FileManagement_ErrCode OH_Environment_GetUserDownloadDir(char **result)
```

****描述****

获取Download根目录沙箱路径。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| char \*\*result | Download根目录路径指针。请引用头文件malloc.h并使用free()进行资源释放。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode) | 返回FileManagement模块错误码[FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode)。 |

### OH\_Environment\_GetUserDesktopDir()

```
FileManagement_ErrCode OH_Environment_GetUserDesktopDir(char **result)
```

****描述****

获取Desktop根目录沙箱路径。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| char \*\*result | Desktop根目录路径指针。请引用头文件malloc.h并使用free()进行资源释放。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode) | 返回FileManagement模块错误码[FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode)。 |

### OH\_Environment\_GetUserDocumentDir()

```
FileManagement_ErrCode OH_Environment_GetUserDocumentDir(char **result)
```

****描述****

获取Document根目录沙箱路径。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| char \*\*result | Document根目录路径指针。请引用头文件malloc.h并使用free()进行资源释放。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode) | 返回FileManagement模块错误码[FileManagement\_ErrCode](/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode)。 |
