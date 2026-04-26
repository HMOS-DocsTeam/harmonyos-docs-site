"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["50795"], {
654562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_faq_account_faq_4_account_faq_4_md_77f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-faq-account-faq-4-account-faq-4-md-77f.json
var site_docs_account_kit_guide_account_faq_account_faq_4_account_faq_4_md_77f_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-faq/account-faq-4/account-faq-4","title":"一键登录场景下无法获取到明文手机号如何解决","description":"阅读此章节前请先保证已在华为账号一键登录场景成功获取到匿名手机号。在华为账号一键登录场景下无法获取到明文手机号时，建议通过以下步骤排查解决：","source":"@site/docs/account-kit-guide/account-faq/account-faq-4/account-faq-4.md","sourceDirName":"account-kit-guide/account-faq/account-faq-4","slug":"/account-kit-guide/account-faq/account-faq-4/","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"一键登录场景下无法获取到明文手机号如何解决","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"一键登录场景下无法获取到匿名手机号如何解决","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-3/"},"next":{"title":"一键登录场景下，应用已展示一键登录页，此时用户退出、切换或注销华为账号应该如何处理","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-17/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-faq/account-faq-4/account-faq-4.md


const frontMatter = {
	title: '一键登录场景下无法获取到明文手机号如何解决',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '一键登录场景下无法获取到明文手机号如何解决';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "一键登录场景下无法获取到明文手机号如何解决",
        children: "一键登录场景下无法获取到明文手机号如何解决"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阅读此章节前请先保证已在华为账号一键登录场景成功获取到匿名手机号。在华为账号一键登录场景下无法获取到明文手机号时，建议通过以下步骤排查解决："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为账号未绑定手机号，该异常场景应用需要展示其他登录方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用华为账号一键登录服务的账号必须是中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）华为账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用服务端获取华为账号绑定号码时，该服务器必须部署在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用用于向服务端获取手机号的authCode不是通过调用华为账号一键登录组件获取到的，详情可参考一键登录", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91",
          children: "客户端开发"
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