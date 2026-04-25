---
title: "UI装饰器总览"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-decorator-overview
kit: application-framework
last_updated: "2026-04-22"
---

# UI装饰器总览

在声明式UI开发范式中，UI是程序状态的运行结果，状态的变化会驱动UI的刷新。ArkUI提供了一套装饰器机制，使开发者能够便捷地定义和管理状态变量，实现数据与UI的联动。

ArkUI包含的V2状态管理装饰器列表如下：

| V2状态管理装饰器 | 装饰器说明 |
| --- | --- |
| [@ComponentV2](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2) | 创建自定义组件。 |
| [@Local](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local) | 组件内部状态。 |
| [@Param](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param) | 组件外部输入。 |
| [@Once](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once) | 初始化同步一次。 |
| [@Event](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event) | 规范组件输出。 |
| [@Provider](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer) | 与后代状态双向同步。 |
| [@Consumer](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer) | 与祖先状态双向同步。 |
| [@Monitor](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor) | 状态变量修改异步监听。 |
| [@SyncMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-syncmonitor) | 状态变量修改同步监听。 |
| [@Computed](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed) | 计算属性。 |
| [@ObservedV2](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace) | 标记类可观察。 |
| [@Trace](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace) | 标记类属性可观察。 |
| [@Type](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-type) | 标记类属性的类型。 |
| [@ReusableV2](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2) | 标记组件可复用。 |

ArkUI包含的V1状态管理装饰器列表如下：

| V1状态管理装饰器 | 装饰器说明 |
| --- | --- |
| [@Component](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component) | 创建自定义组件。 |
| [@State](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state) | 基础状态变量。 |
| [@Prop](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop) | 建立父子状态单向同步。 |
| [@Link](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link) | 建立父子状态双向同步。 |
| [@ObjectLink](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink) | 嵌套类对象属性变化观察。 |
| [@Provide](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume) | 与后代状态双向同步。 |
| [@Consume](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume) | 与祖先状态双向同步。 |
| [@Watch](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch) | 状态变量变化监听。 |
| [@StorageLink](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink) | 与AppStorage中对应的属性建立双向数据同步。 |
| [@StorageProp](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop) | 与AppStorage中对应的属性建立单向数据同步。 |
| [@LocalStorageLink](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink) | 与LocalStorage中对应的属性建立双向数据同步。 |
| [@LocalStorageProp](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop) | 与LocalStorage中对应的属性建立单向数据同步。 |
| [@Observed](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink) | 标记类可观察。 |
| [@Track](/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track) | 类对象属性级更新。 |
| [@Reusable](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable) | 标记组件可复用。 |

ArkUI包含的通用UI装饰器列表如下：

| 通用装饰器 | 装饰器说明 |
| --- | --- |
| [@Builder](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder) | 自定义构建函数。 |
| [@LocalBuilder](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder) | 维持组件关系。 |
| [@BuilderParam](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam) | 引用@Builder函数。 |
| [@Styles](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style) | 定义组件重用样式。 |
| [@Extend](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend) | 定义扩展组件样式。 |
| [@AnimatableExtend](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend) | 定义可动画属性。 |
| [@Require](/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require) | 校验构造传参。 |
| [@Env](/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property) | 环境变量。 |
