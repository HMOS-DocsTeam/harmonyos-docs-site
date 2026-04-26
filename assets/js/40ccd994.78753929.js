"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["636316"], {
705362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_ecdsa_sign_sig_verify_ndk_crypto_ecdsa_sign_sig_verify_ndk_md_40c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-ecdsa-sign-sig-verify-ndk-crypto-ecdsa-sign-sig-verify-ndk-md-40c.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_ecdsa_sign_sig_verify_ndk_crypto_ecdsa_sign_sig_verify_ndk_md_40c_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify-ndk/crypto-ecdsa-sign-sig-verify-ndk","title":"使用ECDSA密钥对签名验签 (C/C++)","description":"对应的算法规格请查看签名验签算法规格：ECDSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify-ndk/crypto-ecdsa-sign-sig-verify-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify-ndk","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"使用ECDSA密钥对签名验签 (C/C++)","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-ecdsa-sign-sig-verify-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ECDSA密钥对签名验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify/"},"next":{"title":"使用SM2密钥对签名验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-ecdsa-sign-sig-verify-ndk/crypto-ecdsa-sign-sig-verify-ndk.md


const frontMatter = {
	title: '使用ECDSA密钥对签名验签 (C/C++)',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-ecdsa-sign-sig-verify-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ECDSA密钥对签名验签 (C/C++)';

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
        id: "使用ecdsa密钥对签名验签-cc",
        children: "使用ECDSA密钥对签名验签 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#ecdsa",
        children: "签名验签算法规格：ECDSA"
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
        }), "，指定字符串参数'ECC256|SHA256'，创建非对称密钥类型为ECC256、摘要算法为SHA256的Sign实例，用于完成签名操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_init",
          children: "OH_CryptoSign_Init"
        }), "，使用私钥", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymkeyapi-oh-cryptoprivkey/capi-cryptoasymkeyapi-oh-cryptoprivkey",
          children: "OH_CryptoPrivKey"
        }), "初始化Sign实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_update",
          children: "OH_CryptoSign_Update"
        }), "，传入待签名的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update，如果数据量较小，可以直接调用OH_CryptoSign_Final接口一次性传入。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_final",
          children: "OH_CryptoSign_Final"
        }), "，对数据进行签名。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptosign_destroy",
          children: "OH_CryptoSign_Destroy"
        }), "等释放内存。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_signature.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n\nstatic OH_Crypto_ErrCode doTestRsaPssSignSeg() {\n   OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n   OH_CryptoKeyPair *keyPair = nullptr;\n   OH_CryptoSign *sign = nullptr;\n   Crypto_DataBlob signData = {.data = nullptr, .len = 0};\n\n   uint8_t plainText[] = {\n      0xe4, 0x2b, 0xcc, 0x08, 0x11, 0x79, 0x16, 0x1b, 0x35, 0x7f, 0xb3, 0xaf, 0x40, 0x3b, 0x3f, 0x7c\n   }; // 待签名数据，仅供参考。\n   Crypto_DataBlob msgBlob = {\n      .data = reinterpret_cast<uint8_t *>(plainText),\n      .len = sizeof(plainText)\n   };\n\n   OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"ECC256\", &keyCtx);\n   if (ret != CRYPTO_SUCCESS) {\n      return ret;\n   }\n   ret = OH_CryptoAsymKeyGenerator_Generate(keyCtx, &keyPair);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n\n   OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPair);\n   ret = OH_CryptoSign_Create((const char *)\"ECC256|SHA256\", &sign);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n\n   ret = OH_CryptoSign_Init(sign, privKey);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n   ret = OH_CryptoSign_Update(sign, &msgBlob);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n   ret = OH_CryptoSign_Final(sign, nullptr, &signData);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n\n   OH_CryptoSign_Destroy(sign);\n   OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n   OH_CryptoKeyPair_Destroy(keyPair);\n   return CRYPTO_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验签开发步骤",
      children: "验签开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_create",
          children: "OH_CryptoVerify_Create"
        }), "，指定字符串参数'ECC256|SHA256'，创建非对称密钥类型为ECC256、摘要算法为SHA256的Verify实例，用于完成验签操作。"]
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
        children: "#include \"signing_signature_verification.h\"\n\nbool DoTestEcdsaSignature()\n{\n    OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    OH_CryptoVerify *verify = nullptr;\n\n    uint8_t plainText[] = {0xe4, 0x2b, 0xcc, 0x08, 0x11, 0x79, 0x16, 0x1b,\n                           0x35, 0x7f, 0xb3, 0xaf, 0x40, 0x3b, 0x3f, 0x7c};\n    Crypto_DataBlob msgBlob = {.data = reinterpret_cast<uint8_t *>(plainText), .len = sizeof(plainText)};\n\n    uint8_t pubKeyText[] = {0x30, 0x39, 0x30, 0x13, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x02, 0x01, 0x06, 0x08,\n                            0x2a, 0x86, 0x48, 0xce, 0x3d, 0x03, 0x01, 0x07, 0x03, 0x22, 0x00, 0x03, 0x4d, 0xe4, 0xbb,\n                            0x11, 0x10, 0x1a, 0xd2, 0x05, 0x74, 0xf1, 0x0b, 0xb4, 0x75, 0x57, 0xf4, 0x3e, 0x55, 0x14,\n                            0x17, 0x05, 0x4a, 0xb2, 0xfb, 0x8c, 0x84, 0x64, 0x38, 0x02, 0xa0, 0x2a, 0xa6, 0xf0};\n\n    Crypto_DataBlob keyBlob = {.data = reinterpret_cast<uint8_t *>(pubKeyText), .len = sizeof(pubKeyText)};\n\n    uint8_t signText[] = {0x30, 0x44, 0x02, 0x20, 0x21, 0x89, 0x99, 0xb1, 0x56, 0x4e, 0x3a, 0x2c, 0x16, 0x08,\n                          0xb5, 0x8a, 0x06, 0x6f, 0x67, 0x47, 0x1b, 0x04, 0x18, 0x7d, 0x53, 0x2d, 0xba, 0x00,\n                          0x38, 0xd9, 0xe3, 0xe7, 0x8c, 0xcf, 0x76, 0x83, 0x02, 0x20, 0x13, 0x54, 0x84, 0x9d,\n                          0x73, 0x40, 0xc3, 0x92, 0x66, 0xdc, 0x3e, 0xc9, 0xf1, 0x4c, 0x33, 0x84, 0x2a, 0x76,\n                          0xaf, 0xc6, 0x61, 0x84, 0x5c, 0xae, 0x4b, 0x0d, 0x3c, 0xb0, 0xc8, 0x04, 0x89, 0x71};\n\n    Crypto_DataBlob signBlob = {.data = reinterpret_cast<uint8_t *>(signText), .len = sizeof(signText)};\n\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    // keypair\n    ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"ECC256\", &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return false;\n    }\n    ret = OH_CryptoAsymKeyGenerator_Convert(keyCtx, CRYPTO_DER, &keyBlob, nullptr, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPair);\n    // verify\n    ret = OH_CryptoVerify_Create((const char *)\"ECC256|SHA256\", &verify);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    ret = OH_CryptoVerify_Init(verify, pubKey);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    bool res = OH_CryptoVerify_Final(verify, &msgBlob, &signBlob);\n    if (ret != true) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n\n    OH_CryptoVerify_Destroy(verify);\n    OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n    OH_CryptoKeyPair_Destroy(keyPair);\n    return res;\n}\n"
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