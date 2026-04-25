---
title: "Class (WebCookie)"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webcookie
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-webcookie
---

# Class (WebCookie)

通过WebCookie可以控制Web组件中的cookie的各种行为，其中每个应用中的所有Web组件共享一个WebCookie。通过controller方法中的getCookieManager方法可以获取WebCookie对象，进行后续的cookie管理操作。

![](../../../../images/9d155fb1/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 8开始支持。
- 从API version 8开始支持，从API version 23开始不再维护，建议使用[WebCookieManager](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager)代替。
- 示例效果请以真机运行为准。

## constructor(deprecated)

constructor()

WebCookie的构造函数。

![](../../../../images/14f68138/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 23开始废弃。且不再提供新的接口作为替代。

****系统能力：**** SystemCapability.Web.Webview.Core

## setCookie(deprecated)

setCookie()

设置cookie，该方法为同步方法。设置成功返回true，否则返回false。

![](../../../../images/b1c6fe8c/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[setCookie9+](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#setcookiedeprecated)代替。

****系统能力：**** SystemCapability.Web.Webview.Core

## saveCookie(deprecated)

saveCookie()

将当前存在内存中的cookie同步到磁盘中，该方法为同步方法。

![](../../../../images/b503c4fe/note_3.0-zh-cn.png) 

从API version 8开始支持，从API version 9开始废弃，建议使用[saveCookieAsync9+](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#savecookieasync)代替。

****系统能力：**** SystemCapability.Web.Webview.Core
