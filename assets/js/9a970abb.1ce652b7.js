"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["272825"], {
175936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_sm_2_sign_sig_verify_pkcs_1_ndk_crypto_sm_2_sign_sig_verify_pkcs_1_ndk_md_9a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-sm-2-sign-sig-verify-pkcs-1-ndk-crypto-sm-2-sign-sig-verify-pkcs-1-ndk-md-9a9.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_sm_2_sign_sig_verify_pkcs_1_ndk_crypto_sm_2_sign_sig_verify_pkcs_1_ndk_md_9a9_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1-ndk/crypto-sm2-sign-sig-verify-pkcs1-ndk","title":"使用SM2密钥对签名验签 (C/C++)","description":"对应的算法规格请查看签名验签算法规格：SM2。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1-ndk/crypto-sm2-sign-sig-verify-pkcs1-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1-ndk","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"使用SM2密钥对签名验签 (C/C++)","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-sign-sig-verify-pkcs1-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SM2密钥对签名验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1/"},"next":{"title":"SM2签名数据格式转换(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1-ndk/crypto-sm2-sign-sig-verify-pkcs1-ndk.md


const frontMatter = {
	title: '使用SM2密钥对签名验签 (C/C++)',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-sign-sig-verify-pkcs1-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM2密钥对签名验签 (C/C++)';

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
        id: "使用sm2密钥对签名验签-cc",
        children: "使用SM2密钥对签名验签 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#sm2",
        children: "签名验签算法规格：SM2"
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
        }), "，指定字符串参数'SM2_256|SM3'，创建非对称密钥类型为SM2_256、摘要算法为SM3的Sign实例，用于完成签名操作。"]
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
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n#include \"CryptoArchitectureKit/crypto_signature.h\"\n\nstatic OH_Crypto_ErrCode doSm2Test() {\n   OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n   OH_CryptoKeyPair *keyPair = nullptr;\n   OH_CryptoSign *sign = nullptr;\n\n   uint8_t plainText[] = {\n      0x96, 0x46, 0x2e, 0xde, 0x3f, 0x47, 0xbf, 0xd6, 0x87, 0x48, 0x36, 0x1d, 0x75, 0x35, 0xbd, 0xbc,\n      0x6b, 0x06, 0xe8, 0xb3, 0x68, 0x91, 0x53, 0xce, 0x76, 0x5d, 0x24, 0xda, 0xdc, 0xc4, 0x9f, 0x94,\n   };\n   Crypto_DataBlob msgBlob = {\n      .data = reinterpret_cast<uint8_t *>(plainText),\n      .len = sizeof(plainText)};\n\n   OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"SM2_256\", &keyCtx);\n   if (ret != CRYPTO_SUCCESS) {\n      return ret;\n   }\n   ret = OH_CryptoAsymKeyGenerator_Generate(keyCtx, &keyPair);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      return ret;\n   }\n\n   OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPair);\n   ret = OH_CryptoSign_Create((const char *)\"SM2_256|SM3\", &sign);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n   ret = OH_CryptoSign_Init(sign, privKey);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n\n   ret = OH_CryptoSign_Update(sign, &msgBlob);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n\n   Crypto_DataBlob signBlob = {.data = nullptr, .len = 0};\n   ret = OH_CryptoSign_Final(sign, nullptr, &signBlob);\n   if (ret != CRYPTO_SUCCESS) {\n      OH_CryptoSign_Destroy(sign);\n      OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n      OH_CryptoKeyPair_Destroy(keyPair);\n      return ret;\n   }\n   OH_CryptoSign_Destroy(sign);\n   OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n   OH_CryptoKeyPair_Destroy(keyPair);\n   OH_Crypto_FreeDataBlob(&signBlob);\n   return CRYPTO_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验签开发步骤",
      children: "验签开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_create",
          children: "OH_CryptoVerify_Create"
        }), "，指定字符串参数'SM2_256|SM3'，创建非对称密钥类型为SM2_256、摘要算法为SM3的Verify实例，用于完成验签操作。"]
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
        children: "#include \"signing_signature_verification.h\"\n\nbool DoTestSm2Signature()\n{\n    OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    OH_CryptoVerify *verify = nullptr;\n\n    uint8_t plainText[] = {\n        0x96, 0x46, 0x2e, 0xde, 0x3f, 0x47, 0xbf, 0xd6, 0x87, 0x48, 0x36, 0x1d, 0x75, 0x35, 0xbd, 0xbc,\n        0x6b, 0x06, 0xe8, 0xb3, 0x68, 0x91, 0x53, 0xce, 0x76, 0x5d, 0x24, 0xda, 0xdc, 0xc4, 0x9f, 0x94,\n    };\n    Crypto_DataBlob msgBlob = {.data = reinterpret_cast<uint8_t *>(plainText), .len = sizeof(plainText)};\n\n    uint8_t pubKeyText[] = {\n        0x30, 0x59, 0x30, 0x13, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x02, 0x01, 0x06, 0x08, 0x2a,\n        0x81, 0x1c, 0xcf, 0x55, 0x01, 0x82, 0x2d, 0x03, 0x42, 0x00, 0x04, 0x80, 0x5b, 0x78, 0x04, 0xd7,\n        0xcf, 0xc3, 0x99, 0x63, 0xae, 0x88, 0xcd, 0xfc, 0xd6, 0x18, 0xf4, 0x08, 0xe8, 0xe3, 0x68, 0x47,\n        0x4f, 0x44, 0x0e, 0xb2, 0xba, 0x3a, 0xb3, 0x10, 0xf1, 0xc9, 0xd0, 0x84, 0xe2, 0xa4, 0x47, 0xbe,\n        0x72, 0xae, 0xf8, 0x6a, 0xeb, 0x6e, 0x10, 0xab, 0x52, 0x6b, 0x6a, 0x58, 0xc6, 0xb5, 0x78, 0xaa,\n        0x70, 0xe5, 0x58, 0x20, 0x4e, 0x34, 0x42, 0x77, 0x08, 0x27, 0x11,\n    };\n\n    Crypto_DataBlob keyBlob = {.data = reinterpret_cast<uint8_t *>(pubKeyText), .len = sizeof(pubKeyText)};\n\n    uint8_t signText[] = {\n        0x30, 0x45, 0x02, 0x21, 0x00, 0xf4, 0xe7, 0x9d, 0x35, 0x33, 0xa6, 0x86, 0x2e, 0x2a, 0x97, 0x72, 0xc9, 0x46,\n        0x79, 0x65, 0xca, 0x4a, 0x71, 0x34, 0xca, 0xf7, 0x58, 0xb3, 0x26, 0xa5, 0xdb, 0xfa, 0x8b, 0xbe, 0xbf, 0x5f,\n        0x90, 0x02, 0x20, 0x53, 0xb4, 0x23, 0xb1, 0xe2, 0x8f, 0x2f, 0xe9, 0xc8, 0x22, 0xef, 0xab, 0x9b, 0x13, 0x08,\n        0x75, 0x8e, 0xb1, 0x9c, 0x59, 0xe5, 0xd6, 0x64, 0x35, 0xf5, 0xd1, 0xde, 0xfa, 0xfe, 0x80, 0x37, 0x1a,\n    };\n\n    Crypto_DataBlob signBlob = {.data = reinterpret_cast<uint8_t *>(signText), .len = sizeof(signText)};\n\n    // keypair\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"SM2_256\", &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return false;\n    }\n    ret = OH_CryptoAsymKeyGenerator_Convert(keyCtx, CRYPTO_DER, &keyBlob, nullptr, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPair);\n    // verify\n    ret = OH_CryptoVerify_Create((const char *)\"SM2_256|SM3\", &verify);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    ret = OH_CryptoVerify_Init(verify, pubKey);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n    bool res = OH_CryptoVerify_Final(verify, &msgBlob, &signBlob);\n    if (ret != true) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return false;\n    }\n\n    OH_CryptoVerify_Destroy(verify);\n    OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n    OH_CryptoKeyPair_Destroy(keyPair);\n    return res;\n}\n"
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