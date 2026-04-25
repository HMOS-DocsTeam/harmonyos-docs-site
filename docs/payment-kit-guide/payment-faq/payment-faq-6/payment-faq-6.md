---
title: "支付成功后没有收到回调？"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-6
kit: app-services
last_updated: "2026-04-22"
---

# 支付成功后没有收到回调？

- 检查预下单传入的callbackUrl接口地址是否有效。
- 检查服务器是否有允许清单等网络限制。
- 加密套件不一致，目前华为支付支持的加密套件如下：

```
TLS_DHE_RSA_WITH_AES_128_GCM_SHA256
TLS_DHE_RSA_WITH_AES_256_GCM_SHA384
TLS_DHE_DSS_WITH_AES_128_GCM_SHA256
TLS_DHE_DSS_WITH_AES_256_GCM_SHA384
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
TLS_AES_128_GCM_SHA256
```
