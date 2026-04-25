---
title: "@typescript-eslint/return-await"
sidebar_position: 101
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_return-await
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @typescript-eslint/return-await

要求异步函数返回“await”。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/return-await": "error"
  }
}
```

## 选项

详情请参考[@typescript-eslint/return-await选项](https://typescript-eslint.nodejs.cn/rules/return-await/#options)。

## 正例

```
export async function validInTryCatch1() {
  try {
    return await Promise.resolve('try');
  } catch (e) {
    return await Promise.resolve('catch');
  }
}
```

## 反例

```
export async function validInTryCatch1() {
  try {
    return Promise.resolve('try');
  } catch (e) {
    return Promise.resolve('catch');
  }
}
```

## 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
