---
title: "Class (ScreenCaptureHandler)"
sidebar_position: 16
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-screencapturehandler
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-screencapturehandler
---

# Class (ScreenCaptureHandler)

Web组件返回授权或拒绝屏幕捕获功能的对象。示例代码参考[onScreenCaptureRequest事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onscreencapturerequest10)。

![](../../../../images/2fc54402/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 10开始支持。
- 示例效果请以真机运行为准。

## constructor10+

constructor()

ScreenCaptureHandler的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## deny10+

deny(): void

拒绝网页所请求的屏幕捕获操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## getOrigin10+

getOrigin(): string

获取网页来源。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 当前请求权限网页的来源。 |

## grant10+

grant(config: ScreenCaptureConfig): void

对网页访问的屏幕捕获操作进行授权。

![](../../../../images/b3fe5ad9/note_3.0-zh-cn.png) 

需要配置权限：ohos.permission.MICROPHONE。

****系统能力：**** SystemCapability.Web.Webview.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | [ScreenCaptureConfig](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#screencaptureconfig10) | 是 | 屏幕捕获配置。 |
