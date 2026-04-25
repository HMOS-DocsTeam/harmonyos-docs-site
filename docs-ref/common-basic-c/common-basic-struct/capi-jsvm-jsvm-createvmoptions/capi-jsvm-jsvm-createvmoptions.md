---
title: "JSVM_CreateVMOptions"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-createvmoptions
kit: 公共基础能力
last_updated: "2026-04-22"
slug: capi-jsvm-jsvm-createvmoptions
---

# JSVM\_CreateVMOptions

```
typedef struct {...} JSVM_CreateVMOptions
```

## 概述

创建JavaScript虚拟机的选项。

****起始版本：**** 11

****相关模块：**** [JSVM](/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm)

****所在头文件：**** [jsvm\_types.h](/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| size\_t maxOldGenerationSize | 老年代内存大小上限。 |
| size\_t maxYoungGenerationSize | 年轻代内存大小上限。 |
| size\_t initialOldGenerationSize | 老年代内存大小初始值。 |
| size\_t initialYoungGenerationSize | 年轻代内存大小初始值。 |
| const char\* snapshotBlobData | 启动快照数据。 |
| size\_t snapshotBlobSize | 启动快照数据的大小。 |
| bool isForSnapshotting | 虚拟机是否用于创建快照，为true，则虚拟机用于创建快照，为false，则虚拟机不用于创建快照。 |
