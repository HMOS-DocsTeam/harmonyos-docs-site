"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["116601"], {
974251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_architecture_kit_intro_crypto_architecture_kit_intro_md_889_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-architecture-kit-intro-crypto-architecture-kit-intro-md-889.json
var site_docs_system_security_crypto_architecture_kit_crypto_architecture_kit_intro_crypto_architecture_kit_intro_md_889_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-architecture-kit-intro/crypto-architecture-kit-intro","title":"Crypto Architecture Kit简介","description":"Crypto Architecture Kit屏蔽了第三方密码学算法库实现差异的算法框架，提供加解密、签名验签、消息认证码、哈希、安全随机数、密钥派生等相关功能。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-architecture-kit-intro/crypto-architecture-kit-intro.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-architecture-kit-intro","slug":"/system-security/crypto-architecture-kit/crypto-architecture-kit-intro/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-architecture-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Crypto Architecture Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-architecture-kit-intro","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同步（备份恢复）关键资产(C/C++)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-native/asset-native-sync/"},"next":{"title":"密钥生成与转换介绍","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-architecture-kit-intro/crypto-architecture-kit-intro.md


const frontMatter = {
	title: 'Crypto Architecture Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-architecture-kit-intro',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'Crypto Architecture Kit简介';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "crypto-architecture-kit简介",
        children: "Crypto Architecture Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Crypto Architecture Kit屏蔽了第三方密码学算法库实现差异的算法框架，提供加解密、签名验签、消息认证码、哈希、安全随机数、密钥派生等相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过调用加解密算法框架服务，忽略底层不同第三方密码学算法库的差异，实现快速开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crypto Architecture Kit不支持多线程并发操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crypto Architecture Kit当前基于OpenSSL实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crypto Architecture Kit提供了大部分常用的算法。然而，部分算法和规格并不适用于对安全要求较高的场景，例如 MD5。请开发者根据实际需求选择合适的算法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加解密算法库为开发者提供了以下相关功能，并提供了对应的算法规格说明和开发指导，请开发者参照开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-overview",
          children: "密钥生成和转换"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encryption-decryption-overview",
          children: "加解密"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview",
          children: "签名验签"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview",
          children: "密钥协商"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-generate-message/crypto-generate-message-digest-overview",
          children: "消息摘要计算"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-compute-mac/crypto-compute-mac-overview",
          children: "消息认证码计算"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number",
          children: "安全随机数生成"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview",
          children: "密钥派生"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发具体功能前，需要了解以下基本概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对称密钥"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加解密双方使用同一个密钥完成数据加密、解密的操作。即数据发送方使用某个加密密钥对明文进行特殊加密算法处理后，使其变成复杂的加密密文发送出去，接收方需使用同一个密钥及相同算法的逆算法解密，才能得到原来的可读明文。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非对称密钥"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非对称密钥使用公钥和私钥两个密钥来进行算法操作，公钥对外公开，私钥对外保密。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于加解密操作，一般使用公钥对明文加密形成密文；持有私钥的人即可解密密文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于签名验签操作，使用私钥对明文进行签名；公钥持有者可以通过公钥对签名数据做验签，验证数据是否被篡改。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加解密算法库框架仅提供密钥的密码学操作，不提供密钥管理功能。因此，应用需自行保管密钥，适用于临时会话密钥等仅在内存中使用的场景，或自行实现密钥安全存储的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果业务需要由系统提供密钥管理功能（密钥存储等），请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-overview",
        children: "Universal Keystore Kit（密钥管理服务）"
      }), "。"]
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