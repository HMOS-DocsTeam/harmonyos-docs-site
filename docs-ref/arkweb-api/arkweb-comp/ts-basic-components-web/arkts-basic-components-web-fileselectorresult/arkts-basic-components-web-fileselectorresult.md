---
title: "Class (FileSelectorResult)"
sidebar_position: 10
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-fileselectorresult
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-fileselectorresult
---

# Class (FileSelectorResult)

通知Web组件的文件选择结果。示例代码参考[onShowFileSelector事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9)。

![](../../../../images/aa1c52e8/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

## constructor9+

constructor()

FileSelectorResult的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## handleFileList9+

handleFileList(fileList: Array&lt;string&gt;): void

通知Web组件进行文件选择操作。

****系统能力：**** SystemCapability.Web.Webview.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileList | Array&lt;string&gt; | 是 | 需要进行操作的文件列表。 |
