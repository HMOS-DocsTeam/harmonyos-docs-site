---
title: "游戏如何实现不展示官方账号登录？"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-faq-3
kit: app-services
last_updated: "2026-04-22"
---

# 游戏如何实现不展示官方账号登录？

在游戏调用[unionLogin](/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin)接口时，将thirdAccountInfos参数传空数组，即可实现玩家登录游戏时不展示“游戏官方账号登录”选项，默认使用华为账号登录。
