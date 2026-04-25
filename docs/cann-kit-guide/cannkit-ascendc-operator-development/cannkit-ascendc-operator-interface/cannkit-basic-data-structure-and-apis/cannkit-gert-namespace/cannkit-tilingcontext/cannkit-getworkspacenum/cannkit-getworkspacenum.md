---
title: "GetWorkspaceNum"
sidebar_position: 17
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getworkspacenum
kit: ai
last_updated: "2026-04-22"
---

# GetWorkspaceNum

## 函数功能

获取workspace个数。

## 函数原型

```
size_t GetWorkspaceNum() const;
```

## 参数说明

无

## 返回值

workspace的个数。

## 约束说明

无

## 调用示例

```
ge::graphStatus Tiling4XXX(TilingContext* context) {
  auto ws_num = context->GetWorkspaceNum();
  // ...
}
```
