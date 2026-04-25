---
title: "Class (BackForwardCacheSupportedFeatures)"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/kts-apis-webview-backforwardcachesupportedfeatures
kit: 应用框架
last_updated: "2026-04-22"
slug: kts-apis-webview-backforwardcachesupportedfeatures
---

# Class (BackForwardCacheSupportedFeatures)

选择性允许使用以下特性的页面进入前进后退缓存。完整示例代码参考[enableBackForwardCache](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#enablebackforwardcache12)。

![](../../../../images/e08db309/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

## 属性

****系统能力：**** SystemCapability.Web.Webview.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| nativeEmbed12+ | boolean | 否 | 否 | 是否允许使用同层渲染的页面进入前进后退缓存。  如果设置为允许，需要维护为同层渲染元素创建的系统控件的生命周期，避免造成泄漏。  true：允许使用同层渲染的页面进入前进后退缓存，false：不允许使用同层渲染的页面进入前进后退缓存。  默认值：false。 |
| mediaTakeOver12+ | boolean | 否 | 否 | 是否允许使用视频托管的页面进入前进后退缓存。  如果设置为允许，需要维护为视频元素创建的系统控件的生命周期，避免造成泄漏。  true：允许使用视频托管的页面进入前进后退缓存，false：不允许使用视频托管的页面进入前进后退缓存。  默认值：false。 |

## constructor12+

constructor()

BackForwardCacheSupportedFeatures的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core
