---
title: "openPreview打开显示预览失败"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-faq-1
kit: app-services
last_updated: "2026-04-22"
---

# openPreview打开显示预览失败

Preview Kit的[openPreview](/ref/preview-api/preview-api-reference/preview-arkts/preview-arkts#openpreview)接口在传入文件预览信息时，当前仅支持传入文件的[uri](/core-file-kit/user-files/user-file-uri-intro)，不支持传入文件的沙箱路径。

如果调用openPreview接口后，显示预览失败，请检查传入的是否为uri并且检查传入的uri是否存在。
