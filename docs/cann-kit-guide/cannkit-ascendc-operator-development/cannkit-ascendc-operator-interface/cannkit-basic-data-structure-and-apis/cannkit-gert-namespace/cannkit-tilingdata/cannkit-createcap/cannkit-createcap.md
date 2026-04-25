---
title: "CreateCap"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-createcap
kit: ai
last_updated: "2026-04-22"
---

# CreateCap

## 函数功能

根据指定的最大容量创建一个TilingData类实例。

## 函数原型

```
static std::unique_ptr<uint8_t[]> CreateCap(const size_t cap_size);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| cap\_size | 输入 | 最大容量，单位为字节。 |

## 返回值

TilingData的实例指针。

## 约束说明

无

## 调用示例

```
auto td_buf = TilingData::CreateCap(100U);
auto td = reinterpret_cast<TilingData *>(td_buf.get());
```
