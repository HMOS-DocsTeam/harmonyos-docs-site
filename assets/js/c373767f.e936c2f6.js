"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["544496"], {
308031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_compute_mac_crypto_compute_mac_overview_crypto_compute_mac_overview_md_c37_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-compute-mac-crypto-compute-mac-overview-crypto-compute-mac-overview-md-c37.json
var site_docs_system_security_crypto_architecture_kit_crypto_compute_mac_crypto_compute_mac_overview_crypto_compute_mac_overview_md_c37_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview/crypto-compute-mac-overview","title":"消息认证码计算介绍及算法规格","description":"MAC（Message Authentication Code，消息认证码）可以对消息进行完整性校验，通过使用双方共享的密钥，识别出信息伪装篡改等行为。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview/crypto-compute-mac-overview.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview","slug":"/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"消息认证码计算介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-mac-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"消息摘要计算SHA3-256(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-dev/crypto-generate-message-digest-sha3-ndk/"},"next":{"title":"消息认证码计算HMAC(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-hmac/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview/crypto-compute-mac-overview.md


const frontMatter = {
	title: '消息认证码计算介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-mac-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '消息认证码计算介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "HMAC",
  "id": "hmac",
  "level": 2
}, {
  "value": "CMAC",
  "id": "cmac",
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
        id: "消息认证码计算介绍及算法规格",
        children: "消息认证码计算介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAC（Message Authentication Code，消息认证码）可以对消息进行完整性校验，通过使用双方共享的密钥，识别出信息伪装篡改等行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来将说明系统目前支持的算法及其对应的规格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hmac",
      children: "HMAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMAC（Hash-based Message Authentication Code）是一种基于哈希的消息认证码算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMAC通过指定的摘要算法，以通信双方共享的密钥和消息作为输入，生成消息认证码，用于检验传递报文的完整性。HMAC在消息摘要算法基础上增加了密钥输入，确保信息的正确性。生成的消息认证码长度固定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当创建HMAC消息认证码时，需要根据表中“支持种类”一列指定算法规格。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持种类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cmac",
      children: "CMAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "‌CMAC（Cipher-based Message Authentication Code）是一种基于密码的消息认证码算法，主要用于确保消息的完整性和真实性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMAC通过使用分组密码（如AES）和一个密钥来生成消息认证码，确保消息在传输过程中未被篡改‌。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "加密算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+"
          })]
        })]
      })]
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