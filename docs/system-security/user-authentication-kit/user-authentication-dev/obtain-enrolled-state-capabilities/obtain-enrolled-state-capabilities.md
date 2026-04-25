---
title: "查询用户注册凭据的状态"
sidebar_position: 7
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-enrolled-state-capabilities
kit: system/security
last_updated: "2026-04-22"
---

# 查询用户注册凭据的状态

调用者需感知用户注册凭据（人脸、指纹、口令）的变化，可使用该接口查询当前用户注册凭据的状态。

## 接口说明

具体参数、返回值、错误码等描述，请参考对应的[userAuth.getEnrolledState](/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetenrolledstate12)。

| 接口名称 | 功能描述 |
| --- | --- |
| getEnrolledState(authType : UserAuthType): EnrolledState | 根据指定的认证类型，查询用户注册凭据的状态，用于感知注册凭据变化。 |

## 开发步骤

1. [申请权限](/system-security/user-authentication-kit/user-authentication-dev/prerequisites#申请权限)：ohos.permission.ACCESS\_BIOMETRIC。
2. 指定认证类型（[UserAuthType](/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthtype8)），调用[getEnrolledState](/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetenrolledstate12)接口查询用户注册凭据的状态。

以查询用户人脸注册凭据的状态为例：

```
obtainingEnrolledCredentialInformation() {
  try {
    let enrolledState = userAuth.getEnrolledState(userAuth.UserAuthType.FACE);
    Logger.info('get current enrolled state successfully');
    return enrolledState.credentialDigest;
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`get current enrolled state failed, Code is ${err?.code}, message is ${err?.message}`);
    return false;
  }
}
```

## 示例代码

- [查询用户注册凭据的状态](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication)
