---
title: "展示广告时显示白屏"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-faq-4
kit: app-services
last_updated: "2026-04-22"
---

# 展示广告时显示白屏

展示广告时出现白屏可能原因为展示的广告样式与UI展示页面不匹配，横幅广告使用[AutoAdComponent](/ref/ads-api/ads-comp/js-apis-autoadcomponent/js-apis-autoadcomponent)组件展示；原生广告、开屏广告、贴片广告使用[AdComponent](/ref/ads-api/ads-comp/js-apis-adcomponent/js-apis-adcomponent)组件展示；激励广告、插屏广告调用[showAd](/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#advertisingshowad)方法展示。

建议排查步骤：

1. 获取请求广告时返回的广告数据并记录。
2. 打印展示广告时入参的广告数据，对比两者是否一致。
3. 检查请求的广告类型与使用的展示组件是否匹配。
