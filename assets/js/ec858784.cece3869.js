"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["342582"], {
76256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_sm_2_sign_data_format_conversion_ndk_crypto_sm_2_sign_data_format_conversion_ndk_md_ec8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-sm-2-sign-data-format-conversion-ndk-crypto-sm-2-sign-data-format-conversion-ndk-md-ec8.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_sm_2_sign_data_format_conversion_ndk_crypto_sm_2_sign_data_format_conversion_ndk_md_ec8_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk/crypto-sm2-sign-data-format-conversion-ndk","title":"SM2签名数据格式转换 (C/C++)","description":"当前支持DER格式与r、s格式互转的能力。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk/crypto-sm2-sign-data-format-conversion-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"SM2签名数据格式转换 (C/C++)","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-sign-data-format-conversion-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SM2签名数据格式转换(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion/"},"next":{"title":"密钥协商介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk/crypto-sm2-sign-data-format-conversion-ndk.md


const frontMatter = {
	title: 'SM2签名数据格式转换 (C/C++)',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-sign-data-format-conversion-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'SM2签名数据格式转换 (C/C++)';

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
        id: "sm2签名数据格式转换-cc",
        children: "SM2签名数据格式转换 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持DER格式与r、s格式互转的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可指定SM2密文的参数，将其转换成DER格式密文。反之，也可以从DER格式密文中提取出SM2的具体密文参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指定密文参数，转换为DER格式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_create",
          children: "OH_CryptoEccSignatureSpec_Create"
        }), "，创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptosignatureapi-oh-cryptoeccsignaturespec/capi-cryptosignatureapi-oh-cryptoeccsignaturespec",
          children: "OH_CryptoEccSignatureSpec"
        }), "对象，用于设置SM2密文参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_setrands",
          children: "OH_CryptoEccSignatureSpec_SetRAndS"
        }), "，将R、S设置到OH_CryptoEccSignatureSpec对象中。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_encode",
          children: "OH_CryptoEccSignatureSpec_Encode"
        }), "得到转换后的DER格式的密文。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_destroy",
          children: "OH_CryptoEccSignatureSpec_Destroy"
        }), "释放对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n#include \"CryptoArchitectureKit/crypto_signature.h\"\n\nOH_Crypto_ErrCode DoTestSm2RStoDER()\n{\n    static unsigned char rCoordinate[] = {\n        107, 93,  198, 247, 119, 18,  40,  110, 90,  156, 193,\n        158, 205, 113, 170, 128, 146, 109, 75,  17,  181, 109,\n        110, 91,  149, 5,   110, 233, 209, 78,  229, 96};\n\n    static unsigned char sCoordinate[] = {\n        45,  153, 88,  82,  104, 221, 226, 43,  174, 21,  122,\n        248, 5,   232, 105, 41,  92,  95,  102, 224, 216, 149,\n        85,  236, 110, 6,   64,  188, 149, 70,  70,  183};\n\n    // 由R和S生成DER格式的签名数据。\n    OH_CryptoEccSignatureSpec *spec = NULL;\n    Crypto_DataBlob r = {0};\n    Crypto_DataBlob s = {0};\n    r.data = rCoordinate;\n    r.len = sizeof(rCoordinate);\n    s.data = sCoordinate;\n    s.len = sizeof(sCoordinate);\n    OH_Crypto_ErrCode ret = OH_CryptoEccSignatureSpec_Create(NULL, &spec);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoEccSignatureSpec_Destroy(spec);\n        return ret;\n    }\n    ret = OH_CryptoEccSignatureSpec_SetRAndS(spec, &r, &s);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoEccSignatureSpec_Destroy(spec);\n        return ret;\n    }\n    Crypto_DataBlob sig = {0};\n    ret = OH_CryptoEccSignatureSpec_Encode(spec, &sig);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoEccSignatureSpec_Destroy(spec);\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&sig);\n    OH_CryptoEccSignatureSpec_Destroy(spec);\n    spec = NULL;\n    return CRYPTO_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指定DER格式，转换为r、s格式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_create",
          children: "OH_CryptoEccSignatureSpec_Create"
        }), "传入签名数据，创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptosignatureapi-oh-cryptoeccsignaturespec/capi-cryptosignatureapi-oh-cryptoeccsignaturespec",
          children: "OH_CryptoEccSignatureSpec"
        }), "对象，用于获取转换后的数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_getrands",
          children: "OH_CryptoEccSignatureSpec_GetRAndS"
        }), "拿到转换后的数据r、s。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-signature-h/capi-crypto-signature-h#oh_cryptoeccsignaturespec_destroy",
          children: "OH_CryptoEccSignatureSpec_Destroy"
        }), "释放内存。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_asym_key.h\"\n#include \"CryptoArchitectureKit/crypto_signature.h\"\n\nOH_Crypto_ErrCode DoTestSm2DerConvertRS()\n{\n    uint8_t signText[] = {\n        0x30, 0x45, 0x02, 0x21, 0x00, 0xab, 0xf8, 0xe2, 0x96, 0x7d, 0x5b, 0x28, 0xfb, 0x9a, 0xbd, 0x05, 0xa6,\n        0x81, 0xd6, 0xb1, 0x55, 0x69, 0x22, 0x25, 0xd2, 0xa3, 0x5d, 0xa8, 0xc0, 0x96, 0xe0, 0x1d, 0x38, 0x74,\n        0xa0, 0xc9, 0x4f, 0x02, 0x20, 0x20, 0x27, 0x04, 0x7a, 0x31, 0x94, 0xe7, 0x32, 0x61, 0xc3, 0x55, 0xa6,\n        0x5e, 0x1e, 0xdd, 0x3d, 0x04, 0x1c, 0x1e, 0x2d, 0x8d, 0x8d, 0x45, 0xca, 0xd9, 0x40, 0xe8, 0x97, 0xcd,\n        0x01, 0x18, 0xc5,\n    };\n    Crypto_DataBlob signBlob = {\n        .data = reinterpret_cast<uint8_t *>(signText),\n        .len = sizeof(signText)};\n\n    OH_CryptoEccSignatureSpec *eccSignSpec = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoEccSignatureSpec_Create(&signBlob, &eccSignSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    Crypto_DataBlob r = {.data = nullptr, .len = 0};\n    Crypto_DataBlob s = {.data = nullptr, .len = 0};\n    ret = OH_CryptoEccSignatureSpec_GetRAndS(eccSignSpec, &r, &s);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoEccSignatureSpec_Destroy(eccSignSpec);\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&r);\n    OH_Crypto_FreeDataBlob(&s);\n    OH_CryptoEccSignatureSpec_Destroy(eccSignSpec);\n    return CRYPTO_SUCCESS;\n}\n"
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