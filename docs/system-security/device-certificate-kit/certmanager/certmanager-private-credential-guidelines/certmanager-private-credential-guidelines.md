---
title: "应用证书凭据开发指导"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-private-credential-guidelines
kit: system/security
last_updated: "2026-04-22"
---

# 应用证书凭据开发指导

![](../../../../images/12e879a3/note_3.0-zh-cn.png) 

本开发指导需使用API version 11及以上版本SDK。

## 场景说明

1. 典型场景。

   - 安装应用证书凭据。
   - 获取应用证书凭据。
   - 使用应用证书凭据对数据进行签名、验签。
   - 卸载指定的应用证书凭据。
2. 安装应用证书凭据支持的算法类型和签名验签支持的参数组合。

   - 证书管理安装凭据及使用凭据中的密钥进行签名、验签，依赖[密钥管理服务](/system-security/huks-kit/huks-overview)（HUKS）能力。
   - 证书管理支持的算法为HUKS支持的子集，当前仅支持RSA、ECC及SM2算法类型的私有凭据安装及使用。
   - 签名、验签支持的参数组合，详见HUKS声明的[签名/验签介绍及算法规格](/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview)中RSA、ECC及SM2的描述。

## 接口说明

详细接口说明可参考[@ohos.security.certManager (证书管理模块)](/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanager/js-apis-certmanager)。

以上场景涉及的常用接口如下表所示。

| 实例名 | 接口名 | 描述 |
| --- | --- | --- |
| certificateManager | installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, callback: AsyncCallback&lt;CMResult&gt;) : void | 使用callback方式安装应用证书凭据。 |
| certificateManager | installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string) : Promise&lt;CMResult&gt; | 使用Promise方式安装应用证书凭据。 |
| certificateManager | installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, level: AuthStorageLevel) : Promise&lt;CMResult&gt;18+ | 使用Promise方式安装应用证书凭据，并指定凭据的存储级别。 |
| certificateManager | getPrivateCertificate(keyUri: string, callback: AsyncCallback&lt;CMResult&gt;) : void | 使用callback方式获取应用证书凭据。 |
| certificateManager | getPrivateCertificate(keyUri: string) : Promise&lt;CMResult&gt; | 使用Promise方式获取应用证书凭据。 |
| certificateManager | uninstallPrivateCertificate(keyUri: string, callback: AsyncCallback&lt;void&gt;) : void | 使用callback方式卸载应用证书凭据。 |
| certificateManager | uninstallPrivateCertificate(keyUri: string) : Promise&lt;void&gt; | 使用Promise方式卸载应用证书凭据。 |
| certificateManager | init(authUri: string, spec: CMSignatureSpec, callback: AsyncCallback&lt;CMHandle&gt;) : void | 使用callback方式进行签名验签的初始化操作。 |
| certificateManager | init(authUri: string, spec: CMSignatureSpec) : Promise&lt;CMHandle&gt; | 使用Promise方式进行签名验签的初始化操作。 |
| certificateManager | update(handle: Uint8Array, data: Uint8Array, callback: AsyncCallback&lt;void&gt;) : void | 使用callback方式对待签名、验签的数据进行更新操作。 |
| certificateManager | update(handle: Uint8Array, data: Uint8Array) : Promise&lt;void&gt; | 使用Promise方式对待签名、验签的数据进行更新操作。 |
| certificateManager | finish(handle: Uint8Array, callback: AsyncCallback&lt;CMResult&gt;) : void | 使用callback方式完成数据的签名操作。 |
| certificateManager | finish(handle: Uint8Array, signature: Uint8Array, callback: AsyncCallback&lt;CMResult&gt;) : void | 使用callback方式完成数据的签名操作。 |
| certificateManager | finish(handle: Uint8Array, signature?: Uint8Array) : Promise&lt;CMResult&gt; | 使用Promise方式完成数据的签名、验签操作。 |
| certificateManager | abort(handle: Uint8Array, callback: AsyncCallback&lt;void&gt;) : void | 使用callback方式中止签名、验签操作。 |
| certificateManager | abort(handle: Uint8Array) : Promise&lt;void&gt; | 使用Promise方式中止签名、验签操作。 |

## 开发步骤

1. 权限申请和声明。

   需要申请的权限：ohos.permission.ACCESS\_CERT\_MANAGER

   申请流程请参考：[申请应用权限](/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode)

   声明权限请参考：[声明权限](/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)
