---
title: "@typescript-eslint/no-non-null-asserted-optional-chain"
sidebar_position: 55
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-non-null-asserted-optional-chain
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @typescript-eslint/no-non-null-asserted-optional-chain

禁止在可选链表达式之后使用非空断言。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error"
  }
}
```

## 选项

该规则无需配置额外选项。

## 正例

```
class CC {
  public bar = 'hello';

  public foo(): void {
    console.info('foo');
  }
}
function getInstance(): CC | undefined {
  return new CC();
}

const instance = getInstance();
console.info(`${instance?.bar}`);
instance?.foo();
```

## 反例

```
class CC {
  public bar: string = 'hello';

  public foo() {
    console.info('foo');
  }
}

function getInstance(): CC | undefined {
  return new CC();
}

const instance = getInstance();
console.info(`${instance?.bar!}`);
instance?.foo()!;
```

## 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
