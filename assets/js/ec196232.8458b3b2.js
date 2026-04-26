"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["369203"], {
243214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_pkcs_1_by_segment_ndk_crypto_rsa_sign_sig_verify_pkcs_1_by_segment_ndk_md_ec1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-rsa-sign-sig-verify-pkcs-1-by-segment-ndk-crypto-rsa-sign-sig-verify-pkcs-1-by-segment-ndk-md-ec1.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_pkcs_1_by_segment_ndk_crypto_rsa_sign_sig_verify_pkcs_1_by_segment_ndk_md_ec1_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk","title":"使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)","description":"对应的算法规格请查看签名验签算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA密钥对分段签名验签（PKCS1模式）(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment/"},"next":{"title":"使用RSA密钥对签名验签（PSS模式）(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk.md


const frontMatter = {
	title: '使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
  "level": 2
}, {
  "value": "签名开发步骤",
  "id": "签名开发步骤",
  "level": 2
}, {
  "value": "验签开发步骤",
  "id": "验签开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用rsa密钥对分段签名验签-pkcs1模式cc",
        children: "使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#rsa",
        children: "签名验签算法规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohcrypto.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "签名开发步骤",
      children: "签名开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_create",
          children: "OH_CryptoSign_Create"
        }), "，指定字符串参数'RSA1024|PKCS1|SHA256'，创建Sign实例，用于完成签名操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_init",
          children: "OH_CryptoSign_Init"
        }), "，使用私钥（OH_CryptoPrivKey）初始化Sign实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_update",
          children: "OH_CryptoSign_Update"
        }), "，传入待签名的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。如果数据量较小，可以直接调用OH_CryptoSign_Final接口一次性传入。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_final",
          children: "OH_CryptoSign_Final"
        }), "，获取签名后的数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_destroy",
          children: "OH_CryptoSign_Destroy"
        }), "等释放内存。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n#include \"CryptoArchitectureKit/crypto_signature.h\"\n\nstatic OH_Crypto_ErrCode doTestRsaSignSeg() {\n   OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n   OH_CryptoKeyPair *keyPair = nullptr;\n   OH_CryptoSign *sign = nullptr;\n   Crypto_DataBlob signData = {.data = nullptr, .len = 0};\n\n   uint8_t plainText[] = {\n      0x43, 0x31, 0x7d, 0xb5, 0x85, 0x2e, 0xd4, 0xef, 0x08, 0x7a, 0x17, 0x96, 0xbc, 0x7c, 0x8f, 0x80,\n      0x8c, 0xa7, 0x63, 0x7f, 0x26, 0x89, 0x8f, 0xf0, 0xfa, 0xa7, 0x51, 0xbd, 0x9c, 0x69, 0x17, 0xf3,\n      0xd1, 0xb5, 0xc7, 0x12, 0xbf, 0xcf, 0x91, 0x25, 0x82, 0x23, 0x6b, 0xd6, 0x64, 0x52, 0x77, 0x93,\n      0x01, 0x9d, 0x70, 0xa3, 0xf4, 0x92, 0x16, 0xec, 0x3f, 0xa7, 0x3c, 0x83, 0x8d, 0x40, 0x41, 0xfc,\n   };\n   Crypto_DataBlob msgBlob = {\n      .data = reinterpret_cast<uint8_t *>(plainText),\n      .len = sizeof(plainText)\n   };\n\n   OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"RSA2048\", &keyCtx);\n   if (ret != CRYPTO_SUCCESS) {\n      return ret;\n   }\n   ret = OH_CryptoAsymKeyGenerator_Generate(keyCtx, &keyPair);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n\n   OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPair);\n   ret = OH_CryptoSign_Create((const char *)\"RSA1024|PKCS1|SHA256\", &sign);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n\n   int blockSize = 20;\n   int cnt_s = 64 / blockSize;\n   int rem_s = 64 % blockSize;\n   ret = OH_CryptoSign_Init(sign, privKey);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n   for (int i = 0; i < cnt_s; i++) {\n      msgBlob.len = blockSize;\n      ret = OH_CryptoSign_Update(sign, &msgBlob);\n      if (ret != CRYPTO_SUCCESS) {\n         OH_CryptoSign_Destroy(sign);\n         OH_CryptoKeyPair_Destroy(keyPair);\n         OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n         return ret;\n      }\n      msgBlob.data += blockSize;\n   }\n   if (rem_s > 0) {\n      msgBlob.len = rem_s;\n      ret = OH_CryptoSign_Final(sign, &msgBlob, &signData);\n      if (ret != CRYPTO_SUCCESS) {\n         OH_CryptoSign_Destroy(sign);\n         OH_CryptoKeyPair_Destroy(keyPair);\n         OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n         return ret;\n      }\n   }\n\n   msgBlob.data -=  64 - rem_s;\n   msgBlob.len = 64;\n   OH_CryptoSign_Destroy(sign);\n   OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n   OH_CryptoKeyPair_Destroy(keyPair);\n   return CRYPTO_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验签开发步骤",
      children: "验签开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_create",
          children: "OH_CryptoVerify_Create"
        }), "，指定字符串参数'RSA1024|PKCS1|SHA256'，与签名的Sign实例保持一致。创建Verify实例，用于完成验签操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_init",
          children: "OH_CryptoVerify_Init"
        }), "，使用公钥（OH_CryptoPubKey）初始化Verify实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_update",
          children: "OH_CryptoVerify_Update"
        }), "，传入待验证的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update，如果数据量较小，可以直接调用OH_CryptoVerify_Final接口一次性传入。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_final",
          children: "OH_CryptoVerify_Final"
        }), "，对数据进行验签。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"signing_signature_verification.h\"\n\nstatic constexpr int INT_64 = 64;\nbool DoTestRsaSignatureSeg()\n{\n    OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    OH_CryptoVerify *verify = nullptr;\n\n    uint8_t plainText[] = {\n        0x43, 0x31, 0x7d, 0xb5, 0x85, 0x2e, 0xd4, 0xef, 0x08, 0x7a, 0x17, 0x96, 0xbc, 0x7c, 0x8f, 0x80,\n        0x8c, 0xa7, 0x63, 0x7f, 0x26, 0x89, 0x8f, 0xf0, 0xfa, 0xa7, 0x51, 0xbd, 0x9c, 0x69, 0x17, 0xf3,\n        0xd1, 0xb5, 0xc7, 0x12, 0xbf, 0xcf, 0x91, 0x25, 0x82, 0x23, 0x6b, 0xd6, 0x64, 0x52, 0x77, 0x93,\n        0x01, 0x9d, 0x70, 0xa3, 0xf4, 0x92, 0x16, 0xec, 0x3f, 0xa7, 0x3c, 0x83, 0x8d, 0x40, 0x41, 0xfc,\n    };\n    Crypto_DataBlob msgBlob = {.data = reinterpret_cast<uint8_t *>(plainText), .len = sizeof(plainText)};\n\n    uint8_t pubKeyText[] = {\n        0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x42, 0x45, 0x47, 0x49, 0x4e, 0x20, 0x52, 0x53, 0x41, 0x20, 0x50, 0x55, 0x42,\n        0x4c, 0x49, 0x43, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a, 0x4d, 0x49, 0x47, 0x4a, 0x41,\n        0x6f, 0x47, 0x42, 0x41, 0x4d, 0x78, 0x63, 0x44, 0x4d, 0x6f, 0x61, 0x59, 0x52, 0x58, 0x6f, 0x78, 0x65, 0x69,\n        0x33, 0x49, 0x6d, 0x33, 0x33, 0x78, 0x4a, 0x76, 0x61, 0x73, 0x63, 0x43, 0x62, 0x77, 0x31, 0x6f, 0x73, 0x63,\n        0x32, 0x56, 0x56, 0x69, 0x47, 0x6a, 0x56, 0x47, 0x47, 0x4a, 0x37, 0x6c, 0x75, 0x4e, 0x41, 0x58, 0x6b, 0x6a,\n        0x73, 0x56, 0x46, 0x64, 0x35, 0x0a, 0x58, 0x37, 0x4c, 0x4d, 0x6c, 0x46, 0x34, 0x63, 0x35, 0x5a, 0x75, 0x59,\n        0x2f, 0x61, 0x69, 0x57, 0x77, 0x70, 0x54, 0x69, 0x63, 0x62, 0x67, 0x49, 0x33, 0x43, 0x66, 0x50, 0x6f, 0x32,\n        0x6a, 0x6c, 0x52, 0x74, 0x67, 0x41, 0x46, 0x6b, 0x44, 0x71, 0x7a, 0x4b, 0x53, 0x46, 0x62, 0x46, 0x47, 0x51,\n        0x6b, 0x43, 0x6e, 0x64, 0x63, 0x2b, 0x54, 0x59, 0x6b, 0x5a, 0x42, 0x32, 0x70, 0x45, 0x6f, 0x72, 0x0a, 0x7a,\n        0x73, 0x61, 0x56, 0x58, 0x77, 0x5a, 0x47, 0x45, 0x34, 0x41, 0x43, 0x70, 0x59, 0x35, 0x79, 0x65, 0x66, 0x49,\n        0x44, 0x6c, 0x45, 0x57, 0x49, 0x51, 0x4f, 0x6a, 0x59, 0x4b, 0x2f, 0x6c, 0x58, 0x71, 0x7a, 0x48, 0x47, 0x69,\n        0x4f, 0x69, 0x32, 0x75, 0x4a, 0x45, 0x75, 0x44, 0x43, 0x50, 0x6a, 0x51, 0x64, 0x6a, 0x54, 0x41, 0x67, 0x4d,\n        0x42, 0x41, 0x41, 0x45, 0x3d, 0x0a, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x45, 0x4e, 0x44, 0x20, 0x52, 0x53, 0x41,\n        0x20, 0x50, 0x55, 0x42, 0x4c, 0x49, 0x43, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a,\n    };\n\n    Crypto_DataBlob keyBlob = {.data = reinterpret_cast<uint8_t *>(pubKeyText), .len = sizeof(pubKeyText)};\n\n    uint8_t signText[] = {\n        0x68, 0x2f, 0x3b, 0xe6, 0xa6, 0x5c, 0xb8, 0x60, 0xd4, 0xe1, 0x64, 0xa7, 0xd8, 0x0c, 0x9c, 0x89,\n        0x39, 0xb4, 0xf0, 0xb7, 0xad, 0xb5, 0x8a, 0x71, 0x04, 0xf1, 0xa5, 0x63, 0xdd, 0x32, 0x6a, 0x44,\n        0xeb, 0xff, 0xb7, 0xe6, 0x85, 0xe5, 0xa5, 0x55, 0x5d, 0x5b, 0x28, 0x53, 0x63, 0xe4, 0xb3, 0xb9,\n        0xa8, 0x70, 0xc8, 0x8f, 0xcd, 0x21, 0x8d, 0xe6, 0x1f, 0xe5, 0x78, 0x34, 0xd3, 0x45, 0x0c, 0x9c,\n        0x7a, 0x22, 0x1b, 0x63, 0x55, 0xca, 0x14, 0xa5, 0x0c, 0x7a, 0x40, 0x8e, 0xa1, 0x14, 0x78, 0xa1,\n        0xf1, 0x36, 0x78, 0xbd, 0xba, 0x37, 0x3b, 0x5b, 0xb0, 0x8e, 0xb3, 0x4a, 0x9b, 0x1b, 0x0c, 0xfa,\n        0xfa, 0xc7, 0x9f, 0xb1, 0x35, 0x48, 0x82, 0x73, 0xf8, 0x6b, 0xd4, 0x76, 0x33, 0x5c, 0xed, 0x9c,\n        0xd8, 0x4b, 0xc9, 0x92, 0xa0, 0x3f, 0x6e, 0xba, 0x78, 0x2e, 0x80, 0x78, 0x1e, 0x74, 0xa0, 0x47,\n    };\n\n    Crypto_DataBlob signBlob = {.data = reinterpret_cast<uint8_t *>(signText), .len = sizeof(signText)};\n\n    // keypair\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"RSA2048\", &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return false;\n    }\n    ret = OH_CryptoAsymKeyGenerator_Convert(keyCtx, CRYPTO_PEM, &keyBlob, nullptr, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPair);\n    // verify\n    ret = OH_CryptoVerify_Create((const char *)\"RSA1024|PKCS1|SHA256\", &verify);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    int blockSize = 20;\n    int cntS = INT_64 / blockSize;\n    int remS = INT_64 % blockSize;\n    ret = OH_CryptoVerify_Init(verify, pubKey);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    for (int i = 0; i < cntS; i++) {\n        msgBlob.len = blockSize;\n        ret = OH_CryptoVerify_Update(verify, (Crypto_DataBlob *)&msgBlob);\n        if (ret != CRYPTO_SUCCESS) {\n            OH_CryptoVerify_Destroy(verify);\n            OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n            return false;\n        }\n        msgBlob.data += blockSize;\n    }\n    bool res = false;\n    if (remS > 0) {\n        msgBlob.len = remS;\n        res = OH_CryptoVerify_Final(verify, (Crypto_DataBlob *)&msgBlob, (Crypto_DataBlob *)&signBlob);\n        if (res != true) {\n            OH_CryptoVerify_Destroy(verify);\n            OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n            return false;\n        }\n    }\n\n    msgBlob.data -= INT_64 - remS;\n    msgBlob.len = INT_64;\n\n    OH_CryptoVerify_Destroy(verify);\n    OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n    OH_CryptoKeyPair_Destroy(keyPair);\n    return res;\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);