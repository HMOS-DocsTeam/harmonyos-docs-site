"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["94461"], {
694667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_ciphertext_conversion_ndk_crypto_sm_2_ciphertext_conversion_ndk_md_2d3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-sm-2-ciphertext-conversion-ndk-crypto-sm-2-ciphertext-conversion-ndk-md-2d3.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_ciphertext_conversion_ndk_crypto_sm_2_ciphertext_conversion_ndk_md_2d3_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/crypto-sm2-ciphertext-conversion-ndk","title":"使用SM2密文格式转换(C/C++)","description":"当前支持的SM2密文格式为国密标准的ASN.1格式，其中各参数组合顺序为C1C3C2，具体参数含义请参考转换SM2密文格式。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/crypto-sm2-ciphertext-conversion-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":37,"frontMatter":{"title":"使用SM2密文格式转换(C/C++)","sidebar_position":37,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-ciphertext-conversion-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SM2密文格式转换(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion/"},"next":{"title":"签名验签介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/crypto-sm2-ciphertext-conversion-ndk.md


const frontMatter = {
	title: '使用SM2密文格式转换(C/C++)',
	sidebar_position: 37,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-ciphertext-conversion-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM2密文格式转换(C/C++)';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用sm2密文格式转换cc",
        children: "使用SM2密文格式转换(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的SM2密文格式为国密标准的ASN.1格式，其中各参数组合顺序为C1C3C2，具体参数含义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#%E8%BD%AC%E6%8D%A2sm2%E5%AF%86%E6%96%87%E6%A0%BC%E5%BC%8F",
        children: "转换SM2密文格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可指定SM2密文的参数，将其转换成符合国密标准的ASN.1格式密文。反之，也可以从国密标准的ASN.1格式密文中取出具体的SM2密文参数，便于开发者自行组合成其他格式的SM2密文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指定密文参数，生成标准ASN.1密文"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_create",
          children: "OH_CryptoSm2CiphertextSpec_Create"
        }), "，创建空的SM2密文规格对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_setitem",
          children: "OH_CryptoSm2CiphertextSpec_SetItem"
        }), "，设置密文的各个参数（C1.x、C1.y、C2、C3）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_encode",
          children: "OH_CryptoSm2CiphertextSpec_Encode"
        }), "，生成ASN.1格式的密文（当前密文转换仅支持SM3，实现中只校验hash长度是否为32字节）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用完毕后，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_destroy",
          children: "OH_CryptoSm2CiphertextSpec_Destroy"
        }), "销毁SM2密文规格对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n\nOH_Crypto_ErrCode doTestGenCipherTextBySpec()\n{\n    // 准备SM2密文参数。\n    uint8_t c1x[] = {45, 153, 88, 82, 104, 221, 226, 43, 174, 21, 122, 248, 5, 232, 105, 41, 92, 95, 102, 224,\n                     216, 149, 85, 236, 110, 6, 64, 188, 149, 70, 70, 183};\n    uint8_t c1y[] = {107, 93, 198, 247, 119, 18, 40, 110, 90, 156, 193, 158, 205, 113, 170, 128, 146, 109, 75,\n                     17, 181, 109, 110, 91, 149, 5, 110, 233, 209, 78, 229, 96};\n    uint8_t c2[] = {100, 227, 78, 195, 249, 179, 43, 70, 242, 69, 169, 10, 65, 123};\n    uint8_t c3[] = {87, 167, 167, 247, 88, 146, 203, 234, 83, 126, 117, 129, 52, 142, 82, 54, 152, 226, 201, 111,\n                    143, 115, 169, 125, 128, 42, 157, 31, 114, 198, 109, 244};\n\n    // 创建空的SM2密文规格对象。\n    OH_CryptoSm2CiphertextSpec *sm2CipherSpec = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoSm2CiphertextSpec_Create(nullptr, &sm2CipherSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 设置各个参数。\n    Crypto_DataBlob c1xBlob = {c1x, sizeof(c1x)};\n    Crypto_DataBlob c1yBlob = {c1y, sizeof(c1y)};\n    Crypto_DataBlob c2Blob = {c2, sizeof(c2)};\n    Crypto_DataBlob c3Blob = {c3, sizeof(c3)};\n\n    ret = OH_CryptoSm2CiphertextSpec_SetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C1_X, &c1xBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n        return ret;\n    }\n    ret = OH_CryptoSm2CiphertextSpec_SetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C1_Y, &c1yBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n        return ret;\n    }\n    ret = OH_CryptoSm2CiphertextSpec_SetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C2, &c2Blob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n        return ret;\n    }\n    ret = OH_CryptoSm2CiphertextSpec_SetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C3, &c3Blob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n        return ret;\n    }\n\n    // 编码为ASN.1格式。\n    Crypto_DataBlob encoded = { 0 };\n    ret = OH_CryptoSm2CiphertextSpec_Encode(sm2CipherSpec, &encoded);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n        return ret;\n    }\n\n    // 清理资源。\n    OH_Crypto_FreeDataBlob(&encoded);\n    OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从标准ASN.1密文中获取密文参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_create",
          children: "OH_CryptoSm2CiphertextSpec_Create"
        }), "，从ASN.1格式密文创建SM2密文规格对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_getitem",
          children: "OH_CryptoSm2CiphertextSpec_GetItem"
        }), "，获取密文中的各个参数（C1.x、C1.y、C2、C3）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用完毕后，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptosm2ciphertextspec_destroy",
          children: "OH_CryptoSm2CiphertextSpec_Destroy"
        }), "销毁SM2密文规格对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n\nOH_Crypto_ErrCode doTestGetCipherTextSpec()\n{\n    // 准备标准ASN.1格式密文。\n    uint8_t cipherTextArray[] = {\n        48, 118, 2, 32, 45, 153, 88, 82, 104, 221, 226, 43, 174, 21, 122, 248, 5, 232, 105,\n        41, 92, 95, 102, 224, 216, 149, 85, 236, 110, 6, 64, 188, 149, 70, 70, 183, 2, 32, 107,\n        93, 198, 247, 119, 18, 40, 110, 90, 156, 193, 158, 205, 113, 170, 128, 146, 109, 75, 17,\n        181, 109, 110, 91, 149, 5, 110, 233, 209, 78, 229, 96, 4, 32, 87, 167, 167, 247, 88, 146,\n        203, 234, 83, 126, 117, 129, 52, 142, 82, 54, 152, 226, 201, 111, 143, 115, 169, 125, 128,\n        42, 157, 31, 114, 198, 109, 244, 4, 14, 100, 227, 78, 195, 249, 179, 43, 70, 242, 69, 169,\n        10, 65, 123\n    };\n    Crypto_DataBlob cipherText = {cipherTextArray, sizeof(cipherTextArray)};\n\n    // 从ASN.1格式密文创建SM2密文规格对象。\n    OH_CryptoSm2CiphertextSpec *sm2CipherSpec = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoSm2CiphertextSpec_Create(&cipherText, &sm2CipherSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 获取各个参数。\n    Crypto_DataBlob c1x = { 0 };\n    Crypto_DataBlob c1y = { 0 };\n    Crypto_DataBlob c2 = { 0 };\n    Crypto_DataBlob c3 = { 0 };\n\n    ret = OH_CryptoSm2CiphertextSpec_GetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C1_X, &c1x);\n    if (ret != CRYPTO_SUCCESS) {\n        goto EXIT;\n    }\n    ret = OH_CryptoSm2CiphertextSpec_GetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C1_Y, &c1y);\n    if (ret != CRYPTO_SUCCESS) {\n        goto EXIT;\n    }\n    ret = OH_CryptoSm2CiphertextSpec_GetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C2, &c2);\n    if (ret != CRYPTO_SUCCESS) {\n        goto EXIT;\n    }\n    ret = OH_CryptoSm2CiphertextSpec_GetItem(sm2CipherSpec, CRYPTO_SM2_CIPHERTEXT_C3, &c3);\n    if (ret != CRYPTO_SUCCESS) {\n        goto EXIT;\n    }\n\nEXIT:\n    OH_Crypto_FreeDataBlob(&c1x);\n    OH_Crypto_FreeDataBlob(&c1y);\n    OH_Crypto_FreeDataBlob(&c2);\n    OH_Crypto_FreeDataBlob(&c3);\n    OH_CryptoSm2CiphertextSpec_Destroy(sm2CipherSpec);\n    return ret;\n}\n"
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