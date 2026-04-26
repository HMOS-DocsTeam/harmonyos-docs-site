"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["652897"], {
686992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_agreement_crypto_key_agreement_dev_crypto_key_agreement_using_dh_crypto_key_agreement_using_dh_md_6b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-agreement-crypto-key-agreement-dev-crypto-key-agreement-using-dh-crypto-key-agreement-using-dh-md-6b4.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_agreement_crypto_key_agreement_dev_crypto_key_agreement_using_dh_crypto_key_agreement_using_dh_md_6b4_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh/crypto-key-agreement-using-dh","title":"使用DH进行密钥协商(ArkTS)","description":"对应的算法规格请查看密钥协商算法规格：DH。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh/crypto-key-agreement-using-dh.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh","slug":"/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用DH进行密钥协商(ArkTS)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-agreement-using-dh","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用X25519进行密钥协商(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-x25519-ndk/"},"next":{"title":"使用DH进行密钥协商(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh/crypto-key-agreement-using-dh.md


const frontMatter = {
	title: '使用DH进行密钥协商(ArkTS)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-agreement-using-dh',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用DH进行密钥协商(ArkTS)';

const assets = {

};



const toc = [{
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用dh进行密钥协商arkts",
        children: "使用DH进行密钥协商(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview#dh",
        children: "密钥协商算法规格：DH"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair-1",
            children: "AsyKeyGenerator.generateKeyPair"
          }), "生成密钥算法为DH、采用知名安全素数群modp1536的非对称密钥（KeyPair）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成DH非对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#dh",
            children: "非对称密钥生成和转换规格：DH"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly",
            children: "随机生成非对称密钥对"
          }), "理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatekeyagreement",
            children: "cryptoFramework.createKeyAgreement"
          }), "，指定字符串参数'DH_modp1536'，创建密钥算法为DH、采用知名安全素数群modp1536的密钥协议生成器（KeyAgreement）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatesecret-1",
            children: "KeyAgreement.generateSecret"
          }), "，基于传入的私钥（KeyPair.priKey）与公钥（KeyPair.pubKey）进行密钥协商，返回共享秘密。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nasync function dhAwait() {\n  let keyGen = cryptoFramework.createAsyKeyGenerator('DH_modp1536');\n  // 随机生成公私钥对A\n  let keyPairA = await keyGen.generateKeyPair();\n  // 随机生成规格一致的公私钥对B\n  let keyPairB = await keyGen.generateKeyPair();\n  let keyAgreement = cryptoFramework.createKeyAgreement('DH_modp1536');\n  // 使用A的公钥和B的私钥进行密钥协商\n  let secret1 = await keyAgreement.generateSecret(keyPairB.priKey, keyPairA.pubKey);\n  // 使用A的私钥和B的公钥进行密钥协商\n  let secret2 = await keyAgreement.generateSecret(keyPairA.priKey, keyPairB.pubKey);\n  // 两种协商的结果应当一致\n  if (secret1.data.toString() === secret2.data.toString()) {\n    console.info('DH result: success.');\n    console.info('DH output: ' + secret1.data);\n  } else {\n    console.error('DH result is not equal.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction dhAwait() {\n  let keyGen = cryptoFramework.createAsyKeyGenerator('DH_modp1536');\n  // 随机生成公私钥对A\n  let keyPairA = keyGen.generateKeyPairSync();\n  // 随机生成规格一致的公私钥对B\n  let keyPairB = keyGen.generateKeyPairSync();\n  let keyAgreement = cryptoFramework.createKeyAgreement('DH_modp1536');\n  // 使用A的公钥和B的私钥进行密钥协商\n  let secret1 = keyAgreement.generateSecretSync(keyPairB.priKey, keyPairA.pubKey);\n  // 使用A的私钥和B的公钥进行密钥协商\n  let secret2 = keyAgreement.generateSecretSync(keyPairA.priKey, keyPairB.pubKey);\n  // 两种协商的结果应当一致\n  if (secret1.data.toString() === secret2.data.toString()) {\n    console.info('DH result: success.');\n    console.info('DH output: ' + secret1.data);\n  } else {\n    console.error('DH result is not equal.');\n  }\n}\n"
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