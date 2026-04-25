---
title: "WindowManager"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-windowmanager
---

# WindowManager

## 概述

提供应用窗口的管理能力。

****起始版本：**** 12

## 文件汇总

| 名称 | 描述 |
| --- | --- |
| [oh\_window.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-h/capi-oh-window-h) | 定义窗口管理的相关接口，主要用于设置和获取指定窗口的属性，以及设置指定窗口的状态栏样式、导航栏样式。 |
| [oh\_window\_comm.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-comm-h/capi-oh-window-comm-h) | 提供窗口的公共枚举、公共定义等。 |
| [oh\_window\_event\_filter.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-event-filter-h/capi-oh-window-event-filter-h) | 定义窗口管理按键事件过滤的接口，当多模输入的事件经过窗口时，可以通过过滤接口拦截事件不让事件往下分发。 |
| [oh\_window\_pip.h](/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-pip-h/capi-oh-window-pip-h) | 定义画中画功能的相关接口，包含创建、删除画中画控制器，以及启动、停止画中画等。主要用于视频播放、直播、视频通话或视频会议场景下，以小窗（画中画）模式呈现内容。 |
