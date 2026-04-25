---
title: "Class (NativeMediaPlayerSurfaceInfo)"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-nativemediaplayersurfaceinfo
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-apis-webview-nativemediaplayersurfaceinfo
---

# Class (NativeMediaPlayerSurfaceInfo)

[应用接管网页媒体播放功能](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#enablenativemediaplayer12)中用于同层渲染的 surface 信息。

![](../../../../images/f86df700/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

## 属性

****系统能力：**** SystemCapability.Web.Webview.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id12+ | string | 否 | 否 | surface的id，用于同层渲染的NativeImage的psurfaceid。  详见[NativeEmbedDataInfo](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#nativeembeddatainfo11)。 |
| rect12+ | [RectEvent](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-i/arkts-apis-webview-i#rectevent12) | 否 | 否 | surface的位置信息。 |
