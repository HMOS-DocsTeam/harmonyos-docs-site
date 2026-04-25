---
title: "AbilityBase"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilitybase
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-abilitybase
---

# AbilityBase

## 概述

作为Ability Kit的基础定义模块，AbilityBase提供了组件启动参数[Want](/ref/ability-api/ability-c/ability-headerfile/capi-want-h/capi-want-h)的定义与接口，可以用于应用组件间的信息传递。

****系统能力：**** SystemCapability.Ability.AbilityBase

****起始版本：**** 15

## 文件汇总

| 名称 | 描述 |
| --- | --- |
| [ability\_base\_common.h](/ref/ability-api/ability-c/ability-headerfile/capi-ability-base-common-h/capi-ability-base-common-h) | 声明AbilityBase定义的相关错误码。 |
| [want.h](/ref/ability-api/ability-c/ability-headerfile/capi-want-h/capi-want-h) | Want是对象间信息传递的载体, 可以用于应用组件间的信息传递。 Want的使用场景之一是作为startAbility的参数, 其包含了指定的启动目标, 以及启动时需携带的相关数据, 如bundleName和abilityName字段分别指明目标Ability所在应用的Bundle名称以及对应包内的Ability名称。当Ability A需要启动Ability B并传入一些数据时, 可使用Want作为载体将这些数据传递给Ability B。 |
