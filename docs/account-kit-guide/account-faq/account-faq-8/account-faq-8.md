---
title: "无法获取到头像昵称如何解决"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-8
kit: app-services
last_updated: "2026-04-22"
---

# 无法获取到头像昵称如何解决

1. 确认获取authorizationCode时，调用[AuthorizationWithHuaweiIDRequest](/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest)接口是否传入正确的scope：'profile'。

   ```
   import { authentication } from '@kit.AccountKit';

   // 创建授权请求，并设置参数
   const authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();
   // 获取头像昵称需要传如下scope
   authRequest.scopes = ['profile'];
   // 若开发者需要进行服务端开发，则需传如下permission获取authorizationCode
   authRequest.permissions = ['serviceauthcode'];
   ```
2. 确保[AuthorizationWithHuaweiIDRequest](/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest)接口传入正确scope后获取到的authorizationCode/IdToken是否在有效期内。
3. 确认调用的是华为账号服务器[获取头像昵称](/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-get-nickname-and-avatar/account-api-get-user-info-get-nickname-and-avatar)接口。
