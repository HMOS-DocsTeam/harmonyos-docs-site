---
title: "一键登录场景下，应用已展示一键登录页，此时用户退出、切换或注销华为账号应该如何处理"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-17
kit: app-services
last_updated: "2026-04-22"
---

# 一键登录场景下，应用已展示一键登录页，此时用户退出、切换或注销华为账号应该如何处理

应用通过[订阅华为账号的登录/登出事件](/account-kit-guide/account-quick-login/account-login-state)监听当前设备华为账号的登录状态，若监听到华为账号登出事件，则需跳转至其他登录页面；若监听到华为账号登录事件，则需重新获取匿名手机号并刷新一键登录页。示例代码详见[华为账号一键登录SampleCode](https://gitcode.com/HarmonyOS_Samples/accountkit-samplecode-clientdemo-arkts)。
