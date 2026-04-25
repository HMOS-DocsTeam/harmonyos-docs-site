---
title: "JSVM_EnvScope__*"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-envscope--8h
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-envscope--8h
---

# JSVM\_EnvScope\_\_\*

```
typedef struct JSVM_EnvScope__* JSVM_EnvScope
```

## 概述

表示用于控制附加到当前虚拟机实例的环境。只有当线程通过OH\_JSVM\_OpenEnvScope进入该环境的JSVM\_EnvScope后，该环境才对线程的虚拟机实例可用。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)
