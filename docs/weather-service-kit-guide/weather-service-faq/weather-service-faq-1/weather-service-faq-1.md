---
title: "如何获取指定城市的天气数据？"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/weather-service-faq-1
kit: app-services
last_updated: "2026-04-22"
---

# 如何获取指定城市的天气数据？

先调用[getAddressesFromLocationName](/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagergetaddressesfromlocationname-1)方法获取指定城市的经纬度信息，然后根据返回的经纬度数据调用[getWeather](/ref/weather-service-api/weather-service-arkts/weather-service-weatherservice/weather-service-weatherservice#weatherservicegetweather)方法获取天气数据。
