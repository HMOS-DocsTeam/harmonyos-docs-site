"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["222063"], {
271622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_agreement_crypto_key_agreement_overview_crypto_key_agreement_overview_md_ae7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-agreement-crypto-key-agreement-overview-crypto-key-agreement-overview-md-ae7.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_agreement_crypto_key_agreement_overview_crypto_key_agreement_overview_md_ae7_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview/crypto-key-agreement-overview","title":"密钥协商介绍及算法规格","description":"在非安全通道环境中，需要不共享任何秘密的情况下，协商出一个安全的共享密钥，可以使用密钥协商算法。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview/crypto-key-agreement-overview.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview","slug":"/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"密钥协商介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-agreement-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SM2签名数据格式转换 (C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion-ndk/"},"next":{"title":"使用ECDH进行密钥协商(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-ecdh/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview/crypto-key-agreement-overview.md


const frontMatter = {
	title: '密钥协商介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-agreement-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥协商介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "ECDH",
  "id": "ecdh",
  "level": 2
}, {
  "value": "X25519",
  "id": "x25519",
  "level": 2
}, {
  "value": "DH",
  "id": "dh",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "密钥协商介绍及算法规格",
        children: "密钥协商介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非安全通道环境中，需要不共享任何秘密的情况下，协商出一个安全的共享密钥，可以使用密钥协商算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来将说明系统目前支持的算法及其对应的规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ecdh",
      children: "ECDH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECDH（Elliptic Curve Diffie–Hellman key exchange），算法库框架提供了多种椭圆曲线的ECDH能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当创建密钥协商时，需要使用表中“字符串参数”一列，指定密钥协商算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC521"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP160r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP160t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP192r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP192t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP224r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP224t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP256r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP256t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP320r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP320t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP384r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP384t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP512r1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_BrainPoolP512t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC_Secp256k1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，ECDH密钥协商参数输入密钥类型时支持不指定长度和曲线，密钥协商运算取决于实际输入的密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "x25519",
      children: "X25519"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法库框架提供了X25519密钥协商的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当创建密钥协商时，需要使用表中“字符串参数”一列，指定密钥协商算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dh",
      children: "DH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DH（Diffie–Hellman key exchange），算法库框架提供了DH密钥协商的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当创建密钥协商时，需要使用表中“字符串参数”一列，指定密钥协商算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "非对称密钥算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_modp1536"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_modp2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_modp3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_modp4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_modp6144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_modp8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_ffdhe2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_ffdhe3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_ffdhe4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_ffdhe6144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH_ffdhe8192"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如表中最后一行所示，为了兼容由密钥参数生成的密钥，DH密钥协商参数输入密钥类型时支持不指定知名安全素数群，密钥协商运算结果由实际输入的密钥决定，且该场景支持非标准群组的密钥协商。"
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