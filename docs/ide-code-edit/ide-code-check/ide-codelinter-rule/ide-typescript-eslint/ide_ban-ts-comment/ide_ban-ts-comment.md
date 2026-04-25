---
title: "@typescript-eslint/ban-ts-comment"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_ban-ts-comment
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @typescript-eslint/ban-ts-comment

不允许使用`@ts-&lt;directional&gt;`格式的注释，或要求在注释后进行补充说明。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/ban-ts-comment": "error"
  }
}
```

## 选项

详情请参考[@typescript-eslint/ban-ts-comment选项](https://typescript-eslint.nodejs.cn/rules/ban-ts-comment/#options)。

## 正例

```
console.log('hello');
```

## 反例

```
// @ts-expect-error
console.log('hello');

/* @ts-expect-error */
console.log('hello');
```

## 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
