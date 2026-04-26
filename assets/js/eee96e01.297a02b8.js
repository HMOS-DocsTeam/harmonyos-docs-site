"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["904374"], {
334891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_asym_encrypt_decrypt_ndk_crypto_sm_2_asym_encrypt_decrypt_ndk_md_eee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-sm-2-asym-encrypt-decrypt-ndk-crypto-sm-2-asym-encrypt-decrypt-ndk-md-eee.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_asym_encrypt_decrypt_ndk_crypto_sm_2_asym_encrypt_decrypt_ndk_md_eee_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk/crypto-sm2-asym-encrypt-decrypt-ndk","title":"使用SM2非对称密钥加解密(C/C++)","description":"对应的算法规格请查看非对称密钥加解密算法规格：SM2。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk/crypto-sm2-asym-encrypt-decrypt-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":33,"frontMatter":{"title":"使用SM2非对称密钥加解密(C/C++)","sidebar_position":33,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-asym-encrypt-decrypt-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SM2非对称密钥加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/"},"next":{"title":"使用AES-WRAP算法对对称密钥加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-wrap-encrypt-decrypt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk/crypto-sm2-asym-encrypt-decrypt-ndk.md


const frontMatter = {
	title: '使用SM2非对称密钥加解密(C/C++)',
	sidebar_position: 33,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-asym-encrypt-decrypt-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM2非对称密钥加解密(C/C++)';

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
        id: "使用sm2非对称密钥加解密cc",
        children: "使用SM2非对称密钥加解密(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#sm2",
        children: "非对称密钥加解密算法规格：SM2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "加密"
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
          }), "，生成SM2密钥类型为SM2_256的非对称密钥对（keyPair）。keyPair对象中包括公钥PubKey、私钥PriKey。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成SM2非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2",
            children: "非对称密钥生成和转换规格：SM2"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk",
            children: "随机生成非对称密钥对"
          }), "理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_create",
            children: "OH_CryptoAsymCipher_Create"
          }), "，指定字符串参数'SM2_256|SM3'，创建非对称密钥类型为SM2_256、摘要算法为SM3的Cipher实例，用于完成加解密操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_init",
            children: "OH_CryptoAsymCipher_Init"
          }), "，设置模式为加密（CRYPTO_ENCRYPT_MODE），指定加密密钥（keyPair），初始化加密Cipher实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final",
            children: "OH_CryptoAsymCipher_Final"
          }), "，传入明文，获取加密后的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_CryptoAsymCipher_Final输出结果可能为NULL，在访问具体数据前，需要先判断结果是否为NULL，避免产生异常。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于SM2算法的Cipher实例不支持重复init操作，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_create",
          children: "OH_CryptoAsymCipher_Create"
        }), "，重新生成Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_init",
          children: "OH_CryptoAsymCipher_Init"
        }), "，设置模式为解密（CRYPTO_DECRYPT_MODE），指定解密密钥（keyPair）初始化解密Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final",
          children: "OH_CryptoAsymCipher_Final"
        }), "，传入密文，获取解密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <algorithm>\n#include <vector>\n#include <string>\n\nstatic std::vector<uint8_t> doTestSm2Enc(OH_CryptoKeyPair *keyPair, std::vector<uint8_t> &plainText)\n{\n    std::vector<uint8_t> cipherText;\n    OH_CryptoAsymCipher *cipher = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymCipher_Create(\"SM2_256|SM3\", &cipher);\n    if (ret != CRYPTO_SUCCESS) {\n        return std::vector<uint8_t>{};\n    }\n\n    ret = OH_CryptoAsymCipher_Init(cipher, CRYPTO_ENCRYPT_MODE, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymCipher_Destroy(cipher);\n        return std::vector<uint8_t>{};\n    }\n\n    Crypto_DataBlob in = {};\n    in.data = plainText.data();\n    in.len = plainText.size();\n    Crypto_DataBlob out = {};\n    ret = OH_CryptoAsymCipher_Final(cipher, &in, &out);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymCipher_Destroy(cipher);\n        return std::vector<uint8_t>{};\n    }\n    cipherText.insert(cipherText.end(), out.data, out.data + out.len);\n    OH_Crypto_FreeDataBlob(&out);\n\n    OH_CryptoAsymCipher_Destroy(cipher);\n    return cipherText;\n}\n\nstatic std::vector<uint8_t> doTestSm2Dec(OH_CryptoKeyPair *keyPair, std::vector<uint8_t> &encryptText)\n{\n    std::vector<uint8_t> decryptText;\n    OH_CryptoAsymCipher *cipher = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymCipher_Create(\"SM2_256|SM3\", &cipher);\n    if (ret != CRYPTO_SUCCESS) {\n        return std::vector<uint8_t>{};\n    }\n\n    ret = OH_CryptoAsymCipher_Init(cipher, CRYPTO_DECRYPT_MODE, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymCipher_Destroy(cipher);\n        return std::vector<uint8_t>{};\n    }\n\n    Crypto_DataBlob in = {};\n    in.data = encryptText.data();\n    in.len = encryptText.size();\n    Crypto_DataBlob out = {};\n    ret = OH_CryptoAsymCipher_Final(cipher, &in, &out);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymCipher_Destroy(cipher);\n        return std::vector<uint8_t>{};\n    }\n    decryptText.insert(decryptText.end(), out.data, out.data + out.len);\n    OH_Crypto_FreeDataBlob(&out);\n\n    OH_CryptoAsymCipher_Destroy(cipher);\n    return decryptText;\n}\n\nOH_Crypto_ErrCode doTestSm2EncMessage()\n{\n    OH_CryptoAsymKeyGenerator *keyGen = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create(\"SM2_256\", &keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    OH_CryptoKeyPair *keyPair = nullptr;\n    ret = OH_CryptoAsymKeyGenerator_Generate(keyGen, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n\n    std::string message = \"This is a test\";\n    std::vector<uint8_t> plainText(message.begin(), message.end());\n    std::vector<uint8_t> cipherText = doTestSm2Enc(keyPair, plainText);\n    std::vector<uint8_t> decryptText = doTestSm2Dec(keyPair, cipherText);\n\n    if ((plainText.size() != decryptText.size()) ||\n        (!std::equal(plainText.begin(), plainText.end(), decryptText.begin()))) {\n        OH_CryptoKeyPair_Destroy(keyPair);\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return CRYPTO_OPERTION_ERROR;\n    }\n\n    OH_CryptoKeyPair_Destroy(keyPair);\n    OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n    return CRYPTO_SUCCESS;\n}\n"
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