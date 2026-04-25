---
title: "Class (JsResult)"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-jsresult
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-jsresult
---

# Class (JsResult)

Web组件返回的弹窗确认或弹窗取消功能对象。示例代码参考[onAlert事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onalert)。

![](../../../../images/8f654dbd/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 8开始支持。
- 示例效果请以真机运行为准。

## constructor

constructor()

JsResult的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## handleCancel

handleCancel(): void

通知Web组件用户取消弹窗操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## handleConfirm

handleConfirm(): void

通知Web组件用户确认弹窗操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## handlePromptConfirm9+

handlePromptConfirm(result: string): void

通知Web组件用户确认弹窗操作及对话框内容。

****系统能力：**** SystemCapability.Web.Webview.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | string | 是 | 用户输入的对话框内容。 |
