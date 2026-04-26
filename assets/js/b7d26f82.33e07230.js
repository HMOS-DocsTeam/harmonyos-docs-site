"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["388655"], {
290729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_rypto_convert_compressed_or_uncompressed_ecc_point_rypto_convert_compressed_or_uncompressed_ecc_point_md_b7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-rypto-convert-compressed-or-uncompressed-ecc-point-rypto-convert-compressed-or-uncompressed-ecc-point-md-b7d.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_rypto_convert_compressed_or_uncompressed_ecc_point_rypto_convert_compressed_or_uncompressed_ecc_point_md_b7d_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point/rypto-convert-compressed-or-uncompressed-ecc-point","title":"使用ECC压缩/非压缩点格式转换(ArkTS)","description":"支持将压缩/非压缩的点数据转换为Point对象，用于密钥对象生成；也支持将Point对象转换为压缩/非压缩的点数据。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point/rypto-convert-compressed-or-uncompressed-ecc-point.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"使用ECC压缩/非压缩点格式转换(ArkTS)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rypto-convert-compressed-or-uncompressed-ecc-point","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ECC压缩/非压缩公钥格式转换(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/x-convert-compressed-or-uncompressed-ecc-pubkey-ndk/"},"next":{"title":"使用ECC压缩/非压缩点格式转换(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/o-convert-compressed-or-uncompressed-ecc-point-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/rypto-convert-compressed-or-uncompressed-ecc-point/rypto-convert-compressed-or-uncompressed-ecc-point.md


const frontMatter = {
	title: '使用ECC压缩/非压缩点格式转换(ArkTS)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rypto-convert-compressed-or-uncompressed-ecc-point',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ECC压缩/非压缩点格式转换(ArkTS)';

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
        id: "使用ecc压缩非压缩点格式转换arkts",
        children: "使用ECC压缩/非压缩点格式转换(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持将压缩/非压缩的点数据转换为Point对象，用于密钥对象生成；也支持将Point对象转换为压缩/非压缩的点数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ECC的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc",
        children: "非对称密钥生成和转换规格：ECC"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过传入字符串参数format，可指定需要获取的点数据格式。如果需要获取压缩格式，则指定format为：\"COMPRESSED\"；需要获取非压缩格式，则指定format为：\"UNCOMPRESSED\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定非压缩点数据转换为压缩点数据",
      children: "指定非压缩点数据转换为压缩点数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定Uint8Array类型的ECC非压缩点数据，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertpoint12",
          children: "ECCKeyUtil.convertPoint"
        }), "，构造", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#point10",
          children: "Point"
        }), "对象，用于生成点数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencodedpoint12",
          children: "ECCKeyUtil.getEncodedPoint"
        }), "，获取压缩点数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction eccPointUncompressedToCompressed() {\n  let pkData =\n    new Uint8Array([4, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195,\n      157, 111, 40, 217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242,\n      206, 200, 98, 178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152]);\n  let returnPoint = cryptoFramework.ECCKeyUtil.convertPoint('NID_brainpoolP256r1', pkData);\n  console.info('convertPoint result: success.');\n  let returnData = cryptoFramework.ECCKeyUtil.getEncodedPoint('NID_brainpoolP256r1', returnPoint, 'COMPRESSED');\n  console.info('returnData: ' + returnData);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定压缩点数据获取密钥对象",
      children: "指定压缩点数据获取密钥对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定Uint8Array类型的ECC压缩点数据，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertpoint12",
          children: "ECCKeyUtil.convertPoint"
        }), "，得到", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#point10",
          children: "Point"
        }), "对象，用于密钥对象生成。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#genecccommonparamsspec11",
          children: "ECCKeyUtil.genECCCommonParamsSpec"
        }), "，指定曲线名'NID_brainpoolP256r1'，生成ECC的非对称公共密钥参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#eccpubkeyspec10",
          children: "ECCPubKeySpec"
        }), "对象，用于指定ECC算法中公钥包含的参数。ECCPubKeySpec是AsyKeySpec的子类。需要通过参数algName指定算法'ECC'；指定密钥参数类型", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#asykeyspectype10",
          children: "AsyKeySpecType.PUBLIC_KEY_SPEC"
        }), "，参数pk指定为得到的point对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过得到的公钥参数，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygeneratorbyspec10",
          children: "createAsyKeyGeneratorBySpec"
        }), "，创建非对称密钥生成器（AsyKeyGeneratorBySpec）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatepubkey10",
          children: "AsyKeyGeneratorBySpec.generatePubKey"
        }), "，得到指定的公钥。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencodedpoint12",
          children: "ECCKeyUtil.getEncodedPoint"
        }), "，得到非压缩点数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getasykeyspec10",
          children: "PubKey.getAsyKeySpec"
        }), "，获取ECC算法中公钥pk的x坐标。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nasync function eccPointCompressedToPoint() {\n  let pkData =\n    new Uint8Array([2, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195,\n      157, 111, 40, 217, 215, 148, 120, 224, 205, 82]);\n  let returnPoint = cryptoFramework.ECCKeyUtil.convertPoint('NID_brainpoolP256r1', pkData);\n  console.info('convertPoint result: success.');\n  let eccCommonParamsSpec = cryptoFramework.ECCKeyUtil.genECCCommonParamsSpec('NID_brainpoolP256r1');\n  let eccPubKeySpec: cryptoFramework.ECCPubKeySpec = {\n    algName: 'ECC',\n    specType: cryptoFramework.AsyKeySpecType.PUBLIC_KEY_SPEC,\n    params: eccCommonParamsSpec,\n    pk: returnPoint\n  };\n  let generatorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(eccPubKeySpec);\n  let pubKey = await generatorBySpec.generatePubKey();\n  let returnData = cryptoFramework.ECCKeyUtil.getEncodedPoint('NID_brainpoolP256r1', returnPoint, 'UNCOMPRESSED');\n  console.info('returnData: ' + returnData);\n  let eccPkX = pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_X_BN);\n  console.info('returnPoint x data: ' + returnPoint.x);\n  console.info('ECC_PK_X_BN: ' + eccPkX);\n}\n"
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