---
title: "Class (JsGeolocation)"
sidebar_position: 13
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-jsgeolocation
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-jsgeolocation
---

# Class (JsGeolocation)

Web组件返回授权或拒绝权限功能的对象。示例代码参考[onGeolocationShow事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#ongeolocationshow)。

![](../../../../images/f58f6091/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 8开始支持。
- 示例效果请以真机运行为准。

## constructor

constructor()

JsGeolocation的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## invoke

invoke(origin: string, allow: boolean, retain: boolean): void

设置网页地理位置权限状态。

****系统能力：**** SystemCapability.Web.Webview.Core

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| origin | string | 是 | 指定源的字符串索引。 |
| allow | boolean | 是 | 设置的地理位置权限状态。  true表示开启地理位置权限，false表示不开启地理位置权限。 |
| retain | boolean | 是 | 是否允许将地理位置权限状态保存到系统中。可通过[GeolocationPermissions9+](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions)接口管理保存到系统的地理位置权限。  true表示允许将地理位置权限状态保存到系统中，false表示不允许将地理位置权限状态保存到系统中。 |
