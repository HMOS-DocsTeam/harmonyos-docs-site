"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["324955"], {
612413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_hkdf_crypto_key_derivation_using_hkdf_md_be8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-derivation-crypto-key-derivation-using-hkdf-crypto-key-derivation-using-hkdf-md-be8.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_hkdf_crypto_key_derivation_using_hkdf_md_be8_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf/crypto-key-derivation-using-hkdf","title":"使用HKDF进行密钥派生(ArkTS)","description":"对应算法规格请查看密钥派生算法规格：HKDF。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf/crypto-key-derivation-using-hkdf.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf","slug":"/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用HKDF进行密钥派生(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-hkdf","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用PBKDF2进行密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-pbkdf2-ndk/"},"next":{"title":"使用HKDF进行密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf/crypto-key-derivation-using-hkdf.md


const frontMatter = {
	title: '使用HKDF进行密钥派生(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-hkdf',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HKDF进行密钥派生(ArkTS)';

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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用hkdf进行密钥派生arkts",
        children: "使用HKDF进行密钥派生(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview#hkdf%E7%AE%97%E6%B3%95",
        children: "密钥派生算法规格：HKDF"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#hkdfspec12",
            children: "HKDFSpec"
          }), "对象，作为密钥派生参数进行密钥派生。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HKDFSpec是", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#kdfspec11",
            children: "KdfSpec"
          }), "的子类，需要指定："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "algName：指定算法'HKDF'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "key：原始密钥材料。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果使用string类型，需要直接传入用于密钥派生的数据，而不是HexString、base64等字符串类型。同时需要确保该字符串为utf-8编码，否则派生结果会有差异。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "salt：盐值。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "info：可选的上下文与应用相关信息， 可为空，用于拓展短密钥。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "keySize：目标密钥的字节长度，需要为正整数。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatekdf11",
            children: "cryptoFramework.createKdf"
          }), "，指定字符串参数'HKDF|SHA256|EXTRACT_AND_EXPAND'，创建密钥派生算法为HKDF、HMAC函数摘要算法为SHA256、模式为提取和拓展的密钥派生函数对象（Kdf）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入HKDFSpec对象，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatesecret11",
            children: "Kdf.generateSecret"
          }), "进行密钥派生。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kdf.generateSecret的多种调用形式如表所示。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "接口名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "返回方式"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "callback异步生成。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "generateSecret(params: KdfSpec): Promise<DataBlob>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Promise异步生成。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "generateSecretSync(params: KdfSpec): DataBlob"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "同步生成。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过await返回结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nasync function kdfAwait() {\n  let keyData = new Uint8Array(buffer.from('012345678901234567890123456789', 'utf-8').buffer);\n  let saltData = new Uint8Array(buffer.from('0123456789', 'utf-8').buffer);\n  let infoData = new Uint8Array(buffer.from('infostring', 'utf-8').buffer);\n  let spec: cryptoFramework.HKDFSpec = {\n    algName: 'HKDF',\n    key: keyData,\n    salt: saltData,\n    info: infoData,\n    keySize: 32\n  };\n  let kdf = cryptoFramework.createKdf('HKDF|SHA256|EXTRACT_AND_EXPAND');\n  let secret = await kdf.generateSecret(spec);\n  console.info('key derivation output: ' + secret.data);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Promise返回结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction kdfPromise() {\n  let keyData = new Uint8Array(buffer.from('012345678901234567890123456789', 'utf-8').buffer);\n  let saltData = new Uint8Array(buffer.from('0123456789', 'utf-8').buffer);\n  let infoData = new Uint8Array(buffer.from('infostring', 'utf-8').buffer);\n  let spec: cryptoFramework.HKDFSpec = {\n    algName: 'HKDF',\n    key: keyData,\n    salt: saltData,\n    info: infoData,\n    keySize: 32\n  };\n  let kdf = cryptoFramework.createKdf('HKDF|SHA256|EXTRACT_AND_EXPAND');\n  let kdfPromise = kdf.generateSecret(spec);\n  kdfPromise.then((secret) => {\n    console.info('key derivation output: ' + secret.data);\n  }).catch((error: BusinessError) => {\n    console.error(`key derivation failed: errCode: ${error.code}, message: ${error.message}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过同步方式返回结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction kdfSync() {\n  let keyData = new Uint8Array(buffer.from('012345678901234567890123456789', 'utf-8').buffer);\n  let saltData = new Uint8Array(buffer.from('0123456789', 'utf-8').buffer);\n  let infoData = new Uint8Array(buffer.from('infostring', 'utf-8').buffer);\n  let spec: cryptoFramework.HKDFSpec = {\n    algName: 'HKDF',\n    key: keyData,\n    salt: saltData,\n    info: infoData,\n    keySize: 32\n  };\n  let kdf = cryptoFramework.createKdf('HKDF|SHA256|EXTRACT_AND_EXPAND');\n  let secret = kdf.generateSecretSync(spec);\n  console.info('[Sync]key derivation output: ' + secret.data);\n}\n"
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