2. 导入相关模块。

   ```
   import { certificateManager } from '@kit.DeviceCertificateKit';
   ```
3. 安装应用证书凭据，获取应用证书凭据，并使用应用证书凭据进行签名、验签，最后删除应用证书凭据。

   ```
   import { certificateManager } from '@kit.DeviceCertificateKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { util } from '@kit.ArkTS';

   async function privateCredSample() {
     /* 安装的凭据数据需要业务赋值，本例数据非凭据数据。 */
     let keystoreBase64Str = 'MIIMJgIBAzCCC+AGCSqGSIb3DQEHAaCCC9EEggvNMIILyTCCBW4GCSqGSIb3DQEH' +
       // ...
       'G615kxCjeS6uixCHuij3pgQUhHiChcSeohRPrVkVPSPmYr9tjAYCAgQA';
     /* 凭据数据转换为Uint8Array，凭据数据为der格式 */
     let keystore: Uint8Array = new util.Base64Helper().decodeSync(keystoreBase64Str);

     /* 安装凭据对应的密码，业务赋值。 */
     let keystorePwd: string = 'huawei';
     let appKeyUri: string = '';
     try {
       /* 安装应用证书凭据。 */
       const res: certificateManager.CMResult = await certificateManager.installPrivateCertificate(keystore, keystorePwd, 'testPriCredential');
       appKeyUri = (res.uri != undefined) ? res.uri : '';
       console.info(`InstallPrivateCertificate success appKeyUri: ${appKeyUri}`);
     } catch (err) {
       let e: BusinessError = err as BusinessError;
       console.error(`Failed to install private certificate. Code: ${e.code}, message: ${e.message}`);
     }

     try {
       /* 获取应用证书凭据。 */
       let res: certificateManager.CMResult = await certificateManager.getPrivateCertificate(appKeyUri);
       if (res === undefined || res.credential == undefined) {
         console.error('The result of getting private certificate is undefined.');
       } else {
         let credential = res.credential;
         console.info('Succeeded in getting private certificate.');
       }
     } catch (err) {
       console.error(`Failed to get private certificate. Code: ${err.code}, message: ${err.message}`);
     }

     try {
       /* srcData为待签名、验签的数据，业务自行赋值。 */
       let srcData: Uint8Array = new Uint8Array([
         0x86, 0xf7, 0x0d, 0x01, 0x07, 0x01,
       ]);

       /* 构造签名的属性参数。 */
       const signSpec: certificateManager.CMSignatureSpec = {
         purpose: certificateManager.CmKeyPurpose.CM_KEY_PURPOSE_SIGN,
         padding: certificateManager.CmKeyPadding.CM_PADDING_PSS,
         digest: certificateManager.CmKeyDigest.CM_DIGEST_SHA256
       };

       /* 签名。 */
       const signHandle: certificateManager.CMHandle = await certificateManager.init(appKeyUri, signSpec);
       await certificateManager.update(signHandle.handle, srcData);
       const signResult: certificateManager.CMResult = await certificateManager.finish(signHandle.handle);

       /* 构造验签的属性参数。 */
       const verifySpec: certificateManager.CMSignatureSpec = {
         purpose: certificateManager.CmKeyPurpose.CM_KEY_PURPOSE_VERIFY,
         padding: certificateManager.CmKeyPadding.CM_PADDING_PSS,
         digest: certificateManager.CmKeyDigest.CM_DIGEST_SHA256
       };

       /* 验签。 */
       const verifyHandle: certificateManager.CMHandle = await certificateManager.init(appKeyUri, verifySpec);
       await certificateManager.update(verifyHandle.handle, srcData);
       const verifyResult = await certificateManager.finish(verifyHandle.handle, signResult.outData);
       console.info('Succeeded in signing and verifying.');
     } catch (err) {
       let e: BusinessError = err as BusinessError;
       console.error(`Failed to sign or verify. Code: ${e.code}, message: ${e.message}`);
     }

     try {
       /* 删除应用证书凭据。 */
       await certificateManager.uninstallPrivateCertificate(appKeyUri);
     } catch (err) {
       let e: BusinessError = err as BusinessError;
       console.error(`Failed to uninstall private certificate. Code: ${e.code}, message: ${e.message}`);
     }
   }
   ```
