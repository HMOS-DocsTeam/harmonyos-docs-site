---
title: "@returns"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-returns
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @returns

@returns标签用于记录函数返回值。

## 语法

@returns [description]

## 示例

```
/**
 * Returns the sum of a and b
 * @param a
 * @param b
 * @returns Sum of a and b
 */
export function sum(a: number, b: number): number{
  return a + b;
}
```
