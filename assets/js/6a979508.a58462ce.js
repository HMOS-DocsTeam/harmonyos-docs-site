"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["391999"], {
965475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_aes_sym_encrypt_decrypt_cbc_ndk_crypto_aes_sym_encrypt_decrypt_cbc_ndk_md_6a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-aes-sym-encrypt-decrypt-cbc-ndk-crypto-aes-sym-encrypt-decrypt-cbc-ndk-md-6a9.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_aes_sym_encrypt_decrypt_cbc_ndk_crypto_aes_sym_encrypt_decrypt_cbc_ndk_md_6a9_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc-ndk/crypto-aes-sym-encrypt-decrypt-cbc-ndk","title":"使用AES对称密钥（CBC模式）加解密(C/C++)","description":"请查看对称密钥加解密算法规格：AES。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc-ndk/crypto-aes-sym-encrypt-decrypt-cbc-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc-ndk","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用AES对称密钥（CBC模式）加解密(C/C++)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-cbc-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AES对称密钥（CBC模式）加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc/"},"next":{"title":"使用AES对称密钥（ECB模式）加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-ecb/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-cbc-ndk/crypto-aes-sym-encrypt-decrypt-cbc-ndk.md


const frontMatter = {
	title: '使用AES对称密钥（CBC模式）加解密(C/C++)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-cbc-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AES对称密钥（CBC模式）加解密(C/C++)';

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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用aes对称密钥cbc模式加解密cc",
        children: "使用AES对称密钥（CBC模式）加解密(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec#aes",
        children: "对称密钥加解密算法规格：AES"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "创建对象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create",
        children: "OH_CryptoSymKeyGenerator_Create"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate",
        children: "OH_CryptoSymKeyGenerator_Generate"
      }), "，生成密钥算法为AES、密钥长度为128位的对称密钥（OH_CryptoSymKey）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如何生成AES对称密钥，请参考以下示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#aes",
        children: "对称密钥生成和转换规格：AES"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk",
        children: "随机生成对称密钥"
      }), "理解，参考文档与当前示例可能存在入参差异，请注意区分。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "加密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_create",
          children: "OH_CryptoSymCipher_Create"
        }), "，指定字符串参数'AES128|CBC|PKCS7'，创建对称密钥类型为AES128、分组模式为CBC、填充模式为PKCS7的Cipher实例，用于加密操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_create",
          children: "OH_CryptoSymCipherParams_Create"
        }), "创建参数对象，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_setparam",
          children: "OH_CryptoSymCipherParams_SetParam"
        }), "设置加密参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_init",
          children: "OH_CryptoSymCipher_Init"
        }), "，设置模式为加密（CRYPTO_ENCRYPT_MODE），指定加密密钥（OH_CryptoSymKey）和CBC模式对应的加密参数（OH_CryptoSymCipherParams），初始化加密Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["加密内容较短时，可以直接调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_final",
          children: "OH_CryptoSymCipher_Final"
        }), "，无需调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_update",
          children: "OH_CryptoSymCipher_Update"
        }), "，获取加密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_create",
          children: "OH_CryptoSymCipher_Create"
        }), "，指定字符串参数'AES128|CBC|PKCS7'，创建对称密钥类型为AES128、分组模式为CBC、填充模式为PKCS7的Cipher实例，用于解密操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_init",
          children: "OH_CryptoSymCipher_Init"
        }), "，设置模式为解密（CRYPTO_DECRYPT_MODE），指定解密密钥（OH_CryptoSymKey）和CBC模式对应的解密参数（OH_CryptoSymCipherParams），初始化解密Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["解密内容较短时，可直接调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_final",
          children: "OH_CryptoSymCipher_Final"
        }), "，无需调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_update",
          children: "OH_CryptoSymCipher_Update"
        }), "，获取解密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "销毁对象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_destroy",
        children: "OH_CryptoSymKeyGenerator_Destroy"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_destroy",
        children: "OH_CryptoSymCipher_Destroy"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkey_destroy",
        children: "OH_CryptoSymKey_Destroy"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-common-h/capi-crypto-common-h#oh_crypto_freedatablob",
        children: "OH_Crypto_FreeDataBlob"
      }), "释放申请的内存，销毁对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_sym_cipher.h\"\n#include <cstring>\n#include \"file.h\"\n\nOH_Crypto_ErrCode doTestAesCbc()\n{\n    OH_CryptoSymKeyGenerator *genCtx = nullptr;\n    OH_CryptoSymCipher *encCtx = nullptr;\n    OH_CryptoSymCipher *decCtx = nullptr;\n    OH_CryptoSymKey *keyCtx = nullptr;\n    OH_CryptoSymCipherParams *params = nullptr;\n    Crypto_DataBlob outUpdate = {.data = nullptr, .len = 0};\n    Crypto_DataBlob decUpdate = {.data = nullptr, .len = 0};\n    char *plainText = const_cast<char *>(\"this is test!\");\n    Crypto_DataBlob msgBlob = {.data = (uint8_t *)(plainText), .len = strlen(plainText)};\n    uint8_t iv[16] = {1, 2, 4, 12, 3, 4, 2, 3, 3, 2, 0, 4, 3, 1, 0, 10}; // iv使用安全随机数生成\n    Crypto_DataBlob ivBlob = {.data = iv, .len = sizeof(iv)};\n    // 生成对称密钥\n    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create(\"AES128\", &genCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymKeyGenerator_Generate(genCtx, &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 设置参数\n    ret = OH_CryptoSymCipherParams_Create(&params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipherParams_SetParam(params, CRYPTO_IV_DATABLOB, &ivBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 加密\n    ret = OH_CryptoSymCipher_Create(\"AES128|CBC|PKCS7\", &encCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Init(encCtx, CRYPTO_ENCRYPT_MODE, keyCtx, params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Final(encCtx, &msgBlob, &outUpdate);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 解密\n    ret = OH_CryptoSymCipher_Create(\"AES128|CBC|PKCS7\", &decCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Init(decCtx, CRYPTO_DECRYPT_MODE, keyCtx, params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Final(decCtx, &outUpdate, &decUpdate);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\nend:\n    OH_CryptoSymCipherParams_Destroy(params);\n    OH_CryptoSymCipher_Destroy(encCtx);\n    OH_CryptoSymCipher_Destroy(decCtx);\n    OH_CryptoSymKeyGenerator_Destroy(genCtx);\n    OH_CryptoSymKey_Destroy(keyCtx);\n    OH_Crypto_FreeDataBlob(&outUpdate);\n    OH_Crypto_FreeDataBlob(&decUpdate);\n    return ret;\n}\n"
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