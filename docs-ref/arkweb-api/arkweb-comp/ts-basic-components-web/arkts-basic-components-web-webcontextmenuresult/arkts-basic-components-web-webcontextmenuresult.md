---
title: "Class (WebContextMenuResult)"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webcontextmenuresult
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-webcontextmenuresult
---

# Class (WebContextMenuResult)

实现长按页面元素或鼠标右键弹出来的菜单所执行的响应事件。示例代码参考[onContextMenuShow事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oncontextmenushow9)。

![](../../../../images/e3ec4d27/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

## constructor9+

constructor()

WebContextMenuResult的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## closeContextMenu9+

closeContextMenu(): void

不执行WebContextMenuResult其他接口操作时，需要调用此接口关闭菜单。

****系统能力：**** SystemCapability.Web.Webview.Core

## copyImage9+

copyImage(): void

当WebContextMenuParam包含图片内容时，用于复制该图片。

****系统能力：**** SystemCapability.Web.Webview.Core

## copy9+

copy(): void

执行复制文本操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## paste9+

paste(): void

执行粘贴操作。

![](../../../../images/3055dfa0/note_3.0-zh-cn.png) 

需要配置权限：[ohos.permission.READ\_PASTEBOARD](/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_pasteboard)。

****系统能力：**** SystemCapability.Web.Webview.Core

## cut9+

cut(): void

执行剪切操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## selectAll9+

selectAll(): void

执行全选操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## undo20+

undo(): void

执行撤销操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## redo20+

redo(): void

执行重做操作，即取消用户上一次的撤销操作。

****系统能力：**** SystemCapability.Web.Webview.Core

## pasteAndMatchStyle20+

pasteAndMatchStyle(): void

执行与此上下文菜单相关的粘贴操作，粘贴的内容会匹配目标格式，以纯文本形式呈现。

![](../../../../images/f0462037/note_3.0-zh-cn.png) 

需要配置权限：[ohos.permission.READ\_PASTEBOARD](/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_pasteboard)。

****系统能力：**** SystemCapability.Web.Webview.Core

## requestPasswordAutoFill23+

requestPasswordAutoFill(): void

请求密码保险箱中的用户名或密码数据自动填充到当前获得焦点的输入框中。

****系统能力：**** SystemCapability.Web.Webview.Core
