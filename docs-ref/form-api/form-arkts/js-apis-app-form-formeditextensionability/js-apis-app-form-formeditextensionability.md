---
title: "@ohos.app.form.FormEditExtensionAbility (FormEditExtensionAbility)"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formeditextensionability
kit: 应用框架
last_updated: "2026-04-22"
slug: js-apis-app-form-formeditextensionability
---

# @ohos.app.form.FormEditExtensionAbility (FormEditExtensionAbility)

FormEditExtensionAbility模块提供卡片编辑功能，继承自[UIExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability)。

![](../../../images/1af5dc53/note_3.0-zh-cn.png) 

本模块首批接口从API version 18开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

## 导入模块

```
import { FormEditExtensionAbility } from '@kit.FormKit';
```

## FormEditExtensionAbility

提供卡片编辑功能。

### 属性

****模型约束：**** 此接口仅可在Stage模型下使用。

****系统能力：**** SystemCapability.Ability.Form

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [FormEditExtensionContext](/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formeditextensioncontext/js-apis-inner-application-formeditextensioncontext) | 否 | 否 | FormEditExtensionAbility的上下文环境，默认值是继承自UIExtensionContext的对象。 |
