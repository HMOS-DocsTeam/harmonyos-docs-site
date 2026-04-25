---
title: "@typescript-eslint/no-unused-vars"
sidebar_position: 77
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-unused-vars
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @typescript-eslint/no-unused-vars

禁止定义未使用的变量。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

## 选项

详情请参考[@typescript-eslint/no-unused-vars选项](https://eslint.nodejs.cn/docs/rules/no-unused-vars#选项)。

## 正例

```
const x = 10;
console.info(`${x}`);

((foo) => {
  return foo;
})();

const num = 50;
let myFunc1: () => number = () => num;
myFunc1 = () => setTimeout(() => {
  // myFunc is considered used
  myFunc1();
}, num);
```

## 反例

```
const x = 10;

((foo) => {
  return 'hello';
})();

const num = 50;
const myFunc1: () => number = () => num;
```

## 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
