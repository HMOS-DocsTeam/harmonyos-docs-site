---
title: "签名/验签介绍及算法规格"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-signing-signature-verification-overview
kit: system/security
last_updated: "2026-04-22"
---

# 签名/验签介绍及算法规格

Ukey PIN码认证之后，应用可以通过resourceId操作对应密钥执行签名操作。该能力通过HUKS提供的三段式接口实现，应用指定相应的算法参数即可(包括算法类型，目的，填充，摘要等)。

![](../../../../../images/ba0a3b7a/note_3.0-zh-cn.png) 

1. 通过[HUKS\_TAG\_KEY\_CLASS](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukstag)指定是外部密钥管理扩展中管理的密钥。
2. 三段式操作执行相关的签名操作过程中，keyAlias参数需指定为resourceId。
3. 三段式的finish操作会释放资源，中间异常需要通过abort释放资源。

## 规格

具体规格与外部硬件密钥管理扩展实现相关，不同厂家实现有差异。
