---
title: "Class (ProxyRule)"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-proxyrule
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-apis-webview-proxyrule
---

# Class (ProxyRule)

[insertProxyRule](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxyconfig/arkts-apis-webview-proxyconfig#insertproxyrule15)中使用的代理规则。

![](../../../../images/f88a60e0/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 15开始支持。
- 示例效果请以真机运行为准。

## getSchemeFilter15+

getSchemeFilter(): ProxySchemeFilter

获取代理规则中的ProxySchemeFilter信息。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [ProxySchemeFilter](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#proxyschemefilter15) | 代理规则中的ProxySchemeFilter信息。 |

****示例：****

完整示例代码参考[removeProxyOverride](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxycontroller/arkts-apis-webview-proxycontroller#removeproxyoverride15)。

## getUrl15+

getUrl(): string

获取代理规则中的代理的Url信息。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 代理规则中的代理的Url信息。 |

****示例：****

完整示例代码参考[removeProxyOverride](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxycontroller/arkts-apis-webview-proxycontroller#removeproxyoverride15)。
