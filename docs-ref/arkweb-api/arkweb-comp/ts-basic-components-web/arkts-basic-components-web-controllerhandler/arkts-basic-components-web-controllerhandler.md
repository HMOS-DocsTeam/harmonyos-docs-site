---
title: "Class (ControllerHandler)"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-controllerhandler
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-controllerhandler
---

# Class (ControllerHandler)

设置用户新建Web组件的WebviewController对象。示例代码参考[onWindowNew事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onwindownew9)。

![](../../../../images/0ab09351/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

## constructor9+

constructor()

ControllerHandler的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## setWebController9+

setWebController(controller: WebviewController): void

设置WebviewController对象，如果不需要打开新窗口请设置为null。

****系统能力：**** SystemCapability.Web.Webview.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controller | [WebviewController](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller) | 是 | 新建Web组件的WebviewController对象，如果不需要打开新窗口请设置为null。 |
