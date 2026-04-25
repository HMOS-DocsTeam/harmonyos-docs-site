---
title: "raw_file_manager.h"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-raw-file-manager-h
---

# raw\_file\_manager.h

## 概述

提供资源管理rawfile相关功能，可以使用ResourceManager打开rawfile进行后续相关操作，像搜索和读取等。

****引用文件：**** &lt;rawfile/raw\_file\_manager.h&gt;

****库：**** librawfile.z.so

****系统能力：**** SystemCapability.Global.ResourceManager

****起始版本：**** 8

****相关模块：**** [rawfile](/ref/localization-api/localization-c/localization-module/capi-rawfile/capi-rawfile)

## 汇总

### 结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) | NativeResourceManager | 代表native侧的ResourceManager。此类封装了JavaScript resource manager的native实现，****ResourceManager****指针可以通过调用[OH\_ResourceManager\_InitNativeResourceManager](#oh_resourcemanager_initnativeresourcemanager)方法获取。 |

### 函数

| 名称 | 描述 |
| --- | --- |
| [NativeResourceManager \*OH\_ResourceManager\_InitNativeResourceManager(napi\_env env, napi\_value jsResMgr)](#oh_resourcemanager_initnativeresourcemanager) | 基于JavaScript侧的ResourceManager获取native侧的ResourceManager，用来完成rawfile相关功能。 |
| [void OH\_ResourceManager\_ReleaseNativeResourceManager(NativeResourceManager \*resMgr)](#oh_resourcemanager_releasenativeresourcemanager) | 释放native侧ResourceManager。 |
| [RawDir \*OH\_ResourceManager\_OpenRawDir(const NativeResourceManager \*mgr, const char \*dirName)](#oh_resourcemanager_openrawdir) | 打开rawfile目录，打开后可以遍历对应目录下的rawfile文件。 |
| [RawFile \*OH\_ResourceManager\_OpenRawFile(const NativeResourceManager \*mgr, const char \*fileName)](#oh_resourcemanager_openrawfile) | 打开rawfile文件，打开后可以读取它的数据。 |
| [RawFile64 \*OH\_ResourceManager\_OpenRawFile64(const NativeResourceManager \*mgr, const char \*fileName)](#oh_resourcemanager_openrawfile64) | 打开较大的rawfile文件，打开后可以读取它的数据。 |
| [bool OH\_ResourceManager\_IsRawDir(const NativeResourceManager \*mgr, const char \*path)](#oh_resourcemanager_israwdir) | 判断路径是否是rawfile下的目录。 |

## 函数说明

### OH\_ResourceManager\_InitNativeResourceManager()

```
NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)
```

****描述****

基于JavaScript侧的ResourceManager获取native侧的ResourceManager，用来完成rawfile相关功能。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| napi\_env env | 表示JavaScript Native Interface（napi）环境指针。 |
| napi\_value jsResMgr | 表示JavaScript resource manager。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [NativeResourceManager \*](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) | 返回[NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager)指针，如果失败返回空指针。 |

### OH\_ResourceManager\_ReleaseNativeResourceManager()

```
void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)
```

****描述****

释放native侧ResourceManager。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) \*resMgr | 表示[NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager)指针。 |

### OH\_ResourceManager\_OpenRawDir()

```
RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)
```

****描述****

打开rawfile目录，打开后可以遍历对应目录下的rawfile文件。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) \*mgr | 表示指向[NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager)的指针，此指针是通过调用[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取的。 |
| const char \*dirName | 表示要打开的rawfile目录名称，当传递一个空字符串时表示打开rawfile根目录。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [RawDir \*](/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir) | 返回[RawDir](/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir)指针。使用完此指针后，调用[OH\_ResourceManager\_CloseRawDir](/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_closerawdir)释放。如果失败或者mgr为空时返回空指针。 |

****参考：****

[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

[OH\_ResourceManager\_CloseRawDir](/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_closerawdir)

### OH\_ResourceManager\_OpenRawFile()

```
RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)
```

****描述****

打开rawfile文件，打开后可以读取它的数据。

****起始版本：**** 8

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) \*mgr | 表示指向[NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager)的指针，此指针通过调用[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取。 |
| const char \*fileName | 表示基于rawfile根目录的相对路径下的文件名称。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [RawFile \*](/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile/capi-rawfile-rawfile) | 返回[RawFile](/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile/capi-rawfile-rawfile)指针。当使用完此指针，调用[OH\_ResourceManager\_CloseRawFile](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile)释放。如果失败或者mgr和fileName为空时返回空指针。 |

****参考：****

[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

[OH\_ResourceManager\_CloseRawFile](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile)

### OH\_ResourceManager\_OpenRawFile64()

```
RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)
```

****描述****

打开较大的rawfile文件，打开后可以读取它的数据。

****起始版本：**** 11

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) \*mgr | 表示指向[NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager)的指针，此指针通过调用[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取。 |
| const char \*fileName | 表示基于rawfile根目录的相对路径下的文件名称。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [RawFile64 \*](/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile64/capi-rawfile-rawfile64) | 返回[RawFile64](/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile64/capi-rawfile-rawfile64)指针。当使用完此指针，调用[OH\_ResourceManager\_CloseRawFile64](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile64)释放。如果失败或者mgr和fileName为空时返回空指针。 |

****参考：****

[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)

[OH\_ResourceManager\_CloseRawFile64](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile64)

### OH\_ResourceManager\_IsRawDir()

```
bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)
```

****描述****

判断路径是否是rawfile下的目录。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [const NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager) \*mgr | 表示指向[NativeResourceManager](/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager)的指针，此指针通过调用[OH\_ResourceManager\_InitNativeResourceManager](/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager)方法获取。 |
| const char \*path | rawfile路径。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| bool | 返回true表示是rawfile下的目录，返回false表示不是rawfile下的目录。 |
