"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["832038"], {
685625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_asym_key_pair_randomly_crypto_generate_asym_key_pair_randomly_md_cf9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-generate-asym-key-pair-randomly-crypto-generate-asym-key-pair-randomly-md-cf9.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_asym_key_pair_randomly_crypto_generate_asym_key_pair_randomly_md_cf9_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly/crypto-generate-asym-key-pair-randomly","title":"随机生成非对称密钥对(ArkTS)","description":"以RSA和SM2为例，随机生成非对称密钥对（KeyPair），并获得二进制数据。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly/crypto-generate-asym-key-pair-randomly.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"随机生成非对称密钥对(ArkTS)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-randomly","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"指定二进制数据转换对称密钥(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key-ndk/"},"next":{"title":"随机生成非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly/crypto-generate-asym-key-pair-randomly.md


const frontMatter = {
	title: '随机生成非对称密钥对(ArkTS)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-randomly',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '随机生成非对称密钥对(ArkTS)';

const assets = {

};



const toc = [{
  "value": "随机生成RSA密钥对",
  "id": "随机生成rsa密钥对",
  "level": 2
}, {
  "value": "随机生成SM2密钥对",
  "id": "随机生成sm2密钥对",
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
        id: "随机生成非对称密钥对arkts",
        children: "随机生成非对称密钥对(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA和SM2为例，随机生成非对称密钥对（KeyPair），并获得二进制数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非对称密钥对可用于后续加解密等操作，二进制数据可用于存储或传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "随机生成rsa密钥对",
      children: "随机生成RSA密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
        children: "非对称密钥生成和转换规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'RSA1024|PRIMES_2'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair-1",
            children: "AsyKeyGenerator.generateKeyPair"
          }), "，随机生成非对称密钥对象（KeyPair）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "KeyPair对象中包括公钥PubKey、私钥PriKey。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencoded",
            children: "PubKey.getEncoded"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencoded",
            children: "PriKey.getEncoded"
          }), "，分别获取密钥对象的二进制数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用Promise方式随机生成RSA密钥对为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction generateAsyKey() {\n  // 创建一个AsyKeyGenerator实例\n  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');\n  // 使用密钥生成器随机生成非对称密钥对\n  let keyGenPromise = rsaGenerator.generateKeyPair();\n  keyGenPromise.then(keyPair => {\n    let pubKey = keyPair.pubKey;\n    let priKey = keyPair.priKey;\n    // 获取非对称密钥对的二进制数据\n    let pkBlob = pubKey.getEncoded();\n    let skBlob = priKey.getEncoded();\n    console.info('pk bin data: ' + pkBlob.data);\n    console.info('sk bin data: ' + skBlob.data);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypairsync12",
            children: "generateKeyPairSync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction generateAsyKeySync() {\n  // 创建一个AsyKeyGenerator实例\n  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');\n  // 使用密钥生成器随机生成非对称密钥对\n  try {\n    let keyPair = rsaGenerator.generateKeyPairSync();\n    if (keyPair != null) {\n      let pubKey = keyPair.pubKey;\n      let priKey = keyPair.priKey;\n      // 获取非对称密钥对的二进制数据\n      let pkBlob = pubKey.getEncoded();\n      let skBlob = priKey.getEncoded();\n      console.info('pk bin data: ' + pkBlob.data);\n      console.info('sk bin data: ' + skBlob.data);\n    } else {\n      console.error('[Sync]: get key pair result: fail!');\n    }\n  } catch (e) {\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "随机生成sm2密钥对",
      children: "随机生成SM2密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2",
        children: "非对称密钥生成和转换规格：SM2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'SM2_256'，创建密钥算法为SM2、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair-1",
            children: "AsyKeyGenerator.generateKeyPair"
          }), "，随机生成非对称密钥对象（KeyPair）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "KeyPair对象中包括公钥PubKey、私钥PriKey。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencoded",
            children: "PubKey.getEncoded"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencoded",
            children: "PriKey.getEncoded"
          }), "，分别获取密钥对象的二进制数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用Promise方式随机生成SM2密钥对为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction generateSM2Key() {\n  // 创建一个AsyKeyGenerator实例\n  let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');\n  // 使用密钥生成器随机生成非对称密钥对\n  let keyGenPromise = sm2Generator.generateKeyPair();\n  keyGenPromise.then(keyPair => {\n    let pubKey = keyPair.pubKey;\n    let priKey = keyPair.priKey;\n    // 获取非对称密钥对的二进制数据\n    let pkBlob = pubKey.getEncoded();\n    let skBlob = priKey.getEncoded();\n    console.info('pk bin data: ' + pkBlob.data);\n    console.info('sk bin data: ' + skBlob.data);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypairsync12",
            children: "generateKeyPairSync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction generateSM2KeySync() {\n  // 创建一个AsyKeyGenerator实例\n  let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');\n  // 使用密钥生成器随机生成非对称密钥对\n  try {\n    let keyPair = sm2Generator.generateKeyPairSync();\n    if (keyPair != null) {\n      let pubKey = keyPair.pubKey;\n      let priKey = keyPair.priKey;\n      // 获取非对称密钥对的二进制数据\n      let pkBlob = pubKey.getEncoded();\n      let skBlob = priKey.getEncoded();\n      console.info('pk bin data: ' + pkBlob.data);\n      console.info('sk bin data: ' + skBlob.data);\n    } else {\n      console.error('[Sync]: get key pair result: fail!');\n    }\n  } catch (e) {\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
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