---
title: "注册/注销Provider(ArkTS)"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ks-extension-registration-and-unregistration-arkts
kit: system/security
last_updated: "2026-04-22"
---

# 注册/注销Provider(ArkTS)

从API 22开始，huksExternalCrypto提供Provider注册和注销功能接口。

## 注册Provider

### 开发步骤

1. 构造注册参数，需要传入[HUKS\_EXT\_CRYPTO\_TAG\_ABILITY\_NAME](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag)。
2. 调用注册接口[registerProvider](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptoregisterprovider)。

## 开发案例

```
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

function StringToUint8Array(str: string) {
  let arr: number[] = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

async function registerProvider(): Promise<void> {
  try {
    /* 1.构造注册参数 */
    const providerName = "testProvider";
    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [
      {
        tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_ABILITY_NAME,
        value: StringToUint8Array("CryptoExtension")
      }
    ];

    /* 2.调用registerProvider */
    await huksExternalCrypto.registerProvider(providerName, extProperties)
      .then(() => {
        console.info(`promise: registerProvider success`);
      }).catch((error: BusinessError) => {
        console.error(`promise: registerProvider failed, errCode : ${error.code}, errMsg : ${error.message}`);
      });
  } catch (error) {
    console.error(`promise: registerProvider input arg invalid`);
  }
}

async function TestRegisterProvider() {
  await registerProvider();
}
```

## 注销Provider

### 开发步骤

1. 构造注销参数，注销单个ability需要传入[HUKS\_EXT\_CRYPTO\_TAG\_ABILITY\_NAME](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag)参数。批量注销不需要传入[HUKS\_EXT\_CRYPTO\_TAG\_ABILITY\_NAME](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag)参数。
2. 调用注销接口[unregisterProvider](/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptounregisterprovider)。

****注销单个ability****

```
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

function StringToUint8Array(str: string) {
  let arr: number[] = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

async function unregisterProvider(): Promise<void> {
  try {
    /* 1.构造注销参数 */
    const providerName = "testProvider";
    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [
      {
        tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_ABILITY_NAME,
        value: StringToUint8Array("CryptoExtension")
      }
    ];

    /* 2.调用unregisterProvider */
    await huksExternalCrypto.unregisterProvider(providerName, extProperties)
      .then(() => {
        console.info(`promise: unregisterProvider success`);
      }).catch((error: BusinessError) => {
        console.error(`promise: unregisterProvider failed, errCode : ${error.code}, errMsg : ${error.message}`);
      });
  } catch (error) {
    console.error(`promise: unregisterProvider input arg invalid`);
  }
}

async function TestRegisterProvider() {
  await unregisterProvider();
}
```

****批量注销****

```
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function unregisterProvider(): Promise<void> {
  try {
    /* 1.构造注销参数 */
    const providerName = "testProvider";
    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];

    /* 2.调用unregisterProvider */
    await huksExternalCrypto.unregisterProvider(providerName, extProperties)
      .then(() => {
        console.info(`promise: unregisterProvider success`);
      }).catch((error: BusinessError) => {
        console.error(`promise: unregisterProvider failed, errCode : ${error.code}, errMsg : ${error.message}`);
      });
  } catch (error) {
    console.error(`promise: unregisterProvider input arg invalid`);
  }
}

async function TestRegisterProvider() {
  await unregisterProvider();
}
```
