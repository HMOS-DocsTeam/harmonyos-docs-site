---
title: "@performance/dark-color-mode-check"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-dark-color-mode-check
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# @performance/dark-color-mode-check

通过启用深色模式，可以进一步实现能耗的降低。应用需要根据当前设备状态来适配深色模式。

![](../../../../../images/1da6b552/note_3.0-zh-cn.png) 

- 在检查整个工程时，该规则才生效。
- code-linter.json5配置文件中的[overrides](/ide-code-edit/ide-code-check/ide-code-linter#section19310459444)和[ignore](/ide-code-edit/ide-code-check/ide-code-linter#section19310459444)字段对该规则不生效。
- 若想关闭该规则检查，可将code-linter.json5配置文件中[rules](/ide-code-edit/ide-code-check/ide-code-linter#section19310459444)字段设置为off。

## 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/dark-color-mode-check": "suggestion",
  }
}
```

## 选项

该规则无需配置额外选项。

## 正例

```
src
├── main  
│   ├── ets    
│   └── resources
│       └── dark    
│           └── element
│               └── color.json     
│           
├── mock
│   └── mock-config.json5
```

## 反例

```
src
├── main  
│   ├── ets    
│   └── resources
│       └── dark    
│           └── element
│           
├── mock
│   └── mock-config.json5
```

## 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](/ide-code-edit/ide-code-check/ide-code-linter)。
