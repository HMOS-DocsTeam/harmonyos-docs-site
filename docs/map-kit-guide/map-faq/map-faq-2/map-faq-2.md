---
title: "siteId参数如何获取"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-2
kit: app-services
last_updated: "2026-04-22"
---

# siteId参数如何获取

siteId有多种获取方式，这里提供其中的3种作为参考：

1. 可通过[on('poiClick')](/ref/map-api/map-arkts/map-map/map-map-mapeventmanager/map-map-mapeventmanager#onpoiclick)方法获取。
2. 可通过[位置搜索](/map-kit-guide/map-location-services/map-site-search)相关接口（关键字搜索、周边搜索、地点详情、自动补全、正地理编码）的返回结果中获取。
3. 可通过[chooseLocation](/ref/map-api/map-arkts/map-scenemap/map-scenemap#chooselocation)接口的返回结果中获取。
