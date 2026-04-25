---
title: "@Entry：页面入口"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-entry
kit: 应用框架
last_updated: "2026-04-22"
slug: ts-universal-entry
---

# @Entry：页面入口

@Entry装饰的自定义组件将作为UI页面的入口。

![](../../../../../images/b649e77a/note_3.0-zh-cn.png) 

本模块首批接口从API version 7开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。

## @Entry

在单个UI页面中，仅允许存在一个由@Entry装饰的自定义组件作为页面的入口。

****卡片能力：**** 从API version 9开始，该接口支持在ArkTS卡片中使用。

****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

****示例：****

```
@Entry
@Component
struct Index {
  build() {
    Text('@Entry Test')
  }
}
```

## EntryOptions10+

命名路由跳转选项。

****系统能力：**** SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| routeName | string | 否 | 是 | 表示作为命名路由页面的名字。  ****卡片能力：**** 从API version 10开始，该接口支持在ArkTS卡片中使用。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| storage | [LocalStorage](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage) | 否 | 是 | 页面级的UI状态存储。当未传入时，框架会创建一个新的LocalStorage实例作为默认值。  ****卡片能力：**** 从API version 10开始，该接口支持在ArkTS卡片中使用。  ****元服务API：**** 从API version 11开始，该接口支持在元服务中使用。 |
| useSharedStorage12+ | boolean | 否 | 是 | 是否使用[loadContent](/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#loadcontent9)传入的LocalStorage实例对象。默认值false。true：使用共享的LocalStorage实例对象。false：不使用共享的LocalStorage实例对象。  ****卡片能力：**** 从API version 12开始，该接口支持在ArkTS卡片中使用。  ****元服务API：**** 从API version 12开始，该接口支持在元服务中使用。 |

****示例：****

```
@Entry({ routeName: 'myPage' })
@Component
struct Index {
  build() {
    Text('Index')
  }
}
```
