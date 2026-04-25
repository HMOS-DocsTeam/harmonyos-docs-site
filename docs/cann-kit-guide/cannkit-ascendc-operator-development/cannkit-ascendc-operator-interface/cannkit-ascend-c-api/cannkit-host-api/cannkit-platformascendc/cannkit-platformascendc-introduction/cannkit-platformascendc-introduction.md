---
title: "简介"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-platformascendc-introduction
kit: ai
last_updated: "2026-04-22"
---

# 简介

## 函数功能

在实现Host侧的Tiling函数时，可能需要获取一些硬件平台的信息，来支撑Tiling的计算，比如获取硬件平台的核数等信息。PlatformAscendC类提供获取这些平台信息的功能。

![](../../../../../../../images/6a7d833d/note_3.0-zh-cn.png) 

使用该功能需要包含"tiling/platform/platform\_ascendc.h"头文件。

## 函数原型

```
PlatformAscendC() = delete
~PlatformAscendC() = default
explicit PlatformAscendC(fe::PlatFormInfos *platformInfo): platformInfo_(platformInfo) {}
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| platformInfo | 输入 | platformInfo结构体，通过[GetPlatformInfo](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getplatforminfo)接口可以获取。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
ge::graphStatus TilingXXX(gert::TilingContext* context) {
    auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());
    uint64_t ub_size, l1_size;
    ascendcPlatform.GetCoreMemSize(platform_ascendc::CoreMemType::UB, ub_size);
    ascendcPlatform.GetCoreMemSize(platform_ascendc::CoreMemType::L1, l1_size);
    auto aicNum = ascendcPlatform.GetCoreNumAic();
    auto aivNum = ascendcPlatform.GetCoreNumAiv();
    // ... 按照aivNum切分
    context->SetBlockDim(ascendcPlatform.CalcTschBlockDim(aivNum, aicNum, aivNum));
    return ret;
}
```
