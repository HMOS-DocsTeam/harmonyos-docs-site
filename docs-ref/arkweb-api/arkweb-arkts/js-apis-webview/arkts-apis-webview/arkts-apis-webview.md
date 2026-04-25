---
title: "模块描述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-apis-webview
---

# 模块描述

本模块提供Web控制能力，网页显示的能力请参考[组件描述](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web)。

元服务中使用ArkWeb的说明，请参考[Web组件概述](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomicserviceweb-guidelines)。

![](../../../../images/41896f91/note_3.0-zh-cn.png) 

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 示例效果请以真机运行为准。
- 静态方法必须在用户界面（UI）线程上使用。

该模块提供以下Web控制相关的常用功能：

- [AdsBlockManager](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager)：广告过滤配置。
- [BackForwardCacheOptions](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-backforwardcacheoptions/arkts-apis-webview-backforwardcacheoptions)：前进后退缓存配置。
- [BackForwardCacheSupportedFeatures](/ref/arkweb-api/arkweb-arkts/js-apis-webview/kts-apis-webview-backforwardcachesupportedfeatures/kts-apis-webview-backforwardcachesupportedfeatures)：设置前进后退缓存配置所支持的特性。
- [GeolocationPermissions](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions)：地理位置权限配置。
- [JsMessageExt](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-jsmessageext/arkts-apis-webview-jsmessageext)：执行JavaScript脚本的结果。
- [MediaSourceInfo](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-mediasourceinfo/arkts-apis-webview-mediasourceinfo)：媒体源信息。
- [NativeMediaPlayerSurfaceInfo](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayersurfaceinfo/arkts-apis-webview-nativemediaplayersurfaceinfo)：应用接管媒体播放时渲染信息。
- [PdfData](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-pdfdata/arkts-apis-webview-pdfdata)：生成的PDF输出数据。
- [ProxyConfig](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxyconfig/arkts-apis-webview-proxyconfig)：网络代理配置。
- [ProxyController](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxycontroller/arkts-apis-webview-proxycontroller)：网络代理控制器。
- [WebviewController](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller)：Web组件控制器。
- [WebCookieManager](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager)：Cookie管理。
- [WebDataBase](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdatabase/arkts-apis-webview-webdatabase)：数据库管理。
- [WebDownloadDelegate](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaddelegate/arkts-apis-webview-webdownloaddelegate)：下载任务状态事件。
- [WebDownloadItem](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem)：下载任务。
- [WebDownloadManager](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloadmanager/arkts-apis-webview-webdownloadmanager)：下载任务管理。
- [WebHttpBodyStream](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream)：HTTP请求体。
- [WebMessageExt](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageext/arkts-apis-webview-webmessageext)：前端与应用通信数据对象。
- [WebResourceHandler](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webresourcehandler/arkts-apis-webview-webresourcehandler)：资源加载控制。
- [WebSchemeHandler](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandler/arkts-apis-webview-webschemehandler)：指定Scheme的请求拦截器。
- [WebSchemeHandlerRequest](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandlerrequest/arkts-apis-webview-webschemehandlerrequest)：通过拦截器拦截到的请求。
- [WebSchemeHandlerResponse](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandlerresponse/arkts-apis-webview-webschemehandlerresponse)：为拦截到的请求创建自定义响应。
- [WebStorage](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webstorage/arkts-apis-webview-webstorage)：Web组件存储操作接口。
- [BackForwardList](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-backforwardlist/arkts-apis-webview-backforwardlist)：历史信息列表。
- [NativeMediaPlayerBridge](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerbridge/arkts-apis-webview-nativemediaplayerbridge)：托管网页媒体播放器桥接接口。
- [NativeMediaPlayerHandler](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerhandler/arkts-apis-webview-nativemediaplayerhandler)：托管网页媒体播放器的事件接口。
- [WebMessagePort](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport)：网页前端与应用的消息端口。

## 需要权限

访问在线网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考[声明权限](/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。

## 导入模块

```
import { webview } from '@kit.ArkWeb';
```

****系统能力：**** SystemCapability.Web.Webview.Core
