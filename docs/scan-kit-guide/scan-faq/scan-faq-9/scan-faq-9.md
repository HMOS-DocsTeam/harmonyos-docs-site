---
title: "自定义界面扫码黑屏现象"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-9
kit: media
last_updated: "2026-04-22"
---

# 自定义界面扫码黑屏现象

****问题现象****

自定义启动相机却显示黑屏现象。

****解决措施****

- 权限校验错误码：201，没有申请相机权限，[向用户申请授权](/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)。
- 参考ArkTS API错误码[1000500001](/ref/scan-api/scan-arkts/scan-error-code/scan-error-code#section1000500001-内部错误)：如首次未调用customScan.[init](/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscaninit)初始化，直接调用customScan.[start](/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart-1)启动扫码相机流，请参考自定义界面扫码的[业务流程](/scan-kit-guide/scan-customscan#业务流程)。
