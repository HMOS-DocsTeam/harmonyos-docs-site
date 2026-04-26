"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["363671"], {
932340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_hmac_huks_hmac_overview_huks_hmac_overview_md_568_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-hmac-huks-hmac-overview-huks-hmac-overview-md-568.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_hmac_huks_hmac_overview_huks_hmac_overview_md_568_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/huks-hmac-overview","title":"HMAC介绍及算法规格","description":"MAC（Message Authentication Code）提供了一种在不可靠介质上检验传输或存储信息完整性的方法，HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code），是一种基于Hash函数和密钥进行消息认证的方法。HMAC可以与任何加密哈希函数（例如SHA256、SM3等）结合使用，HUKS支持了HMAC结合主流的摘要算法进行使用。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/huks-hmac-overview.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HMAC介绍及算法规格","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-hmac-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"细粒度用户身份认证访问控制开发指导","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-refined-user-identity-authentication/"},"next":{"title":"HMAC(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/huks-hmac-overview.md


const frontMatter = {
	title: 'HMAC介绍及算法规格',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-hmac-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'HMAC介绍及算法规格';

const assets = {

};



const toc = [{
  "value": "支持的算法",
  "id": "支持的算法",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "hmac介绍及算法规格",
        children: "HMAC介绍及算法规格"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAC（Message Authentication Code）提供了一种在不可靠介质上检验传输或存储信息完整性的方法，HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code），是一种基于Hash函数和密钥进行消息认证的方法。HMAC可以与任何加密哈希函数（例如SHA256、SM3等）结合使用，HUKS支持了HMAC结合主流的摘要算法进行使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的算法",
      children: "支持的算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为HMAC支持的规格说明。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "摘要算法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的密钥长度"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API级别"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192 - 1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA384、SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 - 1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 - 1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8+"
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