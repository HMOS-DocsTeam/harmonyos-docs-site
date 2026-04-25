---
title: "Class (FileSelectorParam)"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-fileselectorparam
kit: 应用框架
last_updated: "2026-04-22"
slug: arkts-basic-components-web-fileselectorparam
---

# Class (FileSelectorParam)

Web组件获取文件对象。示例代码参考[onShowFileSelector事件](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onshowfileselector9)。

![](../../../../images/05db30b8/note_3.0-zh-cn.png) 

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

## constructor9+

constructor()

FileSelectorParam的构造函数。

****系统能力：**** SystemCapability.Web.Webview.Core

## getTitle9+

getTitle(): string

获取文件选择器标题。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 返回文件选择器标题。 |

## getMode9+

getMode(): FileSelectorMode

获取文件选择器的模式。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| [FileSelectorMode](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#fileselectormode9) | 返回文件选择器的模式。 |

## getAcceptType9+

getAcceptType(): Array&lt;string&gt;

获取文件过滤类型。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | 返回文件过滤类型。 |

## isCapture9+

isCapture(): boolean

获取是否调用多媒体能力。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否调用多媒体能力。  true表示调用多媒体能力，false表示未调用多媒体能力。 |

## getMimeTypes18+

getMimeTypes(): Array&lt;string&gt;

获取文件MIME类型。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | 返回文件MIME类型。 |

## getSuggestedName23+

getSuggestedName(): string

获取建议选择的文件名。对应HTML里[option](/arkweb/web-manage-upload-download/web-file-upload#自定义处理js接口拉起的文件请求)中的suggestedName。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 返回建议选择的文件名。 |

## getDefaultPath23+

getDefaultPath(): string

获取文件选择器默认起始路径。对应HTML里[option](/arkweb/web-manage-upload-download/web-file-upload#自定义处理js接口拉起的文件请求)中的startIn。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| string | 返回默认起始路径。  当前端startIn设置为公共目录downloads、pictures时，要注意应分别转化为HarmonyOS系统下的download和images，请参考[获取并使用公共目录](/core-file-kit/user-files/request-dir-permission)。 |

## getDescriptions23+

getDescriptions(): Array&lt;string&gt;

获取各组文件类型的描述。为允许的文件类型类别的可选描述。对应HTML里[option](/arkweb/web-manage-upload-download/web-file-upload#自定义处理js接口拉起的文件请求)中的description。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;string&gt; | 返回文件类型的描述数组。 |

## isAcceptAllOptionExcluded23+

isAcceptAllOptionExcluded(): boolean

获取文件选择器是否包含选项（\*/\*），即所有文件。对应HTML里[option](/arkweb/web-manage-upload-download/web-file-upload#自定义处理js接口拉起的文件请求)中的excludeAcceptAllOption。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否包含一个不应用任何文件类型过滤器的选项。  true表示不包含，false表示包含。 |

## getAcceptableFileTypes23+

getAcceptableFileTypes(): Array&lt;Array&lt;AcceptableFileType&gt;>

获取文件类型信息。对应HTML里[option](/arkweb/web-manage-upload-download/web-file-upload#自定义处理js接口拉起的文件请求)中的types。

****系统能力：**** SystemCapability.Web.Webview.Core

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Array&lt;Array&lt;[AcceptableFileType](/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#acceptablefiletype23)&gt;&gt; | 返回文件types信息。 |
