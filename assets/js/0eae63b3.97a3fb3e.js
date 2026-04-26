"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["711105"], {
97247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_ciphertext_conversion_crypto_sm_2_ciphertext_conversion_md_0ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-sm-2-ciphertext-conversion-crypto-sm-2-ciphertext-conversion-md-0ea.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_ciphertext_conversion_crypto_sm_2_ciphertext_conversion_md_0ea_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion/crypto-sm2-ciphertext-conversion","title":"使用SM2密文格式转换(ArkTS)","description":"当前支持的SM2密文格式为国密标准的ASN.1格式，其中各参数组合顺序为C1C3C2，具体参数含义请参考转换SM2密文格式。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion/crypto-sm2-ciphertext-conversion.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":36,"frontMatter":{"title":"使用SM2密文格式转换(ArkTS)","sidebar_position":36,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-ciphertext-conversion","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AES-WRAP算法对对称密钥加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-wrap-encrypt-decrypt-ndk/"},"next":{"title":"使用SM2密文格式转换(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion/crypto-sm2-ciphertext-conversion.md


const frontMatter = {
	title: '使用SM2密文格式转换(ArkTS)',
	sidebar_position: 36,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-ciphertext-conversion',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM2密文格式转换(ArkTS)';

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
        id: "使用sm2密文格式转换arkts",
        children: "使用SM2密文格式转换(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的SM2密文格式为国密标准的ASN.1格式，其中各参数组合顺序为C1C3C2，具体参数含义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#%E8%BD%AC%E6%8D%A2sm2%E5%AF%86%E6%96%87%E6%A0%BC%E5%BC%8F",
        children: "转换SM2密文格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可指定SM2密文的参数，将其转换成符合国密标准的ASN.1格式密文。反之，也可以从国密标准的ASN.1格式密文中取出具体的SM2密文参数，便于开发者自行组合成其他格式的SM2密文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指定密文参数，生成标准ASN.1密文"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#sm2ciphertextspec12",
          children: "SM2CipherTextSpec"
        }), "对象，用于指定SM2密文参数。如果开发者使用的不是国密标准的ASN.1格式密文，需自行提取所需要的参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#genciphertextbyspec12",
          children: "genCipherTextBySpec"
        }), "，将SM2CipherTextSpec对象传入，生成符合国密标准的ASN.1格式的SM2密文。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成的密文可直接使用cryptoFramework进行SM2解密。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction testGenCipherTextBySpec() {\n  let spec: cryptoFramework.SM2CipherTextSpec = {\n    xCoordinate: BigInt('20625015362595980457695435345498579729138244358573902431560627260141789922999'),\n    yCoordinate: BigInt('48563164792857017065725892921053777369510340820930241057309844352421738767712'),\n    cipherTextData: new Uint8Array([100, 227, 78, 195, 249, 179, 43, 70, 242, 69, 169, 10, 65, 123]),\n    hashData: new Uint8Array([87, 167, 167, 247, 88, 146, 203, 234, 83, 126, 117, 129, 52, 142, 82, 54, 152, 226, 201,\n      111, 143, 115, 169, 125, 128, 42, 157, 31, 114, 198, 109, 244]),\n  }\n  // 此处的data可直接使用cryptoFramework进行SM2解密\n  let data = cryptoFramework.SM2CryptoUtil.genCipherTextBySpec(spec, 'C1C3C2');\n  console.info('genCipherTextBySpec result: success.');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "从标准ASN.1密文中，获取密文参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备符合国密标准的ASN.1格式的SM2密文。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#genciphertextbyspec12",
          children: "getCipherTextSpec"
        }), "，从标准密文中，获取具体的SM2密文参数。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据业务需要，自行拼接SM2密文参数，形成其他格式的SM2密文。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction testGetCipherTextSpec() {\n  let cipherTextArray =\n    new Uint8Array([48, 118, 2, 32, 45, 153, 88, 82, 104, 221, 226, 43, 174, 21, 122, 248, 5, 232, 105, 41, 92, 95, 102,\n      224, 216, 149, 85, 236, 110, 6, 64, 188, 149, 70, 70, 183, 2, 32, 107, 93, 198, 247, 119, 18, 40, 110, 90, 156,\n      193, 158, 205, 113, 170, 128, 146, 109, 75, 17, 181, 109, 110, 91, 149, 5, 110, 233, 209, 78, 229, 96, 4, 32, 87,\n      167, 167, 247, 88, 146, 203, 234, 83, 126, 117, 129, 52, 142, 82, 54, 152, 226, 201, 111, 143, 115, 169, 125, 128,\n      42, 157, 31, 114, 198, 109, 244, 4, 14, 100, 227, 78, 195, 249, 179, 43, 70, 242, 69, 169, 10, 65, 123]);\n  let cipherText: cryptoFramework.DataBlob = { data: cipherTextArray };\n  let spec: cryptoFramework.SM2CipherTextSpec = cryptoFramework.SM2CryptoUtil.getCipherTextSpec(cipherText, 'C1C3C2');\n  console.info('getCipherTextSpec result: success.');\n}\n"
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