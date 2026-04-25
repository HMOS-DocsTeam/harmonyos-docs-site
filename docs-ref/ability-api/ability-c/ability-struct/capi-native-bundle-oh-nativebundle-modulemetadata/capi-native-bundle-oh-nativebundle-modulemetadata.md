---
title: "OH_NativeBundle_ModuleMetadata"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle-oh-nativebundle-modulemetadata
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-native-bundle-oh-nativebundle-modulemetadata
---

# OH\_NativeBundle\_ModuleMetadata

```
typedef struct OH_NativeBundle_ModuleMetadata {...} OH_NativeBundle_ModuleMetadata
```

## 概述

模块元数据的信息。

****起始版本：**** 20

****相关模块：**** [Native\_Bundle](/ref/ability-api/ability-c/ability-module/capi-native-bundle/capi-native-bundle)

****所在头文件：**** [native\_interface\_bundle.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* moduleName | 模块名称。 |
| [OH\_NativeBundle\_Metadata\*](/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-metadata/capi-native-bundle-oh-nativebundle-metadata) metadataArray | 模块的元数据数组。 |
| size\_t metadataArraySize | 模块的元数据数组大小。 |
