---
title: "fileUri"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fileuri
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-fileuri
---

# fileUri

## 概述

文件统一资源标识符（File Uniform Resource Identifier）。

支持fileuri与路径path的转换，和fileuri的有效性校验。

该类主要用于 URI 格式验证和 URI 转换处理。且uri用于应用间文件分享场景，将应用沙箱路径按照固定关系转换为URI;

调用者需保证所有接口入参的有效性，接口按照固定规则转换输出结果，并不检查其是否存在。

****系统能力：**** SystemCapability.FileManagement.AppFileService

****起始版本：**** 12

## 文件汇总

| 名称 | 描述 |
| --- | --- |
| [oh\_file\_uri.h](/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-uri-h/capi-oh-file-uri-h) | 提供uri和路径path之间的相互转换，目录uri获取，以及uri的有效性校验的方法。 |
