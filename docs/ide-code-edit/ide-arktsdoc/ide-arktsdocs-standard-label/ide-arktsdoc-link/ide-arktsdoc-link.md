---
title: "{@link}"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-link
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# \{@link\}

\{@link\} 用于创建指向指定namepath或网页的链接。使用 \{@link\} 标记时，可以使用不同格式提供链接文本。

## 语法

- \{@link namepathOrURL\}
- [link text]\{@link namepathOrURL\}
- \{@link namepathOrURL|link text\}
- \{@link namepathOrURL link text (after the first space)\}

## 示例

提供链接文本：

```
/**
 * See {@link MyClass}.
 * Also, check out {@link https://www.example.com/cn/ | Example} and
 * {@link https://www.example.com/cn/ Example}.
 */
export function myFunction() {}
```

![](../../../../images/98ecc58b/note_3.0-zh-cn.png) 

若namepath是类名，如例子中的MyClass，用户需要在当前模块中定义该类才能进行正确的跳转。暂不支持对类中属性和方法的跳转。
