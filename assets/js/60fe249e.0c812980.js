"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["855835"], {
191261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_scrypt_crypto_key_derivation_using_scrypt_md_60f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-derivation-crypto-key-derivation-using-scrypt-crypto-key-derivation-using-scrypt-md-60f.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_derivation_crypto_key_derivation_using_scrypt_crypto_key_derivation_using_scrypt_md_60f_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt/crypto-key-derivation-using-scrypt","title":"使用SCRYPT进行密钥派生(ArkTS)","description":"对应的算法规格请查看密钥派生算法规格：SCRYPT。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt/crypto-key-derivation-using-scrypt.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt","slug":"/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用SCRYPT进行密钥派生(ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-scrypt","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HKDF进行密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-hkdf-ndk/"},"next":{"title":"使用SCRYPT进行密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-scrypt/crypto-key-derivation-using-scrypt.md


const frontMatter = {
	title: '使用SCRYPT进行密钥派生(ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-scrypt',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SCRYPT进行密钥派生(ArkTS)';

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
        id: "使用scrypt进行密钥派生arkts",
        children: "使用SCRYPT进行密钥派生(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview#scrypt%E7%AE%97%E6%B3%95",
        children: "密钥派生算法规格：SCRYPT"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#scryptspec18",
            children: "ScryptSpec"
          }), "对象，作为密钥派生参数进行密钥派生。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ScryptSpec是", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#kdfspec11",
            children: "KdfSpec"
          }), "的子类，需要指定："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "algName：指定算法名为'SCRYPT'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "passphrase：用于生成派生密钥的原始密码。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果使用string类型，需要直接传入用于密钥派生的数据，而不是HexString、base64等字符串类型。同时需要确保该字符串为utf-8编码，否则派生结果会有差异。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "salt：盐值。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "n：迭代次数，需要为正整数。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "p：并行化参数，需要为正整数。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "r：块大小参数，需要为正整数。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "maxMemory：最大内存限制参数，需要为正整数。"
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
          }), "，指定字符串参数'SCRYPT'，创建密钥派生算法为SCRYPT的密钥派生函数对象（Kdf）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入SCRYPT对象，调用", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { buffer } from '@kit.ArkTS';\n\nasync function scryptAwait() {\n  try {\n    let spec: cryptoFramework.ScryptSpec = {\n      algName: 'SCRYPT',\n      salt: new Uint8Array(16),\n      passphrase: 'password',\n      n:1024,\n      p:16,\n      r:8,\n      maxMemory:1024 * 16 * 8 * 10, //n * p * r * 10\n      keySize: 64\n    };\n    let kdf = cryptoFramework.createKdf('SCRYPT');\n    let secret = await kdf.generateSecret(spec);\n    console.info('key derivation output: ' + secret.data);\n  } catch(error) {\n    let e: BusinessError = error as BusinessError;\n    console.error('key derivation failed, errCode: ' + e.code + ', errMsg: ' + e.message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Promise返回结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction scryptPromise() {\n  let spec: cryptoFramework.ScryptSpec = {\n    algName: 'SCRYPT',\n    passphrase: '123456',\n    salt: new Uint8Array(16),\n    n:1024,\n    p:16,\n    r:8,\n    maxMemory:1024 * 16 * 8 * 10, //n * p * r * 10\n    keySize: 64\n  };\n  let kdf = cryptoFramework.createKdf('SCRYPT');\n  let kdfPromise = kdf.generateSecret(spec);\n  kdfPromise.then((secret) => {\n    console.info('key derivation output: ' + secret.data);\n  }).catch((error: BusinessError) => {\n    console.error(`key derivation failed: errCode: ${error.code}, message: ${error.message}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过同步方式返回结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction kdfSync() {\n  try {\n    let spec: cryptoFramework.ScryptSpec = {\n      algName: 'SCRYPT',\n      passphrase: '123456',\n      salt: new Uint8Array(16),\n      n:1024,\n      p:16,\n      r:8,\n      maxMemory:1024 * 16 * 8 * 10, //n * p * r * 10\n      keySize: 64\n    };\n    let kdf = cryptoFramework.createKdf('SCRYPT');\n    let secret = kdf.generateSecretSync(spec);\n    console.info('[Sync]key derivation output: ' + secret.data);\n  } catch(error) {\n    let e: BusinessError = error as BusinessError;\n    console.error('key derivation failed, errCode: ' + e.code + ', errMsg: ' + e.message);\n  }\n}\n"
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