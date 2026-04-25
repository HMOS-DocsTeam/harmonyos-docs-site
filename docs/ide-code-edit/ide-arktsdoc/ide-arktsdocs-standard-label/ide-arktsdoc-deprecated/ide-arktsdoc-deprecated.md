---
title: "@deprecated"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-deprecated
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @deprecated

@deprecated标签指明一个标识在代码中已经被弃用。

## 语法

@deprecated [&lt;some text&gt;]

## 示例

可以单独使用@deprecated标记，也可以包含一些描述有关deprecated的详细信息的文本。

例：说明自版本2.0以来旧函数已被弃用

```
/**
 * @deprecated since version 2.0
 */
export function old() {}
```
