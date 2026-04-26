"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["21838"], {
970934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_compute_mac_crypto_compute_hmac_ndk_crypto_compute_hmac_ndk_md_367_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-compute-mac-crypto-compute-hmac-ndk-crypto-compute-hmac-ndk-md-367.json
var site_docs_system_security_crypto_architecture_kit_crypto_compute_mac_crypto_compute_hmac_ndk_crypto_compute_hmac_ndk_md_367_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk/crypto-compute-hmac-ndk","title":"消息认证码计算HMAC(C/C++)","description":"HMAC通过指定摘要算法，以通信双方共享密钥与消息作为输入，生成消息认证码用于检验传递报文的完整性。HMAC在消息摘要算法的基础上增加了密钥的输入，确保了信息的正确性。生成的消息认证码为固定长度。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk/crypto-compute-hmac-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk","slug":"/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"消息认证码计算HMAC(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-hmac-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"消息认证码计算HMAC(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac/"},"next":{"title":"消息认证码计算CMAC(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-cmac/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac-ndk/crypto-compute-hmac-ndk.md


const frontMatter = {
	title: '消息认证码计算HMAC(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-hmac-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '消息认证码计算HMAC(C/C++)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "HMAC（一次性传入）",
  "id": "hmac一次性传入",
  "level": 3
}, {
  "value": "HMAC（分段传入）",
  "id": "hmac分段传入",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "消息认证码计算hmaccc",
        children: "消息认证码计算HMAC(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMAC通过指定摘要算法，以通信双方共享密钥与消息作为输入，生成消息认证码用于检验传递报文的完整性。HMAC在消息摘要算法的基础上增加了密钥的输入，确保了信息的正确性。生成的消息认证码为固定长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用update接口传入数据时，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hmac%E4%B8%80%E6%AC%A1%E6%80%A7%E4%BC%A0%E5%85%A5",
        children: "一次性传入"
      }), "，也可以把数据人工", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hmac%E5%88%86%E6%AE%B5%E4%BC%A0%E5%85%A5",
        children: "分段传入"
      }), "。对于同一段数据而言，是否分段，计算结果没有差异。对于数据量较大的数据，开发者可以根据实际需求选择是否分段传入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面分别提供两种方式的示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hmac一次性传入",
      children: "HMAC（一次性传入）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create",
          children: "OH_CryptoSymKeyGenerator_Create"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate",
          children: "OH_CryptoSymKeyGenerator_Generate"
        }), "生成密钥算法为HMAC的对称密钥（symKey）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_create",
          children: "OH_CryptoMac_Create"
        }), "，指定字符串参数'HMAC'，创建MAC算法为HMAC的MAC生成器。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_setparam",
          children: "OH_CryptoMac_SetParam"
        }), "，指定参数CRYPTO_MAC_DIGEST_NAME_STR，设置摘要算法名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_init",
          children: "OH_CryptoMac_Init"
        }), "，指定共享对称密钥（symKey），初始化MAC对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_update",
          children: "OH_CryptoMac_Update"
        }), "，传入自定义消息，进行消息认证码计算。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_final",
          children: "OH_CryptoMac_Final"
        }), "，获取MAC计算结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_getlength",
          children: "OH_CryptoMac_GetLength"
        }), "，获取MAC消息认证码的长度，单位为字节。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <cstdio>\n#include <cstring>\n\nstatic OH_CryptoSymKey *GenerateHmacKey(const char *algoName)\n{\n    OH_CryptoSymKeyGenerator *keyGen = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create(algoName, &keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return nullptr;\n    }\n    OH_CryptoSymKey *keyCtx = nullptr;\n    ret = OH_CryptoSymKeyGenerator_Generate(keyGen, &keyCtx);\n    OH_CryptoSymKeyGenerator_Destroy(keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return nullptr;\n    }\n    return keyCtx;\n}\n\nstatic OH_Crypto_ErrCode CreateHmacContext(OH_CryptoSymKey *keyCtx, OH_CryptoMac **ctx)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoMac_Create(\"HMAC\", ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 设置摘要算法名称为SM3。\n    const char *digestName = \"SM3\";\n    Crypto_DataBlob digestNameData = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(digestName)),\n        .len = strlen(digestName)\n    };\n    ret = OH_CryptoMac_SetParam(*ctx, CRYPTO_MAC_DIGEST_NAME_STR, &digestNameData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoMac_Destroy(*ctx);\n        return ret;\n    }\n\n    // 初始化HMAC计算。\n    ret = OH_CryptoMac_Init(*ctx, keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoMac_Destroy(*ctx);\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode UpdateHmacData(OH_CryptoMac *ctx)\n{\n    // 一次性传入所有数据。\n    const char *message = \"hmacTestMessage\";\n    Crypto_DataBlob input = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(message)),\n        .len = strlen(message)\n    };\n    OH_Crypto_ErrCode ret = OH_CryptoMac_Update(ctx, &input);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode FinalizeHmac(OH_CryptoMac *ctx, Crypto_DataBlob *out, uint32_t *macLen)\n{\n    // 完成HMAC计算并获取结果。\n    OH_Crypto_ErrCode ret = OH_CryptoMac_Final(ctx, out);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 获取HMAC值的长度。\n    ret = OH_CryptoMac_GetLength(ctx, macLen);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_Crypto_FreeDataBlob(out);\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nOH_Crypto_ErrCode doTestHmacOnce()\n{\n    OH_CryptoSymKey *keyCtx = nullptr;\n    OH_CryptoMac *ctx = nullptr;\n    Crypto_DataBlob out = {0};\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    uint32_t macLen = 0;\n\n    // 生成HMAC密钥，使用SM3作为摘要算法。\n    keyCtx = GenerateHmacKey(\"HMAC|SM3\");\n    if (keyCtx == nullptr) {\n        ret = CRYPTO_OPERTION_ERROR;\n        goto cleanup;\n    }\n\n    // 创建HMAC上下文。\n    ret = CreateHmacContext(keyCtx, &ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto cleanup;\n    }\n\n    // 一次性传入所有数据。\n    ret = UpdateHmacData(ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto cleanup;\n    }\n\n    // 完成HMAC计算。\n    ret = FinalizeHmac(ctx, &out, &macLen);\n    if (ret != CRYPTO_SUCCESS) {\n        goto cleanup;\n    }\n\n    printf(\"HMAC calculation success, length: %u\\n\", macLen);\n\ncleanup:\n    // 清理资源。\n    OH_Crypto_FreeDataBlob(&out);\n    OH_CryptoMac_Destroy(ctx);\n    OH_CryptoSymKey_Destroy(keyCtx);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hmac分段传入",
      children: "HMAC（分段传入）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与一次性传入的步骤基本相同，区别在于多次调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-mac-h/capi-crypto-mac-h#oh_cryptomac_update",
        children: "OH_CryptoMac_Update"
      }), "来处理分段数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <cstdio>\n#include <cstring>\n\nstatic OH_CryptoSymKey *GenerateHmacKey(const char *algoName)\n{\n    OH_CryptoSymKeyGenerator *keyGen = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create(algoName, &keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return nullptr;\n    }\n    OH_CryptoSymKey *keyCtx = nullptr;\n    ret = OH_CryptoSymKeyGenerator_Generate(keyGen, &keyCtx);\n    OH_CryptoSymKeyGenerator_Destroy(keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return nullptr;\n    }\n    return keyCtx;\n}\n\nstatic OH_Crypto_ErrCode CreateHmacContext(OH_CryptoSymKey *keyCtx, OH_CryptoMac **ctx)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoMac_Create(\"HMAC\", ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 设置摘要算法名称为SM3。\n    const char *digestName = \"SM3\";\n    Crypto_DataBlob digestNameData = {\n        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(digestName)),\n        .len = strlen(digestName)\n    };\n    ret = OH_CryptoMac_SetParam(*ctx, CRYPTO_MAC_DIGEST_NAME_STR, &digestNameData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoMac_Destroy(*ctx);\n        return ret;\n    }\n\n    // 初始化HMAC计算。\n    ret = OH_CryptoMac_Init(*ctx, keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoMac_Destroy(*ctx);\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode ProcessHmacSegments(OH_CryptoMac *ctx)\n{\n    // 分段传入数据。\n    const char *message = \"aaaaa.....bbbbb.....ccccc.....ddddd.....eee\";\n    size_t messageLen = strlen(message);\n    size_t segmentSize = 20; // 每段20字节。\n\n    for (size_t i = 0; i < messageLen; i += segmentSize) {\n        size_t currentSize = (i + segmentSize <= messageLen) ? segmentSize : (messageLen - i);\n        Crypto_DataBlob segment = {\n            .data = reinterpret_cast<uint8_t *>(const_cast<char *>(message + i)),\n            .len = currentSize\n        };\n        OH_Crypto_ErrCode ret = OH_CryptoMac_Update(ctx, &segment);\n        if (ret != CRYPTO_SUCCESS) {\n            return ret;\n        }\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode FinalizeHmac(OH_CryptoMac *ctx, Crypto_DataBlob *out, uint32_t *macLen)\n{\n    // 完成HMAC计算并获取结果。\n    OH_Crypto_ErrCode ret = OH_CryptoMac_Final(ctx, out);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    // 获取HMAC值的长度。\n    ret = OH_CryptoMac_GetLength(ctx, macLen);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_Crypto_FreeDataBlob(out);\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nOH_Crypto_ErrCode doTestHmacBySegments()\n{\n    OH_CryptoSymKey *keyCtx = nullptr;\n    OH_CryptoMac *ctx = nullptr;\n    Crypto_DataBlob out = {0};\n    OH_Crypto_ErrCode ret = CRYPTO_SUCCESS;\n    uint32_t macLen = 0;\n\n    // 生成HMAC密钥，使用SM3作为摘要算法。\n    keyCtx = GenerateHmacKey(\"HMAC|SM3\");\n    if (keyCtx == nullptr) {\n        ret = CRYPTO_OPERTION_ERROR;\n        goto cleanup;\n    }\n\n    // 创建HMAC上下文。\n    ret = CreateHmacContext(keyCtx, &ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto cleanup;\n    }\n\n    // 分段处理数据。\n    ret = ProcessHmacSegments(ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto cleanup;\n    }\n\n    // 完成HMAC计算。\n    ret = FinalizeHmac(ctx, &out, &macLen);\n    if (ret != CRYPTO_SUCCESS) {\n        goto cleanup;\n    }\n\n    printf(\"HMAC calculation success, length: %u\\n\", macLen);\n\ncleanup:\n    // 清理资源。\n    OH_Crypto_FreeDataBlob(&out);\n    OH_CryptoMac_Destroy(ctx);\n    OH_CryptoSymKey_Destroy(keyCtx);\n    return ret;\n}\n"
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