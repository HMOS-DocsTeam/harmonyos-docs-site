"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["288959"], {
996842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_pbkdf_2_ndk_crypto_key_derivation_using_pbkdf_2_ndk_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-derivation-crypto-key-derivation-using-pbkdf-2-ndk-crypto-key-derivation-using-pbkdf-2-ndk-md-378.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_pbkdf_2_ndk_crypto_key_derivation_using_pbkdf_2_ndk_md_378_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk/crypto-key-derivation-using-pbkdf2-ndk","title":"使用PBKDF2进行密钥派生(C/C++)","description":"对应的算法规格请查看密钥派生算法规格：PBKDF2。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk/crypto-key-derivation-using-pbkdf2-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用PBKDF2进行密钥派生(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-pbkdf2-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用PBKDF2进行密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2/"},"next":{"title":"使用HKDF进行密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk/crypto-key-derivation-using-pbkdf2-ndk.md


const frontMatter = {
	title: '使用PBKDF2进行密钥派生(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-pbkdf2-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用PBKDF2进行密钥派生(C/C++)';

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
        id: "使用pbkdf2进行密钥派生cc",
        children: "使用PBKDF2进行密钥派生(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview#pbkdf2%E7%AE%97%E6%B3%95",
        children: "密钥派生算法规格：PBKDF2"
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
          }), "，指定字符串参数'PBKDF2'，创建密钥派生参数对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdfparams_setparam",
            children: "OH_CryptoKdfParams_SetParam"
          }), "，设置PBKDF2所需的参数。示例如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_KEY_DATABLOB：用于生成派生密钥的原始密码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_SALT_DATABLOB：盐值。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_ITER_COUNT_INT：重复运算的次数，需要为正整数。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdf_create",
            children: "OH_CryptoKdf_Create"
          }), "，指定字符串参数'PBKDF2|SHA256'，创建密钥派生函数对象。"]
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
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <cstdio>\n#include <cstring>\n#include \"file.h\"\n\nstatic OH_Crypto_ErrCode setParams(OH_CryptoKdfParams **params)\n{\n    // 设置密码。\n    const char *password = \"123456\";\n    Crypto_DataBlob passwordBlob = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(password)),\n        .len = strlen(password)\n    };\n    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_KEY_DATABLOB, &passwordBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 设置盐值。\n    const char *salt = \"saltstring\";\n    Crypto_DataBlob saltBlob = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(salt)),\n        .len = strlen(salt)\n    };\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SALT_DATABLOB, &saltBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 设置迭代次数。\n    int iterations = 10000;\n    Crypto_DataBlob iterationsBlob = {\n        .data = reinterpret_cast<uint8_t *>(&iterations),\n        .len = sizeof(int)\n    };\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_ITER_COUNT_INT, &iterationsBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\nend:\n    OH_CryptoKdfParams_Destroy(*params);\n    *params = nullptr;\n    return ret;\n}\n\nOH_Crypto_ErrCode doTestPbkdf2()\n{\n    // 创建PBKDF2参数对象。\n    OH_CryptoKdfParams *params = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_Create(\"PBKDF2\", &params);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    ret = setParams(&params);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 创建密钥派生函数对象。\n    OH_CryptoKdf *kdfCtx = nullptr;\n    ret = OH_CryptoKdf_Create(\"PBKDF2|SHA256\", &kdfCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    // 派生密钥。\n    Crypto_DataBlob out = {0};\n    uint32_t keyLength = 32; // 生成32字节的密钥。\n    ret = OH_CryptoKdf_Derive(kdfCtx, params, keyLength, &out);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdf_Destroy(kdfCtx);\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    printf(\"Derived key length: %u\\n\", out.len);\n\n    // 清理资源。\n    OH_Crypto_FreeDataBlob(&out);\n    OH_CryptoKdf_Destroy(kdfCtx);\n    OH_CryptoKdfParams_Destroy(params);\n    return CRYPTO_SUCCESS;\n}\n"
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