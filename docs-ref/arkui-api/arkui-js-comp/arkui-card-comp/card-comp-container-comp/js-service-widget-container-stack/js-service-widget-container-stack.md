---
title: "stack"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-container-stack
kit: 应用框架
last_updated: "2026-04-22"
slug: js-service-widget-container-stack
---

# stack

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。

![](../../../../../images/35c77bf5/note_3.0-zh-cn.png) 

从API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

## 子组件

支持。

## 属性

支持[通用属性](/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-attributes/js-service-widget-common-attributes)。

## 样式

支持[通用样式](/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-styles/js-service-widget-common-styles)。

## 事件

支持[通用事件](/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-events/js-service-widget-common-events)。

## 示例

```
<!-- xxx.hml -->
<stack class="stack-parent">
  <div class="back-child bd-radius"></div>
  <div class="positioned-child bd-radius"></div>
  <div class="front-child bd-radius"></div>
</stack>
```

```
/* xxx.css */
.stack-parent {
  width: 400px;
  height: 400px;
  margin: 50px;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
}
.back-child {
  width: 300px;
  height: 300px;
  background-color: #3f56ea;
}
.front-child {
  width: 100px;
  height: 100px;
  background-color: #00bfc9;
}
.positioned-child {
  width: 100px;
  height: 100px;
  left: 50px;
  top: 50px;
  background-color: #47cc47;
}
.bd-radius {
  border-radius: 16px;
}
```

****4×4卡片****

![](../../../../../images/0c0a13c2/zh-cn_image_0000002552960426.png)
