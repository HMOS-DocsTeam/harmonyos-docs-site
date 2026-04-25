---
title: "network_boost.h"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-boost
kit: 系统
last_updated: "2026-04-20"
slug: network-boost-c-files-boost
---

# network\_boost.h

## 概述

声明用于网络加速的API。提供基本的函数、结构体和const定义。

****引用文件：**** &lt;NetworkBoostKit/network\_boost.h&gt;

****库：**** libnetwork\_boost.so

****系统能力：**** SystemCapability.Communication.NetworkBoost.Core

****起始版本：**** 6.0.2(22)

****相关模块：**** [NetworkBoost](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview)

## 汇总

## 结构体

| 名称 | 描述 |
| --- | --- |
| struct [NetworkBoost\_SceneDesc](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-scene_desc/network-boost-c-struct-scene_desc) | 业务场景描述信息。 |

## 枚举

| 名称 | 描述 |
| --- | --- |
| struct [NetworkBoost\_SceneEvent](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_sceneevent){  SCENE\_EVENT\_ENTER = 0, SCENE\_EVENT\_UPDATE = 1, SCENE\_EVENT\_LEAVE = 2  } | 业务事件枚举。 |

## 函数

| 名称 | 描述 |
| --- | --- |
| int32\_t [HMS\_NetworkBoost\_SetSceneDesc](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_setscenedesc)([NetworkBoost\_SceneDesc](/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-scene_desc/network-boost-c-struct-scene_desc) sceneDesc) | 设置业务场景。 |
