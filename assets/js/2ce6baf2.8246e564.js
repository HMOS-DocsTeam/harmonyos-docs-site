"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["800185"], {
344385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_pss_ndk_crypto_rsa_sign_sig_verify_pss_ndk_md_2ce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-rsa-sign-sig-verify-pss-ndk-crypto-rsa-sign-sig-verify-pss-ndk-md-2ce.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_pss_ndk_crypto_rsa_sign_sig_verify_pss_ndk_md_2ce_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk/crypto-rsa-sign-sig-verify-pss-ndk","title":"使用RSA密钥对签名验签 (PSS模式)(C/C++)","description":"对应的算法规格请查看签名验签算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk/crypto-rsa-sign-sig-verify-pss-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"使用RSA密钥对签名验签 (PSS模式)(C/C++)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-pss-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA密钥对签名验签（PSS模式）(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/"},"next":{"title":"使用ECDSA密钥对签名验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk/crypto-rsa-sign-sig-verify-pss-ndk.md


const frontMatter = {
	title: '使用RSA密钥对签名验签 (PSS模式)(C/C++)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-pss-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA密钥对签名验签 (PSS模式)(C/C++)';

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
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "使用rsa密钥对签名验签-pss模式cc",
        children: "使用RSA密钥对签名验签 (PSS模式)(C/C++)"
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
        }), "，指定字符串参数'RSA2048|PSS|SHA256|MGF1_SHA256'，创建非对称密钥类型为RSA2048、填充模式为PSS、摘要算法为SHA256、掩码算法为MGF1_SHA256的Sign实例，用于完成签名操作。"]
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
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_signature.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n\nstatic OH_Crypto_ErrCode doTestRsaPssSignSeg() {\n   OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n   OH_CryptoKeyPair *keyPair = nullptr;\n   OH_CryptoSign *sign = nullptr;\n   Crypto_DataBlob signData = {.data = nullptr, .len = 0};\n\n   uint8_t plainText[] = {\n      0x13, 0xa7, 0x73, 0xe8, 0xb8, 0x22, 0x99, 0x72, 0x98, 0x29, 0xae, 0x74, 0xa8, 0x4a, 0xea, 0xa9,\n   };\n   Crypto_DataBlob msgBlob = {\n      .data = reinterpret_cast<uint8_t *>(plainText),\n      .len = sizeof(plainText)\n   };\n\n   OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"RSA2048\", &keyCtx);\n   if (ret != CRYPTO_SUCCESS) {\n      return ret;\n   }\n   ret = OH_CryptoAsymKeyGenerator_Generate(keyCtx, &keyPair);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n\n   OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPair);\n   ret = OH_CryptoSign_Create((const char *)\"RSA2048|PSS|SHA256|MGF1_SHA256\", &sign);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n\n   ret = OH_CryptoSign_Init(sign, privKey);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n   ret = OH_CryptoSign_Update(sign, &msgBlob);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n   ret = OH_CryptoSign_Final(sign, nullptr, &signData);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n\n   OH_CryptoSign_Destroy(sign);\n   OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n   OH_CryptoKeyPair_Destroy(keyPair);\n   return CRYPTO_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_create",
          children: "OH_CryptoVerify_Create"
        }), "，指定字符串参数'RSA2048|PSS|SHA256|MGF1_SHA256'，创建非对称密钥类型为RSA2048、填充模式为PSS、摘要算法为SHA256、掩码算法为MGF1_SHA256的Verify实例，用于完成验签操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_setparam",
          children: "OH_CryptoVerify_SetParam"
        }), "，设置签名参数。需要与签名时设置的保持一致。"]
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
        children: "#include \"signing_signature_verification.h\"\n\nbool DoTestRsaPssSignatureSeg()\n{\n    OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    OH_CryptoVerify *verify = nullptr;\n\n    uint8_t plainText[] = {\n        0x13, 0xa7, 0x73, 0xe8, 0xb8, 0x22, 0x99, 0x72, 0x98, 0x29, 0xae, 0x74, 0xa8, 0x4a, 0xea, 0xa9,\n    };\n    Crypto_DataBlob msgBlob = {.data = reinterpret_cast<uint8_t *>(plainText), .len = sizeof(plainText)};\n\n    uint8_t pubKeyText[] = {\n        0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x42, 0x45, 0x47, 0x49, 0x4e, 0x20, 0x52, 0x53, 0x41, 0x20, 0x50, 0x55, 0x42,\n        0x4c, 0x49, 0x43, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a, 0x4d, 0x49, 0x49, 0x42, 0x43,\n        0x67, 0x4b, 0x43, 0x41, 0x51, 0x45, 0x41, 0x76, 0x6a, 0x6c, 0x59, 0x35, 0x53, 0x72, 0x54, 0x57, 0x32, 0x43,\n        0x78, 0x74, 0x47, 0x32, 0x54, 0x67, 0x54, 0x54, 0x39, 0x39, 0x78, 0x71, 0x37, 0x62, 0x4e, 0x41, 0x6b, 0x54,\n        0x2b, 0x65, 0x6a, 0x75, 0x65, 0x7a, 0x37, 0x39, 0x37, 0x2f, 0x65, 0x63, 0x56, 0x4b, 0x34, 0x78, 0x37, 0x58,\n        0x41, 0x4d, 0x6d, 0x73, 0x4a, 0x0a, 0x4a, 0x63, 0x66, 0x49, 0x36, 0x73, 0x54, 0x4d, 0x4e, 0x68, 0x45, 0x6b,\n        0x70, 0x79, 0x63, 0x31, 0x4b, 0x32, 0x46, 0x6e, 0x30, 0x74, 0x59, 0x47, 0x2f, 0x6d, 0x4d, 0x37, 0x72, 0x71,\n        0x6d, 0x6a, 0x6c, 0x6b, 0x75, 0x72, 0x34, 0x72, 0x74, 0x6a, 0x4a, 0x4a, 0x75, 0x66, 0x34, 0x35, 0x45, 0x42,\n        0x30, 0x79, 0x6c, 0x55, 0x65, 0x47, 0x61, 0x39, 0x6d, 0x44, 0x4a, 0x57, 0x76, 0x62, 0x2b, 0x73, 0x0a, 0x41,\n        0x4a, 0x78, 0x33, 0x41, 0x44, 0x78, 0x70, 0x50, 0x31, 0x59, 0x36, 0x46, 0x61, 0x71, 0x54, 0x44, 0x6e, 0x64,\n        0x47, 0x41, 0x6e, 0x6b, 0x65, 0x4d, 0x53, 0x2f, 0x56, 0x71, 0x53, 0x45, 0x65, 0x75, 0x43, 0x36, 0x4d, 0x42,\n        0x38, 0x52, 0x53, 0x65, 0x6f, 0x31, 0x4f, 0x59, 0x4c, 0x53, 0x73, 0x7a, 0x36, 0x43, 0x76, 0x38, 0x34, 0x76,\n        0x76, 0x53, 0x69, 0x32, 0x37, 0x32, 0x51, 0x44, 0x6e, 0x0a, 0x6f, 0x4b, 0x4f, 0x4d, 0x34, 0x43, 0x78, 0x6d,\n        0x6e, 0x32, 0x31, 0x58, 0x5a, 0x43, 0x5a, 0x2f, 0x59, 0x50, 0x32, 0x35, 0x67, 0x5a, 0x6e, 0x57, 0x4f, 0x61,\n        0x42, 0x4c, 0x50, 0x57, 0x79, 0x6f, 0x48, 0x46, 0x65, 0x49, 0x55, 0x42, 0x48, 0x4c, 0x50, 0x69, 0x4a, 0x2b,\n        0x72, 0x58, 0x48, 0x4e, 0x65, 0x4f, 0x38, 0x2b, 0x70, 0x6c, 0x37, 0x49, 0x42, 0x74, 0x66, 0x35, 0x67, 0x70,\n        0x4a, 0x76, 0x0a, 0x31, 0x6e, 0x78, 0x72, 0x45, 0x4b, 0x73, 0x75, 0x2b, 0x6e, 0x64, 0x48, 0x43, 0x6e, 0x46,\n        0x64, 0x6f, 0x38, 0x2f, 0x49, 0x46, 0x46, 0x4a, 0x6a, 0x70, 0x36, 0x73, 0x6f, 0x55, 0x4a, 0x4f, 0x5a, 0x52,\n        0x4b, 0x6e, 0x6f, 0x41, 0x4b, 0x34, 0x67, 0x6a, 0x34, 0x48, 0x30, 0x50, 0x76, 0x49, 0x79, 0x4d, 0x67, 0x4b,\n        0x61, 0x43, 0x43, 0x41, 0x55, 0x57, 0x70, 0x4a, 0x65, 0x76, 0x35, 0x42, 0x52, 0x0a, 0x42, 0x4f, 0x56, 0x38,\n        0x4f, 0x59, 0x34, 0x48, 0x48, 0x6f, 0x42, 0x6b, 0x47, 0x4d, 0x6e, 0x32, 0x71, 0x6a, 0x4d, 0x48, 0x78, 0x49,\n        0x6c, 0x71, 0x48, 0x50, 0x67, 0x59, 0x70, 0x41, 0x53, 0x50, 0x51, 0x77, 0x49, 0x44, 0x41, 0x51, 0x41, 0x42,\n        0x0a, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x45, 0x4e, 0x44, 0x20, 0x52, 0x53, 0x41, 0x20, 0x50, 0x55, 0x42, 0x4c,\n        0x49, 0x43, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a,\n    };\n\n    Crypto_DataBlob keyBlob = {.data = reinterpret_cast<uint8_t *>(pubKeyText), .len = sizeof(pubKeyText)};\n\n    uint8_t signText[] = {\n        0xac, 0x2b, 0x12, 0x56, 0x1c, 0xe1, 0x60, 0x49, 0xc2, 0xd9, 0x87, 0x89, 0xfb, 0xa3, 0xc5, 0x41, 0x64, 0x7f,\n        0x6f, 0x80, 0xc8, 0xdb, 0xb3, 0xdf, 0x25, 0x76, 0x4b, 0x1e, 0x51, 0xaa, 0x0a, 0x6d, 0x83, 0x49, 0xae, 0x00,\n        0x7a, 0x99, 0xf4, 0xc8, 0x98, 0x45, 0x71, 0xfc, 0x5e, 0xdb, 0xed, 0x31, 0xad, 0xf2, 0x35, 0x05, 0xe2, 0x3e,\n        0xf1, 0xcb, 0x96, 0xb2, 0xb9, 0x59, 0xaf, 0x30, 0x25, 0xb0, 0xda, 0x83, 0x18, 0x2b, 0x11, 0xa4, 0x93, 0x2d,\n        0x9e, 0x93, 0x99, 0x62, 0xdd, 0xea, 0x1b, 0xfa, 0x60, 0xb8, 0xea, 0x9c, 0xef, 0x4f, 0x2b, 0x9d, 0xd1, 0x3e,\n        0xe1, 0x6b, 0x24, 0x98, 0x9d, 0x32, 0xa3, 0x1e, 0x9d, 0x45, 0xe7, 0x3d, 0x51, 0x7e, 0x3b, 0x0c, 0xee, 0x3f,\n        0xca, 0x29, 0xd9, 0x02, 0xe5, 0xb8, 0xf5, 0x89, 0x06, 0xf4, 0xfe, 0x27, 0x44, 0xff, 0x38, 0xed, 0x5a, 0x0e,\n        0x89, 0x16, 0x15, 0x26, 0xf0, 0xb2, 0x4c, 0x95, 0xee, 0x0a, 0xd3, 0x61, 0xc7, 0xb2, 0x4b, 0xfd, 0x20, 0xb9,\n        0x83, 0x25, 0x43, 0x4d, 0xa0, 0x3d, 0xaa, 0x40, 0x7b, 0xac, 0x01, 0x48, 0x8e, 0x2a, 0x96, 0x11, 0xc0, 0x31,\n        0x51, 0x5b, 0xaf, 0xeb, 0x8b, 0xaf, 0xb5, 0x88, 0xcb, 0xe0, 0x97, 0x45, 0x36, 0xe9, 0x6e, 0x6e, 0xe0, 0x55,\n        0xea, 0xf4, 0xd2, 0x88, 0xbb, 0xc9, 0x85, 0x94, 0xd5, 0x65, 0xeb, 0xa3, 0x1c, 0xd1, 0xd6, 0xf5, 0x22, 0x29,\n        0xf1, 0x16, 0xa5, 0x53, 0x1b, 0xd0, 0x6c, 0xf6, 0x0d, 0xa8, 0xd4, 0xe4, 0xb2, 0x0a, 0x92, 0x64, 0x7a, 0x6d,\n        0xf2, 0x76, 0xf3, 0xb0, 0x08, 0x44, 0x31, 0x31, 0x90, 0x48, 0x9e, 0x2e, 0x03, 0xc7, 0xab, 0x5d, 0x7a, 0x07,\n        0x1f, 0x1d, 0x10, 0x21, 0x54, 0x60, 0x0d, 0x26, 0xe4, 0x1c, 0xc7, 0x82, 0x03, 0x65, 0x64, 0x70, 0x41, 0x68,\n        0x0f, 0xfa, 0x64, 0x3c,\n    };\n\n    Crypto_DataBlob signBlob = {.data = reinterpret_cast<uint8_t *>(signText), .len = sizeof(signText)};\n\n    // keypair\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"RSA2048\", &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return false;\n    }\n    ret = OH_CryptoAsymKeyGenerator_Convert(keyCtx, CRYPTO_PEM, &keyBlob, nullptr, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPair);\n    // verify\n    ret = OH_CryptoVerify_Create((const char *)\"RSA2048|PSS|SHA256|MGF1_SHA256\", &verify);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    ret = OH_CryptoVerify_Init(verify, pubKey);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    bool res = OH_CryptoVerify_Final(verify, &msgBlob, &signBlob);\n    if (ret != true) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n\n    OH_CryptoVerify_Destroy(verify);\n    OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n    OH_CryptoKeyPair_Destroy(keyPair);\n    return res;\n}\n"
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