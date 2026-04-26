"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["824817"], {
913973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_recover_pkcs_1_ndk_crypto_rsa_sign_sig_verify_recover_pkcs_1_ndk_md_e33_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-rsa-sign-sig-verify-recover-pkcs-1-ndk-crypto-rsa-sign-sig-verify-recover-pkcs-1-ndk-md-e33.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_recover_pkcs_1_ndk_crypto_rsa_sign_sig_verify_recover_pkcs_1_ndk_md_e33_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk","title":"使用RSA密钥对（PKCS1模式）签名恢复(C/C++)","description":"对应的算法规格请查看验签算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用RSA密钥对（PKCS1模式）签名恢复(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA密钥对（PKCS1模式）签名及签名恢复(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1/"},"next":{"title":"使用RSA密钥对分段签名验签（PKCS1模式）(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk.md


const frontMatter = {
	title: '使用RSA密钥对（PKCS1模式）签名恢复(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA密钥对（PKCS1模式）签名恢复(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
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
        id: "使用rsa密钥对pkcs1模式签名恢复cc",
        children: "使用RSA密钥对（PKCS1模式）签名恢复(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#rsa",
        children: "验签算法规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohcrypto.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_create",
          children: "OH_CryptoVerify_Create"
        }), "，指定字符串参数'RSA1024|PKCS1|SHA256|Recover'，与签名的Sign实例保持一致。创建Verify实例，用于完成验签操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_init",
          children: "OH_CryptoVerify_Init"
        }), "，使用公钥（OH_CryptoPubKey）初始化Verify实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoverify_recover",
          children: "OH_CryptoVerify_Recover"
        }), "，对数据进行签名恢复。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"signing_signature_verification.h\"\n\nOH_Crypto_ErrCode DoTestRsaSignatureRecover()\n{\n    OH_CryptoAsymKeyGenerator *keyCtx = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    OH_CryptoVerify *verify = nullptr;\n\n    uint8_t plainText[] = {0xc4, 0xa5, 0xe5, 0x45, 0xee, 0x71, 0x5e, 0x3b, 0x24, 0x1d, 0x7e,\n                           0x62, 0xd6, 0x6b, 0xab, 0x98, 0x88, 0x0f, 0xaf, 0x1e, 0x96, 0xa0,\n                           0x6c, 0xa5, 0x0d, 0x29, 0xfd, 0xcc, 0xef, 0xf6, 0x2b, 0x92};\n    Crypto_DataBlob msgBlob = {.data = reinterpret_cast<uint8_t *>(plainText), .len = sizeof(plainText)};\n\n    uint8_t pubKeyText[] = {\n        0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x42, 0x45, 0x47, 0x49, 0x4e, 0x20, 0x52, 0x53, 0x41, 0x20, 0x50, 0x55, 0x42,\n        0x4c, 0x49, 0x43, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a, 0x4d, 0x49, 0x47, 0x4a, 0x41,\n        0x6f, 0x47, 0x42, 0x41, 0x4b, 0x72, 0x55, 0x74, 0x74, 0x64, 0x76, 0x73, 0x2b, 0x62, 0x6e, 0x4d, 0x2f, 0x6f,\n        0x4e, 0x75, 0x39, 0x45, 0x42, 0x78, 0x35, 0x64, 0x49, 0x6d, 0x61, 0x70, 0x52, 0x67, 0x4d, 0x6a, 0x4b, 0x41,\n        0x38, 0x51, 0x48, 0x4b, 0x61, 0x75, 0x2f, 0x6c, 0x58, 0x50, 0x50, 0x68, 0x76, 0x38, 0x30, 0x69, 0x59, 0x4c,\n        0x46, 0x2b, 0x79, 0x35, 0x35, 0x0a, 0x6d, 0x42, 0x2f, 0x38, 0x2b, 0x4b, 0x68, 0x34, 0x34, 0x43, 0x2b, 0x5a,\n        0x76, 0x6f, 0x78, 0x5a, 0x66, 0x38, 0x78, 0x34, 0x6e, 0x78, 0x6f, 0x71, 0x76, 0x4f, 0x6f, 0x73, 0x32, 0x44,\n        0x55, 0x69, 0x51, 0x44, 0x4f, 0x4a, 0x35, 0x63, 0x57, 0x68, 0x5a, 0x62, 0x4d, 0x71, 0x4d, 0x42, 0x71, 0x62,\n        0x39, 0x30, 0x4e, 0x39, 0x63, 0x2f, 0x44, 0x51, 0x67, 0x39, 0x34, 0x63, 0x52, 0x7a, 0x35, 0x66, 0x0a, 0x68,\n        0x55, 0x66, 0x6d, 0x66, 0x6d, 0x54, 0x41, 0x46, 0x6a, 0x5a, 0x53, 0x33, 0x78, 0x6c, 0x78, 0x77, 0x6e, 0x50,\n        0x77, 0x66, 0x66, 0x39, 0x71, 0x44, 0x79, 0x4c, 0x63, 0x5a, 0x55, 0x6b, 0x6e, 0x64, 0x43, 0x30, 0x50, 0x77,\n        0x72, 0x6c, 0x38, 0x72, 0x70, 0x4b, 0x7a, 0x50, 0x47, 0x63, 0x71, 0x4e, 0x67, 0x33, 0x5a, 0x41, 0x67, 0x4d,\n        0x42, 0x41, 0x41, 0x45, 0x3d, 0x0a, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x45, 0x4e, 0x44, 0x20, 0x52, 0x53, 0x41,\n        0x20, 0x50, 0x55, 0x42, 0x4c, 0x49, 0x43, 0x20, 0x4b, 0x45, 0x59, 0x2d, 0x2d, 0x2d, 0x2d, 0x2d, 0x0a,\n    };\n\n    Crypto_DataBlob keyBlob = {.data = reinterpret_cast<uint8_t *>(pubKeyText), .len = sizeof(pubKeyText)};\n\n    uint8_t signText[] = {\n        0x1f, 0xe3, 0xcf, 0x8d, 0x94, 0xb4, 0xa0, 0x9e, 0xf1, 0x0c, 0x38, 0x59, 0xcb, 0x5b, 0x89, 0xc9,\n        0x66, 0x8b, 0xfd, 0x8d, 0x1e, 0x37, 0xfa, 0x5e, 0x1b, 0xb1, 0x51, 0x07, 0xf1, 0xb0, 0x7d, 0x18,\n        0x2d, 0x82, 0x2a, 0x04, 0xa4, 0x4e, 0x94, 0x7e, 0x76, 0xb8, 0xa4, 0x78, 0x90, 0x2f, 0x43, 0x1d,\n        0x95, 0x80, 0xd7, 0xb3, 0x46, 0x4d, 0x58, 0x4b, 0xcd, 0x1f, 0x1d, 0xb3, 0x1f, 0x6b, 0x15, 0xd8,\n        0x33, 0x51, 0x1d, 0x36, 0x12, 0x39, 0x92, 0xb4, 0x4d, 0xe2, 0x89, 0x26, 0x01, 0xe9, 0x1f, 0xc0,\n        0x9c, 0x7c, 0xd8, 0xeb, 0x47, 0xff, 0xfb, 0x5d, 0x98, 0x9a, 0x02, 0x6a, 0x16, 0x37, 0xb1, 0xf5,\n        0x08, 0x4d, 0xd7, 0xa0, 0xf2, 0x9e, 0xbe, 0x4b, 0x54, 0x77, 0x94, 0x95, 0x4b, 0x97, 0x10, 0x22,\n        0x49, 0xa5, 0x2e, 0x05, 0x86, 0xfd, 0x6f, 0x9a, 0x40, 0xe6, 0x43, 0xab, 0xc5, 0xbc, 0xac, 0x21,\n    };\n\n    Crypto_DataBlob signBlob = {.data = reinterpret_cast<uint8_t *>(signText), .len = sizeof(signText)};\n\n    // keypair\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    ret = OH_CryptoAsymKeyGenerator_Create((const char *)\"RSA2048\", &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoAsymKeyGenerator_Convert(keyCtx, CRYPTO_PEM, &keyBlob, nullptr, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return ret;\n    }\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPair);\n    // verify\n    ret = OH_CryptoVerify_Create((const char *)\"RSA1024|PKCS1|SHA256|Recover\", &verify);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return ret;\n    }\n    ret = OH_CryptoVerify_Init(verify, pubKey);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return ret;\n    }\n    Crypto_DataBlob rawSignData = {.data = nullptr, .len = 0};\n    ret = OH_CryptoVerify_Recover(verify, (Crypto_DataBlob *)&signBlob, &rawSignData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoVerify_Destroy(verify);\n        OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n        return ret;\n    }\n\n    OH_CryptoVerify_Destroy(verify);\n    OH_CryptoAsymKeyGenerator_Destroy(keyCtx);\n    OH_CryptoKeyPair_Destroy(keyPair);\n    return ret;\n}\n"
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