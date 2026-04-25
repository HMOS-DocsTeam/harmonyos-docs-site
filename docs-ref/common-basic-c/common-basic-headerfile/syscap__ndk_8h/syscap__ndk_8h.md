---
title: "syscap_ndk.h"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap__ndk_8h
kit: 公共基础能力
last_updated: "2026-04-22"
slug: syscap__ndk_8h
---

# syscap\_ndk.h

## 概述

查询单个系统能力是否被支持的API。

****起始版本：****

8

****相关模块：****

[Init](/ref/common-basic-c/common-basic-module/init/init)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [canIUse](/ref/common-basic-c/common-basic-module/init/init#caniuse) (const char \*cap) | 查询指定的系统能力是否被支持。  系统能力（SystemCapability，简称SysCap），指操作系统中每一个相对独立的特性。不同的设备对应不同的系统能力集，每个系统能力对应一个或多个API。开发者可根据系统能力来判断是否可以使用某接口。 |
