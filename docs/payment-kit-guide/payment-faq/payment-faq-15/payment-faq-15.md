---
title: "同一次支付请求接收到多次回调通知，怎么解决？"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-15
kit: app-services
last_updated: "2026-04-22"
---

# 同一次支付请求接收到多次回调通知，怎么解决？

1. 同一次支付请求接收到多次回调是开发者返回的响应报错，导致重试。请检查返回的响应格式是不是application/json以及响应的报文是不是 \{"resultCode":"000000","resultDesc":"Success."\} ，具体可参考[通知回调接口说明](/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#通知回调接口说明)。
2. 自验证回调接口是否可正常接收响应，如Payment Kit服务器请求响应连接超时也会触发重试回调。
