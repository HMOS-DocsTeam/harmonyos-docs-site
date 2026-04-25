---
title: "GET请求的bodySign是对谁签名得到的？"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-3
kit: app-services
last_updated: "2026-04-22"
---

# GET请求的bodySign是对谁签名得到的？

GET请求需要对path url进行签名，例如[查询支付订单](/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-query-order/payment-sys-query-order/payment-sys-query-order)的待签名内容是：“/api/v2/aggr/transactions/orders/\{sysTransOrderNo\}”。
