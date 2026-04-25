---
title: "查询认证状态(ArkTS)"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-query-authentication-status-arkts
kit: system/security
last_updated: "2026-04-22"
---

# 查询认证状态(ArkTS)

从API 22开始，huksExternalCrypto提供PIN码认证状态查询功能接口。应用可以通过该接口查询PIN码是否认证通过。具体的场景介绍及规格，请参考[Ukey PIN码认证介绍及规格](/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview)。

## 开发步骤

1. 通过证书管理系统能力提供的[证书选择接口](/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22)获取[keyUri](/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22)，并将其作为resourceId。
2. 调用查询认证状态接口[getUkeyPinAuthState](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptogetukeypinauthstate)验证PIN码。

## 开发案例

```
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function getUkeyPinAuthState(): Promise<huksExternalCrypto.HuksExternalPinAuthState> {
  let ret: huksExternalCrypto.HuksExternalPinAuthState = huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_NO_AUTH;
  try {
    /* 1.构造查询PIN码状态参数 */
    const testResourceId = JSON.stringify({
      providerName: "testProviderName",
      bundleName: "com.example.cryptoapplication",
      abilityName: "CryptoExtension",
      index: {
        key: "testKey"
      } as ESObject
    });
    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];

    /* 2.调用getUkeyPinAuthState */
    await huksExternalCrypto.getUkeyPinAuthState(testResourceId, extProperties)
      .then((data) => {
        console.info(`promise: getUkeyPinAuthState success , data : ${data}`);
      }).catch((error: BusinessError) => {
        console.error(`promise: getUkeyPinAuthState failed, errCode : ${error.code}, errMsg : ${error.message}`);
      });
  } catch (error) {
    console.error(`promise: getUkeyPinAuthState input arg invalid`);
  }
  return ret;
}

async function testGetUkeyPinAuthState() {
  let ret: huksExternalCrypto.HuksExternalPinAuthState = await getUkeyPinAuthState();
  if (ret != huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED) {
    console.error(`getUkeyPinAuthState failed`);
    return;
  }

  console.info(`getUkeyPinAuthState success`);
}
```
