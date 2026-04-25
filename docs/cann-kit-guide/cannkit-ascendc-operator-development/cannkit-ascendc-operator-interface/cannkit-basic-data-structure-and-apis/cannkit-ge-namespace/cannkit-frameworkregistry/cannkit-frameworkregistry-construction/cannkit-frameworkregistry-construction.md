---
title: "构造函数和析构函数"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-frameworkregistry-construction
kit: ai
last_updated: "2026-04-22"
---

# 构造函数和析构函数

## 函数功能

FrameworkRegistry构造函数和析构函数。

## 函数原型

```
FrameworkRegistry(const FrameworkRegistry &) = delete;
FrameworkRegistry& operator = (const FrameworkRegistry &) = delete;
~FrameworkRegistry();
static FrameworkRegistry& Instance();
```

## 参数说明

NA

## 返回值

Instance()返回FrameworkRegistry的单例对象。

## 异常处理

无

## 约束说明

无
