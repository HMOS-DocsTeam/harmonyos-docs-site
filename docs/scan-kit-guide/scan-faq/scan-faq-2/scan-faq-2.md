---
title: "扫码直达跳转失败"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-2
kit: media
last_updated: "2026-04-22"
---

# 扫码直达跳转失败

****问题现象****

扫码直达跳转失败。

****解决措施****

请检查App Linking配置是否正确：

1. 检查开发者网站服务器配置是否正确。
2. 检查App Linking中网址域名关联是否正确。
3. 检查应用的module.json5文件中域名关联是否正确。
4. 检查应用的签名是否正确，参考[手动签名](/ide-signing#section297715173233)。

详情参考：App Linking的[FAQ](/app-linking-kit-guide/app-linking-startupapp#faq)。
