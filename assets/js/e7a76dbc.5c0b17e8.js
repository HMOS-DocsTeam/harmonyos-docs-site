"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["337001"], {
437414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_sym_key_randomly_ndk_crypto_generate_sym_key_randomly_ndk_md_e7a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-generate-sym-key-randomly-ndk-crypto-generate-sym-key-randomly-ndk-md-e7a.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_sym_key_randomly_ndk_crypto_generate_sym_key_randomly_ndk_md_e7a_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk/crypto-generate-sym-key-randomly-ndk","title":"随机生成对称密钥(C/C++)","description":"以AES和SM4为例，随机生成对称密钥（OH\\\\_CryptoSymKey）。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk/crypto-generate-sym-key-randomly-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"随机生成对称密钥(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-sym-key-randomly-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"随机生成对称密钥(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly/"},"next":{"title":"指定二进制数据转换对称密钥(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk/crypto-generate-sym-key-randomly-ndk.md


const frontMatter = {
	title: '随机生成对称密钥(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-sym-key-randomly-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '随机生成对称密钥(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
  "level": 2
}, {
  "value": "随机生成AES密钥",
  "id": "随机生成aes密钥",
  "level": 2
}, {
  "value": "随机生成SM4密钥",
  "id": "随机生成sm4密钥",
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
        id: "随机生成对称密钥cc",
        children: "随机生成对称密钥(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以AES和SM4为例，随机生成对称密钥（OH_CryptoSymKey）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对称密钥对象可用于后续加解密操作，二进制数据可用于存储或传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohcrypto.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "随机生成aes密钥",
      children: "随机生成AES密钥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#aes",
        children: "对称密钥生成和转换规格：AES"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create",
          children: "OH_CryptoSymKeyGenerator_Create"
        }), "，指定字符串参数'AES256'，创建密钥算法为AES、密钥长度为256位的对称密钥生成器（OH_CryptoSymKeyGenerator）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate",
          children: "OH_CryptoSymKeyGenerator_Generate"
        }), "，随机生成对称密钥对象（OH_CryptoSymKey）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkey_getkeydata",
          children: "OH_CryptoSymKey_GetKeyData"
        }), "，获取密钥对象的二进制数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_sym_key.h\"\n#include \"file.h\"\n\nOH_Crypto_ErrCode testGenerateSymKey()\n{\n    OH_CryptoSymKeyGenerator *ctx = nullptr;\n    OH_CryptoSymKey *keyCtx = nullptr;\n    Crypto_DataBlob out = {.data = nullptr, .len = 0};\n    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create(\"AES256\", &ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoSymKeyGenerator_Generate(ctx, &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSymKeyGenerator_Destroy(ctx);\n        return ret;\n    }\n    ret = OH_CryptoSymKey_GetKeyData(keyCtx, &out);\n    OH_CryptoSymKeyGenerator_Destroy(ctx);\n    OH_CryptoSymKey_Destroy(keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&out);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "随机生成sm4密钥",
      children: "随机生成SM4密钥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#sm4",
        children: "对称密钥生成和转换规格：SM4"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create",
          children: "OH_CryptoSymKeyGenerator_Create"
        }), "，指定字符串参数'SM4_128'，创建密钥算法为SM4、密钥长度为128位的对称密钥生成器（OH_CryptoSymKeyGenerator）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate",
          children: "OH_CryptoSymKeyGenerator_Generate"
        }), "，随机生成对称密钥对象（OH_CryptoSymKey）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkey_getkeydata",
          children: "OH_CryptoSymKey_GetKeyData"
        }), "，获取密钥对象的二进制数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_sym_key.h\"\n#include \"file.h\"\n\nOH_Crypto_ErrCode testGenerateSM4Key()\n{\n    OH_CryptoSymKeyGenerator *ctx = nullptr;\n    OH_CryptoSymKey *keyCtx = nullptr;\n    Crypto_DataBlob out = {.data = nullptr, .len = 0};\n    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create(\"SM4_128\", &ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoSymKeyGenerator_Generate(ctx, &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoSymKeyGenerator_Destroy(ctx);\n        return ret;\n    }\n    ret = OH_CryptoSymKey_GetKeyData(keyCtx, &out);\n    OH_CryptoSymKeyGenerator_Destroy(ctx);\n    OH_CryptoSymKey_Destroy(keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&out);\n    return ret;\n}\n"
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