"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["447367"], {
917335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_x_963_kdf_ndk_crypto_key_derivation_using_x_963_kdf_ndk_md_db9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-derivation-crypto-key-derivation-using-x-963-kdf-ndk-crypto-key-derivation-using-x-963-kdf-ndk-md-db9.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_x_963_kdf_ndk_crypto_key_derivation_using_x_963_kdf_ndk_md_db9_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk/crypto-key-derivation-using-x963kdf-ndk","title":"使用X963KDF进行密钥派生(C/C++)","description":"从API version 22开始，算法库支持使用该算法进行密钥派生操作。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk/crypto-key-derivation-using-x963kdf-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用X963KDF进行密钥派生(C/C++)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-x963kdf-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用X963KDF进行密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf/"},"next":{"title":"跨平台数据兼容实践指导","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-development-practice/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk/crypto-key-derivation-using-x963kdf-ndk.md


const frontMatter = {
	title: '使用X963KDF进行密钥派生(C/C++)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-x963kdf-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用X963KDF进行密钥派生(C/C++)';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用x963kdf进行密钥派生cc",
        children: "使用X963KDF进行密钥派生(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，算法库支持使用该算法进行密钥派生操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview#x963kdf%E7%AE%97%E6%B3%95",
        children: "密钥派生算法规格：X963KDF"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdfparams_create",
            children: "OH_CryptoKdfParams_Create"
          }), "，指定字符串参数'X963KDF'，创建密钥派生参数对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdfparams_setparam",
            children: "OH_CryptoKdfParams_SetParam"
          }), "，设置X963KDF所需的参数。示例如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_KEY_DATABLOB：用于生成派生密钥的原始密钥材料。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_INFO_DATABLOB：应用程序特定的信息（可选）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdf_create",
            children: "OH_CryptoKdf_Create"
          }), "，指定字符串参数'X963KDF|SHA256'，创建密钥派生函数对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdf_derive",
            children: "OH_CryptoKdf_Derive"
          }), "，指定目标密钥的字节长度，进行密钥派生。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <cstdio>\n#include <cstring>\n#include \"file.h\"\n\nOH_Crypto_ErrCode doTestX963Kdf()\n{\n    // 创建X963KDF参数对象。\n    OH_CryptoKdfParams *params = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_Create(\"X963KDF\", &params);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 设置原始密钥材料。\n    const char *keyData = \"012345678901234567890123456789\";\n    Crypto_DataBlob key = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(keyData)),\n        .len = strlen(keyData)\n    };\n    ret = OH_CryptoKdfParams_SetParam(params, CRYPTO_KDF_KEY_DATABLOB, &key);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    // 设置应用程序特定信息。\n    const char *infoData = \"infostring\";\n    Crypto_DataBlob info = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(infoData)),\n        .len = strlen(infoData)\n    };\n    ret = OH_CryptoKdfParams_SetParam(params, CRYPTO_KDF_INFO_DATABLOB, &info);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    // 创建密钥派生函数对象。\n    OH_CryptoKdf *kdfCtx = nullptr;\n    ret = OH_CryptoKdf_Create(\"X963KDF|SHA256\", &kdfCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    // 派生密钥。\n    Crypto_DataBlob out = {0};\n    uint32_t keyLength = 32; // 生成32字节的密钥。\n    ret = OH_CryptoKdf_Derive(kdfCtx, params, keyLength, &out);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdf_Destroy(kdfCtx);\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    printf(\"Derived key length: %u\\n\", out.len);\n\n    // 清理资源。\n    OH_Crypto_FreeDataBlob(&out);\n    OH_CryptoKdf_Destroy(kdfCtx);\n    OH_CryptoKdfParams_Destroy(params);\n    return CRYPTO_SUCCESS;\n}\n"
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