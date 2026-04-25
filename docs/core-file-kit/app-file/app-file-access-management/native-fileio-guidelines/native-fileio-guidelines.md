---
title: "应用文件访问(C/C++)"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileio-guidelines
kit: application-framework
last_updated: "2026-04-22"
---

# 应用文件访问(C/C++)

## 场景介绍

FileIO模块提供了部分文件基础操作能力，其他能力请参考[libc标准库](/ref/musl/musl)/[c++标准库](/ref/cpp/cpp)。

## 约束限制

进行文件操作之前，必须保证传入正确有效的URI或path。

## 接口说明

接口的详细说明，请参考[FileIO](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-fileio-h/capi-oh-fileio-h)。

| 接口名称 | 描述 |
| --- | --- |
| FileManagement\_ErrCode OH\_FileIO\_GetFileLocation(char \*uri, int uriLength, FileIO\_FileLocation \*location) | 获取文件存储位置。 |
| enum FileIO\_FileLocation FileIO\_FileLocation | 文件存储位置枚举值。 |
| enum FileManagement\_ErrCode FileManagement\_ErrCode | 文件管理模块错误码。 |

## 开发步骤

****在CMake脚本中链接动态库****

CMakeLists.txt中添加以下lib。

```
target_link_libraries(sample PUBLIC libohfileio.so)
```

****添加头文件****

```
#include <cstdio>
#include <cstring>
#include <filemanagement/fileio/oh_fileio.h>
```

调用OH\_FileIO\_GetFileLocation接口获取文件存储位置。示例代码如下所示：

```
void GetFileLocationExample(char *uri)
{
    FileIO_FileLocation location;
    FileManagement_ErrCode ret = OH_FileIO_GetFileLocation(uri, strlen(uri), &location);
    if (ret == 0) {
        if (location == FileIO_FileLocation::LOCAL) {
            printf("Succeeded in getting file location, this file is on local.");
        } else if (location == FileIO_FileLocation::CLOUD) {
            printf("Succeeded in getting file location, this file is on cloud.");
        } else if (location == FileIO_FileLocation::LOCAL_AND_CLOUD) {
            printf("Succeeded in getting file location, this file is on  local and cloud.");
        }
    } else {
        printf("Failed to get file location, error code is %d", ret);
    }
}
```
