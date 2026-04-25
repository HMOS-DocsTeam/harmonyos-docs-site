---
title: "ChildProcess"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-childprocess
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-childprocess
---

# ChildProcess

## 概述

提供子进程的管理能力，支持创建Native子进程并在父子进程间建立IPC通道，用于实现多进程应用开发。

创建的子进程不支持UI界面，也不支持Context相关的接口调用。通过此模块和[childProcessManager](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager)（非SELF\_FORK模式）启动的子进程总数最大为512个。

****系统能力：**** SystemCapability.Ability.AbilityRuntime.Core

****起始版本：**** 12

## 文件汇总

| 名称 | 描述 |
| --- | --- |
| [native\_child\_process.h](/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h) | 支持创建Native子进程，并在父子进程间建立IPC通道。  引用文件：<AbilityKit/native\_child\_process.h>  库：libchild\_process.so |
