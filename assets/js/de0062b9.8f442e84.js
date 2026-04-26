"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["396178"], {
409432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_convert_string_data_to_asym_key_pair_ndk_crypto_convert_string_data_to_asym_key_pair_ndk_md_de0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-convert-string-data-to-asym-key-pair-ndk-crypto-convert-string-data-to-asym-key-pair-ndk-md-de0.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_convert_string_data_to_asym_key_pair_ndk_crypto_convert_string_data_to_asym_key_pair_ndk_md_de0_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk/crypto-convert-string-data-to-asym-key-pair-ndk","title":"指定PEM格式字符串数据转换非对称密钥对(C/C++)","description":"以RSA为例，根据指定的非对称密钥字符串数据，生成非对称密钥对（OH\\\\_CryptoKeyPair）。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk/crypto-convert-string-data-to-asym-key-pair-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"指定PEM格式字符串数据转换非对称密钥对(C/C++)","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-string-data-to-asym-key-pair-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"指定PEM格式字符串数据转换非对称密钥对(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/"},"next":{"title":"使用RSA私钥进行编码解码(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair-ndk/crypto-convert-string-data-to-asym-key-pair-ndk.md


const frontMatter = {
	title: '指定PEM格式字符串数据转换非对称密钥对(C/C++)',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-string-data-to-asym-key-pair-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '指定PEM格式字符串数据转换非对称密钥对(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
  "level": 2
}, {
  "value": "指定PEM格式字符串数据转换RSA密钥对",
  "id": "指定pem格式字符串数据转换rsa密钥对",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "指定pem格式字符串数据转换非对称密钥对cc",
        children: "指定PEM格式字符串数据转换非对称密钥对(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA为例，根据指定的非对称密钥字符串数据，生成非对称密钥对（OH_CryptoKeyPair）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435983)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对非对称密钥的convertPemKey操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "公钥需满足X.509规范、PKCS#1规范、PEM编码格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私钥需满足PKCS#8规范、PKCS#1规范、PEM编码格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohcrypto.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定pem格式字符串数据转换rsa密钥对",
      children: "指定PEM格式字符串数据转换RSA密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
        children: "非对称密钥生成和转换规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create",
            children: "OH_CryptoAsymKeyGenerator_Create"
          }), "，指定字符串参数'RSA1024'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（OH_CryptoAsymKeyGenerator）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成RSA非对称密钥时，默认素数为2，此处省略了参数PRIMES_2。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_convert",
            children: "OH_CryptoAsymKeyGenerator_Convert"
          }), "，传入二进制密钥数据，生成非对称密钥对象（OH_CryptoKeyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptopubkey_encode",
            children: "OH_CryptoPubKey_Encode"
          }), "，将非对称密钥对象中的公钥转换成pkcs1或x509格式。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下以生成RSA密钥对为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n#include \"file.h\"\n\nOH_Crypto_ErrCode doTestPemDataCovertAsymKey()\n{\n    OH_CryptoAsymKeyGenerator *ctx = nullptr;\n    OH_Crypto_ErrCode ret;\n\n    ret = OH_CryptoAsymKeyGenerator_Create(\"RSA1024\", &ctx);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    uint8_t sm2PubKeyBlobData[] = {\n        48,  129, 159, 48,  13,  6,   9,   42,  134, 72,  134, 247, 13,  1,   1,   1,   5,   0,   3,   129, 141,\n        0,   48,  129, 137, 2,   129, 129, 0,   235, 184, 151, 247, 130, 216, 140, 187, 64,  124, 219, 137, 140,\n        184, 53,  137, 216, 105, 156, 141, 137, 165, 30,  80,  232, 55,  96,  46,  23,  237, 197, 123, 121, 27,\n        240, 190, 14,  111, 237, 172, 67,  42,  47,  164, 226, 248, 211, 157, 213, 194, 131, 109, 181, 41,  173,\n        217, 127, 252, 121, 126, 26,  130, 55,  4,   134, 104, 73,  5,   132, 91,  214, 146, 232, 64,  99,  87,\n        33,  222, 155, 159, 9,   59,  212, 144, 46,  183, 83,  89,  220, 189, 148, 13,  176, 5,   139, 156, 230,\n        143, 16,  152, 79,  36,  8,   112, 40,  174, 35,  83,  82,  57,  137, 87,  123, 215, 99,  199, 66,  131,\n        150, 31,  143, 56,  252, 2,   73,  41,  70,  159, 2,   3,   1,   0,   1};\n\n    OH_CryptoKeyPair *dupKeyPair = nullptr;\n    Crypto_DataBlob pubBlob = {.data = sm2PubKeyBlobData, .len = sizeof(sm2PubKeyBlobData)};\n    ret = OH_CryptoAsymKeyGenerator_Convert(ctx, CRYPTO_DER, &pubBlob, nullptr, &dupKeyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(ctx);\n        return ret;\n    }\n\n    OH_CryptoPubKey *pubKey1 = OH_CryptoKeyPair_GetPubKey(dupKeyPair);\n    Crypto_DataBlob retBlob = {.data = nullptr, .len = 0};\n    ret = OH_CryptoPubKey_Encode(pubKey1, CRYPTO_PEM, \"PKCS1\", &retBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGenerator_Destroy(ctx);\n        OH_CryptoKeyPair_Destroy(dupKeyPair);\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&retBlob);\n    OH_CryptoAsymKeyGenerator_Destroy(ctx);\n    OH_CryptoKeyPair_Destroy(dupKeyPair);\n    return ret;\n}\n"
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
435983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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