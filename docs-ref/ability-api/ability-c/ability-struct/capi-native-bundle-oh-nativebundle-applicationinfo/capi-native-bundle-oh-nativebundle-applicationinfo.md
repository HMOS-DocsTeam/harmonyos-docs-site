---
title: "OH_NativeBundle_ApplicationInfo"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle-oh-nativebundle-applicationinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-native-bundle-oh-nativebundle-applicationinfo
---

# OH\_NativeBundle\_ApplicationInfo

```
typedef struct {...} OH_NativeBundle_ApplicationInfo
```

## 概述

应用包信息数据结构，包含应用包名和应用指纹信息。

****起始版本：**** 9

****相关模块：**** [Native\_Bundle](/ref/ability-api/ability-c/ability-module/capi-native-bundle/capi-native-bundle)

****所在头文件：**** [native\_interface\_bundle.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\* bundleName | 应用包名。 |
| char\* fingerprint | 应用的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。 |
