---
title: "ArkTS卡片页面交互概述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-overview
kit: application-framework
last_updated: "2026-04-22"
---

# ArkTS卡片页面交互概述

ArkTS卡片提供页面交互能力，包括卡片与卡片提供方（例如：应用）的页面跳转、卡片拉起卡片提供方进程、卡片与卡片提供方的消息传递。其中[动态卡片](/form-kit/arkts-ui/arkts-form-overview#动态卡片)可以使用[postCardAction](/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1)接口、[静态卡片](/form-kit/arkts-ui/arkts-form-overview#静态卡片)使用[FormLink](/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink)实现页面交互功能。并且postCardAction和FormLink，均支持router、message和call三种类型的事件，具体使用场景如下：

- [router事件](/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router)：可以使用router事件跳转到指定UIAbility，以完成点击卡片跳转至应用内页面的功能。对于非系统应用仅支持跳转到自己应用内的UIAbility。
- [call事件](/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call)：可以使用call事件拉起指定UIAbility到后台，再通过UIAbility申请对应后台长时任务完成音乐播放等功能。
- [message事件](/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-formextensionability)：可以使用message拉起[FormExtensionAbility](/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability)，通过[onFormEvent](/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonformevent)接口回调通知，以完成点击卡片控件后传递消息给应用的功能。
