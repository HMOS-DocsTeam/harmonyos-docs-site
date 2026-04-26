"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["338953"], {
224183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_get_user_info_account_get_user_info_overview_account_get_user_info_overview_md_568_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-get-user-info-account-get-user-info-overview-account-get-user-info-overview-md-568.json
var site_docs_account_kit_guide_account_get_user_info_account_get_user_info_overview_account_get_user_info_overview_md_568_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-get-user-info/account-get-user-info-overview/account-get-user-info-overview","title":"概述","description":"当应用需要获取用户身份标识或者完善用户个人资料（头像昵称、收货地址、发票抬头）时，或需要获取用户风险等级判断用户风险时，可通过Account Kit提供的相关能力，引导用户填写、管理相关信息并完成授权。获取头像昵称、收货地址、发票抬头等详细接入体验可参考Account Kit提供的SampleCode示例工程。","source":"@site/docs/account-kit-guide/account-get-user-info/account-get-user-info-overview/account-get-user-info-overview.md","sourceDirName":"account-kit-guide/account-get-user-info/account-get-user-info-overview","slug":"/account-kit-guide/account-get-user-info/account-get-user-info-overview/","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-user-info-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-user-info-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"订阅华为账号的登录/登出事件","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-login-state/"},"next":{"title":"获取头像昵称","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-avatar-nickname/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-get-user-info/account-get-user-info-overview/account-get-user-info-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-user-info-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要获取用户身份标识或者完善用户个人资料（头像昵称、收货地址、发票抬头）时，或需要获取用户风险等级判断用户风险时，可通过Account Kit提供的相关能力，引导用户填写、管理相关信息并完成授权。获取头像昵称、收货地址、发票抬头等详细接入体验可参考Account Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/accountkit-samplecode-clientdemo-arkts",
        children: "SampleCode示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用需要完善用户头像昵称信息，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-get-avatar-nickname",
          children: "获取头像昵称"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用提供的服务依赖用户收货地址，需要获取用户收货地址，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-choose-address-dev",
          children: "获取收货地址"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用提供的服务依赖用户发票抬头信息，需要获取用户发票抬头，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-select-invoice-title",
          children: "获取发票抬头"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用提供的服务依赖用户风险等级信息，需要获取用户风险等级，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction",
          children: "获取风险等级"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用提供的服务依赖用户手机号，需要获取用户手机号，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-get-phone/account-get-phone-overview",
          children: "获取手机号"
        }), "。"]
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