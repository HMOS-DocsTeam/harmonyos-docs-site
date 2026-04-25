---
title: "DevEco Studio配置参数列表"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-configuration-parameter
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# DevEco Studio配置参数列表

DevEco Studio基于IntelliJ平台开发，在原生的IntelliJ参数的基础上新增了部分参数，这些参数可在idea.properties中进行配置，参数列表如下：

| 参数 | 参数说明 |
| --- | --- |
| grs\_url | 设置DevEco Studio连接的云端环境。 |
| npm\_config\_strict\_ssl | 设置是否开启npm的https证书校验。默认为true，表示开启证书校验。 |
| ohpm\_config\_strict\_ssl | 设置是否开启ohpm的https证书校验。默认为true，表示开启证书校验。 |

![](../../images/60aec4fa/note_3.0-zh-cn.png) 

关闭证书校验，可能会带来安全风险，请谨慎使用。
