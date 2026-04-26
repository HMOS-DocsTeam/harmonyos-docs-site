"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["912466"], {
60614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_agreement_crypto_key_agreement_dev_crypto_key_agreement_using_dh_ndk_crypto_key_agreement_using_dh_ndk_md_25f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-agreement-crypto-key-agreement-dev-crypto-key-agreement-using-dh-ndk-crypto-key-agreement-using-dh-ndk-md-25f.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_agreement_crypto_key_agreement_dev_crypto_key_agreement_using_dh_ndk_crypto_key_agreement_using_dh_ndk_md_25f_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk/crypto-key-agreement-using-dh-ndk","title":"使用DH进行密钥协商(C/C++)","description":"对应的算法规格请查看密钥协商算法规格：DH。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk/crypto-key-agreement-using-dh-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用DH进行密钥协商(C/C++)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-agreement-using-dh-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用DH进行密钥协商(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh/"},"next":{"title":"消息摘要计算介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk/crypto-key-agreement-using-dh-ndk.md


const frontMatter = {
	title: '使用DH进行密钥协商(C/C++)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-agreement-using-dh-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用DH进行密钥协商(C/C++)';

const assets = {

};



const toc = [{
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
        id: "使用dh进行密钥协商cc",
        children: "使用DH进行密钥协商(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview#dh",
        children: "密钥协商算法规格：DH"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create",
            children: "OH_CryptoAsymKeyGenerator_Create"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_generate",
            children: "OH_CryptoAsymKeyGenerator_Generate"
          }), "生成密钥算法为DH_modp1536的非对称密钥（keyPair）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成DH非对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#dh",
            children: "非对称密钥生成和转换规格：DH"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk",
            children: "随机生成非对称密钥对"
          }), "理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-key-agreement-h/capi-crypto-key-agreement-h#oh_cryptokeyagreement_create",
            children: "OH_CryptoKeyAgreement_Create"
          }), "，指定字符串参数'DH_modp1536'，创建密钥算法为DH_modp1536的密钥协议生成器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-key-agreement-h/capi-crypto-key-agreement-h#oh_cryptokeyagreement_generatesecret",
            children: "OH_CryptoKeyAgreement_GenerateSecret"
          }), "，基于传入的私钥（keyPair.priKey）与公钥（keyPair.pubKey）进行密钥协商，返回共享密钥。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include \"CryptoArchitectureKit/crypto_key_agreement.h\"\n#include \"file.h\"\n#include <cstdio>\n#include <cstring>\n\nstatic OH_Crypto_ErrCode GenerateSecret(OH_CryptoKeyAgreement *dhKeyAgreement, OH_CryptoKeyPair *keyPairA,\n    OH_CryptoKeyPair *keyPairB, Crypto_DataBlob *secret)\n{\n    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPairA);\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPairB);\n    return OH_CryptoKeyAgreement_GenerateSecret(dhKeyAgreement, privKey, pubKey, secret);\n}\n\nstatic OH_Crypto_ErrCode compareSecrets(const Crypto_DataBlob *secret1, const Crypto_DataBlob *secret2)\n{\n    if ((secret1->len == secret2->len) &&\n        (memcmp(secret1->data, secret2->data, secret1->len) == 0)) {\n        return CRYPTO_SUCCESS;\n    }\n    return CRYPTO_OPERTION_ERROR;\n}\n\nOH_Crypto_ErrCode doTestDHKeyAgreement()\n{\n    OH_CryptoAsymKeyGenerator *dhGen = nullptr;\n    OH_CryptoKeyPair *keyPairA = nullptr;\n    OH_CryptoKeyPair *keyPairB = nullptr;\n    OH_CryptoKeyAgreement *dhKeyAgreement = nullptr;\n    Crypto_DataBlob secret1 = { 0 };\n    Crypto_DataBlob secret2 = { 0 };\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create(\"DH_modp1536\", &dhGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 生成公私钥对A 和 B。\n    ret = OH_CryptoAsymKeyGenerator_Generate(dhGen, &keyPairA);\n    if (ret != CRYPTO_SUCCESS) {\n        goto goto_cleanup;\n    }\n\n    ret = OH_CryptoAsymKeyGenerator_Generate(dhGen, &keyPairB);\n    if (ret != CRYPTO_SUCCESS) {\n        goto goto_cleanup;\n    }\n\n    ret = OH_CryptoKeyAgreement_Create(\"DH_modp1536\", &dhKeyAgreement);\n    if (ret != CRYPTO_SUCCESS) {\n        goto goto_cleanup;\n    }\n\n    // 使用A的公钥和B的私钥进行密钥协商。\n    ret = GenerateSecret(dhKeyAgreement, keyPairB, keyPairA, &secret1);\n    if (ret != CRYPTO_SUCCESS) {\n        goto goto_cleanup;\n    }\n\n    // 使用B的公钥和A的私钥进行密钥协商。\n    ret = GenerateSecret(dhKeyAgreement, keyPairA, keyPairB, &secret2);\n    if (ret != CRYPTO_SUCCESS) {\n        goto goto_cleanup;\n    }\n\n    // 比较两次协商的结果。\n    ret = compareSecrets(&secret1, &secret2);\n    if (ret != CRYPTO_SUCCESS) {\n        printf(\"dh result is not equal\\n\");\n        goto goto_cleanup;\n    }\n\ngoto_cleanup:\n    OH_Crypto_FreeDataBlob(&secret1);\n    OH_Crypto_FreeDataBlob(&secret2);\n    OH_CryptoKeyAgreement_Destroy(dhKeyAgreement);\n    OH_CryptoKeyPair_Destroy(keyPairA);\n    OH_CryptoKeyPair_Destroy(keyPairB);\n    OH_CryptoAsymKeyGenerator_Destroy(dhGen);\n    return ret;\n}\n"
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