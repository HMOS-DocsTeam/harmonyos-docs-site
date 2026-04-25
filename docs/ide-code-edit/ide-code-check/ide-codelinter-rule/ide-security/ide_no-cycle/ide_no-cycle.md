---
title: "@security/no-cycle"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-cycle
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @security/no-cycle

该规则禁止使用循环依赖。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-cycle": "error"
  }
}
```

## 选项

该规则无需配置额外选项。

## 正例

```
// foo.ets
import {} from './bar';

// bar.ets
import {} from './index';
```

## 反例

```
// foo.ets
import {} from './bar';

// bar.ets
import {} from './foo';
```

![](../../../../../images/81fb1963/note_3.0-zh-cn.png) 

反例中foo.ets文件依赖了bar.ets文件，bar.ets文件同时依赖了foo.ets文件，造成了循环依赖。

## 规则集

```
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
