---
title: "span"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-span
kit: 应用框架
last_updated: "2026-04-22"
slug: js-components-basic-span
---

# span

![](../../../../../images/9793613b/note_3.0-zh-cn.png) 

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

作为<[text](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text)>子组件提供文本修饰能力。

## 权限列表

无

## 子组件

无

## 属性

支持[通用属性](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-attributes/js-components-common-attributes)。

![](../../../../../images/d9810268/note_3.0-zh-cn.png) 

不支持focusable和disabled属性。

## 样式

仅支持如下样式：

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | <color> | - | 否 | 设置文本段落的文本颜色。 |
| font-size | <length> | 30px | 否 | 设置文本段落的文本尺寸。 |
| allow-scale | boolean | true | 否 | 设置文本段落的文本尺寸是否跟随系统设置字体缩放尺寸进行放大缩小。true表示跟随系统放大缩小，false表示不跟随系统放大缩小。  如果在config描述文件中针对ability配置了fontSize的config-changes标签，则应用不会重启而直接生效。 |
| font-style | string | normal | 否 | 设置文本段落的字体样式，见[text组件font-style的样式属性](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text#样式)。 |
| font-weight | number | string | normal | 否 | 设置文本段落的字体粗细，见[text组件font-weight的样式属性](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text#样式)。 |
| text-decoration | string | none | 否 | 设置文本段落的文本修饰，见[text组件text-decoration样式属性](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text#样式)。 |
| font-family | string | sans-serif | 否 | 设置文本段落的字体列表，用逗号分隔，每个字体用字体名或者字体族名设置。列表中第一个系统中存在的或者通过[自定义字体](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-customizing-font/js-components-common-customizing-font)指定的字体，会被选中作为文本的字体。 |

## 事件

仅支持[通用事件](/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-events/js-components-common-events)中的click事件。

## 方法

不支持。

## 示例

```
<!-- xxx.hml -->
<div class="container">
  <text class="title">
    <span class="spanTxt">span</span>
  </text>
</div>
```

```
/* xxx.css */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 30px;
  text-align: center;
  width: 100%;
  height: 100px;
}
.spanTxt{
  color: chartreuse;
  font-size: 80px;
}
```

![](../../../../../images/f9d6d0df/zh-cn_image_0000002583480201.png)
