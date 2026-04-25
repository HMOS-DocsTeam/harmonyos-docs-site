---
title: "Class (MediaSourceInfo)"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-mediasourceinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-apis-webview-mediasourceinfo
---

# Class (MediaSourceInfo)

表示媒体源的信息。

![](../../../../images/66b9266c/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

## 属性

****系统能力：**** SystemCapability.Web.Webview.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| type12+ | [SourceType](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#sourcetype12) | 否 | 否 | 媒体源的类型。 |
| source12+ | string | 否 | 否 | 媒体源地址。 |
| format12+ | string | 否 | 否 | 媒体源格式， 可能为空， 需要使用者自己去判断格式。 |
