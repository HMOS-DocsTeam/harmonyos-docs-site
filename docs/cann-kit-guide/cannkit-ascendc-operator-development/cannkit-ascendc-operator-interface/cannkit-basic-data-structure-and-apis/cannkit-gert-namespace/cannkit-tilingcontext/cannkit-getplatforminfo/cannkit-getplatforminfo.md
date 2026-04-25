---
title: "GetPlatformInfo"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getplatforminfo
kit: ai
last_updated: "2026-04-22"
---

# GetPlatformInfo

## 函数功能

获取fe::PlatFormInfos指针。

## 函数原型

```
fe::PlatFormInfos *GetPlatformInfo() const
```

## 参数说明

无

## 返回值

fe::PlatFormInfos指针。

## 约束说明

无

## 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto platform_info = context->GetPlatformInfo();
  // ...
}
```
