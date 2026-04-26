"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["489240"], {
617343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_ypto_convert_compressed_or_uncompressed_ecc_pubkey_ypto_convert_compressed_or_uncompressed_ecc_pubkey_md_ea1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-ypto-convert-compressed-or-uncompressed-ecc-pubkey-ypto-convert-compressed-or-uncompressed-ecc-pubkey-md-ea1.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_ypto_convert_compressed_or_uncompressed_ecc_pubkey_ypto_convert_compressed_or_uncompressed_ecc_pubkey_md_ea1_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey/ypto-convert-compressed-or-uncompressed-ecc-pubkey","title":"使用ECC压缩/非压缩公钥格式转换(ArkTS)","description":"可通过指定ECC公钥数据生成公钥对象（PubKey），也可以从公钥对象（PubKey）中获取ECC公钥数据。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey/ypto-convert-compressed-or-uncompressed-ecc-pubkey.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"使用ECC压缩/非压缩公钥格式转换(ArkTS)","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ypto-convert-compressed-or-uncompressed-ecc-pubkey","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"指定密钥参数生成非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/"},"next":{"title":"使用ECC压缩/非压缩公钥格式转换(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/x-convert-compressed-or-uncompressed-ecc-pubkey-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey/ypto-convert-compressed-or-uncompressed-ecc-pubkey.md


const frontMatter = {
	title: '使用ECC压缩/非压缩公钥格式转换(ArkTS)',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ypto-convert-compressed-or-uncompressed-ecc-pubkey',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ECC压缩/非压缩公钥格式转换(ArkTS)';

const assets = {

};



const toc = [{
  "value": "指定非压缩公钥数据转换为压缩公钥数据",
  "id": "指定非压缩公钥数据转换为压缩公钥数据",
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
        id: "使用ecc压缩非压缩公钥格式转换arkts",
        children: "使用ECC压缩/非压缩公钥格式转换(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过指定ECC公钥数据生成公钥对象（PubKey），也可以从公钥对象（PubKey）中获取ECC公钥数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持满足X509规范的ECC算法压缩和非压缩格式的公钥数据。此处的公钥数据应当是完整的X509公钥，对于只使用点数据的情况，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point",
        children: "使用ECC压缩/非压缩点格式转换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ECC的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc",
        children: "非对称密钥生成和转换规格：ECC"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过传入字符串参数format，可指定需要获取的ECC公钥数据格式。如果需要获取满足X509规范的压缩格式数据，则指定format为：\"X509|COMPRESSED\"；需要获取非压缩格式，则指定format为：\"X509|UNCOMPRESSED\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定非压缩公钥数据转换为压缩公钥数据",
      children: "指定非压缩公钥数据转换为压缩公钥数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将Uint8Array类型的ECC非压缩公钥数据封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#datablob",
            children: "DataBlob"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "公钥和私钥可只传入其中一个。此处示例传入非压缩公钥。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'ECC_BrainPoolP256r1'，创建密钥算法为ECC、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-3",
            children: "AsyKeyGenerator.convertKey"
          }), "，传入封装后的DataBlob对象，生成非对称密钥对象（KeyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencodedder12",
            children: "PubKey.getEncodedDer"
          }), "，设置参数为'X509|COMPRESSED'，获取压缩公钥数据的字节流。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nasync function eccPubUncompressedToCompressed() {\n  let pkData =\n    new Uint8Array([48, 90, 48, 20, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 9, 43, 36, 3, 3, 2, 8, 1, 1, 7, 3, 66, 0, 4,\n      143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195, 157, 111, 40,\n      217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242, 206, 200, 98,\n      178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152]);\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pkData };\n  let generator = cryptoFramework.createAsyKeyGenerator('ECC_BrainPoolP256r1');\n  let keyPair = await generator.convertKey(pubKeyBlob, null);\n  let returnBlob = keyPair.pubKey.getEncodedDer('X509|COMPRESSED');\n  console.info('returnBlob data: ' + returnBlob.data);\n}\n"
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