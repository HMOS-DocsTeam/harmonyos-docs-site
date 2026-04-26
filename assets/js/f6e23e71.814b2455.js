"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["716943"], {
729617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_scrypt_ndk_crypto_key_derivation_using_scrypt_ndk_md_f6e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-derivation-crypto-key-derivation-using-scrypt-ndk-crypto-key-derivation-using-scrypt-ndk-md-f6e.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_scrypt_ndk_crypto_key_derivation_using_scrypt_ndk_md_f6e_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk/crypto-key-derivation-using-scrypt-ndk","title":"使用SCRYPT进行密钥派生(C/C++)","description":"对应的算法规格请查看密钥派生算法规格：SCRYPT。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk/crypto-key-derivation-using-scrypt-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用SCRYPT进行密钥派生(C/C++)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-scrypt-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SCRYPT进行密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt/"},"next":{"title":"使用X963KDF进行密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk/crypto-key-derivation-using-scrypt-ndk.md


const frontMatter = {
	title: '使用SCRYPT进行密钥派生(C/C++)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-scrypt-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SCRYPT进行密钥派生(C/C++)';

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
        id: "使用scrypt进行密钥派生cc",
        children: "使用SCRYPT进行密钥派生(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview#scrypt%E7%AE%97%E6%B3%95",
        children: "密钥派生算法规格：SCRYPT"
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
          }), "，指定字符串参数'SCRYPT'，创建密钥派生参数对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdfparams_setparam",
            children: "OH_CryptoKdfParams_SetParam"
          }), "，设置Scrypt所需的参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "密钥派生失败原因：下列参数未设置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_KEY_DATABLOB：用于生成派生密钥的原始密码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_SALT_DATABLOB：盐值。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_SCRYPT_N_UINT64：CPU/内存开销参数，必须是2的幂次方。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_SCRYPT_R_UINT64：块大小参数，影响并行度。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_SCRYPT_P_UINT64：并行化参数。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CRYPTO_KDF_SCRYPT_MAX_MEM_UINT64：最大内存限制（字节）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-kdf-h/capi-crypto-kdf-h#oh_cryptokdf_create",
            children: "OH_CryptoKdf_Create"
          }), "，指定字符串参数'SCRYPT'，创建密钥派生函数对象。"]
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
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include \"CryptoArchitectureKit/crypto_kdf.h\"\n#include <cstdio>\n#include <cstring>\n#include \"file.h\"\n\nstatic OH_Crypto_ErrCode doSetSaltAndPassword(OH_CryptoKdfParams **params)\n{\n    const char *password = \"123456\";\n    const char *salt = \"saltstring\";\n    Crypto_DataBlob saltBlob = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(salt)),\n        .len = strlen(salt)\n    };\n    Crypto_DataBlob passwordBlob = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(password)),\n        .len = strlen(password)\n    };\n    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_KEY_DATABLOB, &passwordBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SALT_DATABLOB, &saltBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    return CRYPTO_SUCCESS;\n}\n\n// 设置参数函数\nstatic OH_Crypto_ErrCode doScryptSetParams(OH_CryptoKdfParams **params)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_Create(\"SCRYPT\", params);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    uint64_t n = 1024;  // CPU/内存开销参数。\n    uint64_t r = 8;     // 块大小参数。\n    uint64_t p = 16;    // 并行化参数。\n    uint64_t maxMem = 1067008;  // 最大内存限制（字节）。\n\n    Crypto_DataBlob nData = { .data = reinterpret_cast<uint8_t *>(&n), .len = sizeof(uint64_t) };\n    Crypto_DataBlob rData = { .data = reinterpret_cast<uint8_t *>(&r), .len = sizeof(uint64_t) };\n    Crypto_DataBlob pData = { .data = reinterpret_cast<uint8_t *>(&p), .len = sizeof(uint64_t) };\n    Crypto_DataBlob maxMemData = { .data = reinterpret_cast<uint8_t *>(&maxMem), .len = sizeof(uint64_t) };\n\n    ret = doSetSaltAndPassword(params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SCRYPT_N_UINT64, &nData);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SCRYPT_R_UINT64, &rData);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SCRYPT_P_UINT64, &pData);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SCRYPT_MAX_MEM_UINT64, &maxMemData);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    return ret;\n\nend:\n    OH_CryptoKdfParams_Destroy(*params);\n    *params = nullptr;\n    return ret;\n}\n\nstatic OH_Crypto_ErrCode doScryptDerive(OH_CryptoKdfParams *params, uint32_t keyLength, Crypto_DataBlob *out)\n{\n    // 创建密钥派生函数对象。\n    OH_CryptoKdf *kdfCtx = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoKdf_Create(\"SCRYPT\", &kdfCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 派生密钥。\n    ret = OH_CryptoKdf_Derive(kdfCtx, params, keyLength, out);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdf_Destroy(kdfCtx);\n        return ret;\n    }\n\n    printf(\"Derived key length: %u\\n\", out->len);\n\n    OH_CryptoKdf_Destroy(kdfCtx);\n    return ret;\n}\n\nOH_Crypto_ErrCode doTestScrypt()\n{\n    OH_CryptoKdfParams *params = nullptr;\n    Crypto_DataBlob out = {0};\n    uint32_t keyLength = 32; // 生成32字节的密钥。\n\n    // 设置参数。\n    OH_Crypto_ErrCode ret = doScryptSetParams(&params);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 派生密钥。\n    ret = doScryptDerive(params, keyLength, &out);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKdfParams_Destroy(params);\n        return ret;\n    }\n\n    // 清理资源。\n    OH_Crypto_FreeDataBlob(&out);\n    OH_CryptoKdfParams_Destroy(params);\n    return CRYPTO_SUCCESS;\n}\n"
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