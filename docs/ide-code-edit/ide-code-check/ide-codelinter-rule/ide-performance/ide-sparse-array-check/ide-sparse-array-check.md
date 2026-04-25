---
title: "@performance/sparse-array-check"
sidebar_position: 66
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-sparse-array-check
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @performance/sparse-array-check

建议避免使用稀疏数组。

根据[ArkTS高性能编程实践](/learning-arkts/arkts-high-performance-programming)，建议修改。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/sparse-array-check": "suggestion",
  }
}
```

## 选项

该规则无需配置额外选项。

## 正例

```
let index = 3;
let result: number[] = [];
result[index] = 0;
```

## 反例

```
let count = 100000;
let arr1: number[] = new Array(count);
let arr2 = new Array<number>();
arr2[9999] = 0;
```

## 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
