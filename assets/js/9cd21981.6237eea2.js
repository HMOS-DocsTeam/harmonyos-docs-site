"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["516323"], {
171703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_rsa_asym_encrypt_decrypt_by_segment_ndk_crypto_rsa_asym_encrypt_decrypt_by_segment_ndk_md_9cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-rsa-asym-encrypt-decrypt-by-segment-ndk-crypto-rsa-asym-encrypt-decrypt-by-segment-ndk-md-9cd.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_rsa_asym_encrypt_decrypt_by_segment_ndk_crypto_rsa_asym_encrypt_decrypt_by_segment_ndk_md_9cd_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk","title":"使用RSA非对称密钥分段加解密(C/C++)","description":"对应的算法规格请查看非对称密钥加解密算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"使用RSA非对称密钥分段加解密(C/C++)","sidebar_position":30,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA非对称密钥分段加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment/"},"next":{"title":"使用RSA非对称密钥（PKCS1_OAEP模式）加解密","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk.md


const frontMatter = {
	title: '使用RSA非对称密钥分段加解密(C/C++)',
	sidebar_position: 30,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA非对称密钥分段加解密(C/C++)';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "使用rsa非对称密钥分段加解密cc",
        children: "使用RSA非对称密钥分段加解密(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#rsa",
        children: "非对称密钥加解密算法规格：RSA"
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
          }), "，生成RSA密钥类型为RSA1024、素数个数为2的非对称密钥对（keyPair）。keyPair对象中包括公钥PubKey、私钥PriKey。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成RSA非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
            children: "非对称密钥生成和转换规格：RSA"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly",
            children: "随机生成非对称密钥对"
          }), "理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_create",
            children: "OH_CryptoAsymCipher_Create"
          }), "，指定字符串参数'RSA1024|PKCS1'，创建非对称密钥类型为RSA1024、填充模式为PKCS1的Cipher实例，用于完成加解密操作。"]
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
          children: ["多次调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final",
            children: "OH_CryptoAsymCipher_Final"
          }), "，传入明文，获取加密后的数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "OH_CryptoAsymCipher_Final输出结果可能为NULL，在访问具体数据前，需要先判断结果是否为NULL，避免产生异常。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "此处将明文按64个字节一组拆分，多次加密。使用1024位密钥，每次将生成128字节密文。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(938374)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["非对称密钥的分段加解密是指当明文大于单次加解密支持的数据长度时，需要将待加解密数据分为合适长度的数据段，并对每个数据段执行加解密操作。详细介绍可见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment#%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E8%A7%A3%E5%AF%86",
                children: "非对称分段加解密介绍"
              }), "。"]
            }), "\n"]
          }), "\n"]
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
        children: ["由于RSA算法的Cipher实例不支持重复init操作，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_create",
          children: "OH_CryptoAsymCipher_Create"
        }), "，重新生成Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_init",
          children: "OH_CryptoAsymCipher_Init"
        }), "，设置模式为解密（CRYPTO_DECRYPT_MODE），指定解密密钥（keyPair）初始化解密Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多次调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-cipher-h/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final",
          children: "OH_CryptoAsymCipher_Final"
        }), "，传入密文，获取解密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <algorithm>\n#include <vector>\n#include <string>\n\nstatic std::vector<uint8_t> doTestRsaEnc(OH_CryptoKeyPair *keyPair, std::vector<uint8_t> &plainText)\n{\n    std::vector<uint8_t> cipherText;\n    OH_CryptoAsymCipher *cipher = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymCipher_Create(\"RSA1024|PKCS1\", &cipher);\n    if (ret != CRYPTO_SUCCESS) {\n        return std::vector<uint8_t>{};\n    }\n\n    ret = OH_CryptoAsymCipher_Init(cipher, CRYPTO_ENCRYPT_MODE, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymCipher_Destroy(cipher);\n        return std::vector<uint8_t>{};\n    }\n\n    size_t plainTextSplitLen = 64;\n    for (size_t i = 0; i < plainText.size(); i += plainTextSplitLen) {\n        Crypto_DataBlob in = {};\n        in.data = plainText.data() + i;\n        if (i + plainTextSplitLen > plainText.size()) {\n            in.len = plainText.size() - i;\n        } else {\n            in.len = plainTextSplitLen;\n        }\n        Crypto_DataBlob out = {};\n        ret = OH_CryptoAsymCipher_Final(cipher, &in, &out);\n        if (ret != CRYPTO_SUCCESS) {\n            OH_CryptoAsymCipher_Destroy(cipher);\n            return std::vector<uint8_t>{};\n        }\n        cipherText.insert(cipherText.end(), out.data, out.data + out.len);\n        OH_Crypto_FreeDataBlob(&out);\n    }\n\n    OH_CryptoAsymCipher_Destroy(cipher);\n    return cipherText;\n}\n\nstatic std::vector<uint8_t> doTestRsaDec(OH_CryptoKeyPair *keyPair, std::vector<uint8_t> &encryptText)\n{\n    std::vector<uint8_t> decryptText;\n    OH_CryptoAsymCipher *cipher = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymCipher_Create(\"RSA1024|PKCS1\", &cipher);\n    if (ret != CRYPTO_SUCCESS) {\n        return std::vector<uint8_t>{};\n    }\n\n    ret = OH_CryptoAsymCipher_Init(cipher, CRYPTO_DECRYPT_MODE, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymCipher_Destroy(cipher);\n        return std::vector<uint8_t>{};\n    }\n\n    size_t cipherTextSplitLen = 128; // RSA密钥每次加密生成的密文字节长度计算方式：密钥位数/8。\n    for (size_t i = 0; i < encryptText.size(); i += cipherTextSplitLen) {\n        Crypto_DataBlob in = {};\n        in.data = encryptText.data() + i;\n        if (i + cipherTextSplitLen > encryptText.size()) {\n            in.len = encryptText.size() - i;\n        } else {\n            in.len = cipherTextSplitLen;\n        }\n        Crypto_DataBlob out = {};\n        ret = OH_CryptoAsymCipher_Final(cipher, &in, &out);\n        if (ret != CRYPTO_SUCCESS) {\n            OH_CryptoAsymCipher_Destroy(cipher);\n            return std::vector<uint8_t>{};\n        }\n        decryptText.insert(decryptText.end(), out.data, out.data + out.len);\n        OH_Crypto_FreeDataBlob(&out);\n    }\n\n    OH_CryptoAsymCipher_Destroy(cipher);\n    return decryptText;\n}\n\nOH_Crypto_ErrCode doTestRsaEncLongMessage()\n{\n    OH_CryptoAsymKeyGenerator *keyGen = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create(\"RSA1024\", &keyGen);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    OH_CryptoKeyPair *keyPair = nullptr;\n    ret = OH_CryptoAsymKeyGenerator_Generate(keyGen, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return ret;\n    }\n\n    std::string message =\n        \"This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\"\n        \"This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!\";\n\n    std::vector<uint8_t> plainText(message.begin(), message.end());\n    std::vector<uint8_t> cipherText = doTestRsaEnc(keyPair, plainText);\n    std::vector<uint8_t> decryptText = doTestRsaDec(keyPair, cipherText);\n\n    if ((plainText.size() != decryptText.size()) ||\n        (!std::equal(plainText.begin(), plainText.end(), decryptText.begin()))) {\n        OH_CryptoKeyPair_Destroy(keyPair);\n        OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n        return CRYPTO_OPERTION_ERROR;\n    }\n\n    OH_CryptoKeyPair_Destroy(keyPair);\n    OH_CryptoAsymKeyGenerator_Destroy(keyGen);\n    return CRYPTO_SUCCESS;\n}\n"
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
938374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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