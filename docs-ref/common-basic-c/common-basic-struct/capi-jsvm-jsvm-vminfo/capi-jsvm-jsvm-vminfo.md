---
title: "JSVM_VMInfo"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-vminfo
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-vminfo
---

# JSVM\_VMInfo

```
typedef struct {...} JSVM_VMInfo
```

## 概述

JavaScript虚拟机信息。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t apiVersion | 此虚拟机支持的最高API版本。 |
| const char\* engine | 实现虚拟机的引擎名称。 |
| const char\* version | 虚拟机的版本。 |
| uint32\_t cachedDataVersionTag | 缓存数据版本标签。 |
