---
title: "证书链校验时从p12文件构造TrustAnchor对象数组"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-trustanchor-from-p12
kit: system/security
last_updated: "2026-04-22"
---

# 证书链校验时从p12文件构造TrustAnchor对象数组

证书链校验时从p12文件构造TrustAnchor对象数组。

## 开发步骤

1. 导入[证书算法库框架模块](/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert)。
2. 基于现有的p12文件数据，调用[cert.createTrustAnchorsWithKeyStore](/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatetrustanchorswithkeystore12)创建[X509TrustAnchor](/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509trustanchor11)数组对象，并返回结果。

```
import { cert } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

function test() {
  // ...
  try {
    cert.createTrustAnchorsWithKeyStore(p12Data, '123456').then((data) => {
      console.info('createTrustAnchorsWithKeyStore result: success, the num of result is :' + data.length);
    }).catch((err: BusinessError) => {
      console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${err.code}, message: ${err.message}`);
    })
  } catch (error) {
    console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${error.code}, message: ${error.message}`);
  }
}
```
