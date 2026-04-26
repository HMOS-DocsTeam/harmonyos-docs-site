"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["875513"], {
949224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_rsa_encoded_decoded_ndk_crypto_rsa_encoded_decoded_ndk_md_154_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-rsa-encoded-decoded-ndk-crypto-rsa-encoded-decoded-ndk-md-154.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_rsa_encoded_decoded_ndk_crypto_rsa_encoded_decoded_ndk_md_154_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk/crypto-rsa-encoded-decoded-ndk","title":"使用RSA私钥进行编码解码(C/C++)","description":"*编码*","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk/crypto-rsa-encoded-decoded-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"使用RSA私钥进行编码解码(C/C++)","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-encoded-decoded-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA私钥进行编码解码(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded/"},"next":{"title":"加解密介绍","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encryption-decryption-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk/crypto-rsa-encoded-decoded-ndk.md


const frontMatter = {
	title: '使用RSA私钥进行编码解码(C/C++)',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-encoded-decoded-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA私钥进行编码解码(C/C++)';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用rsa私钥进行编码解码cc",
        children: "使用RSA私钥进行编码解码(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create",
            children: "OH_CryptoAsymKeyGenerator_Create"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_generate",
            children: "OH_CryptoAsymKeyGenerator_Generate"
          }), "，生成RSA密钥类型为RSA2048、素数个数为2的非对称密钥对（keyPair）。keyPair对象中包括公钥PubKey、私钥PriKey。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成RSA非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
            children: "非对称密钥生成和转换规格：RSA"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk",
            children: "随机生成非对称密钥对(C/C++)"
          }), "理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoprivkeyencodingparams_create",
            children: "OH_CryptoPrivKeyEncodingParams_Create"
          }), "创建参数对象（params），并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoprivkeyencodingparams_setparam",
            children: "OH_CryptoPrivKeyEncodingParams_SetParam"
          }), "设置加密算法和密码。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoprivkey_encode",
            children: "OH_CryptoPrivKey_Encode"
          }), "，传入参数CRYPTO_PEM/CRYPTO_DER、PKCS1/PKCS8和参数对象（params）生成编码后的私钥字符串。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create",
            children: "OH_CryptoAsymKeyGenerator_Create"
          }), "生成RSA非对称密钥生成器keyGen。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成RSA非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
            children: "非对称密钥生成和转换规格：RSA"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_setpassword",
            children: "OH_CryptoAsymKeyGenerator_SetPassword"
          }), "，传入编码后的私钥字符串与编码口令。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_convert",
            children: "OH_CryptoAsymKeyGenerator_Convert"
          }), "，传入参数CRYPTO_PEM和编码后的私钥字符串，返回RSA密钥对。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编码示例："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include \"file.h\"\n\nstatic OH_Crypto_ErrCode SetParams(OH_CryptoPrivKeyEncodingParams *params)\n{\n    Crypto_DataBlob password = {(uint8_t *)\"1234567890\", 10};\n    Crypto_DataBlob cipher = {(uint8_t *)\"AES-128-CBC\", 11};\n    OH_Crypto_ErrCode ret = OH_CryptoPrivKeyEncodingParams_SetParam(params,\n        CRYPTO_PRIVATE_KEY_ENCODING_PASSWORD_STR, &password);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKeyEncodingParams_SetParam(params, CRYPTO_PRIVATE_KEY_ENCODING_SYMMETRIC_CIPHER_STR, &cipher);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    return CRYPTO_SUCCESS;\n}\n\nOH_Crypto_ErrCode doTestPriKeyPkcs1Encoded()\n{\n    OH_CryptoAsymKeyGenerator *keyGen = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create(\"RSA2048\", &keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    OH_CryptoKeyPair *keyPair = nullptr;\n    ret = OH_CryptoAsymKeyGenerator_Generate(keyGen, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n\n    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPair);\n    if (privKey == nullptr) {\n        OH_CryptoKeyPair_Destroy(keyPair);\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return CRYPTO_OPERTION_ERROR;\n    }\n    OH_CryptoPrivKeyEncodingParams *params = nullptr;\n    ret = OH_CryptoPrivKeyEncodingParams_Create(&params);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoKeyPair_Destroy(keyPair);\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n    ret = SetParams(params);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoPrivKeyEncodingParams_Destroy(params);\n        OH_CryptoKeyPair_Destroy(keyPair);\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n\n    Crypto_DataBlob pemData = {0};\n    ret = OH_CryptoPrivKey_Encode(privKey, CRYPTO_PEM, \"PKCS1\", params, &pemData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoPrivKeyEncodingParams_Destroy(params);\n        OH_CryptoKeyPair_Destroy(keyPair);\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&pemData);\n    OH_CryptoPrivKeyEncodingParams_Destroy(params);\n    OH_CryptoKeyPair_Destroy(keyPair);\n    OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解码示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <string>\n#include \"file.h\"\n\nOH_Crypto_ErrCode doTestPriKeyPkcs1Decoded()\n{\n    std::string priKeyPkcs1EncodingStr =\n        \"-----BEGIN RSA PRIVATE KEY-----\\n\"\n        \"Proc-Type: 4,ENCRYPTED\\n\"\n        \"DEK-Info: AES-128-CBC,815A066131BF05CF87CE610A59CC69AE\\n\\n\"\n        \"7Jd0vmOmYGFZ2yRY8fqRl3+6rQlFtNcMILvcb5KWHDSrxA0ULmJE7CW0DSRikHoA\\n\"\n        \"t0KgafhYXeQXh0dRy9lvVRAFSLHCLJVjchx90V7ZSivBFEq7+iTozVp4AlbgYsJP\\n\"\n        \"vx/1sfZD2WAcyMJ7IDmJyft7xnpVSXsyWGTT4f3eaHJIh1dqjwrso7ucAW0FK6rp\\n\"\n        \"/TONyOoXNfXtRbVtxNyCWBxt4HCSclDZFvS9y8fz9ZwmCUV7jei/YdzyQI2wnE13\\n\"\n        \"W8cKlpzRFL6BWi8XPrUtAw5MWeHBAPUgPWMfcmiaeyi5BJFhQCrHLi+Gj4EEJvp7\\n\"\n        \"mP5cbnQAx6+paV5z9m71SKrI/WSc4ixsYYdVmlL/qwAK9YliFfoPl030YJWW6rFf\\n\"\n        \"T7J9BUlHGUJ0RB2lURNNLakM+UZRkeE9TByzCzgTxuQtyv5Lwsh2mAk3ia5x0kUO\\n\"\n        \"LHg3Eoabhdh+YZA5hHaxnpF7VjspB78E0F9Btq+A41rSJ6zDOdToHey4MJ2nxdey\\n\"\n        \"Z3bi81TZ6Fp4IuROrvZ2B/Xl3uNKR7n+AHRKnaAO87ywzyltvjwSh2y3xhJueiRs\\n\"\n        \"BiYkyL3/fnocD3pexTdN6h3JgQGgO5GV8zw/NrxA85mw8o9im0HreuFObmNj36T9\\n\"\n        \"k5N+R/QIXW83cIQOLaWK1ThYcluytf0tDRiMoKqULiaA6HvDMigExLxuhCtnoF8I\\n\"\n        \"iOLN1cPdEVQjzwDHLqXP2DbWW1z9iRepLZlEm1hLRLEmOrTGKezYupVv306SSa6J\\n\"\n        \"OA55lAeXMbyjFaYCr54HWrpt4NwNBX1efMUURc+1LcHpzFrBTTLbfjIyq6as49pH\\n\"\n        \"-----END RSA PRIVATE KEY-----\\n\";\n\n    OH_CryptoAsymKeyGenerator *keyGen = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create(\"RSA2048\", &keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    OH_CryptoKeyPair *dupKeyPair = nullptr;\n    Crypto_DataBlob priKeyPkcs1EncodingData = {};\n    priKeyPkcs1EncodingData.data = reinterpret_cast<uint8_t *>(const_cast<char *>(priKeyPkcs1EncodingStr.c_str()));\n    priKeyPkcs1EncodingData.len = strlen(priKeyPkcs1EncodingStr.c_str());\n    std::string password = \"123456\";\n    ret = OH_CryptoAsymKeyGenerator_SetPassword(keyGen, reinterpret_cast<const unsigned char *>(password.c_str()),\n        password.size());\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n    ret = OH_CryptoAsymKeyGenerator_Convert(keyGen, CRYPTO_PEM, nullptr, &priKeyPkcs1EncodingData, &dupKeyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n    OH_CryptoKeyPair_Destroy(dupKeyPair);\n    OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n"]
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