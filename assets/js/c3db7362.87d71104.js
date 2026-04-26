"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["271930"], {
854758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_development_practice_crypto_development_practice_md_c3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-development-practice-crypto-development-practice-md-c3d.json
var site_docs_system_security_crypto_architecture_kit_crypto_development_practice_crypto_development_practice_md_c3d_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-development-practice/crypto-development-practice","title":"跨平台数据兼容实践指导","description":"开发者可以参考以下开发实践，学习相关场景开发，在HarmonyOS平台上更高效、准确地开发加解密的功能。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-development-practice/crypto-development-practice.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-development-practice","slug":"/system-security/crypto-architecture-kit/crypto-development-practice/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-development-practice/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"跨平台数据兼容实践指导","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-development-practice","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用X963KDF进行密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-using-x963kdf-ndk/"},"next":{"title":"AES解密失败返回错误码17630001","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-faqs/crypto-aes-decryption-error-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-development-practice/crypto-development-practice.md


const frontMatter = {
	title: '跨平台数据兼容实践指导',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-development-practice',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '跨平台数据兼容实践指导';

const assets = {

};



const toc = [{
  "value": "加解密跨平台数据兼容性开发实践",
  "id": "加解密跨平台数据兼容性开发实践",
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
        id: "跨平台数据兼容实践指导",
        children: "跨平台数据兼容实践指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以参考以下开发实践，学习相关场景开发，在HarmonyOS平台上更高效、准确地开发加解密的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加解密跨平台数据兼容性开发实践",
      children: "加解密跨平台数据兼容性开发实践"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为确保数据安全，在数据传输过程中对数据进行加解密操作至关重要。为确保跨平台数据兼容，实现加密和解密操作在不同环境下的一致性和互操作性，同样极为关键。加解密跨平台数据兼容性开发实践将从以下两方面讲解如何适配差异："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-cross-platform-compatibility#section1152116421582",
            children: "适配数据编码格式差异"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "鉴于加解密往往会跨平台操作，例如服务端加密的数据需要在移动设备上解密，而HarmonyOS平台的加解密API要求密钥和待处理的数据必须为Uint8Array格式。为此，需要将Uint8Array字节数据与其他编码格式数据相转换，确保编码格式的一致性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前开发实践将提供多种数据格式之间的转换方法。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-cross-platform-compatibility#section61961942185518",
            children: "适配加解密算法使用差异"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同平台都会支持相同的算法，但不同平台的加解密算法可能在使用时有所不同，这些差异可能会导致加解密无法正常的跨平台使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前开发实践将以SM2、AES为例，讲解HarmonyOS平台与其他平台在加解密过程中的差异。"
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