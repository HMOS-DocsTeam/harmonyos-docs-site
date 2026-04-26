"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["631229"], {
612472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_o_convert_compressed_or_uncompressed_ecc_point_ndk_o_convert_compressed_or_uncompressed_ecc_point_ndk_md_2ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-o-convert-compressed-or-uncompressed-ecc-point-ndk-o-convert-compressed-or-uncompressed-ecc-point-ndk-md-2ad.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_o_convert_compressed_or_uncompressed_ecc_point_ndk_o_convert_compressed_or_uncompressed_ecc_point_ndk_md_2ad_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/o-convert-compressed-or-uncompressed-ecc-point-ndk","title":"使用ECC压缩/非压缩点格式转换(C/C++)","description":"支持将压缩/非压缩的点数据，转换为Point对象，用于密钥对象生成；也支持将Point对象转换为压缩/非压缩的点数据。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/o-convert-compressed-or-uncompressed-ecc-point-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"使用ECC压缩/非压缩点格式转换(C/C++)","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/o-convert-compressed-or-uncompressed-ecc-point-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ECC压缩/非压缩点格式转换(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point/"},"next":{"title":"指定PEM格式字符串数据转换非对称密钥对(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-string-data-to-asym-key-pair/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/o-convert-compressed-or-uncompressed-ecc-point-ndk.md


const frontMatter = {
	title: '使用ECC压缩/非压缩点格式转换(C/C++)',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/o-convert-compressed-or-uncompressed-ecc-point-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ECC压缩/非压缩点格式转换(C/C++)';

const assets = {

};



const toc = [{
  "value": "指定非压缩点数据转换为压缩点数据",
  "id": "指定非压缩点数据转换为压缩点数据",
  "level": 2
}, {
  "value": "指定压缩点数据获取密钥对象",
  "id": "指定压缩点数据获取密钥对象",
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
        id: "使用ecc压缩非压缩点格式转换cc",
        children: "使用ECC压缩/非压缩点格式转换(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持将压缩/非压缩的点数据，转换为Point对象，用于密钥对象生成；也支持将Point对象转换为压缩/非压缩的点数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ECC的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc",
        children: "非对称密钥生成和转换规格：ECC"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过传入字符串参数format，可指定获取的点数据格式。如果获取压缩格式，则指定format为：\"COMPRESSED\"；获取非压缩格式，则指定format为：\"UNCOMPRESSED\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定非压缩点数据转换为压缩点数据",
      children: "指定非压缩点数据转换为压缩点数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定uint8_t类型的ECC非压缩点数据，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoecpoint_create",
          children: "OH_CryptoEcPoint_Create"
        }), "，构造", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymkeyapi-oh-cryptoecpoint/capi-cryptoasymkeyapi-oh-cryptoecpoint",
          children: "OH_CryptoEcPoint"
        }), "对象，用于生成点数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoecpoint_encode",
          children: "OH_CryptoEcPoint_Encode"
        }), "，获取压缩点数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n\nOH_Crypto_ErrCode doTestEccPointUncompressedToCompressed()\n{\n    uint8_t pk[] = {\n        4, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195, 157, 111,\n        40, 217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242, 206,\n        200, 98, 178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152\n    };\n    Crypto_DataBlob pkData = {pk, sizeof(pk)};\n    OH_CryptoEcPoint *point = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoEcPoint_Create(\"NID_brainpoolP256r1\", &pkData, &point);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    Crypto_DataBlob returnPointBlobData = {0};\n    ret = OH_CryptoEcPoint_Encode(point, \"COMPRESSED\", &returnPointBlobData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoEcPoint_Destroy(point);\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&returnPointBlobData);\n    OH_CryptoEcPoint_Destroy(point);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定压缩点数据获取密钥对象",
      children: "指定压缩点数据获取密钥对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定uint8_t类型的ECC压缩点数据，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoecpoint_create",
          children: "OH_CryptoEcPoint_Create"
        }), "，构造", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptoasymkeyapi-oh-cryptoecpoint/capi-cryptoasymkeyapi-oh-cryptoecpoint",
          children: "OH_CryptoEcPoint"
        }), "对象，用于生成点数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoecpoint_encode",
          children: "OH_CryptoEcPoint_Encode"
        }), "，获取非压缩点数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n\nOH_Crypto_ErrCode doTestEccPointCompressedToPoint()\n{\n    uint8_t pk[] = {\n        2, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195, 157, 111,\n        40, 217, 215, 148, 120, 224, 205, 82\n    };\n    Crypto_DataBlob pkData = {pk, sizeof(pk)};\n    OH_CryptoEcPoint *point = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoEcPoint_Create(\"NID_brainpoolP256r1\", &pkData, &point);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    Crypto_DataBlob returnPointBlobData = {0};\n    ret = OH_CryptoEcPoint_Encode(point, \"UNCOMPRESSED\", &returnPointBlobData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoEcPoint_Destroy(point);\n        return ret;\n    }\n    OH_Crypto_FreeDataBlob(&returnPointBlobData);\n    OH_CryptoEcPoint_Destroy(point);\n    return ret;\n}\n"
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