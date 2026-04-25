---
title: "bundle_manager_common.h"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-bundle-manager-common-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-bundle-manager-common-h
---

# bundle\_manager\_common.h

## 概述

声明BundleManager定义的相关错误码。

****引用文件：**** &lt;bundle/bundle\_manager\_common.h&gt;

****库：**** libbundle\_ndk.z.so

****系统能力：**** SystemCapability.BundleManager.BundleFramework.Core

****起始版本：**** 21

****相关模块：**** [Native\_Bundle](/ref/ability-api/ability-c/ability-module/capi-native-bundle/capi-native-bundle)

## 汇总

### 枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [BundleManager\_ErrorCode](#bundlemanager_errorcode) | BundleManager\_ErrorCode | 枚举错误码。 |

## 枚举类型说明

### BundleManager\_ErrorCode

```
enum BundleManager_ErrorCode
```

****描述****

枚举错误码，详细介绍请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)。

****起始版本：**** 21

| 枚举项 | 描述 |
| --- | --- |
| BUNDLE\_MANAGER\_ERROR\_CODE\_NO\_ERROR = 0 | 执行成功。 |
| BUNDLE\_MANAGER\_ERROR\_CODE\_PERMISSION\_DENIED = 201 | 权限被拒绝。 |
| BUNDLE\_MANAGER\_ERROR\_CODE\_PARAM\_INVALID = 401 | 参数无效。 |
