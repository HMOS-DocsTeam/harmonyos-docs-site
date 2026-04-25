---
title: "@hw-stylistic/array-bracket-spacing"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_array-bracket-spacing
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @hw-stylistic/array-bracket-spacing

强制数组“[”之后和“]”之前不加空格。该规则仅检查.ets文件类型。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/array-bracket-spacing": "error"
  }
}
```

## 选项

该规则无需配置额外选项。

## 正例

```
export const arr = ['a', 'b'];
```

## 反例

```
// There should be no space after '['.
// There should be no space before ']'.
export const arr = [ 'a', 'b' ];
```

## 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
